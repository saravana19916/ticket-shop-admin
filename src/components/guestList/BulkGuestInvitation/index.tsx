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
import {
  ButtonPrimary,
  ButtonSecondaryDarkGrey,
} from "../../styledComponents/styledButton";

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
      <div className="p-4">
        <div className="p-0 p-md-5">
          <div className="row">
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
                  <div className="d-flex align-items-center gap-3 mb-6">
                    <ButtonSecondaryDarkGrey
                      className="btn"
                      onClick={handleDownloadTemplate}
                    >
                      Download Template
                    </ButtonSecondaryDarkGrey>
                    <ButtonPrimary
                      className="btn"
                      style={{ minWidth: "118px" }}
                    >
                      Import
                    </ButtonPrimary>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
                <div className="d-flex flex-column mt-3">
                  <h4
                    className="fw-semibold fs-12px"
                    style={{
                      color: "#121826",
                    }}
                  >
                    Double check & Confirm
                  </h4>
                  <p className="my-2 fs-10px" style={{ color: "#4d515c" }}>
                    you can confirm the orders individually or in bulk .
                  </p>
                </div>
                <ButtonPrimary className="btn" style={{ minWidth: "118px" }}>
                  Confirm all
                </ButtonPrimary>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
