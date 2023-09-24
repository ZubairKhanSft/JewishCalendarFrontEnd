import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AD3 from ".././../assests/images/image3.png";

export default function FourthCard() {
  return (
    <div>
      <CardMedia
        component="img"
        alt="unsplash image"
        image={AD3}
        style={{
          width: "102.4vh",
          height: "21vh",
          justifySelf: "flex-end",
          alignSelf: "flex-end",
          position: "absolute",
          bottom: "-735.26px",
          marginLeft: "461px",
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
