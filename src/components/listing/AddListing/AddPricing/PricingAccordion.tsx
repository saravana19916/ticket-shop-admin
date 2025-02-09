import React, { FC } from "react";
import { Accordion } from "react-bootstrap";
import moment from "moment";
import {
  AccordionH2Light,
  AccordionBodyTop,
  AccordionBodyLeftSection,
  AccordionButton,
} from "../../../styledComponents/accordion";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";

interface IProps {
  item: IPricingDetailsProps;
  index: string;
}

const PricingAccordion: FC<IProps> = ({ index }) => {
  const inclusions = [
    "Complementary Drink",
    "Dedicated Seat",
    "Bronze Ticket",
    "Silver Ticket",
    "Gold Ticket",
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
              <div className="col-12 col-md-3">
                <AccordionH2Light className="mb-2">Product</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  Sliver Ticket
                </span>
              </div>
              <div className="col-12 col-md-3 mt-3 mt-md-0">
                <AccordionH2Light className="mb-2">Zone</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  Platinum I
                </span>
              </div>
              <div className="col-12 col-md-3 mt-3 mt-md-0">
                <AccordionH2Light className="mb-2">
                  Section / Row
                </AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  AB
                </span>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-4 p-md-2 pb-6">
          <AccordionBodyTop className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 my-3">
            <div className="col-12 col-md-6">
              <h4 className="fw-bold fs-6">Details</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Product name
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    Sliver Ticket
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Product price
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>AED 100</AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Zone name</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    Platinum I
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Section Row
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>AB</AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Has access to
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>All zones</AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Entrace Gate
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    Entrance 2
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Total Capacity
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>1500</AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    On Sale capacity
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>1400</AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Blocked Capacity
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>50</AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Status</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    <span style={{ color: "green" }}> active</span>
                  </AccordionBodyLeftSection>
                </div>
              </div>
            </div>
          </AccordionBodyTop>
          <AccordionBodyTop className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 my-3">
            <h4 className="fw-bold fs-6">Inclusions</h4>
            <div
              className="d-flex flex-wrap gap-3 mt-5 ms-5"
              style={{ rowGap: "12px" }}
            >
              {inclusions.map((item, index) => (
                <AccordionButton
                  key={index}
                  className="btn px-6 py-2"
                  style={{
                    flexGrow: 1,
                    minWidth: "150px",
                    maxWidth: "200px",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </AccordionButton>
              ))}
            </div>
          </AccordionBodyTop>
          <div className="d-flex flex-wrap align-items-center gap-3 justify-content-start ms-5 mt-5">
            <AccordionButton className="btn px-6 py-2">
              activate
            </AccordionButton>
            <AccordionButton className="btn px-6 py-2">edit</AccordionButton>
            <AccordionButton className="btn px-6 py-2">delete</AccordionButton>
            <AccordionButton className="btn px-6 py-2">
              duplicate
            </AccordionButton>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default PricingAccordion;
