import * as React from "react";
import image9 from ".././../assests/images/image9.png";
import CardMedia from "@mui/material/CardMedia";

export default function ImageFour() {
  return (
    <div style={{ height: "auto" }}>
      <CardMedia component="img" alt="unsplash image" image={image9} />
    </div>
  );
}
