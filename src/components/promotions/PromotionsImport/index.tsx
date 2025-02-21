import { FC } from "react";
import FileUpload from "./FileUpload";
import { Accordion } from "react-bootstrap";
import styled from "styled-components";

import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
import * as XLSX from "xlsx";
import {
  ButtonPrimary,
  ButtonSecondaryDarkGrey,
} from "../../styledComponents/styledButton";
import { promotionsImportCampaignsData } from "./import-campaigns";
import AccordionPromotionsImportCampaigns from "./AccordionPromotionsImportCampaigns";

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
    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Promotion Import Template"
    );

    XLSX.writeFile(workbook, "promotion-import.xlsx");
  };

  return (
    <>
      <div className="p-4">
        <div className="p-0 p-md-5">
          <div className="row">
            <div className="row p-0 p-md-2 p-lg-4 p-xl-4">
              <BackBreadCrumb />
              <div className="col-12 mb-3 mt-3">
                <span className="fw-600 fs-26px">Import Promotions</span>
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
              <div>
                <Accordion className="panel-default d-flex flex-column gap-4">
                  {promotionsImportCampaignsData?.map((item, index) => (
                    <>
                      <AccordionPromotionsImportCampaigns
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
