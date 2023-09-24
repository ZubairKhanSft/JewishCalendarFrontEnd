import * as React from "react";
import image11 from ".././../assests/images/image11.png";
import CardMedia from "@mui/material/CardMedia";

export default function ImageSix() {
  return (
    <div style={{ height: "1250px", margin: "-330px 0" }}>
      <CardMedia component="img" alt="unsplash image" image={image11} />
    </div>
  );
}
