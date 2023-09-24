import * as React from "react";
import image10 from ".././../assests/images/image10.png";
import CardMedia from "@mui/material/CardMedia";

export default function ImageFive() {
  return (
    <div style={{ height: "1200px", margin: "800px 0" }}>
      <CardMedia component="img" alt="unsplash image" image={image10} />
    </div>
  );
}
