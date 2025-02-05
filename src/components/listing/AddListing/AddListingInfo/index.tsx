import Select from "react-select";
import React, { FC, useState } from "react";
import { Form } from "react-bootstrap";
import {
  listingCategory,
  listingSubCategory,
  listingType,
  listingSuitability,
  listingAgeLimit,
} from "../../../../commondata/addListingPageOne";
import ReactSelect from "react-select";
import { Formik, Form as FormikForm } from "formik";
import { listingInfoInitialState, listingInfoValidationSchema } from "./helper";
import ButtonCustom from "../../../shared/ButtonCustom";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  FormDescriptionStyled,
  FormInputDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
  StyledSunEditor,
} from "../../../styledComponents/styledForm";
import SunEditor from "suneditor-react";
interface IAddListingPageOneProps {}

const AddListingInfo: FC<IAddListingPageOneProps> = ({}) => {
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
  const isSeparateUrl =
    window.location?.pathname === "/add-info" ||
    window.location?.pathname.startsWith("/edit-info/");
  return (
    <>
      <Formik
        initialValues={listingInfoInitialState}
        validationSchema={listingInfoValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, errors, touched, handleChange, setFieldValue }) => (
          <>
            <FormikForm>
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
                          Your Listing Info
                        </p>
                      </div>
                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled>Listing type</FormLabelStyled>
                          <Select
                            options={listingType}
                            placeholder="Select Type"
                            classNamePrefix="Select"
                            styles={customStyles}
                            className="mt-1"
                            value={listingType?.find(
                              (l) => l.value === values?.listingType
                            )}
                            onChange={(e) => {
                              setFieldValue("listingType", e?.value || null);
                            }}
                          />
                          <FormInputDescriptionStyled>
                            pick your listing top from the dropdown menu (i.e :
                            Event, Restaurant, Experience, Transportation,
                            Product, Service )
                          </FormInputDescriptionStyled>
                        </Form.Group>
                        {errors?.listingType && touched?.listingType && (
                          <>
                            <span className="text-danger ms-5 d-inline-block">
                              {errors?.listingType}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled>Listing name</FormLabelStyled>
                          <FormInputStyled
                            type="text"
                            placeholder="Enter name"
                            className="form-control"
                            value={values?.listingName || ""}
                            name="listingName"
                            onChange={handleChange}
                          />
                          <FormInputDescriptionStyled>
                            type your listing name which would be placed as the
                            title of your listing.
                          </FormInputDescriptionStyled>
                        </Form.Group>
                        {errors?.listingName && touched?.listingName && (
                          <>
                            <span className="text-danger ms-5 d-inline-block">
                              {errors?.listingName}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled>Listing category</FormLabelStyled>
                          <Select
                            options={listingCategory}
                            placeholder="Select Category"
                            classNamePrefix="Select"
                            className="mb-2"
                            styles={customStyles}
                            value={listingCategory?.find(
                              (l) => l.value === values?.listingCategory
                            )}
                            onChange={(e) => {
                              setFieldValue(
                                "listingCategory",
                                e?.value || null
                              );
                            }}
                          />
                          <FormInputDescriptionStyled>
                            choose your listing category from dropdown menu (i.e
                            : Performing Arts, Music, Sports, Exhibition,
                            Leisure, Tourism, Transportation, Fashion)
                          </FormInputDescriptionStyled>
                        </Form.Group>
                        {errors?.listingCategory &&
                          touched?.listingCategory && (
                            <>
                              <span className="text-danger ms-5 d-inline-block">
                                {errors?.listingCategory}
                              </span>
                            </>
                          )}
                      </div>
                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled>
                            Listing sub category
                          </FormLabelStyled>
                          <Select
                            options={listingSubCategory}
                            placeholder="Select Sub Category"
                            classNamePrefix="Select"
                            className="mb-2"
                            styles={customStyles}
                            value={listingSubCategory?.find(
                              (l) => l.value === values?.listingSubCategory
                            )}
                            onChange={(e) => {
                              setFieldValue(
                                "listingSubCategory",
                                e?.value || null
                              );
                            }}
                          />
                          <FormInputDescriptionStyled>
                            choose your listing sub category from dropdown menu.
                          </FormInputDescriptionStyled>
                        </Form.Group>
                        {errors?.listingSubCategory &&
                          touched?.listingSubCategory && (
                            <>
                              <span className="text-danger ms-5 d-inline-block">
                                {errors?.listingSubCategory}
                              </span>
                            </>
                          )}
                      </div>
                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled>Suitability</FormLabelStyled>
                          <ReactSelect
                            options={listingSuitability}
                            placeholder="Select Suitabilities"
                            className="mb-2 number-select"
                            styles={customStyles}
                            isMulti
                            value={listingSuitability?.filter((l) =>
                              values.suitability?.includes(l.value)
                            )}
                            onChange={(e) => {
                              const data = e.map((l) => l.value);
                              setFieldValue("suitability", data);
                            }}
                            isClearable={false}
                          />
                          <FormInputDescriptionStyled>
                            choose your listing sub category from dropdown menu.
                            You can choose multiple options
                          </FormInputDescriptionStyled>
                        </Form.Group>
                        {errors?.suitability && touched?.suitability && (
                          <>
                            <span className="text-danger ms-5 d-inline-block">
                              {errors?.suitability}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled>Age Limit</FormLabelStyled>
                          <ReactSelect
                            options={listingAgeLimit}
                            placeholder="Select Age limits"
                            classNamePrefix="Select"
                            className="mb-2 number-select"
                            styles={customStyles}
                            isMulti
                            value={listingAgeLimit?.filter((l) =>
                              values.ageLimit?.includes(l.value)
                            )}
                            onChange={(e) => {
                              const data = e.map((l) => l.value);
                              setFieldValue("ageLimit", data);
                            }}
                            isClearable={false}
                          />
                          <FormInputDescriptionStyled>
                            choose the age suitability and content rating from
                            dropdown menu. You can choose multiple options
                          </FormInputDescriptionStyled>
                        </Form.Group>
                        {errors?.ageLimit && touched?.ageLimit && (
                          <>
                            <span className="text-danger ms-5 d-inline-block">
                              {errors?.ageLimit}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled htmlFor="descriptionOne">
                            Description
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
                          {/* <FormDescriptionStyled
                            id="descriptionOne"
                            className="p-5 form-control"
                            style={{
                              height: "250px",
                            }}
                            value={values?.description || ""}
                            name="description"
                            onChange={handleChange}
                          ></FormDescriptionStyled> */}
                          <FormInputDescriptionStyled className="d-block mb-4">
                            write your event description in the box below,
                            maximum of xxx characters.
                          </FormInputDescriptionStyled>
                        </Form.Group>
                        {errors?.description && touched?.description && (
                          <>
                            <span className="text-danger ms-5 d-inline-block">
                              {errors?.description}
                            </span>
                          </>
                        )}
                      </div>
                      {isSeparateUrl && (
                        <div className="col-12 mb-3">
                          <div className="float-end mb-3">
                            <ButtonCustom
                              title="Add Info"
                              className="fs-6"
                              paddingClassName="p-2 px-5"
                              icon={
                                <PlusIcon
                                  className="w-4 h-4"
                                  style={{ marginBottom: "1px" }}
                                />
                              }
                              type="submit"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FormikForm>
          </>
        )}
      </Formik>
    </>
  );
};

export default AddListingInfo;
