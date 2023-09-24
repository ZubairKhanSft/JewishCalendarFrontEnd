import * as React from "react";
import image13 from ".././../assests/images/image13.png";
import CardMedia from "@mui/material/CardMedia";

export default function ImageEight() {
  return (
    <div style={{ backgroundColor: "purple", height: 1000, margin: "-20px 0" }}>
      <CardMedia component="img" alt="unsplash image" image={image13} />
    </div>
  );
}
