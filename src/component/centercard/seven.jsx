import * as React from "react";
import image12 from ".././../assests/images/image12.png";
import CardMedia from "@mui/material/CardMedia";

export default function ImageSeven() {
  return (
    <div
      style={{ backgroundColor: "blue", height: "1226px", margin: "-20px 0" }}
    >
      <CardMedia component="img" alt="unsplash image" image={image12} />
    </div>
  );
}
