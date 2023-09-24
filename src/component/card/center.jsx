import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils";
import axios from "axios";
import AD3 from ".././../assests/images/image4.png";

export default function CenterImage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadAdv();
  }, []);

  const loadAdv = async () => {
    const result = await axios.get(
      `${BASE_URL}/api/Advertisement/Get-All-Advertisements`
    );
    setData(result.data);
    console.log("result-", JSON.stringify(result.data, null, 2));
  };
  return (
    <Box sx={{ marginTop: { xs: "0px", sm: "0px", lg: "30px" } }}>
      {data.map((item) => {
        return item?.imageDescription == "flayer two" ? (
          <img
            alt="unsplash "
            src={`${BASE_URL + "/" + item.imagePath}`}
            style={{ width: "100%" }}
          />
        ) : null;
      })}
      {/* <img
        alt="unsplash "
        src={AD3}
        style={{ width: "100%" }}
      /> */}
    </Box>
  );
}
