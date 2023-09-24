import React from "react";
import "./header.style.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
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
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const drawerWidth = 240;

const data = [
  {
    id: "1",
    name: "Home",
    url: "/",
  },
  {
    id: "2",
    name: "About Us",
    url: "/about",
  },
  {
    id: "3",
    name: "Organization",
    url: "/organization",
  },
  {
    id: "4",
    name: " Deceased",
    url: "/deceased",
  },
  {
    id: "5",
    name: "Jewish Calendar",
    url: "/iraniancalendar",
  },
  {
    id: "6",
    name: "Contact Us",
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

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("1");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [responseOpen, setresponseOpen] = React.useState(false);
  const openSet = Boolean(anchorEl);

  const handleResponse = () => {
    setresponseOpen(!responseOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleChange = (newValue) => {

    setValue(newValue.id);
    sessionStorage.setItem("myCat", newValue.id);
    navigate(newValue.url);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const result = sessionStorage.getItem("myCat");
  const selected = sessionStorage.getItem("eventList");

console.log("SessionData",result )

  React.useEffect(() => {
    if (!result) {
      setValue("1");
      sessionStorage.setItem("myCat", "1");
      navigate("/");
    }
  }, [result]);

  const handleEvent = (listData) => {
    const final = eventData.filter((s) => s.id === listData.id);
    sessionStorage.setItem("eventList", final[0].id);
    sessionStorage.setItem("myCat", listData.id);
    navigate(listData.url);
  };

  return (
    <>
      <div className="header-container">
        {matches ? (
          <div className="header-main">
            <ul className="header-ul">
              {data.map((item) => {
                return (
                  <li
                    onClick={() => handleChange(item)}
                    className="header-li"
                    style={{
                      cursor: "pointer",
                      color: item.id === result ? "red" : "black",
                    }}
                  >
                    {item.name}
                  </li>
                );
              })}
              <li
                className="header-li"
                style={{
                  cursor: "pointer",
                  color: selected === result ? "red" : "black",
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
                        sx={{ color: listData.id === result ? "red" : "black" }}
                        onClick={() => handleEvent(listData)}
                      >
                        {listData.eventName}
                      </MenuItem>
                    </>
                  );
                })}
              </Menu>
            </ul>
          </div>
        ) : (
          <div>
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
                {data.map((text, index) => (
                  <ListItem key={text.name}>
                    <ListItemButton onClick={() => handleChange(text)}>
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
                            onClick={() => handleChange(resp)}
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
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
