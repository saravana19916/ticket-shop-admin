import { ErrorMessage, Formik, Form as FormikForm } from "formik";
import { Accordion, Form } from "react-bootstrap";
import React, { useState } from "react";
import * as Yup from "yup";
import { IOptionProps } from "../../../../../commondata/addListingPageOne";
import { useParams, useNavigate } from "react-router-dom";
import CustomTooltip from "../../../../shared/CustomTooltip";

import { allPoliciesList } from "../data";
import {
  FormInputStyled,
  FormLabelStyled,
  StyledInputDiv,
  StyledSunEditor,
} from "../../../../styledComponents/styledForm";
import { ButtonPrimary } from "../../../../styledComponents/styledButton";
import { IPoliciesDetailsProps } from "../PoliciesLists";
import PoliciesAccordion from "./PoliciesAccordion";
const policiesToVisible: IOptionProps[] = [
  {
    id: "event-page",
    label: "Event Page",
    value: "eventPage",
  },
  {
    id: "digital-ticket",
    label: "Digital Ticket",
    value: "digitalTicket",
  },
];
interface IToBeVisibleOn {
  [key: string]: boolean;
  eventPage: boolean;
  digitalTicket: boolean;
}
const index = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const updateData = allPoliciesList?.find((policy) => policy?.id == id) || {
    policyName: undefined,
    toBeVisibleOn: undefined,
    policyText: undefined,
    createdAt: undefined,
  };
  const initialValues = id
    ? updateData
    : {
        policyName: undefined,
        toBeVisibleOn: undefined,
        policyText: undefined,
        createdAt: undefined,
      };
  const validationSchema = Yup.object().shape({
    createdAt: Yup.string().nullable(),
    policyName: Yup.string().nullable().required("Required"),
    policyText: Yup.string().nullable(),
    toBeVisibleOn: Yup.string().nullable().required("Required"),
  });
  const isSeparateUrl =
    window.location?.pathname === "/add-policy" ||
    window.location?.pathname.startsWith("/edit-policy/");
  const [toVisibleOn, setToVisibleOn] = useState<IToBeVisibleOn>({
    eventPage: true,
    digitalTicket: true,
  });
  const handleToBeVisibleOn = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event?.target;
    setToVisibleOn((prev) => {
      return {
        ...prev,
        [name]: checked,
      };
    });
  };

  return (
    <>
      <div className={isSeparateUrl ? "center-container" : ""}>
        <div
          className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 ${
            isSeparateUrl ? "mt-7" : ""
          }`}
        >
          <div className="card border p-4 rounded-16px">
            <div className="p-0 p-md-5">
              <div className="row">
                <div className="col-12 mb-3">
                  <p className="fw-600 fs-26px text-black mb-3">
                    {id ? "Update" : "Add"} Policy
                  </p>
                </div>
                <div className="col-12 mb-3">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={() => {
                      navigate("/policies-list");
                    }}
                  >
                    {({
                      values,
                      handleChange,
                      // setFieldValue,
                      errors,
                      touched,
                    }) => (
                      <>
                        <FormikForm>
                          <div className="row">
                            <div className="col-12 mb-6">
                              <Form.Group>
                                <FormLabelStyled>
                                  Policy Name
                                  <CustomTooltip title="Policy Name" />
                                </FormLabelStyled>
                                <FormInputStyled
                                  type="text"
                                  placeholder="Enter name"
                                  className="form-control"
                                  value={values?.policyName || ""}
                                  name="policyName"
                                  onChange={handleChange}
                                />
                                {errors?.policyName && touched?.policyName && (
                                  <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                                    {errors?.policyName}
                                  </span>
                                )}
                              </Form.Group>
                            </div>
                            <div className="col-12 mb-6">
                              <Form.Group>
                                <FormLabelStyled>
                                  To Be Visible On
                                  <CustomTooltip title="To Be Visible On" />
                                </FormLabelStyled>
                                <div className="row">
                                  {policiesToVisible.map((option) => (
                                    <div
                                      className="col-lg-4 col-md-6 col-12 g-3 ps-4"
                                      key={option.id}
                                    >
                                      <StyledInputDiv className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id={option.value}
                                          name={option.value}
                                          value={option.value}
                                          checked={
                                            toVisibleOn[option.value] || false
                                          }
                                          onChange={handleToBeVisibleOn}
                                        />
                                        <label
                                          htmlFor={option.value}
                                          className="form-check-label ms-3"
                                          style={{
                                            marginTop: "7px",
                                            fontSize: "12px",
                                          }}
                                        >
                                          {option.label}
                                        </label>
                                      </StyledInputDiv>
                                    </div>
                                  ))}
                                </div>
                                {errors?.toBeVisibleOn &&
                                  touched?.toBeVisibleOn && (
                                    <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                                      {errors?.toBeVisibleOn}
                                    </span>
                                  )}
                              </Form.Group>
                            </div>
                            <div className="col-12 mb-6">
                              <Form.Group>
                                <FormLabelStyled htmlFor="policyText">
                                  Policy Text{" "}
                                  <CustomTooltip title="Policy Text" />
                                </FormLabelStyled>
                                <StyledSunEditor
                                  setOptions={{
                                    font: ["Poppins"],
                                    defaultStyle:
                                      "font-family: Poppins; font-size: 12px;",
                                    height: "260px",
                                    buttonList: [
                                      ["undo", "redo"],
                                      ["bold", "italic", "underline", "strike"],
                                      ["list", "align"],
                                    ],
                                  }}
                                />
                                {errors?.policyText && touched?.policyText && (
                                  <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                                    {errors?.policyText}
                                  </span>
                                )}
                              </Form.Group>
                            </div>
                            <div className="col-12 mb-5">
                              <div className="float-end mb-5">
                                <ButtonPrimary
                                  type="submit"
                                  className="btn"
                                  style={{ minWidth: "118px" }}
                                >
                                  {id ? "Update" : "Add"}{" "}
                                </ButtonPrimary>
                              </div>
                            </div>
                          </div>
                        </FormikForm>
                      </>
                    )}
                  </Formik>
                </div>
                <div className="col-12 mt-6">
                  <Accordion className="panel-default d-flex flex-column gap-4">
                    {allPoliciesList?.map(
                      (item: IPoliciesDetailsProps, index: number) => (
                        <>
                          <PoliciesAccordion
                            item={item}
                            index={`${index}`}
                            status={index % 2 === 0 ? "active" : "in-active"}
                          />
                        </>
                      )
                    )}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
