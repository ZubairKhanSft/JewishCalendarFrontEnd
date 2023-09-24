import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import image6 from ".././../assests/images/image6.png";

export default function TitleCardTwo() {
  return (
    <div>
      <CardMedia
        component="img"
        alt="unsplash image"
        image={image6}
        style={{
          height: "389px",
          width: "147.2vh",
          alignSelf: "flex-end",
          position: "absolute",
          bottom: "0px",
          marginLeft: "0px",
          display: "flex",
          justifySelf: "flex-end",
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ margin: "4px" }}
        ></Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ margin: "1px", padding: "2px" }}
        ></Typography>
      </CardContent>
      <CardActions></CardActions>
    </div>
  );
}
