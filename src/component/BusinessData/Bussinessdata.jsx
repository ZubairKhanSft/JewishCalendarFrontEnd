import React from "react";
import axios from "axios";
import { useState } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { BASE_URL } from "../../utils";
import { width } from "@mui/system";

const BusinessData = () => {
  const headerStyle = { textAlign: "center" };
  const [info, setInfo] = useState([]);
  const [isSearch, setIsSearch] = useState("");
  const [tempInfoSearch, setTempInfoSearch] = useState([]);

  const loadData = async () => {
    const response = await axios.get(
      `${BASE_URL}/api/Organization/Get-All-Organization-with-Country`
    );
    setInfo(response.data);
    setTempInfoSearch(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onSearch = (value) => {
    setIsSearch(value);
    const tempInfo = JSON.parse(JSON.stringify(tempInfoSearch));
    const filterlist = tempInfo?.map((listItem) => {
      return listItem?.organization;
    });
    const selecedtlist = filterlist.flat().filter((item) => {
      return (
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(isSearch.toLowerCase()) ||
        Object.values(item?.countryName)
          .join("")
          .toLowerCase()
          .includes(isSearch.toLowerCase())
      );
    });

    const groupByCategory = selecedtlist.reduce((group, product) => {
      const { countryName } = product;
      group[countryName] = group[countryName] ?? [];
      group[countryName].push(product);
      return group;
    }, {});


    const temp = [];
    Object.keys(groupByCategory)?.map((itm) => {
      const filter = tempInfo.find((x) => x.countryName === itm);
      if (filter) {
        const final = { ...filter, organization: groupByCategory[itm] };
        temp.push(final);
      }
      return temp;
    });
    setInfo(temp);
  };

  function getHighlightedText(text, higlight) {
    const reg = '/[()[]{}*+?^$|#.,/\\s-]/g, "\\$&"';
    const listArry = reg.split("");
    const filterList = listArry?.filter((s) => s === higlight?.higlight);
    if (filterList.length > 0) {
      return;
    } else {
      var parts = text?.split(new RegExp(`(${higlight?.higlight})`, "gi"));
    }

    return parts?.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.higlight?.toLowerCase() ? (
          <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  }

  const SearchCompo = (higlight) => {
    return (
      <>
        {info &&
          info?.map((country, idx) => {
            console.log("item- country->",country)
            return (
              <Grid container spacing={1} key={country?.id}>
                {country?.organization?.length > 0 && (
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
                    {getHighlightedText(country?.countryName, higlight)}
                  </Typography>
                )}
                {country?.organization?.length > 0 && (
                  <Grid container spacing={1} sx={{ padding: "5px" }}>
                    {country?.organization?.map((org, idx) => {
                      console.log("org",org)
                      return (
                        <Grid item sx={{ flex: { xs: "1 1 100%" } }} key={idx}>
                          <a
                            href={`https://${org?.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Card
                              style={{
                                padding: "8px",
                                display: "flex",
                                // justifyContent: "space-between",
                                alignSelf: "center",
                                direction: "ltr",
                                paddingLeft: "12px",
                                paddingRight: "12px",
                              }}>
                              <Typography
                                sx={{
                                  fontSize: 16,
                                  fontWeight: "regular",
                                  paddingRight: "8px",
                                  marginRight: "5px",
                                  textAlign: 'left',
                                  width: '33.33%',
                                }}
                                className="BBCNassim-font"
                              >
                                {getHighlightedText(org?.mobileNo, higlight)}
                              </Typography>
                              {org?.organizationNameEnglish && (
                                    <Box sx={{width: '33.33%',flexWrap:"wrap"}}>
                                  <Typography
                                  sx={{
                                    fontSize: 16,
                                    fontWeight: "regular",
                                    // paddingRight: "8px",
                                    // marginRight: "5px",
                                    textAlign: 'center',

                                  }}
                                  className="BBCNassim-font"
                                >
                                  {getHighlightedText(
                                    org?.organizationNameEnglish,
                                    higlight
                                  )}
                                </Typography>
                                </Box>

                              )}
                              {
                                org?.organizationNamePersian &&
                              <Box sx={{ width: '33.33%'}}>
                                  <Typography
                                  sx={{
                                    fontSize: 16,
                                    fontWeight: "regular",
                                    paddingLeft: "8px",
                                    textAlign: 'right',
                                  }}
                                  className="BBCNassim-font"
                                >
                                  {getHighlightedText(
                                    org?.organizationNamePersian,
                                    higlight
                                  )}
                                </Typography>
                              </Box>
                              }
                            </Card>
                          </a>
                        </Grid>
                      );
                    })}
                  </Grid>
                )}
              </Grid>
            );
          })}
      </>
    );
  };

  return (
    <>
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
          Country Of The Organization
        </h1>

        <Grid container>
          <SearchCompo info={info} higlight={isSearch} />
        </Grid>
      </div>
    </>
  );
};

export default BusinessData;
