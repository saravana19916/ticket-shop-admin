import React, { FC, Fragment, useState } from "react";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
import { Form } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import { ButtonPrimary } from "../../styledComponents/styledButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
interface IProps {}
const index: FC<IProps> = () => {
  return (
    <>
      <div className="row mb-4">
        <BackBreadCrumb />
        <div className="col-12 mb-3 mt-3">
          <span className="fw-600 fs-2">Add Contact Details</span>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 col-12 mb-7">
          <Form.Group>
            <FormLabelStyled>Name </FormLabelStyled>
            <FormInputStyled
              type="text"
              className="form-control"
              placeholder="Enter Name "
              value=""
            />
          </Form.Group>
        </div>
        <div className="col-lg-9 col-12 mb-7">
          <Form.Group>
            <FormLabelStyled>Contact Number </FormLabelStyled>
            <div className="position-relative">
              <PhoneInput
                country={"us"}
                placeholder="Enter phone number"
                inputStyle={{
                  width: "100%",
                  minHeight: "3.55rem !important",
                  fontSize: "14px",
                  borderRadius: "50rem",
                  border: "1px solid #d1d5db",
                  outline: "none",
                  height: "3.4rem",
                }}
                buttonStyle={{
                  background: "transparent",
                  border: "none",
                  borderRadius: "50rem 0 0 50rem",
                }}
                inputClass="custom-phone-input"
              />
            </div>
          </Form.Group>
        </div>
        <div className="col-lg-9 col-12 mb-7">
          <Form.Group>
            <FormLabelStyled>Email Id </FormLabelStyled>
            <FormInputStyled
              type="text"
              className="form-control"
              placeholder="Enter Email Id "
              value=""
            />
          </Form.Group>
        </div>

        <div className="col-lg-9 col-12 mb-7 pe-0">
          <div className="float-end">
            <ButtonPrimary
              type="submit"
              className="btn"
              style={{ minWidth: "118px" }}
            >
              Submit
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
