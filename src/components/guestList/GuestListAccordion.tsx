import React, { FC, useState } from "react";

import { Accordion } from "react-bootstrap";
import { IGuestList } from "./type";
import styled from "styled-components";
import StyledBadge from "../styledComponents/badge";
import moment from "moment";
import { AccordionButton } from "../styledComponents/accordion";
import TimeLineModal from "../../components/shared/TimeLineModal";

interface IProps {
  item: IGuestList;
  index: string;
}

const AccordionH2Light = styled.span`
  color: #6d727f;
  font-size: 10px;
  display: block;
`;
const AccordionBodyStatus = styled.span`
  font-size: 12px;
  font-weight: normal;
`;
const AccordionBodyTransactionSummaryValue = styled.span`
  color: #000;
  font-size: 12px;
  font-weight: normal;
`;
const AccordionBodyOrderDetailsValue = styled.span`
  color: #4d5562;
  font-size: 12px;
  font-weight: normal;
`;
const AccordionBodyTop = styled.div`
  background-color: #fafbfb;
  border-radius: 14px;
`;

const GuestListAccordion: FC<IProps> = ({ item, index }) => {
  const [showWorkflow, setShowWorkflow] = useState(false);
  const viewWorkflowClose = () => setShowWorkflow(false);

  const timelineData = [
    {
      status: "Ticket Issues",
      date: "09 July 2023",
      assignee: "Adam Berry",
      color: "#6f42c1",
    },
    {
      status: "Ticket Delivered",
      date: "05 July 2023",
      assignee: "Victoria",
      color: "#0dcaf0",
    },
    {
      status: "Ticket Accepted",
      date: "25 June 2023",
      assignee: "Victoria",
      color: "#20c997",
    },
    {
      status: "Ticket Used",
      date: "14 June 2023",
      assignee: "Petey Cruiser",
      color: "#ffc107",
    },
    {
      status: "Ticket Cancelled",
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
          className="custom-toggle-button px-2"
        >
          <div className="d-flex align-items-center gap-5 w-100 me-3">
            <div
              className="bg-color-light-gray-2 rounded-3 d-none d-md-block"
              style={{ minWidth: "4rem", height: "4rem" }}
            ></div>
            <div className="row flex-grow-1">
              <div className="col-2">
                <AccordionH2Light className="mb-2">Order</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.orderId}
                </span>
              </div>
              <div className="col-2">
                <AccordionH2Light className="mb-2">Unit</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">{item.unit}</span>
              </div>
              <div className="col-2">
                <AccordionH2Light className="mb-2">Name</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">{item.name}</span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2">
                  Organization
                </AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.organization}
                </span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2">
                  Delivery Address
                </AccordionH2Light>
                <span className="fs-12px fw-500 text-light-blue-1">
                  {item.deliveryAddress}
                </span>
              </div>
            </div>
            <StyledBadge
              className="fw-medium fs-6 px-4 py-4"
              style={{ minWidth: "130px" }}
              status={item.status as "Cancelled" | "Used" | "Issued" | "Other"}
            >
              {item.status}
            </StyledBadge>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <AccordionBodyTop className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 my-3">
            <div className="col-5">
              <h4 className="fw-bold fs-6">Transaction Summary</h4>
              <div className="d-flex flex-column gap-1 mt-5 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Name
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue>
                    {item.name}
                  </AccordionBodyTransactionSummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Order
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue>
                    {item.orderId}
                  </AccordionBodyTransactionSummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Date
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue>
                    {moment(item.date)?.format("DD MMM YYYY")}
                  </AccordionBodyTransactionSummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Payment Method
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue>
                    {item.transactionSummary?.paymentMethod}
                  </AccordionBodyTransactionSummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Total Value
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue>
                    AED {item.transactionSummary?.totalValue}
                  </AccordionBodyTransactionSummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Promo Code
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue>
                    {item.transactionSummary?.promoCode}
                  </AccordionBodyTransactionSummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Discount
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue>
                    {item.transactionSummary?.discount} %
                  </AccordionBodyTransactionSummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Grand Total
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue>
                    AED {item.transactionSummary?.grandTotal}
                  </AccordionBodyTransactionSummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Issued By
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue>
                    {item.transactionSummary?.issuedBy}
                  </AccordionBodyTransactionSummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Delivery Mode
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue>
                    Workflow{" "}
                  </AccordionBodyTransactionSummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Delivery Address
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue className="text-light-blue-1">
                    {item.deliveryAddress}{" "}
                  </AccordionBodyTransactionSummaryValue>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Status
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyStatus
                    style={{
                      color:
                        item.status === "Cancelled"
                          ? "#ff003e"
                          : item.status === "Used"
                          ? "#00bef2"
                          : item.status === "Issued"
                          ? "#3ab879"
                          : "#00bef2",
                    }}
                  >
                    {item.status}{" "}
                  </AccordionBodyStatus>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyTransactionSummaryValue>
                    Organization
                  </AccordionBodyTransactionSummaryValue>
                  <AccordionBodyTransactionSummaryValue>
                    {item.organization}{" "}
                  </AccordionBodyTransactionSummaryValue>
                </div>
              </div>
            </div>
            <div className="col-1 d-flex h-auto justify-content-center mt-3">
              <div className="vr"></div>
            </div>
            <div className="col-5">
              <h4 className="fw-bold fs-6">Order Details</h4>
              <div className="d-flex flex-column gap-1 mt-5 fs-6">
                {item.orderDetails?.tickets?.map((ticket) => (
                  <>
                    <div className="d-flex align-items-center justify-content-between">
                      <AccordionBodyOrderDetailsValue>
                        {ticket?.quantity} x {ticket?.name}
                      </AccordionBodyOrderDetailsValue>
                      <AccordionBodyOrderDetailsValue>
                        AED {ticket?.totalCost}
                      </AccordionBodyOrderDetailsValue>
                    </div>
                  </>
                ))}

                <span className="border-bottom border-grey my-2"></span>
                <div className="text-gray d-flex align-items-center justify-content-between">
                  <AccordionBodyOrderDetailsValue>
                    Process Fee
                  </AccordionBodyOrderDetailsValue>
                  <AccordionBodyOrderDetailsValue>
                    AED {item?.orderDetails?.processFee}
                  </AccordionBodyOrderDetailsValue>
                </div>
                <div className="text-gray d-flex align-items-center justify-content-between">
                  <AccordionBodyOrderDetailsValue>
                    Service Charge
                  </AccordionBodyOrderDetailsValue>
                  <AccordionBodyOrderDetailsValue>
                    AED {item?.orderDetails?.serviceCharge}
                  </AccordionBodyOrderDetailsValue>
                </div>
                <span className="border-bottom border-grey my-2"></span>
                <div className="fs-12px fw-600 d-flex align-items-center justify-content-between">
                  <span>Net Total</span>
                  <span>AED {item.orderDetails?.netTotal}</span>
                </div>
                <div className="row fs-12px align-items-center justify-content-between">
                  <AccordionBodyOrderDetailsValue className="col-4">
                    Discount{" "}
                    <span className="fs-10px">
                      ({item.orderDetails?.discountType})
                    </span>
                  </AccordionBodyOrderDetailsValue>
                  <AccordionBodyOrderDetailsValue className="col-4">
                    {item.orderDetails?.discount}%
                  </AccordionBodyOrderDetailsValue>
                  <span className="text-primary fw-bold col-4 text-end">
                    -AED {item.orderDetails?.discountValue}
                  </span>
                </div>
                <span className="border-bottom my-2"></span>
                <div className="row fs-12px align-items-center justify-content-between">
                  <AccordionBodyOrderDetailsValue className="col-4">
                    VAT
                  </AccordionBodyOrderDetailsValue>
                  <AccordionBodyOrderDetailsValue className="col-4">
                    {item.orderDetails?.vat}%
                  </AccordionBodyOrderDetailsValue>
                  <AccordionBodyOrderDetailsValue className="col-4 text-end">
                    AED {item.orderDetails?.vatValue}
                  </AccordionBodyOrderDetailsValue>
                </div>
                <span className="border-bottom my-2"></span>
                <div className="fs-12px fw-600 d-flex align-items-center justify-content-between">
                  <span>Grand Total</span>
                  <span>AED {item.orderDetails?.grandTotal}</span>
                </div>
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
              Scanning Record
            </AccordionButton>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <TimeLineModal
        show={showWorkflow}
        onClose={viewWorkflowClose}
        timelineData={timelineData}
        modalTitle="Guest Invitation Status"
        otherAction={[
          { icon: "edit", onClick: () => {} },
          { icon: "delete", onClick: () => {} },
        ]}
      />
    </>
  );
};

export default GuestListAccordion;
