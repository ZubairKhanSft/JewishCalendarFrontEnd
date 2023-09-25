import React, { useEffect, useState } from "react";
// import AD2 from ".././../assests/images/adil2.png";
import { Grid } from "@mui/material";
import { BASE_URL } from "../../utils";
import axios from "axios";
import AD3 from ".././../assests/images/image3.png";

export default function ThirdCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadAdv();
  }, []);

  const loadAdv = async () => {
    const result = await axios.get(
      `${BASE_URL}api/Advertisement/Get-All-Advertisements`
    );
    setData(result.data);
    console.log("result-", JSON.stringify(result.data, null, 2));
  };
  return (
    <Grid container spacing={1}>
      {/* <Grid item xs={12} md={2.5} aria-labelledby="center column top">
        <img src={AD2} alt="ad2" style={{ width: "100%", height: "160px" }} />
      </Grid> */}
      <Grid item xs={12} md={12} aria-labelledby="center column top">
        {data.map((item) => {
          return item?.imageDescription == "flayer four" ? (
            <img
              alt="unsplash "
              src={`${BASE_URL + "/" + item.imagePath}`}
              style={{ width: "100%" }}
            />
          ) : null;
        })}
        {/* <img src={AD3} alt="ad3" style={{ width: "100%" }} /> */}
      </Grid>
    </Grid>
  );
}
