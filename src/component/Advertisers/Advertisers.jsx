import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BASE_URL } from "../../utils";

function Event() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    getAllEvent();
  }, []);

                                               
  const getAllEvent = async () => {
    const result = await axios.post(`${BASE_URL}/api/Advertisers/Get-All`);
    setValues(result.data)
  };

  return (
    <div>
      <Grid container spacing={3}>
        {values.map((item) => {
          console.log("item--new>",JSON.stringify(item,null,2))
          return (
            <>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{  
                    minWidth: 30,
                    padding: 3,
                    paddingLeft: { xs: "1.5rem", md: "3rem" },
                    height: "100%",
                    boxShadow: "none",
                    backgroundColor: "#fbfbfb",
                  }}
                >
                  <Box>
                    <Box>
                      <Box>
                        <Typography
                          component="p"
                          sx={{
                            fontSize: 16,
                            fontWeight: "regular",
                            paddingLeft: "8px",
                            marginRight: "5px",
                            lineHeight: 0.7,
                          }}
                          className="BBCNassim-font"
                        >
                          {item.companyNameL}

                          <Typography
                            component="p"
                            sx={{
                              alignItems: "center",
                              marginBottom: ".3rem",
                              lineHeight: 1,
                            }}
                          ></Typography>
                        </Typography>
                        <Typography
                          component="p"
                          sx={{
                            fontSize: 16,
                            fontWeight: "regular",
                            paddingLeft: "8px",
                            marginRight: "5px",
                            marginBottom: "1rem",
                            lineHeight: "1",
                          }}
                          className="BBCNassim-font"
                        >
                          {item.companyNameF}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          component="p"
                          sx={{
                            fontSize: 16,
                            fontWeight: "regular",
                            paddingLeft: "8px",
                            marginRight: "5px",
                            lineHeight: 1,
                          }}
                          className="BBCNassim-font"
                        >
                          {item.personNameL}

                          <Typography
                            component="p"
                            sx={{
                              alignItems: "center",
                              marginBottom: ".3rem",
                              lineHeight: 1,
                            }}
                          ></Typography>
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          component="p"
                          sx={{
                            fontSize: 16,
                            fontWeight: "regular",
                            paddingLeft: "8px",
                            marginRight: "5px",
                            marginBottom: "1rem",
                            lineHeight: "1",
                          }}
                          className="BBCNassim-font"
                        >
                          {item.personNameF}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          component="p"
                          sx={{
                            fontSize: 16,
                            fontWeight: "regular",
                            paddingLeft: "8px",
                            lineHeight: 1.1,
                          }}
                          className="BBCNassim-font"
                        >
                          {item.businessAddress}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          component="p"
                          sx={{
                            fontSize: 16,
                            fontWeight: "regular",
                            paddingLeft: "8px",
                            lineHeight: 1.1,
                          }}
                          className="BBCNassim-font"
                        >
                          {item.businessCity}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          component="p"
                          sx={{
                            fontSize: 16,
                            fontWeight: "regular",
                            paddingLeft: "8px",
                            lineHeight: 1.1,
                          }}
                          className="BBCNassim-font"
                        >
                          {item.businessState}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          component="p"
                          sx={{
                            fontSize: 16,
                            fontWeight: "regular",
                            paddingLeft: "8px",
                            lineHeight: 1.1,
                          }}
                          className="BBCNassim-font"
                        >
                          {item.businessPhone}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
}

export default Event;
