import React, { useEffect, useState } from "react";
import AD12 from ".././../assests/images/ad12.png";
import { BASE_URL } from "../../utils";
import axios from "axios";

export default function SecondCard() {
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
    <div>
      {data.map((item) => {
        return item?.imageDescription == "flayer three" ? (
          <img
            alt="unsplash "
            src={`${BASE_URL + "/" + item.imagePath}`}
            style={{ width: "100%" }}
          />
        ) : null;
      })}
    </div>
  );
}
