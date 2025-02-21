import { ErrorMessage, Formik, Form as FormikForm } from "formik";
import { Accordion, Form } from "react-bootstrap";
import React from "react";
import * as Yup from "yup";
import { IOptionProps } from "../../../../../commondata/addListingPageOne";
import { useParams, useNavigate } from "react-router-dom";

import { allPoliciesList } from "../data";
import {
  FormInputStyled,
  FormLabelStyled,
  StyledSunEditor,
} from "../../../../styledComponents/styledForm";
import { ButtonPrimary } from "../../../../styledComponents/styledButton";
import { IPoliciesDetailsProps } from "../PoliciesLists";
import PoliciesAccordion from "./PoliciesAccordion";
const policiesToVisible: IOptionProps[] = [
  { value: "Website", label: "Website" },
  { value: "Mobile App", label: "Mobile App" },
  { value: "E-commerce Platform", label: "E-commerce Platform" },
];
const customStyles = {
  singleValue: (provided: any) => ({
    ...provided,
    color: "#000",
    fontWeight: "400",
    fontSize: "14px",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#777",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    padding: "3px",
    paddingLeft: "14px",
    borderRadius: "50px",
    borderColor: state.isFocused ? "#fec9da80" : "#e5e7eb",
    outline: state.isFocused ? "1px solid #fec9da80" : "none",
    boxShadow: "null",
    "&:focus": {
      borderColor: "#fec9da80",
      outline: "1px solid #fec9da80",
    },
    "&:focus-within": {
      borderColor: "#fec9da80",
      outline: "1px solid #fec9da80",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "8px",
  }),
  multiValue: (provided: any) => ({
    ...provided,
    color: "#000",
    fontWeight: "500",
    fontSize: "18px",
    margin: "0px",
    padding: "0px",
    backgroundColor: "",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#ED003B" : "transparent",
    color: state.isSelected ? "#fff" : provided.color,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: state.isSelected ? "#ED003B" : "#fec9da80",
    },
  }),
};
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
                                <FormLabelStyled>Policy Name</FormLabelStyled>
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
                                  To Be Visible On{" "}
                                </FormLabelStyled>
                                <div className="row">
                                  <div className="col-lg-4 col-md-6 col-12">
                                    <label
                                      className="custom-control custom-checkbox-md"
                                      htmlFor="eventPage"
                                    >
                                      <input
                                        id="eventPage"
                                        type="checkbox"
                                        className="custom-control-input"
                                        name="eventPage"
                                        defaultValue="eventPage"
                                      />
                                      <span className="custom-control-label">
                                        Event Page
                                      </span>
                                    </label>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-12">
                                    <label
                                      className="custom-control custom-checkbox-md"
                                      htmlFor="digitalTicket"
                                    >
                                      <input
                                        id="digitalTicket"
                                        type="checkbox"
                                        className="custom-control-input"
                                        name="digitalTicket"
                                        defaultValue="digitalTicket"
                                      />
                                      <span className="custom-control-label">
                                        Digital Ticket
                                      </span>
                                    </label>
                                  </div>
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
                                </FormLabelStyled>
                                <StyledSunEditor
                                  setOptions={{
                                    font: ["Poppins"],
                                    defaultStyle: "font-family: Poppins;",
                                    height: "260px",
                                    buttonList: [
                                      ["undo", "redo"],
                                      ["bold", "italic", "underline", "strike"],
                                      ["list", "align", "fontSize"],
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
                                <ButtonPrimary type="submit" className="btn">
                                  {id ? "Update Policy" : "Create Policy"}{" "}
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
