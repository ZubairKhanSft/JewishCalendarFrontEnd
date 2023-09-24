import React from "react";
import axios from "axios";
import { useState } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import {BASE_URL, PER_BASE_URL} from "../../utils";

const DeceasedData = () => {
  const [info, setInfo] = useState([]);
  const [tempInfoSearch, setTempInfoSearch] = useState([]);
  const [isSearch, setIsSearch] = useState("");
  const headerStyle = { textAlign: "center" };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // TODO persian eden backend
    const response = await axios.post(`${PER_BASE_URL}/api/deceased/get-all-v1`);

    setInfo(response?.data);
    setTempInfoSearch(response?.data);
  };

  const onSearch = (value) => {
    setIsSearch(value);
    const tempInfo = JSON.parse(JSON.stringify(tempInfoSearch));
    const filterlist = tempInfo?.map((listItem) => {
      console.log("filterlist", filterlist);
      return listItem?.deceasedPeople;
    });
    const selecedtlist = filterlist.flat().filter((itemData) => {
      return (
        Object.values(itemData)
          .join("")
          .toLowerCase()
          .includes(isSearch.toLowerCase()) ||
        Object.values(itemData?.deceased_Name_Hebrew)
          .join("")
          .toLowerCase()
          .includes(isSearch.toLowerCase())
      );
    });

    console.log("ListDataShow", selecedtlist);

    const groupByCategory = selecedtlist.reduce((group, product) => {
      const { month_DemiseDate_Hebrew } = product;
      group[month_DemiseDate_Hebrew] = group[month_DemiseDate_Hebrew] ?? [];
      group[month_DemiseDate_Hebrew].push(product);
      return group;
    }, {});

    const temp = [];
    Object.keys(groupByCategory)?.map((itm) => {
      const filter = tempInfo?.find((x) => x.hebrewMonthsName === itm);
      if (filter) {
        const final = { ...filter, deceasedPeople: groupByCategory[itm] };
        temp.push(final);
      }
      return temp;
    });
    return setInfo(temp);
  };

  function getHighlightedText(text, higlight) {
    const reg = '/[()[]{}*+?^$|#.,/\\s-]/g, "\\$&"';
    const listArry = reg.split("");
    const filterList = listArry.filter((s) => s === higlight.higlight);
    if (filterList?.length > 0) {
      return;
    } else {
      var parts = text.split(new RegExp(`(${higlight.higlight})`, "gi"));
    }
    return parts?.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.higlight.toLowerCase() ? (
          <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  }
  console.log("infoinfo", info);

  const SearchComp = (higlight) => {
    return (
      <Box>
        {info &&
          info?.map((item, idx) => {
            console.log("item", item?.deceasedPeople);
            return (
              <Grid
                container
                spacing={1}
                key={item?.id}
                className="deseased-data-container"
                sx={{
                  display: item?.deceasedPeople?.length > 0 ? "block" : "none",
                }}
              >
                {item?.deceasedPeople?.length > 0 && (
                  <Typography
                    component={"h2"}
                    variant={"h5"}
                    sx={{
                      textAlign: "center",
                      display: "block",
                      marginTop: "1.8rem",
                      marginBottom: "0.6rem",
                      width: "100%",
                    }}
                    className="titr-font"
                  >
                    {getHighlightedText(item?.hebrewMonthsName, higlight)}
                  </Typography>
                )}
                {item?.deceasedPeople?.length > 0 && (
                  <Grid container spacing={1} sx={{ padding: "5px" }}>
                    {item?.deceasedPeople?.length > 0 &&
                      item?.deceasedPeople?.map((org, idx) => {
                        return (
                          <Grid
                            item
                            sx={{ flex: { xs: "1 1 100%", lg: "1 1 50%" } }}
                            key={org?.id}
                            className="deseased-data-item"
                          >
                            <Card
                              style={{
                                padding: "8px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                direction: "ltr",
                                paddingLeft: "12px",
                                paddingRight: "12px",
                                height: "100%",
                              }}
                            >
                              <Typography
                                sx={{ fontSize: 16, fontWeight: "regular" }}
                                className="BBCNassim-font"
                              >
                                {getHighlightedText(
                                  org?.deceased_Name_Hebrew,
                                  higlight
                                )}
                              </Typography>
                              <Typography
                                sx={{ fontSize: 16, fontWeight: "regular" }}
                                className="BBCNassim-font"
                              >
                                {getHighlightedText(
                                  org?.demiseDate_Hebrew,
                                  higlight
                                )}
                              </Typography>
                            </Card>
                          </Grid>
                        );
                      })}
                  </Grid>
                )}
              </Grid>
            );
          })}
      </Box>
    );
  };

  return (
    <div style={{ padding: 15 }}>
      <Box sx={{ textAlign: "center" }}>
        <TextField
          id="outlined-basic"
          onChange={(e) => onSearch(e.target.value)}
          onKeyUp={(e) => onSearch(e.target.value)}
          label="Search"
          variant="outlined"
        />
      </Box>

      <h1 style={headerStyle} className="titr-font">
        Deceased Peoples
      </h1>

      <Grid container spacing={2}>
        <SearchComp info={info} higlight={isSearch} />
      </Grid>
    </div>
  );
};

export default DeceasedData;
