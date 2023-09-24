import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { BASE_URL } from "../../utils";

const Home = () => {
  const [banner, setBanner] = useState();

  console.log("BannarShow", banner);

  const getBanner = async () => {
    const result = await axios.get(
      `${BASE_URL}api/Banner/Get-Current-Banner`
    );
    console.log("bannerList", result?.data?.bannerImage);
    if (result?.status === 200) setBanner(`${BASE_URL+result?.data.bannerImage}`);
  };
  useEffect(() => {
    getBanner();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <img
          alt="banner"
          src={`${banner} `}
          style={{
            width: "100%",
          }}
          loading="lazy"
        />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ padding: { xs: "0 ", md: "0 3rem", lg: "0 5rem" } }}>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
