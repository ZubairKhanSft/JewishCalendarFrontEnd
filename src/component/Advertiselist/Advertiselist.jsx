import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";
import BasicCard from "../card";
import axios from "axios";
import SecondCard from "../card/Card";
import ThirdCard from "../card/Card2";
import CenterImage from "../card/center";
import Footer from "../Footer/footer";
import Header from "../HeaderComponent/header";
import { BASE_URL } from "../../utils";
import Image from "mui-image";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexWrap: "wrap",
  color: theme.palette.text.secondary,
  margin: "6px",
  boxShadow: "none",
}));

const AdvertiseList = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadAdv();
  }, []);

  const loadAdv = async () => {
    const result = await axios.get(
      `${BASE_URL}api/Advertisement/Get-All-Advertisements`
    );
    setData(result.data);
    console.log("result-", JSON.stringify(result.data, null, 2));
  };

  const leftRef = useRef("");
  const rightRef = useRef("");

  return (
    <>
      <Header />
      <Box
        sx={{ marginTop: { xs: "60px", sm: "65px", lg: "10px", md: "10px" } }}
      >
        {data?.map((item) => {
          return item?.imageDescription == "flayer one" ? (
            <Image
              src={`${BASE_URL + "/" + item?.imagePath}`}
              style={{ width: "75%" }}
            />
          ) : null;
        })}
      </Box>

      <CenterImage />
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <SecondCard />
        <ThirdCard />
      </Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          lg={2}
          md={2}
          aria-labelledby="left column"
          ref={leftRef}
        >
          <Item>
            {data?.slice(0, 10)?.map((item, idx) => {
              return (
                <BasicCard
                  key={idx}
                  data={item}
                  onClick={(url) =>
                    window.open(url ? "http://" + url : "http://08global.net/")
                  }
                />
              );
            })}
          </Item>
        </Grid>

        <Grid
          item
          xs={12}
          lg={8}
          md={8}
          sx={{
            maxHeight: { lg: "2270px", sx: "auto" },
            position: "relative",
             overflowY: { sx: "auto", lg: "auto" },
            height: "fit-content",
            margin: { sx: "5px", sm: "10px 0", lg: "30px 0" },
          }}
          aria-labelledby="center column"
        >
          <Grid>
            <SecondCard />
            <ThirdCard />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "10px", padding: "0 8px" }}>
            {props?.children}
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          lg={2}
          md={2}
          aria-labelledby="right column"
          ref={rightRef}
        >
          <Item>
            {data?.slice(10, 20)?.map((item, idx) => {
              return <BasicCard key={idx} data={item} />;
            })}
          </Item>
        </Grid>
      </Grid>
      <Grid>
        <Grid sx={{ paddingTop: "2rem" }}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default AdvertiseList;
