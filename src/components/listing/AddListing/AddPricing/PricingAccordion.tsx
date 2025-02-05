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
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";

interface IProps {
  item: IPricingDetailsProps;
  index: string;
}

const PricingAccordion: FC<IProps> = ({ item, index }) => {
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
                  Product Name
                </AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.productDetails?.productName}
                </span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2"> Subtitle</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.productDetails?.productSubTitle}
                </span>
              </div>
              <div className="col-3">
                <AccordionH2Light className="mb-2">Category</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.productDetails?.productCategory}
                </span>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <AccordionBodyTop className="row px-md-3 px-lg-7 py-7 mx-md-1 mx-lg-2 my-3">
            <div className="col-5">
              <h4 className="fw-bold fs-6">Product Info</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Name</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.productDetails?.productName}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Sub Title</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.productDetails?.productSubTitle}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Type</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.productDetails?.productType}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>Category</AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.productDetails?.productCategory}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyLeftSection>
                    Sub Category
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection>
                    {item.productDetails?.productSubCategory}
                  </AccordionBodyLeftSection>
                </div>
              </div>
            </div>
            <div className="col-1 d-flex h-auto justify-content-center mt-1">
              <div className="vr"></div>
            </div>
            <div className="col-5">
              <h4 className="fw-bold fs-6">Pricing Info</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Net Sales Price
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    {item.pricing?.netSalesPrice}.00
                  </AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Currency
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    {item.pricing?.transactionCurrency}
                  </AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>VAT</AccordionBodyRightSection>
                  <AccordionBodyRightSection>5%</AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Entertainment Tax
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    {item.pricing?.entertainmentTax || 0}%
                  </AccordionBodyRightSection>
                </div>
                <div className="fw-semibold d-flex align-items-center justify-content-between">
                  <AccordionBodyRightSection>
                    Other Tax
                  </AccordionBodyRightSection>
                  <AccordionBodyRightSection>
                    {item.pricing?.otherTax || 0}%
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

export default PricingAccordion;
