import * as React from "react";
import image18 from ".././../assests/images/image18.png";
import CardMedia from "@mui/material/CardMedia";

export default function ImageThirteen() {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: 1000,
        margin: "500px 0",
        marginLeft: "-40px",
      }}
    >
      <CardMedia component="img" alt="unsplash image" image={image18} />
    </div>
  );
}
