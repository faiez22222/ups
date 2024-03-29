import React, { useEffect, useMemo, useRef } from "react";
import cloneDeep from "lodash/cloneDeep";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import moment from "moment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./fedexTracking.module.scss";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function getDistanceBetweenElements(element1, element2) {
  if (!element1 || !element2) return;
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  const x1 = rect1.left + rect1.width / 2;
  const y1 = rect1.top + rect1.height / 2;

  const x2 = rect2.left + rect2.width / 2;
  const y2 = rect2.top + rect2.height / 2;

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  return distance;
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// const useStyles = makeStyles((theme) => ({
//   hiddenOnSmall: {
//     [theme.breakpoints.down("sm")]: {
//       display: "none",
//     },
//   },
//   hiddenOnMedium: {
//     [theme.breakpoints.down("md")]: {
//       display: "none",
//     },
//   },
//   hiddenOnLarge: {
//     [theme.breakpoints.up("lg")]: {
//       display: "none",
//     },
//   },
// }));

const TravelHistory = ({ scanEvents, activeTab }) => {
  //   const classes = useStyles();
  const firstScanEventDotRef = useRef();
  const lastScanEventDotRef = useRef();
  const uiLine = useRef();
  const initalizeTrackingLineUI = () => {
    const distanceBetweenFirstAndLastDot = getDistanceBetweenElements(
      firstScanEventDotRef.current,
      lastScanEventDotRef.current
    );
    uiLine.current.style.height = `${distanceBetweenFirstAndLastDot}px`;
    uiLine.current.style.display = "block";
    uiLine.current.classList.add(styles.line);
  };
  useEffect(() => {
    if (scanEvents && scanEvents.length) {
      initalizeTrackingLineUI();
    }
  }, [scanEvents, activeTab]);

  const processedScanEvents = useMemo(() => {
    if (!scanEvents || (scanEvents && !scanEvents.length)) return [];
    const events = cloneDeep(scanEvents);
    return events.reverse();
  }, [scanEvents]);

  return (
    <Grid container className={styles.travelHistoryContianer}>
      {processedScanEvents.map((event, index) => {
        let dotRef = null;
        if (index === 0) {
          dotRef = firstScanEventDotRef;
        }
        if (index === scanEvents.length - 1) {
          dotRef = lastScanEventDotRef;
        }
        return (
          <StyledGrid
            key={event.date}
            container
            flexWrap={"nowrap"}
            padding="10px 15px"
          >
            <Grid
              item
              md={3}
              display="flex"
              flexWrap={"nowrap"}
              justifyContent="space-between"
              marginRight={"4px"}
              marginTop={"2px"}
              className={styles.timeWrapper}
            >
              <Typography fontFamily={"inherit"} fontSize="13px" color={"CaptionText"}>
                {moment(event.date).format("dddd")},{" "}
                {moment(event.date).format("L")}
              </Typography>

              <Typography fontFamily={"inherit"} fontSize="12px" color={"GrayText"}>
                {moment(event.date).format("LT")}
              </Typography>
            </Grid>
            <Grid item md={6} display="flex" alignItems="flex-start">
              <span ref={dotRef} className={styles.dot}>
                {index === 0 ? (
                  <div ref={uiLine} style={{ display: "none" }} />
                ) : null}
              </span>
              <Box className={styles.scanEventWrapper}>
                <Typography fontFamily={"inherit"} fontSize="13px" color={"InfoText"}>
                  {event.eventDescription}
                </Typography>
                {event.scanLocation.city ? (
                  <Typography fontFamily={"inherit"}
                    fontSize="11px"
                    color={"GrayText"}
                    display={"none"}
                  >
                    {`${event.scanLocation.city}${
                      event.scanLocation.stateOrProvinceCode
                        ? `, ${event.scanLocation.stateOrProvinceCode}`
                        : ""
                    }`}
                  </Typography>
                ) : null}
                <Typography fontFamily={"inherit"}
                  color={"GrayText"}
                  className={styles.scanEventTime}
                  display={"none"}
                >
                  {moment(event.date).format("llll")}
                </Typography>
                <Typography fontFamily={"inherit"}
                  color={"CaptionText"}
                  className={styles.scanEventDescription}
                >
                  {event.exceptionDescription}
                </Typography>
                <Box className={styles.timeWrapperMobile}>
                  <Typography fontFamily={"inherit"} fontSize="13px" color={"GrayText"}>
                    {moment(event.date).format("dddd")},{" "}
                    {moment(event.date).format("L")}
                  </Typography>

                  <Typography fontFamily={"inherit"} fontSize="12px" color={"GrayText"}>
                    {moment(event.date).format("LT")}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3} marginTop={"2px"}>
              {event.scanLocation.city ? (
                <Typography fontFamily={"inherit"} fontSize="12px" color={"GrayText"}>
                  {`${event.scanLocation.city}${
                    event.scanLocation.stateOrProvinceCode
                      ? `, ${event.scanLocation.stateOrProvinceCode}`
                      : ""
                  }`}
                </Typography>
              ) : (
                <Typography fontFamily={"inherit"}>&nbsp;</Typography>
              )}
            </Grid>
          </StyledGrid>
        );
      })}
    </Grid>
  );
};

export default TravelHistory;
