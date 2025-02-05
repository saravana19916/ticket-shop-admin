import React, { FC } from "react";
import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import moment from "moment";
import {
  AccordionH2Light,
  AccordionBodyTop,
  AccordionBodyLeftSection,
  AccordionBodyRightSection,
  AccordionButton,
} from "../../../styledComponents/accordion";
import { IDynamicPricingStrategyProps } from "./type";

interface IProps {
  item: IDynamicPricingStrategyProps;
  index: string;
}

const ShowDateAndTimeAccordion: FC<IProps> = ({ item, index }) => {
  const type = item.strategyType;
  const data = item.strategyType === "By Date" ? item.byDate : item.byDemand;
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
                <AccordionH2Light className="mb-2">
                  Strategy Name
                </AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.strategyType === "By Date"
                    ? item.byDate?.strategyName
                    : item.byDemand?.strategyName}
                </span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2">
                  Strategy Type
                </AccordionH2Light>
                <span className="fs-12px fw-600 text-black">{type}</span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2">Pricing</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {data?.pricingActionPrice}{" "}
                </span>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <AccordionBodyTop className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 my-3">
            <div className="col-5">
              <h4 className="fw-bold fs-6">Strategy Info</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Strategy Name
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {data?.strategyName}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Strategy Type
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>{type}</AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Start Date
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {moment().format("DD MMM YYYY HH:mm a")}{" "}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>End Date</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {moment().format("DD MMM YYYY HH:mm a")}{" "}
                  </AccordionBodyLeftSection>
                </div>
              </div>
            </div>
            <div className="col-1 d-flex h-auto justify-content-center mt-1">
              <div className="vr"></div>
            </div>
            <div className="col-5">
              <h4 className="fw-bold fs-6">Product & Shop Allocation</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Shop Name
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    Shop {item.id}
                  </AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Product Name
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    Product ONE
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
