import { Box } from "@mui/material";
import * as React from "react";
import AD33 from ".././../assests/images/main-2.png";


export default function Center1Image() {
  return (
    <Box sx={{marginTop:{xs:"60px",sm:"65px",lg:"10px", md:"10px"}}}>
      <img
        alt="unsplash "
        src={AD33}
        style={{ width: "75%", height: "auto" , marginLeft:"100px"}}
      />
    </Box>
  );
}
//