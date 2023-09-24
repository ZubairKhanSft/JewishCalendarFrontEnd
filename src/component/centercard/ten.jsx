import * as React from "react";
import image15 from ".././../assests/images/image15.png";
import CardMedia from "@mui/material/CardMedia";

export default function ImageTen() {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: 1000,
        margin: "320px 0",
        marginLeft: "-50px",
      }}
    >
      <CardMedia component="img" alt="unsplash image" image={image15} />
    </div>
  );
}
