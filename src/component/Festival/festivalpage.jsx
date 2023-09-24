import React, { useState, useEffect, useRef } from "react";
import { useWindowSize } from "../windowresize";
import { pdfjs, } from "react-pdf";
import axios from "axios";
import SelectList from "./selectlist";
import FlipPage from "../FlipPDFPage/index.tsx";
import { BASE_URL } from "../../utils";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Festivalpage = ({ calcWidth }) => {
  const [open, setOpen] = React.useState(false);
  const [eventlist, seteventlist] = React.useState([]);
  const [pdflist, setPdflist] = React.useState();
  const [fileWith, setFileWidth] = useState();
  const [pageData, setPageData] = useState([]);
  const [width, height] = useWindowSize();
  const [age, setAge] = useState("");

  const flipDocument = useRef("");


  useEffect(() => {
    getAllEvent();
  }, [age]);

  const getAllEvent = async () => {
    // from persian eden
    const result = await axios.post(
      `${BASE_URL}api/ReligiousEvent/GetAll`
    );
    seteventlist(result.data);
  };

  useEffect(() => {
    const diff = calcWidth.leftWidth + calcWidth.rightWidth;
    if (width > diff) {
      setFileWidth(width - (diff + 80));
    } else {
      setFileWidth(width - 80);
    }
  }, [calcWidth.leftWidth, calcWidth.rightWidth, width]);

  useEffect(() => {
    if (flipDocument) {
      setPageData(flipDocument?.current?.pages);
    }
  }, [flipDocument]);

  const handleChange = async (event) => {
    setAge(event.target.value);
  };

  const onSubmit = async (id) => {
    const result = await axios.get(
      `${BASE_URL}api/ReligiousEvent/GetBy-Id?id=${id}`
    );
    if (result.data) {
      setPdflist(result.data);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  let list = age === "" ? eventlist[0]?.filePDF : pdflist?.filePDF;
  let seletedValue = age === "" ? eventlist[0]?.id : age;
console.log(BASE_URL+ list)
  return (
    <div>
      <div>
        <SelectList
          handleOpen={handleOpen}
          handleClose={handleClose}
          eventlist={eventlist}
          onSubmit={onSubmit}
          seletedValue={seletedValue}
          handleChange={handleChange}
          open={open}
        />
      </div>
      <div>
        <div
          style={{ display: "block", background: "#f5f5f5", padding: "10px" }}
        >
          {/*  */}
          <FlipPage
            filePath={`${BASE_URL+ list}`}
            calcWidth={calcWidth}
          />
        </div>
      </div>
    </div>
  );
};

export default Festivalpage;
