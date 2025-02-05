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

interface IProps {
  item: IAddListingShopProps;
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
                <AccordionH2Light className="mb-2">Shop Name</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.shopInformation?.shopName}
                </span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2">Shop Type</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.shopInformation?.shopType}
                </span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2">City</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.shopInformation?.city}{" "}
                </span>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <AccordionBodyTop className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 my-3">
            <div className="col-5">
              <h4 className="fw-bold fs-6">Shop Info</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Shop Name</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.shopInformation?.shopName}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Shop Type</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.shopInformation?.shopType}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Code</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.shopInformation?.shopCode}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Country</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.shopInformation?.country}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>City</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.shopInformation?.city}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Address</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.shopInformation?.address}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Email Address
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.shopInformation?.emailAddress}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Point of contact
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.shopInformation?.pointOfContact}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Phone Number
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.shopInformation?.phoneNumber}
                  </AccordionBodyLeftSection>
                </div>
              </div>
            </div>
            <div className="col-1 d-flex h-auto justify-content-center mt-1">
              <div className="vr"></div>
            </div>
            <div className="col-5">
              <h4 className="fw-bold fs-6">Product Allocation</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Product Name
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    Product {item.id}
                  </AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Product Type
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>Laptop</AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Allocation
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>10%</AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Discount
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>3%</AccordionBodyRightSection>
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
