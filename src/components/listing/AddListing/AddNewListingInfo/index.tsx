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
  FormStyledPill
} from "../../../styledComponents/styledForm";
import SunEditor from "suneditor-react";
interface IAddListingPageOneProps {}

const AddNewListingInfo: FC<IAddListingPageOneProps> = ({}) => {
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
                          Listing information
                        </p>
                        {/* <span className="text-gray d-block mb-6 fs-12px">
                          In this section, you define the main details of your listing which will appear in the dedicated page of your listing.
                        </span> */}
                      </div>
                      <div className="col-12">
                        <span className="text-gray d-block mb-6 fs-12px">
                          In this section, you define the main details of your listing which will appear in the dedicated page of your listing.
                        </span>
                      </div>
                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled>Listing name</FormLabelStyled>
                          <FormInputStyled
                            type="text"
                            placeholder="type the listing name"
                            className="form-control"
                            value={values?.listingName || ""}
                            name="listingName"
                            onChange={handleChange}
                          />
                          <FormInputDescriptionStyled>
                            This is the title of your listing and will be the headline reference of your listing across the platform.
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
                          <FormLabelStyled htmlFor="descriptionOne">
                            Listing Description
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
                          <FormInputDescriptionStyled className="d-block mb-4">
                            In this section, you should provide us with description of your listing, limited to xxxx characters.
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
                            In this section, you choose the category of your listing, so it can be classified accordingly in the platform.
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
                          <FormLabelStyled>Language</FormLabelStyled>
                          <Select
                            options={[
                              { value: "english", label: "English" },
                              { value: "arabic", label: "Arabic" },
                              { value: "spanish", label: "Spanish" },
                            ]}
                            placeholder="Select Language"
                            classNamePrefix="Select"
                            styles={customStyles}
                            className="mt-1"
                            isMulti
                            value={values?.language?.map((lang) => ({
                              value: lang,
                              label:
                                lang.charAt(0).toUpperCase() + lang.slice(1),
                            }))}
                            onChange={(selectedOptions) => {
                              const selectedValues = selectedOptions.map(
                                (option) => option.value
                              );
                              setFieldValue("language", selectedValues);
                            }}
                          />
                          <FormInputDescriptionStyled>
                            In this section, you choose the language of the
                            performance or content.
                          </FormInputDescriptionStyled>
                        </Form.Group>
                        {errors?.language && touched?.language && (
                          <span className="text-danger ms-5 d-inline-block">
                            {errors.language}
                          </span>
                        )}
                      </div>
                      <div
                        className="col-12 mb-6 rounded-md dark:text-black  p-4">
                          <FormStyledPill>
                        <Form.Group>
                          <div style={{ display: "flex", alignItems: "center" }}>
                          
                            Does the event have subtitles in the local language?
                          
                          <div className="row d-flex" style={{ marginLeft: "15px" }}>
                            {[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ].map((option) => (
                              <div
                                className="col-auto d-flex align-items-center"
                                key={option.value}
                              >
                                <label
                                  className="custom-control custom-checkbox-md"
                                  htmlFor={option.value}
                                >
                                  <input
                                    id={option.value}
                                    type="radio"
                                    className="custom-control-input"
                                    value={option.value}
                                    checked={values?.subtitles === option.value}
                                    onChange={(e) =>
                                      setFieldValue("subtitles", e.target.value)
                                    }
                                  />
                                  <span className="custom-control-label dark:!text-black">
                                    {option.label}
                                  </span>
                                </label>
                              </div>
                            ))}
                          </div>
                          {errors?.subtitles && touched?.subtitles && (
                            <span className="text-danger ms-5 d-inline-block mt-1">
                              {errors.subtitles}
                            </span>
                          )}
                          </div>
                        </Form.Group>
                        </FormStyledPill>
                      </div>

                      <div className="col-12 mb-6">
                        <Form.Group>
                          <FormLabelStyled>Suitabilities</FormLabelStyled>
                          <div className="row">
                            {[
                              { value: "family", label: "Family" },
                              { value: "kids", label: "Kids" },
                              { value: "couples", label: "Couples" },
                              { value: "adults", label: "Adults" },
                              { value: "children", label: "Children" },
                              { value: "teenagers", label: "Teenagers" },
                              { value: "elderly", label: "Elderly" },
                              { value: "locals", label: "Locals" },
                              { value: "expats", label: "Expats" },
                            ].map((option) => (
                              <div
                                className="col-lg-4 col-md-6 col-12"
                                key={option.value}
                              >
                                <label
                                  className="custom-control custom-checkbox-md"
                                  htmlFor={option.value}
                                >
                                  <input
                                    id={option.value}
                                    type="checkbox"
                                    className="custom-control-input"
                                    value={option.value}
                                    checked={values?.suitability?.includes(
                                      option.value
                                    )}
                                    onChange={(e) => {
                                      const newValue = e.target.value;
                                      const updatedSelection = e.target.checked
                                        ? [
                                            ...(values.suitability || []),
                                            newValue,
                                          ]
                                        : values.suitability?.filter(
                                            (v) => v !== newValue
                                          );

                                      setFieldValue(
                                        "suitability",
                                        updatedSelection
                                      );
                                    }}
                                  />
                                  <span className="custom-control-label">
                                    {option.label}
                                  </span>
                                </label>
                              </div>
                            ))}
                          </div>
                          {errors?.suitability && touched?.suitability && (
                            <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                              {errors.suitability}
                            </span>
                          )}
                        </Form.Group>
                      </div>

                      <div className="col-12 mb-6">
                        <Form.Group>
                          <FormLabelStyled>Content Grading</FormLabelStyled>
                          <div className="row">
                            {[
                              {
                                id: "generalAudience",
                                label: "General Audience (G)",
                                value: "G",
                              },
                              {
                                id: "parentalGuidance",
                                label: "Parental Guidance (PG)",
                                value: "PG",
                              },
                              {
                                id: "teens",
                                label: "Teens (12 - 18)",
                                value: "Teens",
                              },
                              {
                                id: "mature",
                                label: "Mature",
                                value: "Mature",
                              },
                              {
                                id: "explicit",
                                label: "Explicit",
                                value: "Explicit",
                              },
                            ].map((option) => (
                              <div
                                className="col-lg-4 col-md-6 col-12"
                                key={option.id}
                              >
                                <label
                                  className="custom-control custom-checkbox-md"
                                  htmlFor={option.id}
                                >
                                  <input
                                    id={option.id}
                                    type="checkbox"
                                    className="custom-control-input"
                                    value={option.value}
                                    checked={values?.contentGrading?.includes(
                                      option.value
                                    )}
                                    onChange={(e) => {
                                      const newValue = e.target.value;
                                      const updatedSelection = e.target.checked
                                        ? [
                                            ...(values.contentGrading || []),
                                            newValue,
                                          ]
                                        : values.contentGrading?.filter(
                                            (v) => v !== newValue
                                          );

                                      setFieldValue(
                                        "contentGrading",
                                        updatedSelection
                                      );
                                    }}
                                  />
                                  <span className="custom-control-label">
                                    {option.label}
                                  </span>
                                </label>
                              </div>
                            ))}
                          </div>
                          {errors?.contentGrading &&
                            touched?.contentGrading && (
                              <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                                {errors.contentGrading}
                              </span>
                            )}
                        </Form.Group>
                      </div>
                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled>Age Limit</FormLabelStyled>
                          <div className="row">
                            {[
                              { value: "openAge2", label: "Open Age (+2)" },
                              { value: "openAge4", label: "Open Age (+4)" },
                              { value: "plus18", label: "Plus 18" },
                              { value: "plus21", label: "Plus 21" },
                            ].map((option) => (
                              <div
                                className="col-lg-4 col-md-6 col-12"
                                key={option.value}
                              >
                                <label
                                  className="custom-control custom-checkbox-md"
                                  htmlFor={option.value}
                                >
                                  <input
                                    id={option.value}
                                    type="checkbox"
                                    className="custom-control-input"
                                    value={option.value}
                                    checked={values?.ageLimit?.includes(
                                      option.value
                                    )}
                                    onChange={(e) => {
                                      const newValue = e.target.value;
                                      const updatedSelection = e.target.checked
                                        ? [...(values.ageLimit || []), newValue]
                                        : values.ageLimit?.filter(
                                            (v) => v !== newValue
                                          );

                                      setFieldValue(
                                        "ageLimit",
                                        updatedSelection
                                      );
                                    }}
                                  />
                                  <span className="custom-control-label">
                                    {option.label}
                                  </span>
                                </label>
                              </div>
                            ))}
                          </div>
                          {errors?.ageLimit && touched?.ageLimit && (
                            <span className="text-danger ms-5 d-inline-block">
                              {errors.ageLimit}
                            </span>
                          )}
                        </Form.Group>
                      </div>

                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled>Facilities</FormLabelStyled>
                          <div className="row">
                            {[
                              {
                                id: "concessionStands",
                                label: "Concession Stands",
                                value: "Concession Stands",
                              },
                              {
                                id: "hotFood",
                                label: "Hot Food",
                                value: "Hot Food",
                              },
                              {
                                id: "coldFood",
                                label: "Cold Food",
                                value: "Cold Food",
                              },
                              {
                                id: "smoking",
                                label: "Smoking",
                                value: "Smoking",
                              },
                              {
                                id: "nonSmoking",
                                label: "Non Smoking",
                                value: "Non Smoking",
                              },
                              {
                                id: "smokingRoom",
                                label: "Smoking Room",
                                value: "Smoking Room",
                              },
                              {
                                id: "freeParking",
                                label: "Free Parking",
                                value: "Free Parking",
                              },
                              {
                                id: "paidParking",
                                label: "Paid Parking",
                                value: "Paid Parking",
                              },
                              {
                                id: "outdoorParking",
                                label: "Outdoor Parking",
                                value: "Outdoor Parking",
                              },
                              {
                                id: "indoorParking",
                                label: "Indoor Parking",
                                value: "Indoor Parking",
                              },
                              {
                                id: "valetService",
                                label: "Valet Service",
                                value: "Valet Service",
                              },
                              {
                                id: "dropOffStation",
                                label: "Drop-off Station",
                                value: "Drop-off Station",
                              },
                              {
                                id: "publicRestroom",
                                label: "Public Restroom",
                                value: "Public Restroom",
                              },
                              {
                                id: "vipRestroom",
                                label: "VIP Restroom",
                                value: "VIP Restroom",
                              },
                              {
                                id: "familyRestroom",
                                label: "Family Restroom",
                                value: "Family Restroom",
                              },
                              {
                                id: "freeWifi",
                                label: "Free Wifi",
                                value: "Free Wifi",
                              },
                              {
                                id: "paidWifi",
                                label: "Paid Wifi",
                                value: "Paid Wifi",
                              },
                              {
                                id: "noWifi",
                                label: "No Wifi",
                                value: "No Wifi",
                              },
                              {
                                id: "changingRooms",
                                label: "Changing Rooms",
                                value: "Changing Rooms",
                              },
                              {
                                id: "lockers",
                                label: "Lockers",
                                value: "Lockers",
                              },
                              {
                                id: "showers",
                                label: "Showers",
                                value: "Showers",
                              },
                              {
                                id: "generalEntrance",
                                label: "General Entrance",
                                value: "General Entrance",
                              },
                              {
                                id: "vipEntrance",
                                label: "VIP Entrance",
                                value: "VIP Entrance",
                              },
                              {
                                id: "securityStaff",
                                label: "Security Staff",
                                value: "Security Staff",
                              },
                              {
                                id: "securityCameras",
                                label: "Security Cameras",
                                value: "Security Cameras",
                              },
                              {
                                id: "securityArches",
                                label: "Security Arches",
                                value: "Security Arches",
                              },
                              {
                                id: "cctvSurveillance",
                                label: "CCTV Surveillance",
                                value: "CCTV Surveillance",
                              },
                              {
                                id: "taxiStation",
                                label: "Taxi Station",
                                value: "Taxi Station",
                              },
                              {
                                id: "busStation",
                                label: "Bus Station",
                                value: "Bus Station",
                              },
                              {
                                id: "metroStation",
                                label: "Metro Station",
                                value: "Metro Station",
                              },
                              {
                                id: "helipad",
                                label: "Helipad",
                                value: "Helipad",
                              },
                              {
                                id: "ambulance",
                                label: "Ambulance",
                                value: "Ambulance",
                              },
                              {
                                id: "medicalRoom",
                                label: "Medical Room",
                                value: "Medical Room",
                              },
                              {
                                id: "assistedAccess",
                                label: "Assisted Access",
                                value: "Assisted Access",
                              },
                              {
                                id: "wheelchair",
                                label: "Wheelchair",
                                value: "Wheelchair",
                              },
                              {
                                id: "infoCenter",
                                label: "Info Center",
                                value: "Info Center",
                              },
                              {
                                id: "lostAndFound",
                                label: "Lost & Found",
                                value: "Lost & Found",
                              },
                              {
                                id: "airConditioning",
                                label: "Air Conditioning",
                                value: "Air Conditioning",
                              },
                              {
                                id: "customerService",
                                label: "Customer Service",
                                value: "Customer Service",
                              },
                            ].map((facility) => (
                              <div
                                className="col-lg-4 col-md-6 col-12"
                                key={facility.id}
                              >
                                <label
                                  className="custom-control custom-checkbox-md"
                                  htmlFor={facility.id}
                                >
                                  <input
                                    id={facility.id}
                                    type="checkbox"
                                    className="custom-control-input"
                                    value={facility.value}
                                    checked={values?.facilities?.includes(
                                      facility.value
                                    )}
                                    onChange={(e) => {
                                      const newValue = e.target.value;
                                      const updatedSelection = e.target.checked
                                        ? [
                                            ...(values.facilities || []),
                                            newValue,
                                          ]
                                        : values.facilities?.filter(
                                            (v) => v !== newValue
                                          );

                                      setFieldValue(
                                        "facilities",
                                        updatedSelection
                                      );
                                    }}
                                  />
                                  <span className="custom-control-label">
                                    {facility.label}
                                  </span>
                                </label>
                              </div>
                            ))}
                          </div>
                          {errors?.facilities && touched?.facilities && (
                            <span className="text-danger ms-5 d-inline-block">
                              {errors.facilities}
                            </span>
                          )}
                        </Form.Group>
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

export default AddNewListingInfo;
