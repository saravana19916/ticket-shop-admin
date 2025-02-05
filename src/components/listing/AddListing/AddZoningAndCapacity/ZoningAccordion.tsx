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

interface IProps {
  item: IAddListingAddZoningAndCapacity;
  index: string;
}

const ZoningAccordion: FC<IProps> = ({ item, index }) => {
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
              <div className="col-3">
                <AccordionH2Light className="mb-2">S.No</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">{item.id}</span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2">Zone Name</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.zones?.zoneName}
                </span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2"> Format</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.zones?.zoneFormat}
                </span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2">Type</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.zones?.zoneType}
                </span>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <AccordionBodyTop className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 my-3">
            <div className="col-5">
              <h4 className="fw-bold fs-6">Zone Info</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Name</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.zones?.zoneName}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Format</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.zones?.zoneFormat}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Type</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.zones?.zoneType}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Selection</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.zones?.zoneSelection}
                  </AccordionBodyLeftSection>
                </div>
              </div>
            </div>
            <div className="col-1 d-flex h-auto justify-content-center mt-1">
              <div className="vr"></div>
            </div>
            <div className="col-5">
              <h4 className="fw-bold fs-6">Zone Design</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>Section</AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    Section 1
                  </AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>Floor</AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    1st Floor{" "}
                  </AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>Block</AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    Block 10
                  </AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>Row</AccordionBodyRightSection>
                  <AccordionBodyRightSection>Row 1</AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>Wing</AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    East Wing
                  </AccordionBodyRightSection>
                </div>
              </div>
            </div>
          </AccordionBodyTop>
          <div className="d-flex align-items-center gap-3 justify-content-start ms-5 mt-5">
            <AccordionButton className="btn px-6 py-2">
              Duplicate
            </AccordionButton>
            <AccordionButton className="btn px-6 py-2">Edit</AccordionButton>
            <AccordionButton className="btn px-6 py-2">Delete</AccordionButton>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default ZoningAccordion;
