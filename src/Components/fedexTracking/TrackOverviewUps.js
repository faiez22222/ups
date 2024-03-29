import React, { useEffect, useMemo, useRef } from "react";
import styles from "./fedexTracking.module.scss";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import moment from "moment";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Box, Typography } from "@mui/material";

function getDistanceBetweenElements(element1, element2) {
  if (!element1 || !element2) return 0;
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();
  const x1 = rect1.top;
  const x2 = rect2.top;
  const rect2Height = rect2.height;
  const distance = x2 - x1 + rect2Height;
  return distance;
}

const SHIPMENT_INITIATED = "003";
const PICKED_UP = "005";
const OUT_FOR_DELIVERY = "021";
const DELIVERED = "011";
const ON_THE_WAY = "072";

const TrackOverviewUps = ({ trackingData, activeTab }) => {
  console.log("hey" , trackingData)  
  const uiLine = useRef();
  const activeUiLine = useRef();
  const firstScanEventDotRef = useRef();
  const lastScanEventDotRef = useRef();
  const activeEventRef = useRef();
  const initalizeTrackingLineUI = () => {
    const latestStatusDetail =
      trackingData.package[0].currentStatus
    const distanceBetweenFirstEventAndActiveEvent = getDistanceBetweenElements(
      firstScanEventDotRef.current,
      activeEventRef.current
    );
    let delta = 40;
    if (latestStatusDetail.code === DELIVERED) {
      activeUiLine.current.style.backgroundColor = "green";
      delta = 0;
    } else {
      activeUiLine.current.style.backgroundColor = "#4d148c";
    }
    activeUiLine.current.style.height = `${
      distanceBetweenFirstEventAndActiveEvent - delta
    }px`;
    activeUiLine.current.style.display = "block";
    activeUiLine.current.classList.add(styles.line);

    const distanceBetweenFirstAndLastDot = getDistanceBetweenElements(
      firstScanEventDotRef.current,
      lastScanEventDotRef.current
    );
    uiLine.current.style.height = `${distanceBetweenFirstAndLastDot}px`;
    uiLine.current.style.display = "block";
    uiLine.current.classList.add(styles.line);
  };
  useEffect(() => {
    initalizeTrackingLineUI(trackingData);
  }, [trackingData, activeTab]);
  const overViewData = useMemo(() => {
    const scanEvents =
      trackingData.package[0].activity;
    const originAddress =
      trackingData.package[0].packageAddress[0].address
    const destinationAddress =
      trackingData.package[0].packageAddress[1].address
    const standardTransitTimeWindow =
      trackingData.package[0].deliveryDate[0].date
    const latestStatusDetail = trackingData.package[0].currentStatus;
    const shimpentOriginData = {
      label: "FROM",
      location: `${originAddress.city}, ${originAddress.stateProvince}`,
      dateTime: "",
      code: SHIPMENT_INITIATED,
      isActive: latestStatusDetail.code === SHIPMENT_INITIATED,
    };
    console.log("hey2" , scanEvents)
    
    const shipmentPickedUpData = {
      label: "WE HAVE YOUR PACKAGE",
      location: "",
      dateTime: "",
      code: PICKED_UP,
      isActive: latestStatusDetail.code === PICKED_UP,
    };
    const shipmentOutForDeliveryData = {
      label: "OUT FOR DELIVERY",
      location: "",
      dateTime: "",
      code: OUT_FOR_DELIVERY,
      isActive: latestStatusDetail.code === OUT_FOR_DELIVERY,
    };
    const shipmentDeliveredData = {
      label: "DELIVERED",
      location: "",
      dateTime: "",
      code: DELIVERED,
      isActive: latestStatusDetail.code === DELIVERED,
    };

    const shipmentInTransit = {
      label: "ON THE WAY",
      location: "",
      dateTime: "",
      isActive: false,
      code: ON_THE_WAY
    };

    const shipmentDestinationData = {
      label: "TO",
      location: `${destinationAddress.city}, ${destinationAddress.stateProvince}`,
      dateTime: "",
      note: {
        displayKey: "Estimated delivery",
        value: `${moment(standardTransitTimeWindow.ends).format(
          "l"
        )}, at ${moment(standardTransitTimeWindow.ends).format("LT")}`,
      },
      code: "",
      isActive: false,
    };
    const DATA = [
      shimpentOriginData,
      shipmentPickedUpData,
      shipmentInTransit,
      shipmentOutForDeliveryData,
    ];
    scanEvents.forEach((event) => {
      if (event.status.statusCode === SHIPMENT_INITIATED) {
        shimpentOriginData.note = {
          displayKey: "Label Created",
          value: `${moment(event.date).format("l")}, at ${moment(
            event.date
          ).format("LT")}`,
        };
      }
      if (event.status.statusCode === PICKED_UP) {
        shipmentPickedUpData.location = `${event.location.address.city}, ${event.location.address.stateProvince}`;
        shipmentPickedUpData.dateTime = `${moment(event.date).format(
          "l"
        )}, at ${moment(event.date).format("LT")}`;
      }

      if (event.status.statusCode === OUT_FOR_DELIVERY) {
        shipmentOutForDeliveryData.location = `${event.location.address.city}, ${event.location.addressstateProvince}`;
        shipmentOutForDeliveryData.dateTime = `${moment(event.date).format(
          "l"
        )}, at ${moment(event.date).format("LT")}`;
      }

      if (event.status.statusCode === DELIVERED) {
        shipmentDeliveredData.location = `${event.location.address.city}, ${event.location.address.stateProvince}`;
        shipmentDeliveredData.dateTime = `${moment(event.date).format(
          "l"
        )}, at ${moment(event.date).format("LT")}`;
      }
    });

    const lastTransitData = scanEvents.find((event) => event.statusCode !== DELIVERED && event.statusCode !== OUT_FOR_DELIVERY && event.statusCode !== PICKED_UP && event.statusCode !== SHIPMENT_INITIATED);
    
    if(lastTransitData && (scanEvents[0].statusCode !== PICKED_UP || scanEvents[0].statusCode !== SHIPMENT_INITIATED)){
      shipmentInTransit.location = `${lastTransitData.location.city}, ${lastTransitData.location.stateProvince}`;
      shipmentInTransit.dateTime = `${moment(lastTransitData.date).format(
        "l"
      )}, at ${moment(lastTransitData.date).format("LT")}`;
    }
    if (shipmentDeliveredData && shipmentDeliveredData.dateTime) {
      DATA.push(shipmentDeliveredData);
    } else {
      DATA.push(shipmentDestinationData);
    }

    const transitDataIndex = DATA.findIndex((item) => item.code === ON_THE_WAY);
    if(!DATA.some((item) => item.isActive)){
        DATA[transitDataIndex].isActive = true;
    }
    for(let i=0; i<DATA.length; i++){
        if(DATA[i].isActive) break;
        DATA[i].isEventPassed = true;
    }
    return DATA;
  }, [trackingData]);
  return (
    <div className={styles.overViewTrackingComponent}>
      {overViewData.map((item, index) => {
        let ref = null;
        if (index === 0) {
          ref = firstScanEventDotRef;
        }
        if (index === overViewData.length - 1) {
          ref = lastScanEventDotRef;
        }
        if (item.isActive) {
          ref = activeEventRef;
        }

        return (
          <div
            ref={ref}
            className={`${styles.overView} ${item.isActive && styles.active}`}
            key={item.label || item.dateTime}
          >
            {item.isActive ? (
              <div className={`${styles.activeStep} ${item.code === DELIVERED ? styles.delivered : ''}`}>
                {item.code === DELIVERED ? (
                  <TaskAltIcon sx={{ fontSize: 30, color: "#fff" }} />
                ) : (
                  <LocalShippingOutlinedIcon
                    sx={{ fontSize: 30, color: "#fff" }}
                  />
                )}
              </div>
            ) : (
              <div className={styles.dotWrapper}>
                <div className={`${styles.dot} ${item.isEventPassed ? styles.lightDot : ''}`}>
                </div>
                  {index === 0 ? (
                    <>
                      <div
                        className={styles.line}
                        ref={uiLine}
                        style={{ display: "none" }}
                      />
                      <div
                        className={styles.line}
                        ref={activeUiLine}
                        style={{ display: "none" }}
                      />
                    </>
                  ) : null}
              </div>
            )}
            <div className={styles.contentWrapper}>
              <Typography fontFamily={"inherit"} color={"InfoText"} letterSpacing={"1px"} fontWeight={700} fontSize={"12px"}>{item.label}</Typography>
              <Typography fontFamily={"inherit"} letterSpacing={"1px"} fontWeight={400} fontSize={"13px"}>{item.location}</Typography>
              <Typography fontFamily={"inherit"} letterSpacing={"1px"} fontWeight={400} fontSize={"13px"} >{item.dateTime}</Typography>
              {item.note ? (
                <Box marginTop={"8px"}>
                  <Typography fontFamily={"inherit"} fontSize={"13px"} fontStyle={"italic"}>{item.note.displayKey}</Typography>
                  <Typography fontFamily={"inherit"} fontSize={"13px"}>{item.note.value}</Typography>
                </Box>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrackOverviewUps;
