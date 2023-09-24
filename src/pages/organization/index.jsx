import React from "react";
import AdvertiseList from "../../component/Advertiselist/Advertiselist";
import BusinessData from "../../component/BusinessData/Bussinessdata";
import ImageThree from "../../component/centercard/three";
import ImageFifteen from "../../component/centercard/fifteen";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Organization = () => {
  return (
    <>
      <AdvertiseList>
        <BusinessData />
        <ImageThree />
        <ImageFifteen />
      </AdvertiseList>
    </>
  );
};

export default Organization;
