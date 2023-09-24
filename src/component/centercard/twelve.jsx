import * as React from "react";
import image17 from ".././../assests/images/image17.png";
import CardMedia from "@mui/material/CardMedia";

export default function ImageTwelve() {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: 1000,
        margin: "400px 0",
        marginLeft: "-30px",
      }}
    >
      <CardMedia component="img" alt="unsplash image" image={image17} />
    </div>
  );
}
