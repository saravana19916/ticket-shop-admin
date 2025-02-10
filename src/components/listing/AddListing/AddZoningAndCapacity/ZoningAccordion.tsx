import React, { FC } from "react";
import { Accordion } from "react-bootstrap";
import moment from "moment";
import {
  AccordionH2Light,
  AccordionBodyTop,
  AccordionBodyLeftSection,
  AccordionBodyRightSection,
  AccordionButton,
} from "../../../styledComponents/accordion";
import { IAddListingAddZoningAndCapacity } from "./type";
import {
  ButtonActive,
  ButtonNotActive,
} from "../../../styledComponents/styledForm";

interface IProps {
  item: IAddListingAddZoningAndCapacity;
  index: string;
  status: "active" | "in-active";
}

const ZoningAccordion: FC<IProps> = ({ item, index, status }) => {
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
              <div className="col-3 mt-1">
                <AccordionH2Light className="mb-2">Zone</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.zones?.zoneName}
                </span>
              </div>
              <div className="col-3 mt-1">
                <AccordionH2Light className="mb-2"> Format</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.zones?.zoneFormat}
                </span>
              </div>
              <div className="col-1"></div>
              <div className="col-5">
                {status === "active" ? (
                  <>
                    <ButtonActive className="btn">Active</ButtonActive>
                  </>
                ) : (
                  <>
                    <ButtonNotActive className="btn">
                      Not Active
                    </ButtonNotActive>
                  </>
                )}
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <AccordionBodyTop
            className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 mb-0 mt-3"
            // style={{
            //   borderBottomLeftRadius: "0px",
            //   borderBottomRightRadius: "0px",
            //   borderTopLeftRadius: "16px",
            //   borderTopRightRadius: "16px",
            // }}
          >
            <div className="col-12">
              <h4 className="fw-bold fs-6 text-black mb-5">Details</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-5">
                    Zone Name
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-7 fw-light">
                    {item.zones?.zoneName}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-5">
                    Zone Format
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-7 fw-light">
                    {item.zones?.zoneFormat}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-5">
                    Selection
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-7 fw-light">
                    {item.zones?.zoneSelection}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-5">
                    Type
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-7 fw-light">
                    {item.zones?.zoneType}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-5">
                    Total Capacity
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-7 fw-light">
                    1500
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-5">
                    On Sale Capacity
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-7 fw-light">
                    1450
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-5">
                    Blocked Capacity
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-7 fw-light">
                    50
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-5">
                    Sub Section / Rows
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-7 fw-light text-light-blue-1">
                    Yes
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-5">
                    Number of Sub Section / Rows
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-7 fw-light">
                    4
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-5">
                    Connected Products
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-7 fw-light">
                    None
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-5">
                    Status
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection
                    className="col-7 fw-light"
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

export default ZoningAccordion;
