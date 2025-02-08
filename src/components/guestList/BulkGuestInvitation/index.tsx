// import ZoningAndAllocation from "../../listing/AddListing/AddPricing/ZoningAndAllocation";
import React, { FC } from "react";
import FileUpload from "./FileUpload";
import Colors from "../../bootstrap/colors/colors";
import { Accordion, Button } from "react-bootstrap";
import Buttons from "../../bootstrap/buttons/buttons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../guest-list.css";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Pagination,
} from "@mui/material";
import GuestListBulkInvitationAccordion from "./GuestListBulkInvitationAccordion";
import { GuestListData } from "../helpers";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
import * as XLSX from "xlsx";

interface IProps {}
const H5 = styled.h5`
  color: #4d515c;
  font-size: 13px;
  display: block;
  font-weight: 600;
`;
const index: FC<IProps> = () => {
  const handleDownloadTemplate = () => {
    const header = [
      "Unit",
      "Name",
      "Order",
      "Date",
      "Payment Method",
      "Total Value",
      "Promo Code",
      "Discount",
      "Grand Total",
      "Issued By",
      "Delivery Mode",
      "Delivery Address",
      "Status",
      "Organization",
      "2 x VIP Concert Ticket",
      "Process Fee",
      "Service Charge",
      "Net Total",
      "Discount (Promo Code)",
      "Vat",
      "Grand Total",
    ];
    const data = [header];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bluk Template");

    XLSX.writeFile(workbook, "Bluk.xlsx");
  };

  return (
    <>
      {/* <Colors /> */}
      {/* <Buttons /> */}
      {/* <Accordians /> */}
      <div className="row p-0 p-md-2 p-lg-4 p-xl-4">
        <BackBreadCrumb />
        <div className="col-12 mb-3 mt-3">
          <span className="fw-600 fs-26px">Bulk Guest Invitation</span>
        </div>
      </div>
      <div className="px-0 px-md-2 px-lg-4 px-xl-4 py-2 d-flex flex-column gap-5">
        <div>
          <H5>Import File</H5>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
            <FileUpload />
            <div className="d-flex align-items-center gap-3 mb-4">
              <button
                className="btn btn-pill py-2 px-7 fs-12px fw-semibold px-5"
                style={{ backgroundColor: "#F3F4F4" }}
                onClick={handleDownloadTemplate}
              >
                Download Template
              </button>
              <button className="btn btn-primary btn-pill py-2 px-7 fw-semibold fs-12px">
                Import
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
          <div className="d-flex flex-column">
            <h4
              className="fw-semibold fs-12px"
              style={{
                color: "#121826",
              }}
            >
              Double check & Confirm
            </h4>
            <p className="m-0 fs-10px" style={{ color: "#4d515c" }}>
              you can confirm the orders individually or in bulk .
            </p>
          </div>
          <button className="btn btn-primary btn-pill mt-2 mt-md-0 px-7 fw-semibold fs-12px">
            Confirm all
          </button>
        </div>
        <div>
          <Accordion className="d-flex flex-column gap-4">
            {GuestListData?.map((item, index) => (
              <>
                <GuestListBulkInvitationAccordion
                  item={item}
                  index={`${index}`}
                />
              </>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default index;
