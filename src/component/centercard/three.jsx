import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { BASE_URL } from "../../utils";
import axios from "axios";

export default function ImageThree() {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadAdv();
  }, []);

  const loadAdv = async () => {
    const result = await axios.get(
      `${BASE_URL}/api/Advertisement/Get-All-Advertisements`
    );
    setData(result.data);
  };

  return (
    <div>
      {data.map(item => {
        return (
          item?.imageDescription == 'background one' ?
            <CardMedia
              style={{ width: "100%", height: "auto", margin: "5px" }}
              component="img"
              alt="unsplash image"
              image={`${BASE_URL + item.imagePath}`}
            /> : null)
      })}
    </div>
  );
}
