import React, { FC, useEffect, useRef, useState } from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";

import Select from "react-select";
import { FormikErrors, FormikTouched } from "formik";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";
import {
  FormInputStyled,
  FormInputWrapper,
  FormLabelStyled,
  StyledInputDiv,
  StyledSunEditor,
  FormInputGroupLabel,
  FormStyledContentSectionUndesignedForFields,
  FormInputDescriptionStyled,
} from "../../../styledComponents/styledForm";
import SelectDropDown from "../../../shared/SelectDropDown";
import CustomTooltip from "../../../shared/CustomTooltip";

interface IProductInfoProps {
  errors: FormikErrors<IPricingDetailsProps>;
  values: IPricingDetailsProps;
  touched: FormikTouched<IPricingDetailsProps>;
  handleOnChange: (field: string, value: string | null) => void;
}

const ProductInfo: FC<IProductInfoProps> = ({}) => {
  const [color, setColor] = useState("#00D1FF");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedServiceOption, setSelectedServiceOption] = useState<
    string | null
  >(null);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.checked ? event.target.id : null);
  };

  const handleServiceOptionChange = (e: any) => {
    setSelectedServiceOption(e.value);
  };
  const colorPickerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setShowColorPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const productTypes = [
    { label: "Ticket", value: "ticket" },
    { label: "Merchandise", value: "merchandise" },
    { label: "Service", value: "service" },
    { label: "Food and Beverage", value: "foodAndBeverage" },
  ];
  const serviceFeeOption = [
    {
      label: "Fixed Fee per issued Product",
      value: "AED",
    },
    {
      label: "Percentage per issued product",
      value: "%",
    },
  ];

  return (
    <>
      <div className="col-12 mb-7 mt-5">
        <Form.Group>
          <div className="row">
            <div className="col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>
                  Product Name
                  <CustomTooltip title="Product Name" />
                </FormLabelStyled>
                <FormInputStyled
                  type="text"
                  placeholder="Type the product name"
                  className="form-control"
                  name="productName"
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-7">
              <Form.Group>
                <FormLabelStyled className="d-flex align-items-center">
                  Product Type
                  <CustomTooltip
                    title="Pick your listing top from the dropdown menu (i.e :
                        Event, Restaurant, Experience, Transportation, Product,
                        Service )"
                  />
                </FormLabelStyled>
                <SelectDropDown
                  options={productTypes}
                  placeholder="Select Type"
                  classNamePrefix="Select"
                  className="mt-1"
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-7">
              <Form.Group>
                <FormLabelStyled>
                  Product Description
                  <CustomTooltip title="Product Description" />
                </FormLabelStyled>
                <StyledSunEditor
                  setOptions={{
                    font: ["Poppins"],
                    defaultStyle: "font-family: Poppins; font-size: 12px;",
                    height: "260px",
                    buttonList: [
                      ["undo", "redo"],
                      ["bold", "italic", "underline", "strike"],
                      ["list", "align"],
                    ],
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-12 mb-6 mt-5">
              <Form.Group>
                <FormLabelStyled>
                  Category
                  <CustomTooltip title="Category" />
                </FormLabelStyled>
                <div className="row">
                  {[
                    {
                      id: "standard",
                      label: "Standard",
                      value: "Standard",
                    },
                    {
                      id: "premium",
                      label: "Premium",
                      value: "Premium",
                    },
                    {
                      id: "VIP",
                      label: "VIP",
                      value: "VIP",
                    },
                    {
                      id: "VVIP",
                      label: "VVIP",
                      value: "VVIP",
                    },
                    {
                      id: "notApplicable",
                      label: "Not Applicable",
                      value: "Not Applicable",
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
                          checked={selectedCategory === option.value}
                          onChange={handleCategoryChange}
                          // checked={values?.contentGrading?.includes(
                          //   option.value
                          // )}
                          // onChange={(e) => {
                          //   const newValue = e.target.value;
                          //   const updatedSelection = e.target.checked
                          //     ? [...(values.contentGrading || []), newValue]
                          //     : values.contentGrading?.filter(
                          //         (v) => v !== newValue
                          //       );

                          //   setFieldValue("contentGrading", updatedSelection);
                          // }}
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
              </Form.Group>
            </div>
            <div className="col-12 mb-7 mt-5">
              <Form.Group>
                <FormLabelStyled>
                  Age Limit
                  <CustomTooltip title="Age Limit" />
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
                          // checked={values?.contentGrading?.includes(
                          //   option.value
                          // )}
                          // onChange={(e) => {
                          //   const newValue = e.target.value;
                          //   const updatedSelection = e.target.checked
                          //     ? [...(values.contentGrading || []), newValue]
                          //     : values.contentGrading?.filter(
                          //         (v) => v !== newValue
                          //       );

                          //   setFieldValue("contentGrading", updatedSelection);
                          // }}
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
              </Form.Group>
            </div>
            <div className="col-12 col-xl-6 mb-7">
              <Form.Group>
                <FormLabelStyled className="d-flex align-items-center">
                  Net Price
                  <CustomTooltip title="Net Price" />
                </FormLabelStyled>
                <FormInputStyled
                  type="text"
                  className="form-control"
                  name="netPrice"
                />
              </Form.Group>
            </div>
            <div className="col-12 col-xl-6 mb-7">
              <Form.Group>
                <FormLabelStyled className="d-flex align-items-center">
                  Transaction Currency
                  <CustomTooltip title="Transaction Currency" />
                </FormLabelStyled>
                <SelectDropDown
                  options={[
                    { value: "AED - UAE Dirhams", label: "AED - UAE Dirhams" },
                  ]}
                  placeholder="Select Currency"
                  classNamePrefix="Select"
                  className="mt-1"
                />
              </Form.Group>
            </div>
            <div className="col-12 col-xl-6 mb-7">
              <Form.Group>
                <FormLabelStyled className="d-flex align-items-center">
                  VAT Tax
                  <CustomTooltip title="VAT Tax" />
                </FormLabelStyled>
                <FormInputWrapper className="w-100">
                  <FormInputStyled
                    className="form-control"
                    type="number"
                    name="vatTax"
                  />
                  <FormInputGroupLabel>%</FormInputGroupLabel>
                </FormInputWrapper>
              </Form.Group>
            </div>
            <div className="col-12 col-xl-6 mb-7">
              <Form.Group>
                <FormLabelStyled className="d-flex align-items-center">
                  Entertainment Tax
                  <CustomTooltip title="Entertainment Tax" />
                </FormLabelStyled>
                <FormInputWrapper className="w-100">
                  <FormInputStyled
                    className="form-control"
                    type="number"
                    name="entertainmentTax"
                  />
                  <FormInputGroupLabel>%</FormInputGroupLabel>
                </FormInputWrapper>
              </Form.Group>
            </div>
            <div className="col-12 col-xl-6 mb-7">
              <Form.Group>
                <FormLabelStyled className="d-flex align-items-center">
                  C/T Tax
                  <CustomTooltip title="C/T Tax" />
                </FormLabelStyled>
                <FormInputWrapper className="w-100">
                  <FormInputStyled
                    className="form-control"
                    type="number"
                    name="otherTaxes1"
                  />
                  <FormInputGroupLabel>%</FormInputGroupLabel>
                </FormInputWrapper>
              </Form.Group>
            </div>
            <div className="col-12 col-xl-6 mb-7">
              <Form.Group>
                <FormLabelStyled className="d-flex align-items-center">
                  Other Taxes
                  <CustomTooltip title="Other Taxes" />
                </FormLabelStyled>
                <FormInputWrapper className="w-100">
                  <FormInputStyled
                    className="form-control"
                    type="number"
                    name="otherTaxes2"
                  />
                  <FormInputGroupLabel>%</FormInputGroupLabel>
                </FormInputWrapper>
              </Form.Group>
            </div>
            <div className="col-12 mb-7 p-0">
              <FormStyledContentSectionUndesignedForFields>
                <div className="col-12 col-xl-6 mb-6 mb-xl-0">
                  <Form.Group>
                    <FormLabelStyled className="d-flex align-items-center">
                      Service Fee Option{" "}
                      <CustomTooltip title="Service Fee Option" />
                    </FormLabelStyled>
                    <SelectDropDown
                      options={serviceFeeOption}
                      placeholder="Select Fee Option"
                      classNamePrefix="Select"
                      className="mt-1"
                      onChange={handleServiceOptionChange}
                    />
                  </Form.Group>
                </div>
                <div className="col-12 col-xl-6 mb-6 mb-xl-0">
                  <Form.Group>
                    <FormLabelStyled className="d-flex align-items-center">
                      Service fee per Ticket{" "}
                      <CustomTooltip title="Service fee per Ticket" />
                    </FormLabelStyled>
                    <FormInputWrapper className="w-100">
                      <FormInputStyled
                        className="form-control mt-1 fw-semibold"
                        type="text"
                        name="otherTaxes1"
                        value="160.00"
                        style={{ border: "1px #fff", color: "#000" }}
                      />
                      <FormInputGroupLabel
                        className="fw-semibold"
                        style={{ color: "#000", top: "15px" }}
                      >
                        {selectedServiceOption}
                      </FormInputGroupLabel>
                    </FormInputWrapper>
                  </Form.Group>
                </div>
              </FormStyledContentSectionUndesignedForFields>
            </div>
            <div className="col-12 mb-1 p-0">
              <FormStyledContentSectionUndesignedForFields
                style={{ backgroundColor: "#fec9da80" }}
              >
                <FormLabelStyled>
                  Final Product Price to Buyer
                  <CustomTooltip
                    title="This price does not include other banking charges, process fees
                and levies."
                  />
                </FormLabelStyled>
                <FormInputWrapper
                  style={{
                    width: "48%",
                  }}
                >
                  <FormInputStyled
                    className="form-control mt-1 fw-semibold"
                    type="text"
                    name="otherTaxes1"
                    value="160.00"
                    style={{ border: "1px #fff", color: "#000" }}
                  />
                  <FormInputGroupLabel
                    className="fw-semibold"
                    style={{ color: "#000", top: "15px" }}
                  >
                    AED
                  </FormInputGroupLabel>
                </FormInputWrapper>
              </FormStyledContentSectionUndesignedForFields>
            </div>
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default ProductInfo;
