import React, { useState, useEffect, useRef, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import axios from "axios";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "./style.css";
import { FirstPage, LastPage } from "@mui/icons-material";
import { useWindowSize } from "../windowresize";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
// flipper
import {
  defaultOnSwipeStart,
  defaultSwipeLength,
  defaultSwipeSpeed,
} from "../flipper/flipcomponents/pointer-controls.tsx";
import { defaultShadowBackground } from "../flipper/flipcomponents/shadow.tsx";
import { defaultPerspectiveMultiplier } from "../flipper/flipcomponents/perspective.tsx";
import { FlippingPages, FlippingPagesDirection } from "../flipper/index.ts";
import { defaultAnimationDuration } from "../flipper/flipcomponents/animation.tsx";
import { Box, Button, Grid, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import classes from "../../app.module.css";
import classNames from "classnames";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Loader from "../loader/Loader";
import { BASE_URL } from "../../utils";
import Page from "./Page.tsx";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function FlipPage({ calcWidth, filePath }) {
  const [width, height] = useWindowSize();

  const [info, setInfo] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [pageIndex, setPageIndex] = useState([]);
  const [entryPage, setEntryPage] = useState([]);
  const [time, setTime] = useState(true);
  const [fileWith, setFileWidth] = useState();

  const handleChange = (event) => {
    setPageNumber(event.target.value);
  };

  //  flipper
  const [animationDuration, setAnimationDuration] = useState(
    defaultAnimationDuration
  );
  const [animationRunning, setAnimationRunning] = useState(false);
  const [animationTurn, setAnimationTurn] = useState<number>();
  const [direction, setDirection] =
    useState<FlippingPagesDirection>("left-to-right");
  const [perspectiveMultiplier, setPerspectiveMultiplier] = useState(
    defaultPerspectiveMultiplier
  );
  const [selected, setSelected] = useState(0);
  // const [pageIndex, setPageIndex] = useState([]);
  const [shadowBackground, setShadowBackground] = useState(
    defaultShadowBackground
  );
  const [swipeLength, setSwipeLength] = useState(defaultSwipeLength);
  const [swipeSpeed, setSwipeSpeed] = useState(defaultSwipeSpeed);
  const [swipeTurn, setSwipeTurn] = useState<number>();
  const [swiping, setSwiping] = useState(false);
  const [pdf, setPdf] = useState();

  const flipDocument = useRef("");

  function onDocumentLoadSuccess(pdf: any) {
    let tempArr = [];
    for (let i = 0; i <= pdf?.numPages; i++) {
      tempArr.push(i);
    }

    setPageIndex(tempArr);
  }
  useEffect(() => {
    const diff = calcWidth.leftWidth + calcWidth.rightWidth || 400;
    if (width > 800) {
      setFileWidth(width - (diff + 80));
    } else {
      setFileWidth(width - 20);
    }
  }, [calcWidth.leftWidth, calcWidth.rightWidth, width]);

  useEffect(() => {
    if (flipDocument) {
      setPageData(flipDocument?.current?.pages);
    }
  }, [flipDocument]);

  const onSearchPdf = () => {
    if (search === "") {
      setEntryPage([]);
    }
    // setSearch(value);
    if (!search) {
      setPageNumber(0);
      return false;
    }
    const tempPages = [];
    flipDocument?.current?.pages?.map((x) => {
      if (x.innerText.toLowerCase().includes(search.toLowerCase())) {
        tempPages.push(Number(x.getAttribute("data-page-number")));
      }
      return x;
    });
    if (tempPages.length > 0) {
      setEntryPage(tempPages);
      setPageNumber(tempPages[0]);
    }
  };

  // flipper

  const handleAnimationStart = useCallback(() => {
    setAnimationRunning(true);
  }, []);

  const handleAnimationTurn = useCallback((selected: number) => {
    setAnimationTurn(selected);
  }, []);

  const handleAnimationEnd = useCallback(() => {
    setAnimationRunning(false);
  }, []);

  useEffect(() => {
    if (!animationRunning) {
      setAnimationTurn(undefined);
    }
  }, [animationRunning]);

  const handleSwipeStart = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!defaultOnSwipeStart(event)) {
        return false;
      }
      setSwiping(true);
      return true;
    },
    []
  );

  const handleSwipeTurn = useCallback((selected: number) => {
    setSwipeTurn(selected);
  }, []);

  const handleSwipeEnd = useCallback((selected: number) => {
    setSwiping(false);
    setSelected(selected);
  }, []);

  useEffect(() => {
    if (!swiping) {
      setSwipeTurn(undefined);
    }
  }, [swiping]);

  const nextPage = () => {
    const index = entryPage.indexOf(pageNumber) + 1;
    if (entryPage[index]) {
      setPageNumber(entryPage[index]);
    } else {
      setPageNumber(entryPage[0]);
    }
  };
  const firstPage = () => {
    setPageNumber(entryPage[0]);
  };
  const lastPage = () => {
    setPageNumber(entryPage[entryPage.length - 1]);
  };

  const previous = () => {
    const index = entryPage.indexOf(pageNumber) - 1;
    if (entryPage[index]) {
      setPageNumber(entryPage[index]);
    } else {
      setPageNumber(entryPage[0]);
    }
  };

  setTimeout(() => {
    setTime(false);
  }, 5000);

  const prev = useCallback(() => {
    setSelected((selected) => (selected > 0 ? selected - 1 : selected));
    setPageNumber((selected) => (selected > 0 ? selected - 1 : selected));
  }, []);

  const next = useCallback(() => {
    setSelected((selected) => selected + 1);
    setPageNumber((selected) => selected + 1);
  }, []);

  return (
    <>
      <Grid container sx={{ position: "relative" }}>
        <Grid item xs={12} className="pdf_search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search in PDF"
          />
          <div style={{ paddingTop: 10 }}>
            <Button onClick={onSearchPdf} variant="contained">
              Search
            </Button>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "10px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "10%", sm: "20%" },
              padding: { xs: "10px", sm: "10px " },
            }}
          >
            <Box sx={{ display:"flex",alignItems:"center",justifyContent:"space-between",minWidth: 135, maxWidth: 130, }}>
              <FormControl sx={{width:"100px",padding:"0"}}>
                <InputLabel id="demo-simple-select-label">
                  Select Page
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pageNumber}
                  label="Select Page"
                  onChange={handleChange}
                  sx={{padding:"0"}}
                >
                  {pageIndex.map((item) => {
                    return (
                      <MenuItem key={item} value={item}  >
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <Typography sx={{color:"gray"}}  component="p" className="text-muted" gutterBottom> {`/ ${pageIndex && pageIndex[pageIndex.length - 1]}`}</Typography>
            </Box>
            
          </Box>

          <Box
            sx={{
              width: { xs: "50%", sm: "20%" },
              padding: { xs: "10px ", sm: "10px " },
              minWidth: "150px",
            }}
          >
            {entryPage.length > 0 ? null : (
              <Grid item xs={12}>
                <Typography sx={{ textAlign: "center" }} component="p">
                  Click to turn
                </Typography>
                <Box
                  sx={{
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={next}
                    sx={{ color: "black" }}
                    disabled={selected >= pageIndex[pageIndex.length - 1]}
                  >
                    <ArrowBackIosNewIcon />
                  </Button>
                  <Button
                    onClick={prev}
                    sx={{ color: "black" }}
                    disabled={selected <= 0}
                  >
                    <ArrowForwardIosIcon />
                  </Button>
                </Box>
              </Grid>
            )}
          </Box>
        </Grid>

        {entryPage.length > 1 ? (
          <Grid item xs={12} className="pdf_search">
            <button
              className="search_btn first_btn"
              onClick={firstPage}
              disabled={entryPage.indexOf(pageNumber) < 1 ? true : false}
            >
              <KeyboardDoubleArrowLeftIcon />
            </button>
            <button
              className="search_btn"
              onClick={previous}
              disabled={entryPage.indexOf(pageNumber) < 1 ? true : false}
            >
              <ArrowBackIosNewIcon />
            </button>
            <p className="index_no">{`${pageNumber}/${
              entryPage[entryPage.length - 1]
            }`}</p>
            <button className="search_btn" onClick={nextPage}>
              <ArrowForwardIosIcon />
            </button>
            <button className="search_btn last_btn" onClick={lastPage}>
              <KeyboardDoubleArrowRightIcon />
            </button>
          </Grid>
        ) : null}

        {time ? (
          <Loader />
        ) : (
          <Grid item xs={12}>
            <TransformWrapper
              doubleClick={{
                disabled: false,
              }}
              wheel={{
                disabled: true,
              }}
              pinch={{
                disabled: false,
              }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <React.Fragment>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      "& button": {
                        fontSize: "1.5rem",
                        color: "#333",
                        padding: "5px 10px",
                        minWidth: "40px",
                      },
                    }}
                    className="tools"
                  >
                    <Button onClick={() => zoomIn()}>
                      <ZoomInIcon />
                    </Button>
                    <Button onClick={() => zoomOut()}>
                      <ZoomOutIcon />
                    </Button>
                    <Button onClick={() => resetTransform()}>
                      <RestartAltIcon />
                    </Button>
                  </Box>
                  <TransformComponent>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        width: fileWith,
                        height: { xs: "720px", lg: "1050px" },
                        padding: "10px",
                      }}
                    >
                      <div className={classes.container}>
                        <div className={classes.demo}>
                          <div
                            className={classNames(
                              classes.flippingPages,
                              classes[direction]
                            )}
                          >
                            <div>
                              <Document
                                file={filePath}
                                onLoadSuccess={onDocumentLoadSuccess}
                              >
                                <FlippingPages
                                  animationDuration={animationDuration}
                                  direction={direction}
                                  // disableSwipe={disableSwipe}
                                  onAnimationEnd={handleAnimationEnd}
                                  onAnimationStart={handleAnimationStart}
                                  onAnimationTurn={handleAnimationTurn}
                                  onSwipeEnd={handleSwipeEnd}
                                  onSwipeStart={handleSwipeStart}
                                  onSwipeTurn={handleSwipeTurn}
                                  perspectiveMultiplier={perspectiveMultiplier}
                                  selected={selected}
                                  shadowBackground={shadowBackground}
                                  swipeLength={swipeLength}
                                  swipeSpeed={swipeSpeed}
                                >
                                  {pageIndex?.map((k, key) => {
                                    return (
                                      <Page
                                        key={k}
                                        pageNumber={pageNumber || k + 1}
                                        width={fileWith}
                                        height={height}
                                      />
                                    );
                                  })}
                                </FlippingPages>
                              </Document>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </TransformComponent>
                </React.Fragment>
              )}
            </TransformWrapper>
          </Grid>
        )}
        <div style={{ display: "none" }}>
          <TransformWrapper
            doubleClick={{
              disabled: false,
            }}
            // wheel={{
            //   disabled: true,
            // }}
            pinch={{
              disabled: false,
            }}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <React.Fragment>
                <div className="tools">
                  <button onClick={() => zoomIn()}>+</button>
                  <button onClick={() => zoomOut()}>-</button>
                  <button onClick={() => resetTransform()}>x</button>
                </div>
                <TransformComponent>
                  <Document
                    ref={flipDocument}
                    file={filePath}
                    style={{ width: "100%", display: "none" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <HTMLFlipBook
                      width={width}
                      height={height}
                      style={{ position: "relative" }}
                    >
                      {pageIndex?.map((s, key) => {
                        return <Page key={s} pageNumber={key + 1} />;
                      })}
                    </HTMLFlipBook>
                  </Document>
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>

        {entryPage.length > 1 ? (
          <Grid item xs={12} className="pdf_search">
            <button
              className="search_btn first_btn"
              onClick={FirstPage}
              disabled={entryPage.indexOf(pageNumber) < 1 ? true : false}
            >
              <KeyboardDoubleArrowLeftIcon />
            </button>
            <button
              className="search_btn"
              onClick={previous}
              disabled={entryPage.indexOf(pageNumber) < 1 ? true : false}
            >
              <ArrowBackIosNewIcon />
            </button>
            <p className="index_no">{`${pageNumber}/${entryPage.length}`}</p>
            <button className="search_btn" onClick={nextPage}>
              <ArrowForwardIosIcon />
            </button>
            <button className="search_btn last_btn" onClick={LastPage}>
              <KeyboardDoubleArrowRightIcon />
            </button>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </>
  );
}
