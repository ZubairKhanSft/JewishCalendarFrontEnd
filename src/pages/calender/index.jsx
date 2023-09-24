import React, { useEffect, useState, useRef } from "react";
import AdvertiseList from "../../component/Advertiselist/Advertiselist";
import FlipPage from "../../component/FlipPDFPage/index.tsx";
import axios from "axios";
import { BASE_URL } from "../../utils";

const Calendar = () => {
  const [calcWidth, setCalcWidth] = useState({
    leftWidth: 0,
    rightWidth: 0,
  });
  const [pdfUrl, setPdfUrl] = useState();
  const leftRef = useRef("");
  const rightRef = useRef("");

  useEffect(() => {
    getCalender();
  }, []);

  const getCalender = async () => {
    const result = await axios.get(`${BASE_URL}/api/File/Get-Current-Pdf`);
    if (result?.status === 200)
      setPdfUrl(`${BASE_URL + "/" + result?.data?.filePath}`);
  };

  useEffect(() => {
    setCalcWidth({
      leftWidth: leftRef.current && leftRef.current?.offsetWidth,
      rightWidth: rightRef.current && rightRef.current?.offsetWidth,
    });
  }, []);

  return (
    <AdvertiseList>
      <FlipPage filePath={pdfUrl} calcWidth={calcWidth} />
    </AdvertiseList>
  );
};

export default Calendar;
