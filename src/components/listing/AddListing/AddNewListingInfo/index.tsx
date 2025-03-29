import React, { FC, useState } from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { MultiValue } from "react-select";

import { listingType } from "../../../../commondata/addListingPageOne";
import { listingCategory, ListingType } from "../../../../commondata/listingCategoryData";
import ReactSelect from "react-select";
import { Formik, Form as FormikForm } from "formik";
import { listingInfoInitialState, listingInfoValidationSchema } from "./helper";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  FormInputStyled,
  FormLabelStyled,
  StyledSunEditor,
  FormStyledContentSection,
  StyledInputDiv,
} from "../../../styledComponents/styledForm";
import SelectDropDown, { IOptionType } from "../../../shared/SelectDropDown";
import CustomTooltip from "../../../shared/CustomTooltip";
import { ButtonPrimary } from "../../../styledComponents/styledButton";
interface IAddListingPageOneProps {}
const languageOptions = [
  { value: "english", label: "English" },
  { value: "arabic", label: "Arabic" }
];
const AddNewListingInfo: FC<IAddListingPageOneProps> = ({}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<any>([]);
  const [listingSelectedType, setListingSelectedType] = useState<ListingType | "">("");
  const [subcategories, setSubcategories] = useState<string[]>([]);

  const handleListingChange = (value: string | number | boolean | null) => {
    const selectedType = value as ListingType;
    setListingSelectedType(selectedType);
    setSubcategories(listingCategory[selectedType] || []);
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
                        <p className="fw-600 fs-26px text-black mb-3 d-flex align-items-center">
                          Listing information
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>
                                In this section, you define the main details of
                                your listing which will appear in the dedicated
                                page of your listing.
                              </Tooltip>
                            }
                          >
                            <i className="fe fe-info d-inline-block ms-3 cursor-pointer"></i>
                          </OverlayTrigger>
                        </p>
                      </div>

                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled className="d-flex align-items-center">
                            Listing Name
                            <CustomTooltip
                              iconMarginBottom="1px"
                              title="Enter the name of your listing. This will be displayed as the title of your content."
                            />
                          </FormLabelStyled>{" "}
                          <FormInputStyled
                            type="text"
                            placeholder="Type the listing name"
                            className="form-control"
                            value={values?.listingName || ""}
                            name="listingName"
                            onChange={handleChange}
                          />
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
                          <FormLabelStyled
                            htmlFor="descriptionOne"
                            className="d-flex align-items-center"
                          >
                            Listing Description{" "}
                            <CustomTooltip
                              iconMarginBottom="1px"
                              title="Provide a brief and engaging description of your listing. This will be displayed on your content page."
                            />
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
                          <FormLabelStyled className="d-flex align-items-center">
                            Listing Type{" "}
                            <CustomTooltip
                              iconMarginBottom="1px"
                              title="Select the category that best describes the nature of your listing."
                            />
                          </FormLabelStyled>
                          <SelectDropDown
                            options={listingType}
                            placeholder="Select Type"
                            classNamePrefix="Select"
                            className="mt-1"
                            selectedValue={listingType?.find(
                              (l) => l.value === values?.listingType
                            )}
                            onChange={(e) => {
                              handleListingChange(e?.value || null);
                            }}
                          />
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
                          <FormLabelStyled className="d-flex align-items-center">
                            Listing Category{" "}
                            <CustomTooltip
                              iconMarginBottom="1px"
                              title="Choose the most relevant category to help users find your listing easily."
                            />
                          </FormLabelStyled>
                          <SelectDropDown
                            options={subcategories.map((subcategory) => ({
                              value: subcategory,
                              label: subcategory,
                            }))}
                            placeholder="Select Subcategory"
                            classNamePrefix="Select"
                            className="w-full"
                          />
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
                          <FormLabelStyled className="d-flex align-items-center">
                            Language{" "}
                            <CustomTooltip
                              iconMarginBottom="1px"
                              title="Select the language in which your listing content is presented."
                            />
                          </FormLabelStyled>
                          <SelectDropDown
                            options={languageOptions}
                            placeholder="Select Language"
                            classNamePrefix="Select-multiple"
                            className="mt-1"
                            isMulti={true}
                            multiSelectOnChange={(selectedOptions) => {
                              const selectedValues = selectedOptions?.map(
                                (option) => option.value
                              );
                              setFieldValue("language", selectedValues);
                              setSelectedLanguage(selectedOptions);
                            }}
                            selectedValue={selectedLanguage}
                          />
                        </Form.Group>
                        {errors?.language && touched?.language && (
                          <span className="text-danger ms-5 d-inline-block">
                            {errors.language}
                          </span>
                        )}
                      </div>
                      <div className="col-12 mb-6">
                        <FormStyledContentSection>
                          <span className="question">
                            Does the event have subtitles in the local language?
                          </span>
                          <StyledInputDiv className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="addSubtitles"
                              value="yes"
                              id="addSubtitles"
                              checked={values?.subtitles === "yes"}
                              onChange={(e) =>
                                setFieldValue("subtitles", e.target.value)
                              }
                            />
                            <label
                              htmlFor="addSubtitles"
                              className="form-check-label ms-3"
                              style={{
                                marginTop: "7px",
                                fontSize: "12px",
                              }}
                            >
                              Yes
                            </label>
                          </StyledInputDiv>
                          <StyledInputDiv className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="donNotAddSubtitles"
                              name="addSubtitles"
                              value="no"
                              checked={values?.subtitles === "no"}
                              onChange={(e) =>
                                setFieldValue("subtitles", e.target.value)
                              }
                            />
                            <label
                              htmlFor="donNotAddSubtitles"
                              className="form-check-label ms-3"
                              style={{
                                marginTop: "7px",
                                fontSize: "12px",
                              }}
                            >
                              No
                            </label>
                          </StyledInputDiv>
                        </FormStyledContentSection>
                      </div>

                      <div className="col-12 mb-6">
                        <Form.Group>
                          <FormLabelStyled>
                            Suitabilities
                            <CustomTooltip
                              iconMarginBottom="2px"
                              title="Choose the audience that your listing is intended for. "
                            />
                          </FormLabelStyled>
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
                                className="col-lg-4 col-md-6 col-12 g-3 ps-4"
                                key={option.value}
                              >
                                <StyledInputDiv className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={option.value}
                                    name={option.value}
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
                          {errors?.suitability && touched?.suitability && (
                            <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                              {errors.suitability}
                            </span>
                          )}
                        </Form.Group>
                      </div>

                      <div className="col-12 mb-6">
                        <Form.Group>
                          <FormLabelStyled>
                            Content Grading
                            <CustomTooltip
                              iconMarginBottom="2px"
                              title="Select the appropriate content rating for your listing."
                            />
                          </FormLabelStyled>
                          <div className="row">
                            {[
                              {
                                id: "generalAudience",
                                label: "General Audience (G)",
                                value: "G",
                                desc: "Suitable for all ages."
                              },
                              {
                                id: "parentalGuidance",
                                label: "Parental Guidance (PG)",
                                value: "PG",
                                desc: "Suitable for children with parental supervision."
                              },
                              {
                                id: "teens",
                                label: "Teens (12 - 18)",
                                value: "Teens",
                                desc: "Appropriate for teenagers."
                              },
                              {
                                id: "mature",
                                label: "Mature",
                                value: "Mature",
                                desc: "Intended for mature audiences, typically 18 and older."
                              },
                              {
                                id: "explicit",
                                label: "Explicit",
                                value: "Explicit",
                                desc: "Contains explicit content, for adult audiences only."
                              },
                            ].map((option) => (
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
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={
                                      <Tooltip id={`tooltip-${option.value}`}>
                                        {option.desc}
                                      </Tooltip>
                                    }
                                  >
                                    <label
                                      htmlFor={option.value}
                                      className="form-check-label ms-3 cursor-pointer"
                                      style={{
                                        marginTop: "7px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {option.label}
                                    </label>
                                  </OverlayTrigger>
                                </StyledInputDiv>
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
                          <FormLabelStyled>
                            Age Limit
                            <CustomTooltip
                              iconMarginBottom="2px"
                              title="Select the age limit for your listing to ensure it is shown to the appropriate audience."
                            />
                          </FormLabelStyled>
                          <div className="row">
                            {[
                              { value: "openAge2", label: "Open Age (+2)" },
                              { value: "openAge4", label: "Open Age (+4)" },
                              { value: "plus18", label: "Plus 18" },
                              { value: "plus21", label: "Plus 21" },
                            ].map((option) => (
                              <div
                                className="col-lg-4 col-md-6 col-12 g-3 ps-4"
                                key={option.value}
                              >
                                <StyledInputDiv className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={option.value}
                                    name={option.value}
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
                          {errors?.ageLimit && touched?.ageLimit && (
                            <span className="text-danger ms-5 d-inline-block">
                              {errors.ageLimit}
                            </span>
                          )}
                        </Form.Group>
                      </div>

                      <div className="col-12 mb-7">
                        <Form.Group>
                          <FormLabelStyled>
                            Facilities
                            <CustomTooltip
                              iconMarginBottom="2px"
                              title="Select the facilities available at your listing."
                            />
                          </FormLabelStyled>
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
                                className="col-lg-4 col-md-6 col-12 g-3 ps-4"
                                key={facility.id}
                              >
                                <StyledInputDiv className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={facility.value}
                                    name={facility.value}
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
                                  <label
                                    htmlFor={facility.value}
                                    className="form-check-label ms-3"
                                    style={{
                                      marginTop: "7px",
                                      fontSize: "12px",
                                    }}
                                  >
                                    {facility.label}
                                  </label>
                                </StyledInputDiv>
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
                            <ButtonPrimary
                              type="submit"
                              className="btn"
                              style={{ minWidth: "118px" }}
                            >
                              Create Info
                            </ButtonPrimary>
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
