import React, { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { BASE_URL } from "../../utils";
import "./index.style.css";
import Image from "mui-image";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Bannerone from "../../assests/images/banner1.png";
import Bannertwo from "../../assests/images/banner2.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const dataUrl = [
  {
    id: "1",
    name: "Home",
    url: "/",
  },
  {
    id: "2",
    name: "AboutUs",
    url: "/about",
  },
  {
    id: "3",
    name: "Organization",
    url: "/organization",
  },
  {
    id: "4",
    name: "Deceased",
    url: "/deceased",
  },
  {
    id: "5",
    name: " JewishCalendar",
    url: "/iraniancalendar",
  },

  {
    id: "6",
    name: "ContactUs",
    url: "/contact",
  },
  {
    id: "7",
    name: "Advertisers",
    url: "/advertisers",
  },
];

const eventData = [
  {
    id: "8",
    eventName: "UpcomingJewish Events",
    url: "/upcomingevent",
  },
  {
    id: "9",
    eventName: "National/Religious",
    url: "/religiousevent",
  },
];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Homepage() {
  const [data, setData] = React.useState([]);
  const [dataBanner, setBannerData] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [responseOpen, setresponseOpen] = React.useState(false);
  const openSet = Boolean(anchorEl);

  const navigate = useNavigate();
  React.useEffect(() => {
    loadAdv();
    loadBanner();
  }, []);

  const handleResponse = () => {
    setresponseOpen(!responseOpen);
  };

  const loadAdv = async () => {
    const result = await axios.get(
      `${BASE_URL}/api/Advertisement/Get-All-Advertisements`
    );
    setData(result.data);
  };

  const loadBanner = async () => {
    const result = await axios.get(
      `${BASE_URL}/api/Banner/Get-Current-Banner`
    );
    setBannerData(result.data);
    console.log(result.data,"bannercheck");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleEvent = (listData) => {
    const final = eventData.filter((s) => s.id === listData.id);
    sessionStorage.setItem("eventList", final[0].id);
    sessionStorage.setItem("myCat", listData.id);
    navigate(listData.url);
  };

  const onSumit = (itm) => {
    sessionStorage.setItem("myCat", itm.id);
    navigate(itm.url);
  };
  const result = sessionStorage.getItem("myCat");

  React.useEffect(() => {
    if (!result) {
      setValue("1");
      sessionStorage.setItem("myCat", "1");
      navigate("/");
    }
  }, [result]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const leftRef = useRef("");
  const rightRef = useRef("");
  const url = BASE_URL;

  const onDonate = () => {
    const url = "https://www.paypal.com/donate/?hosted_button_id=EWWLXRNRYCLBJ";
    window.open(url, "_blank");
  };

  const onOrderNow = () => {
    const url =
      "https://shop.ketab.com/book-detail.aspx?item=113641&title=%D8%AA%D9%82%D9%88%DB%8C%D9%85%20%D8%AF%DB%8C%D9%88%D8%A7%D8%B1%DB%8C%20%D8%B9%D8%A8%D8%B1%DB%8C%205782";
    window.open(url, "_blank");
  };

  const bannerUrl = "https://";

  return (
    <>
      <Grid container spacing={2}>
        <Grid
          xs={12}
          lg={3}
          sx={{
            paddingTop: { xs: 5, lg: 2 },
            order: { xs: 3, lg: "unset" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          aria-labelledby="left column"
          ref={leftRef}
        >
          <Grid
            sx={{
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingTop: "5px",
            }}
          >
            <Box
              sx={{
                width: "90%",
                height: "200px",
                backgroundImage: `url(${Bannerone})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                paddingLeft: "4px",
                paddingBottom: "3px",
              }}
            >
              {data.map((item) => {
                return item?.type == "topleft" ? (
                  <Image
                    xs={3}
                    md={12}
                    style={{
                      width: "87%",
                      height: "130px",
                      cursor: "pointer",
                      resize: "horizontal",
                    }}
                    src={`${BASE_URL + "/" + item.imagePath}`}
                    onClick={() =>
                      window.open(bannerUrl + item.businessUrl, "_blank")
                    }
                  />
                ) : null;
              })}
            </Box>
          </Grid>
          <Grid
            sx={{
              display: { xs: "block", lg: "flex" },
              justifyContent: "center",
              padding: { xs: "0px 20px" },
            }}
          >
            <Grid
              sx={{
                backgroundColor: "black",
                borderRadius: 5,
                padding: "10px 25px",
              }}
            >
              {data.slice(0, 6).map((itemData) => {
                return (
                  <Grid
                    sx={{
                      width: { xs: "100%", lg: "250px" },
                      padding: "5px 0px",
                    }}
                  >
                    <Image
                      onClick={() =>
                        window.open(bannerUrl + itemData.businessUrl, "_blank")
                      }
                      style={{
                        cursor: "pointer",
                        height: "130px",
                        objectFit: "fill",
                      }}
                      src={url + "/" + itemData.imagePath}
                    />
                  </Grid>
                );
              })}
              <Grid sx={{ padding: "20px 10px" }}>
                <Typography
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  variant="p"
                  component="p"
                >
                  IranianJewishCalendar
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  variant="p"
                  component="p"
                >
                  818.9.080808
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* {Mid-Point} */}

        <Grid
          xs={12}
          lg={6}
          md={1}
          sx={{
            padding: { xs: "0px 20px", lg: "1px 10px" },
            paddingTop: { xs: "100px", lg: "100px" },
          }}
        >
          <Grid
            item
            sx={{
              borderRadius: 5,
              backgroundColor: "black",
            }}
          >
            <Grid
              sx={{
                display: { xs: "block", lg: "flex" },
                flexDirection: "row",
                justifyContent: "flex-end",
                alignContent: "center",
                paddingTop: 1,
                paddingBottom: 0,
              }}
            >
              <Grid sx={{ padding: { xs: "0px 15px", lg: "15px 20px" } }}>
                <Box
                  xs={12}
                  lg={6}
                  sx={{
                    display: { xs: "block", lg: "flex" },
                    alignItems: "flex-end",
                    border: "solid",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: 12,
                      display: { xs: "flex", lg: "block" },
                      justifyContent: { xs: "center", lg: "block" },
                    }}
                    variant="p"
                    component="p"
                  >
                    Click on OrderNow to buy Your Paper Copy
                  </Typography>
                </Box>
              </Grid>

              <Grid
                xs={12}
                lg={5}
                sx={{
                  color: "white",
                  padding: "10px",
                  textAlign: { xs: "center", lg: "justify" },
                  display: { xs: "flex", lg: "block" },
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{ fontSize: 12 }}
                  variant="contained"
                  onClick={onOrderNow}
                >
                  Order Now
                </Button>{" "}
                <Button
                  sx={{ fontSize: 12 }}
                  variant="contained"
                  onClick={onDonate}
                >
                  Donate
                </Button>
              </Grid>
            </Grid>

            <Grid
              lg={12}
              xs={12}
              sx={{ margin: "0 auto", width: "100%", padding: "10px 5px" }}
            >
              {matches ? (
                <Grid
                  sx={{
                    borderRadius: "10px 10px 0px 0px",
                    backgroundColor: "white",
                  }}
                >
                  <div className="header-main-home">
                    <ul className="header-ul-home">
                      {dataUrl.map((itm) => {
                        return (
                          <>
                            <li
                              onClick={() => onSumit(itm)}
                              className="header-li-home"
                              style={{
                                cursor: "pointer",
                                color: result === itm.id ? "red" : "black",
                              }}
                            >
                              {itm.name}
                            </li>
                          </>
                        );
                      })}
                      <li
                        className="header-liList"
                        style={{
                          cursor: "pointer",
                          color: "black",
                        }}
                        onClick={handleClick}
                      >
                        Jewish Events
                      </li>
                      <ExpandMore />
                      <Menu
                        sx={{ zIndex: 666666 }}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openSet}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        {eventData.map((listData) => {
                          return (
                            <>
                              <MenuItem
                                sx={{
                                  color:
                                    listData.id === result ? "red" : "black",
                                  width: 150,
                                  fontSize: 11,
                                  padding: "1px 5px",
                                }}
                                onClick={() => onSumit(listData)}
                              >
                                {listData.eventName}
                              </MenuItem>
                            </>
                          );
                        })}
                      </Menu>
                    </ul>
                  </div>
                </Grid>
              ) : (
                <>
                  <AppBar
                    style={{ backgroundColor: "#fff" }}
                    position="fixed"
                    open={open}
                  >
                    <Toolbar>
                      <IconButton
                        color="blue"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <Drawer
                    sx={{
                      width: drawerWidth,
                      flexShrink: 0,
                      "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                      },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                  >
                    <DrawerHeader>
                      <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                          <ChevronLeftIcon />
                        ) : (
                          <ChevronRightIcon />
                        )}
                      </IconButton>
                    </DrawerHeader>
                    <List>
                      {dataUrl.map((text, index) => (
                        <ListItem key={text.name}>
                          <ListItemButton onClick={() => onSumit(text)}>
                            <ListItemText
                              onClick={handleDrawerClose}
                              primary={text.name}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                      <ListItemButton onClick={handleResponse}>
                        <ListItemText primary="Jewish Events" />
                        {responseOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={responseOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {eventData.map((resp) => {
                            return (
                              <>
                                <ListItemButton
                                  onClick={() => handleEvent(resp)}
                                  sx={{ pl: 4 }}
                                >
                                  <ListItemText primary={resp.eventName} />
                                </ListItemButton>
                              </>
                            );
                          })}
                        </List>
                      </Collapse>
                    </List>
                    <Divider />
                  </Drawer>
                </>
              )}

              <Grid xs={12} lg={12} md={2} sx={{ paddingTop: 1 }}>
                {
                   <Image src={`${BASE_URL + dataBanner.bannerImage}`}/>
                  //  {`${BASE_URL + "/" + item.imagePath}`}
               
                }
               
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 1,
                }}
                xs={12}
                md={4}
                lg={12}
              >
                {data.map((item) => {
                  console.log("item-->", JSON.stringify(item, null, 2));
                  return item?.type === "BottomLeft" ? (
                    <Image
                      xs={12}
                      md={4}
                      sx={{
                        width: "100%",
                        height: "130px",
                        padding: "0px 3px",
                      }}
                      src={`${BASE_URL + "/" + item.imagePath}`}
                      onClick={() =>
                        window.open(bannerUrl + item.businessUrl, "_blank")
                      }
                    />
                  ) : null;
                })}

                {data.map((item) => {
                  console.log("item-->", JSON.stringify(item, null, 2));
                  return item?.type === "BottomCenter" ? (
                    <Image
                      xs={12}
                      md={4}
                      sx={{
                        width: "100%",
                        height: "130px",
                        padding: "0px 3px",
                      }}
                      src={`${BASE_URL + "/" +  item.imagePath}`}
                      onClick={() =>
                        window.open(bannerUrl + item.businessUrl, "_blank")
                      }
                    />
                  ) : null;
                })}

                {data.map((item) => {
                  console.log("item-->", JSON.stringify(item, null, 2));
                  return item?.type === "BottomRight" ? (
                    <Image
                      xs={12}
                      md={4}
                      sx={{
                        width: "100%",
                        height: "130px",
                        padding: "0px 3px",
                      }}
                      src={`${BASE_URL + "/" +  item.imagePath}`}
                      onClick={() =>
                        window.open(bannerUrl + item.businessUrl, "_blank")
                      }
                    />
                  ) : null;
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* {Mid-Point} */}
        <Grid
          xs={12}
          lg={3}
          aria-labelledby="right column"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          ref={rightRef}
        >
          <Grid
            sx={{
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingTop: "20px",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "190px",
                backgroundImage: `url(${Bannertwo})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {data.map((item) => {
                console.log("item-->", JSON.stringify(item, null, 2));
                return item?.type == "topright" ? (
                  <Image
                    xs={3}
                    md={12}
                    style={{
                      width: "95%",
                      height: "126px",
                      cursor: "pointer",
                      resize: "horizontal",
                      marginTop: 3,
                      marginLeft: 2,
                    }}
                    src={`${BASE_URL + "/" +  item.imagePath}`}
                    onClick={() =>
                      window.open(bannerUrl + item.businessUrl, "_blank")
                    }
                  />
                ) : null;
              })}
            </Box>
          </Grid>

          <Grid
            sx={{
              display: { xs: "block", lg: "flex" },
              justifyContent: "center",
              padding: { xs: "0px 20px" },
            }}
          >
            <Grid
              sx={{
                backgroundColor: "black",
                borderRadius: 5,
                padding: "10px 25px",
              }}
            >
              {data.slice(6, 12).map((itemData) => {
                return (
                  <Grid
                    sx={{
                      width: { xs: "100%", lg: "250px" },
                      padding: "5px 0px",
                    }}
                  >
                    <Image
                      style={{
                        cursor: "pointer",
                        height: "130px",
                        objectFit: "fill",
                      }}
                      onClick={() =>
                        window.open(bannerUrl + itemData.businessUrl, "_blank")
                      }
                      src={url + "/" +  itemData.imagePath}
                    />
                  </Grid>
                );
              })}
              <Grid sx={{ padding: "30px 10px" }}></Grid>
            </Grid>
        
        
          </Grid>
      
      
        </Grid>
      </Grid>
    </>
  );
}

export default Homepage;
