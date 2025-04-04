import { FC, useState } from "react";

import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import moment from "moment";
import { IPromotionsImportCampaigns } from "./import-type";
import { AccordionButton } from "../../styledComponents/accordion";
import TimeLineModal from "../../shared/TimeLineModal";
interface IProps {
  index: string;
  item: IPromotionsImportCampaigns;
}
const AccordionH2Light = styled.span`
  color: #6d727f;
  font-size: 10px;
  display: block;
`;
const AccordionBodySummaryValue = styled.span`
  color: #000;
  font-size: 12px;
  font-weight: normal;
`;
const AccordionBodyTop = styled.div`
  background-color: #fafbfb;
  border-radius: 14px;
`;
const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead``;

const TableHeadRow = styled.tr``;
const TableRow = styled.tr`
  &:last-child td {
    border-bottom: 0;
  }
`;

const TableCell = styled.td`
  padding: 12px 16px;
  font-size: 10px;
  text-align: left;
  color: #000;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
`;
const TableBodyCell = styled.td`
  padding: 14px 16px;
  font-size: 10px;
  text-align: left;
  color: #121826;
  font-weight: normal;
  border-bottom: 1px solid #ddd;
`;
const TableBody = styled.tbody``;

const AccordionPromotionsImportCampaigns: FC<IProps> = ({ index, item }) => {
  const [showWorkflow, setShowWorkflow] = useState(false);
  const viewWorkflowClose = () => setShowWorkflow(false);

  const timelineDataImportPromotions = [
    {
      status: "Import Promotion Issues",
      date: "09 July 2023",
      assignee: "Adam Berry",
      color: "#6f42c1",
    },
    {
      status: "Import Promotion Delivered",
      date: "05 July 2023",
      assignee: "Victoria",
      color: "#0dcaf0",
    },
    {
      status: "Import Promotion Accepted",
      date: "25 June 2023",
      assignee: "Victoria",
      color: "#20c997",
    },
    {
      status: "Import Promotion Used",
      date: "14 June 2023",
      assignee: "Petey Cruiser",
      color: "#ffc107",
    },
    {
      status: "Import Promotion Cancelled",
      date: "29 June 2023",
      assignee: "Petey Cruiser",
      color: "#dc3545",
    },
  ];

  return (
    <>
      <Accordion.Item
        eventKey={index}
        className="border overflow-hidden p-0"
        style={{ borderRadius: "16px" }}
      >
        <Accordion.Header
          style={{ borderRadius: "16px" }}
          className="px-2 custom-toggle-button"
        >
          <div className="d-flex align-items-center gap-5 w-100 me-3">
            <div
              className="bg-default rounded-3 d-none d-md-block"
              style={{ width: "4rem", height: "4rem" }}
            ></div>
            <div className="row flex-grow-1">
              <div className="col-12 col-sm-6 col-md-2 d-none d-sm-block">
                <AccordionH2Light className="mb-2">Type</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">{item.type}</span>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <AccordionH2Light className="mb-2">
                  Campaign Name
                </AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.campaignsName}
                </span>
              </div>
              <div className="col-3 d-none d-md-block">
                <AccordionH2Light className="mb-2">
                  Expiry Date & Time
                </AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {moment(item.expiryDate)?.format("DD.MMM.YYYY/HH:mm")}
                </span>
              </div>
              <div className="col-2 d-none d-md-block">
                <AccordionH2Light className="mb-2">Unit</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">{item.unit}</span>
              </div>
              <div className="col-2 d-none d-md-block">
                <AccordionButton className="btn px-7 py-1">
                  Confirm
                </AccordionButton>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <AccordionBodyTop className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 my-3">
            <div className="col-12 col-md-6">
              <h4 className="fw-bold fs-6">Summary</h4>
              <div className="d-flex flex-column gap-1 mt-4 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>Type</AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {item.type}
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>
                    Campaign Name
                  </AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {item.campaignsName}
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>
                    Application
                  </AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {item.application}
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>
                    Start Date & Time
                  </AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {moment(item.startDate)?.format("DD.MMM.YYYY/HH:mm")}
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>
                    Expiry Date & Time
                  </AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {moment(item.expiryDate)?.format("DD.MMM.YYYY/HH:mm")}
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>
                    Discount %
                  </AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {item.discount}%
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>
                    Discount $
                  </AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {item.discountValue}
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>
                    Number of codes (units)
                  </AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {item.numberOfCodes}
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>
                    Usage per code
                  </AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {item.usagePerCode}
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>
                    Organization
                  </AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {item.organization}
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>
                    Issued by
                  </AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {item.issuedBy}
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>
                    Email Address
                  </AccordionBodySummaryValue>
                  <AccordionBodySummaryValue className="text-light-blue-1">
                    {item.emailAddress}
                  </AccordionBodySummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodySummaryValue>Source</AccordionBodySummaryValue>
                  <AccordionBodySummaryValue>
                    {item.sources}
                  </AccordionBodySummaryValue>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-1 d-flex justify-content-center mt-3">
              <div className="vr d-none d-md-block"></div>

              <hr className="w-100 d-md-none border-2" />
            </div>
            <div className="col-12 col-md-5">
              <h4 className="fw-bold fs-6 ">List of Codes & Usage</h4>
              <div
                className="px-6 py-2 bg-white mt-4 "
                style={{ borderRadius: "16px" }}
              >
                <TableContainer>
                  <StyledTable>
                    <TableHead>
                      <TableHeadRow>
                        <TableCell>Code</TableCell>
                        <TableCell>Discount</TableCell>
                        <TableCell>Units</TableCell>
                      </TableHeadRow>
                    </TableHead>
                    <TableBody>
                      {item.codesAndUsage?.map((code, index) => (
                        <TableRow key={index}>
                          <TableBodyCell>{code.code}</TableBodyCell>
                          <TableBodyCell>{code.discount}</TableBodyCell>
                          <TableBodyCell>{code.unit}</TableBodyCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </StyledTable>
                </TableContainer>
                {/* <Pagination
                  count={5}
                  variant="outlined"
                  className="d-flex align-items-center justify-content-center m-5"
                /> */}
              </div>
            </div>
          </AccordionBodyTop>
          <div className="d-flex align-items-center gap-3 justify-content-start ms-5 mt-5 flex-wrap">
            <AccordionButton
              className="btn px-6 py-2"
              style={{ minWidth: "168px" }}
            >
              Download Booking
            </AccordionButton>
            <AccordionButton
              className="btn px-6 py-2"
              style={{ minWidth: "168px" }}
              onClick={() => {
                setShowWorkflow(true);
              }}
            >
              View Workflow
            </AccordionButton>
            <AccordionButton
              className="btn px-6 py-2"
              style={{ minWidth: "168px" }}
            >
              Edit
            </AccordionButton>
            <AccordionButton
              className="btn px-6 py-2"
              style={{ minWidth: "168px" }}
            >
              Extend Expiry
            </AccordionButton>
            <AccordionButton
              className="btn px-6 py-2"
              style={{ minWidth: "168px" }}
            >
              Delete
            </AccordionButton>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <TimeLineModal
        show={showWorkflow}
        onClose={viewWorkflowClose}
        timelineData={timelineDataImportPromotions}
        modalTitle="Import Promotions Status"
        otherAction={[
          { icon: "edit", onClick: () => {} },
          { icon: "delete", onClick: () => {} },
        ]}
      />
    </>
  );
};

export default AccordionPromotionsImportCampaigns;
