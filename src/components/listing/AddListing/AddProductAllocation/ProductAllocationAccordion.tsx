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

const ProductAllocationAccordion: FC<IProps> = ({ index }) => {
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
                <span className="fs-12px fw-600 text-black">Sliver Ticket</span>
              </div>
              <div className="col-12 col-md-3 mt-3 mt-md-0">
                <AccordionH2Light className="mb-2">Zone</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">Platinum I</span>
              </div>
              <div className="col-12 col-md-3 mt-3 mt-md-0">
                <AccordionH2Light className="mb-2">
                  Section / Row
                </AccordionH2Light>
                <span className="fs-12px fw-600 text-black">AB</span>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <AccordionBodyTop className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 mb-0 mt-3">
            <div className="col-12 ">
              <h4 className="fw-bold fs-6 text-black mb-5">Details</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Product name
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    Sliver Ticket
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Product price
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    AED 100
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Zone name
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    Platinum I
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Section Row
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    AB
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Has access to
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    All zones
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Entrance Gate
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    Entrance 2
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Total Capacity
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    1500
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    On Sale capacity
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    1400
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Blocked Capacity
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    50
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Status
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection
                    className="col-8 fw-light"
                    style={{
                      color: status === "active" ? "#00ff00" : "#45bced",
                    }}
                  >
                    Created - {status === "active" ? "Active" : "Inactive"}
                  </AccordionBodyLeftSection>
                </div>
              </div>
            </div>
          </AccordionBodyTop>
          {/* <AccordionBodyTop className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 my-3">
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
          </AccordionBodyTop> */}
          <div className="d-flex align-items-center gap-3 justify-content-start ms-4 mt-5 flex-wrap">
            <AccordionButton
              className="btn px-6 py-2"
              style={{ minWidth: "138px" }}
            >
              {status != "active" ? "Activate" : "Deactivate"}
            </AccordionButton>
            <AccordionButton
              className="btn px-6 py-2"
              style={{ minWidth: "138px" }}
            >
              Duplicate
            </AccordionButton>
            <AccordionButton
              className="btn px-6 py-2"
              style={{ minWidth: "138px" }}
            >
              Edit
            </AccordionButton>
            <AccordionButton
              className="btn px-6 py-2"
              style={{ minWidth: "138px" }}
            >
              Delete
            </AccordionButton>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default ProductAllocationAccordion;
