import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import axios from "axios";
import Header from "../../component/HeaderComponent/header";
import StarImage from "../../component/card/Star";
import { BASE_URL } from "../../utils";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const colorProps = "white";

const About = () => {
  const [data, setData] = useState();

  useEffect(() => {
    loadAbout();
  }, []);

  const loadAbout = async () => {
    const result = await axios.post(`${BASE_URL}/api/AboutUs/Getlatest`);
    setData(result.data);
  };

  return (
    <>
      <Header />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}
          xs={12}
        >
          <Item sx={{ width: "99%" }} item>
            <Grid item xs={12} sx={{ paddingTop: { xs: "50px", lg: "10px" } }}>
              <Box sx={{ padding: { xs: "0 ", md: "0 3rem", lg: "0 5rem" } }}>
                <Box sx={{ width: "100px", margin: "0 auto" }}>
                  <StarImage color={colorProps} />
                </Box>
                <Box className="aboutContainer">
                  <Typography
                    component="h1"
                    variant="h2"
                    sx={{
                      textAlign: "center",
                      fontSize: " 3rem",
                      fontWeight: "600",
                    }}
                    className="about"
                    sty
                  >
                    About us/درباره ما
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "1.5rem",
                    "& p": {
                      marginBottom: "1rem",
                    },
                  }}
                  className="containContainer"
                >
                  <Typography
                    component="p"
                    sx={{
                      textAlign: "right",
                      lineHeight: "1.2",
                      fontSize: "1.2rem",
                    }}
                    className="pContainer"
                  >
                    {data?.aboutUsPersian}
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      textAlign: "left",
                      lineHeight: "1.2",
                      fontSize: "1.2rem",
                    }}
                    className="pContainer"
                  >
                    {data?.aboutUsEnglish}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
