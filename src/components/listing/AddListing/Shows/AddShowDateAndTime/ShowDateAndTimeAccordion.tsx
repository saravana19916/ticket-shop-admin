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
import {
  ButtonActive,
  ButtonNotActive,
} from "../../../../styledComponents/styledButton";

interface IProps {
  item: IShowDateAndTimeSectionProps;
  index: string;
  status: "active" | "in-active";
}

const ShowDateAndTimeAccordion: FC<IProps> = ({ item, index, status }) => {
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
            <div className="row flex-grow-1 d-flex align-items-center">
              <div className="col-3 mt-1">
                <AccordionH2Light className="mb-2">Show Name</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  Show {item.id}
                </span>
              </div>
              <div className="col-4 mt-1">
                <AccordionH2Light className="mb-2">
                  Start Date & Time
                </AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.eventDate} {item.showTime}
                </span>
              </div>
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
            style={{
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
            }}
          >
            <div className="col-12">
              <h4 className="fw-bold fs-6 text-black mb-5">Details</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Start Date & Time
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {moment().format("DD MMM YYYY - HH:mm")}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    End Date & Time
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {moment().add(150, "minutes").format("DD MMM YYYY - HH:mm")}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Duration
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    2hrs 30 mins
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Door Opens At
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {moment()
                      .subtract(10, "minutes")
                      .format("DD MMM YYYY - HH:mm")}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Door Closes At
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {moment().add(10, "minutes").format("DD MMM YYYY - HH:mm")}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Status
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection
                    className="col-8 fw-light"
                    style={{
                      color: status === "active" ? "#16d9c6" : "#BAF1E4",
                    }}
                  >
                    Created - {status === "active" ? "Active" : "Inactive"}
                  </AccordionBodyLeftSection>
                </div>
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
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Intermission Start Time
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {moment().add(75, "minutes").format("HH:mm")}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Intermission End Time
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {moment().add(85, "minutes").format("HH:mm")}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Intermission Duration
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    10:00 mins
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

export default ShowDateAndTimeAccordion;
