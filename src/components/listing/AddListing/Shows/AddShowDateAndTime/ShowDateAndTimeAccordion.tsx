import React, { FC } from "react";
import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import { IShowDateAndTimeSectionProps } from "../../../../../commondata/showDateAndTime";
import moment from "moment";
import {
  AccordionBodyLeftSection,
  AccordionBodyRightSection,
  AccordionBodyTop,
  AccordionH2Light,
  AccordionButton,
} from "../../../../styledComponents/accordion";

interface IProps {
  item: IShowDateAndTimeSectionProps;
  index: string;
}

const ShowDateAndTimeAccordion: FC<IProps> = ({ item, index }) => {
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
                <AccordionH2Light className="mb-2">Show Name</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  Show {item.id}
                </span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2">Event Date</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.eventDate}
                </span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2">
                  Show Duration
                </AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.showDuration}
                </span>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <AccordionBodyTop className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 my-3">
            <div className="col-5">
              <h4 className="fw-bold fs-6">General Info</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Start Date & Time
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {moment().format("DD MMM YYYY HH:mm a")}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    End Date & Time
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {moment().format("DD MMM YYYY HH:mm a")}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Duration</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    2hrs 30 mins
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Door Opens At
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {moment().format("DD MMM YYYY HH:mm a")}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Door Closes At
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {moment().format("DD MMM YYYY HH:mm a")}
                  </AccordionBodyLeftSection>
                </div>
              </div>
            </div>
            <div className="col-1 d-flex h-auto justify-content-center mt-1">
              <div className="vr"></div>
            </div>
            <div className="col-5">
              <h4 className="fw-bold fs-6">Intermission</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Start Time
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    {moment().format("HH:mm a")}
                  </AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    End Time
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    {moment().format("HH:mm a")}
                  </AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Duration
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    10:00 mins
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

export default ShowDateAndTimeAccordion;
