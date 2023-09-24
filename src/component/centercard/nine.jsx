import * as React from "react";
import image14 from ".././../assests/images/image14.png";
import CardMedia from "@mui/material/CardMedia";

export default function ImageNine() {
  return (
    <div style={{ backgroundColor: "lightgreen", height: 1000 }}>
      <CardMedia component="img" alt="unsplash image" image={image14} />
    </div>
  );
}
