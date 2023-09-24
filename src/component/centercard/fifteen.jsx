import React, { useEffect, useState } from "react";
import image20 from ".././../assests/images/image67.png";
import CardMedia from "@mui/material/CardMedia";
import { BASE_URL } from "../../utils";
import axios from "axios";

export default function ImageFifteen() {
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
    <div style={{ height: "auto", margin: "5px 0" }}>
      {data.map(item => {
        return (
          item?.imageDescription === 'background two' ?
            <CardMedia component="img" alt="unsplash image" image={`${BASE_URL + item.imagePath}`} /> : null)
      })}
    </div>
  );
}
