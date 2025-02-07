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
import { IAddListingShopProps } from "./type";
import {
  ButtonActive,
  ButtonNotActive,
} from "../../../styledComponents/styledForm";

interface IProps {
  item: IAddListingShopProps;
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
                <AccordionH2Light className="mb-2">Name</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.shopInformation?.shopName}
                </span>
              </div>
              <div className="col-3 mt-1">
                <AccordionH2Light className="mb-2">Code</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.shopInformation?.shopCode}
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
            style={{
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
            }}
          >
            <div className="col-12">
              <h4 className="fw-bold fs-6 text-black mb-5">Shop Details</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Shop Name
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {item.shopInformation?.shopName}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Shop Type
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {item.shopInformation?.shopType}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Code
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {item.shopInformation?.shopCode}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Country
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {item.shopInformation?.country}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    City
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {item.shopInformation?.city}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Address
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {item.shopInformation?.address}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4 fw-light">
                    Email Address
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light text-light-blue-1">
                    {item.shopInformation?.emailAddress}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Point of contact
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {item.shopInformation?.pointOfContact}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Phone Number
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {item.shopInformation?.phoneNumber}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Service Fee
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    AED 199
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Sales Commission
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    15%
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
                Product Included
              </span>
              <div className="d-flex align-items-center gap-3 justify-content-start my-4 flex-wrap">
                <AccordionButton
                  className="btn px-6 py-2 fs-10px"
                  style={{ minWidth: "150px", backgroundColor: "#fff" }}
                >
                  Sliver Ticket
                </AccordionButton>
                <AccordionButton
                  className="btn px-6 py-2 fs-10px"
                  style={{ minWidth: "150px", backgroundColor: "#fff" }}
                >
                  Bronze Ticket
                </AccordionButton>
                <AccordionButton
                  className="btn px-6 py-2 fs-10px"
                  style={{ minWidth: "150px", backgroundColor: "#fff" }}
                >
                  Gold Ticket
                </AccordionButton>
                <AccordionButton
                  className="btn px-6 py-2 fs-10px"
                  style={{ minWidth: "150px", backgroundColor: "#fff" }}
                >
                  Sliver Ticket
                </AccordionButton>
                <AccordionButton
                  className="btn px-6 py-2 fs-10px"
                  style={{ minWidth: "150px", backgroundColor: "#fff" }}
                >
                  Bronze Ticket
                </AccordionButton>
                <AccordionButton
                  className="btn px-6 py-2 fs-10px"
                  style={{ minWidth: "150px", backgroundColor: "#fff" }}
                >
                  Gold Ticket
                </AccordionButton>
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
