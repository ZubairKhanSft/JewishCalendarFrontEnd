import * as React from "react";
import image16 from ".././../assests/images/image16.png";
import CardMedia from "@mui/material/CardMedia";

export default function ImageEleven() {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: 1000,
        margin: "500px 0",
        marginLeft: "-40px",
      }}
    >
      <CardMedia component="img" alt="unsplash image" image={image16} />
    </div>
  );
}
