import * as React from "react";
import image19 from ".././../assests/images/image19.png";
import CardMedia from "@mui/material/CardMedia";

export default function Imageforteen() {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: 1000,
        margin: "-20px 0",
        marginLeft: "-30px",
      }}
    >
      <CardMedia component="img" alt="unsplash image" image={image19} />
    </div>
  );
}
