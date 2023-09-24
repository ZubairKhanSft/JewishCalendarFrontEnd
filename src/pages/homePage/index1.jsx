import React from "react";
import CenterImage from "../../component/card/center";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Image from "mui-image";
import Footer from "../../component/Footer/footer";
import Box from "@mui/material/Box";
import Header from "../../component/HeaderComponent/header";
import "./style.css";
import { BASE_URL } from "../../utils";
import SecondCard from "../../component/card/Card";
import ThirdCard from "../../component/card/Card2";
import row1Img from "../../assests/images/row-1.png";
import row2Img from "../../assests/images/row-2.png";
import row3Img from "../../assests/images/row-3.png";
import row4Img from "../../assests/images/row-4.png";
import row5Img from "../../assests/images/row-5.png";
import row6Img from "../../assests/images/row-6.png";
import row7Img from "../../assests/images/row-7.png";
import rowImg from "../../assests/images/row.png";
import col2Img from "../../assests/images/col-2.png";
import col3Img from "../../assests/images/col-3.png";
import col4Img from "../../assests/images/col-4.png";
import col5Img from "../../assests/images/col-5.png";
import col6Img from "../../assests/images/col-6.png";
import col7Img from "../../assests/images/col-7.png";
import col8Img from "../../assests/images/col-8.png";
import col9Img from "../../assests/images/col-9.png";
import main1Img from "../../assests/images/main-2.png";
import baner from "../../assests/images/baner-1.png";
import market from "../../assests/images/market.png";
import AdvertiseList from "../../component/Advertiselist/Advertiselist";

function Homepage() {
  const [data, setData] = useState([]);
  const [banner, setBanner] = React.useState();

  const getBanner = async () => {
    const result = await axios.get(
      `${BASE_URL}/api/Advertisement/Get-All-Advertisements`
    );
    setBanner(result);
  };

  const loadAdv = async () => {
    const result = await axios.get(
      `${BASE_URL}/api/Advertisement/Get-All-Advertisements`
    );

    setData(result.data);
  };
  useEffect(() => {
    loadAdv();
    getBanner();
  }, []);

  return (
    <div>
      <Grid container sx={{ paddingTop: { xs: "60px", md:"0px"}}} >
        <Header />
        <Box sx={{ width: "100%", typography: "body1" }}>
          <Grid item xs={12}>
            <Image src={main1Img} style={{ width: "75%" }} />
            <CenterImage />
            <ThirdCard />
            <SecondCard />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Image src={row1Img} />
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Image src={row2Img} />
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Image src={row3Img} />
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Image src={row4Img} />
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Image src={row5Img} />
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Image src={row6Img} />
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Image src={row7Img} />
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Image src={rowImg} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Box
                  sx={{ maxWidth: { xs: "100%", md: "169px" }, width: "100%" }}
                >
                  <Image src={col2Img} />
                </Box>
                <Box
                  sx={{ maxWidth: { xs: "100%", md: "169px" }, width: "100%" }}
                >
                  <Image src={col3Img} />
                </Box>
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Image src={col4Img} />
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "338px" },
                  width: "100%",
                }}
              >
                <Image src={col5Img} />
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Image src={col6Img} />
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "338px" },
                  width: "100%",
                }}
              >
                <Box
                  sx={{ maxWidth: { xs: "100%", md: "338px" }, width: "100%" }}
                >
                  <Image src={col7Img} />
                </Box>
                <Box
                  sx={{ maxWidth: { xs: "100%", md: "338px" }, width: "100%" }}
                >
                  <Image src={col8Img} />
                </Box>
              </Box>
              <Box
                sx={{
                  border: "1px solid black",
                  maxWidth: { xs: "100%", md: "169px" },
                  width: "100%",
                }}
              >
                <Image src={col9Img} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Image src={baner} />
          </Grid>
          <Grid item xs={12}>
            <Image src={market} />
          </Grid>
          <Grid>
            <Grid>
              <Footer />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}

export default Homepage;
