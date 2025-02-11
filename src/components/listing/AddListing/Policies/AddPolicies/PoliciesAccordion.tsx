import React, { FC } from "react";
import { IPoliciesDetailsProps } from "../PoliciesLists";
import {
  AccordionBodyLeftSection,
  AccordionBodyTop,
  AccordionButton,
  AccordionH2Light,
} from "../../../../styledComponents/accordion";
import { Accordion } from "react-bootstrap";
import {
  ButtonActive,
  ButtonNotActive,
} from "../../../../styledComponents/styledForm";
interface IProps {
  item: IPoliciesDetailsProps;
  index: string;
  status: "active" | "in-active";
}
const PoliciesAccordion: FC<IProps> = ({ item, index, status }) => {
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
              <div className="col-6 mt-1">
                <AccordionH2Light className="mb-2">Name</AccordionH2Light>
                <span className="fs-12px fw-600 text-black">
                  {item.policyName}
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
              <h4 className="fw-bold fs-6 text-black mb-5">Details</h4>
              <div className="d-flex flex-column gap-1 fs-6">
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    Policy Name
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {item.policyName}
                  </AccordionBodyLeftSection>
                </div>
                <div className="fw-semibold d-flex align-items-center row">
                  <AccordionBodyLeftSection className="col-4">
                    To be Visible One
                  </AccordionBodyLeftSection>
                  <AccordionBodyLeftSection className="col-8 fw-light">
                    {item?.toBeVisibleOn}
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
                Policy Text
              </span>
            </div>
            <div className="d-flex align-items-center gap-3 justify-content-start my-4 flex-wrap">
              <AccordionBodyLeftSection>
                {item.policyText}
              </AccordionBodyLeftSection>
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

export default PoliciesAccordion;
