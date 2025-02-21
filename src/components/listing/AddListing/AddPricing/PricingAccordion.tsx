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
            <div className="row flex-grow-1 ms-4">
              <div className="col-12 col-md-4">
                <AccordionH2Light className="mb-2">Product</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">Sliver </span>
              </div>
              <div className="col-12 col-md-4 mt-3 mt-md-0">
                <AccordionH2Light className="mb-2">Category</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">VIP</span>
              </div>
              <div className="col-12 col-md-4 mt-3 mt-md-0">
                <AccordionH2Light className="mb-2">Price</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">100.00</span>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <AccordionBodyTop
            className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 mb-0 mt-3"
            style={{
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
            }}
          >
            <div className="col-12">
              <h4 >Details</h4>
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
                    Product Type
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    Ticket / Merchandise / Service{" "}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Category
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    VIP, Standard
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Age Limit
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    +21
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Net Price
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    AED 100.00
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Transaction Currency
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    AED, UAE -Dirhams
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Total Taxes (%)
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    25%
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Service Fee & Option{" "}
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    Fixed fee per product - AED 6.00{" "}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Minimum Order
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    01
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Maximum Order
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    100
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Number of Access
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    01
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Number of Scans{" "}
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    02
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Sales Start Date & Time
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    01 January 2025 00:00
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Sales End Date & Time
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    01 January 2026 00:00
                  </AccordionBodyLeftSection>
                </div>

                {/* <div className="fw-semibold d-flex align-items-center row">
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
                </div> */}
              </div>
            </div>
          </AccordionBodyTop>
          <AccordionBodyTop
            className="row px-md-3 px-lg-7 py-3 mx-md-1 mx-lg-2 mb-3 mt-1"
            style={{
              borderBottomLeftRadius: "16px",
              borderBottomRightRadius: "16px",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
            }}
          >
            <div className="col-12">
              <span className="fw-semibold fs-12px text-black fw-600">
                Inclusions
              </span>
              <div className="d-flex align-items-center gap-3 justify-content-start my-4 flex-wrap">
                {inclusions.map((item, index) => (
                  <>
                    <AccordionButton
                      key={index}
                      className="btn px-6 py-2 fs-10px"
                      style={{ minWidth: "150px", backgroundColor: "#fff" }}
                    >
                      {item}
                    </AccordionButton>
                  </>
                ))}
              </div>
            </div>
          </AccordionBodyTop>
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

export default PricingAccordion;
