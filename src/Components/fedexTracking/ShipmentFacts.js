import React, { useMemo } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  tableCellClasses,
  tableRowClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const ShipmentFacts = ({
  packageDetails,
  serviceDetail,
  trackingNumberInfo,
  standardTransitTimeWindow,
  dateAndTimes
}) => {

  const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      margin: '0'
    },
    [theme.breakpoints.up('md')]: {
      margin: '30px 0'
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
      borderRadius: "5px",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.root}`]: {
      borderBottom: "none",
      padding: "1rem 1.5rem",
      width: "50%",
    },
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const processedServiceDetail = useMemo(() => {
    const data = [];
    data.push({
      displayKey: "SERVICE",
      value: serviceDetail.description,
    });
    return data;
  }, [serviceDetail]);

  const processedPackageDetail = useMemo(() => {
    const data = [];
    const weightAndDimensions = packageDetails.weightAndDimensions;
    if (weightAndDimensions.weight && weightAndDimensions.weight.length) {
      const weightsArray = weightAndDimensions.weight.map(
        (item) => `${item.value} ${item.unit}`
      );
      if (weightsArray.length) {
        data.push({
          displayKey: "WEIGHT",
          value: weightsArray.join(" / "),
        });
      }
    }
    if (
      weightAndDimensions.dimensions &&
      weightAndDimensions.dimensions.length
    ) {
      let dimensions = weightAndDimensions.dimensions.find(
        (dimension) => dimension.units === "IN"
      );
      dimensions = dimensions || weightAndDimensions.dimensions[0];
      if (dimensions) {
        data.push({
          displayKey: "DIMENSIONS",
          value: `${dimensions.length}x${dimensions.width}x${dimensions.height} ${dimensions.units}`,
        });
      }
    }
    if (packageDetails.count) {
      data.push({
        displayKey: "TOTAL PIECES",
        value: packageDetails.count,
      });
    }
    if (packageDetails.physicalPackagingType) {
      data.push({
        displayKey: "PACKAGING",
        value: packageDetails.physicalPackagingType,
      });
    }
    return data;
  }, [packageDetails]);

  const processedShipmentOverview = useMemo(() => {
    const data = [];
    if (trackingNumberInfo && trackingNumberInfo.trackingNumber) {
      data.push({
        displayKey: "TRACKING NUMBER",
        value: trackingNumberInfo.trackingNumber,
      });
    }
    // if (
    //   standardTransitTimeWindow &&
    //   standardTransitTimeWindow.window &&
    //   standardTransitTimeWindow.window.ends
    // ) {
    //   data.push({
    //     displayKey: "EDTIMATED DELIVERY",
    //     value: moment(standardTransitTimeWindow.window.ends).format("L"),
    //   });
    // }
    if(dateAndTimes && dateAndTimes.length){
      dateAndTimes.forEach((item) => {
        if(item.type === "ESTIMATED_DELIVERY"){
          data.push({
                displayKey: "EDTIMATED DELIVERY",
                value: moment(item.dateTime).format("L"),
              });
        }
        if(item.type === "SHIP"){
          data.push({
            displayKey: "SHIP DATE",
            value: moment(item.dateTime).format("L"),
          });
        }
      })
    }
    
    return data;
  }, [trackingNumberInfo, standardTransitTimeWindow, dateAndTimes]);

  return (
    <StyledBox>
      <Box>
        <Typography fontFamily={"inherit"}
          display={"flex"}
          alignItems={"center"}
          gap="10px"
          fontSize={"18px"}
          marginBottom={"10px"}
          fontWeight={300}
        >
          <InfoOutlinedIcon sx={{ color: "#4d148c", fontSize: "24px" }} />{" "}
          Shipment overview
        </Typography>
        <TableContainer component={Box}>
          <Table aria-label="customized table">
            <TableBody>
              {processedShipmentOverview.map((details) => (
                <StyledTableRow key={details.displayKey}>
                  <StyledTableCell component="th" scope="row">
                    <Typography fontFamily={"inherit"} fontSize={"1.15rem"}>
                      {details.displayKey}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <Typography fontFamily={"inherit"} fontSize={"1.15rem"}>{details.value}</Typography>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box marginTop={"28px"}>
        <Typography fontFamily={"inherit"}
          display={"flex"}
          alignItems={"center"}
          gap="10px"
          fontSize={"18px"}
          marginBottom={"10px"}
          fontWeight={300}
        >
          <InventoryOutlinedIcon sx={{ color: "#4d148c", fontSize: "24px" }} />{" "}
          Services
        </Typography>
        <TableContainer component={Box}>
          <Table aria-label="customized table">
            <TableBody>
              {processedServiceDetail.map((details) => (
                <StyledTableRow key={details.displayKey}>
                  <StyledTableCell component="th" scope="row">
                    <Typography fontFamily={"inherit"} fontSize={"13px"}>
                      {details.displayKey}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <Typography fontFamily={"inherit"} fontSize={"13px"}>{details.value}</Typography>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box marginTop={"28px"}>
        <Typography fontFamily={"inherit"}
          display={"flex"}
          alignItems={"center"}
          gap="10px"
          fontSize={"18px"}
          marginBottom={"10px"}
          fontWeight={300}
        >
          <Inventory2OutlinedIcon sx={{ color: "#4d148c", fontSize: "24px" }} />{" "}
          Package details
        </Typography>
        <TableContainer component={Box}>
          <Table aria-label="customized table">
            <TableBody>
              {processedPackageDetail.map((details) => (
                <StyledTableRow key={details.displayKey}>
                  <StyledTableCell component="th" scope="row">
                    <Typography fontFamily={"inherit"} fontSize={"13px"}>
                      {details.displayKey}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <Typography fontFamily={"inherit"} fontSize={"13px"}>{details.value}</Typography>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </StyledBox>
  );
};

export default ShipmentFacts;
