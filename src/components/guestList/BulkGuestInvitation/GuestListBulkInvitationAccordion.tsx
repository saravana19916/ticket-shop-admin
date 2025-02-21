import React, { FC } from "react";

import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IGuestList } from "../type";
import styled from "styled-components";
import moment from "moment";
import { AccordionButton } from "../../styledComponents/accordion";

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
              <div className="col-12 col-sm-6 col-md-4 col-xl-2 d-none d-sm-block">
                <AccordionH2Light className="mb-2">Order</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.orderId}
                </span>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-xl-2">
                <AccordionH2Light className="mb-2">Name</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">{item.name}</span>
              </div>
              <div className="col-12 col-md-4 col-xl-3 d-none d-md-block">
                <AccordionH2Light className="mb-2">
                  Organization
                </AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.organization}
                </span>
              </div>
              <div className="col-3 d-none d-lg-block">
                <AccordionH2Light className="mb-2">
                  Delivery Address
                </AccordionH2Light>
                <span className="fs-12px fw-500 text-light-blue-1">
                  {item.deliveryAddress}
                </span>
              </div>
              <div className="col-2 d-none d-lg-block">
                <AccordionH2Light className="mb-2">
                  Total Value
                </AccordionH2Light>
                <span className="fs-12px fw-500 text-light-blue-1">
                  AED {item.transactionSummary?.totalValue}
                </span>
              </div>
            </div>
            <div className="d-none d-xl-block">
              <AccordionButton className="btn px-7 py-1">
                Confirm
              </AccordionButton>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <AccordionBodyTop className="row px-3 px-lg-3 py-7 mx-md-1 mx-lg-2 my-3">
            <div className="col-12 col-md-5">
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
                    Email{" "}
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
                  <AccordionBodyStatus>Pending</AccordionBodyStatus>
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
            <div className="col-12 col-md-1 d-flex justify-content-center mt-3">
              <div className="vr d-none d-md-block"></div>

              <hr className="w-100 d-md-none border-2" />
            </div>
            <div className="col-12 col-md-6">
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
                    Vat
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
              Confirm
            </AccordionButton>
            <AccordionButton
              className="btn px-6 py-2"
              style={{ minWidth: "168px" }}
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
              Delete
            </AccordionButton>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default GuestListAccordion;
