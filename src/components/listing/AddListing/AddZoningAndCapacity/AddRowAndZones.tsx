import React, { FC, useState } from "react";
import {
  FormInputDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
  FormStyledContentSection,
  StyledCountButton,
  StyledInputDiv,
} from "../../../styledComponents/styledForm";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Form } from "react-bootstrap";
import Select from "react-select";
import SelectDropDown from "../../../shared/SelectDropDown";

interface IProps {}
const TypeOptions = [
  {
    label: "Row",
    value: "Row",
  },
  {
    label: "Section",
    value: "Section",
  },
];
const AllocationOrderOptions = [
  {
    label: "Last to First Number",
    value: "Last to First Number",
  },
  {
    label: "First to Last Number",
    value: "First to Last Number",
  },
];
const AddRowAndZones: FC<IProps> = ({}) => {
  const [showCustomRowAndZones, setShowCustomRowAndZones] =
    useState<boolean>(false);
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };
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
      padding: "4px",
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
  return (
    <>
      <div className="col-12 mb-6">
        <FormStyledContentSection>
          <span className="question">
            Would you like to add more sections/rows to your Zone?
          </span>
          <StyledInputDiv className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="addSections"
              value="yes"
              id="addSections"
              onChange={() => {
                setShowCustomRowAndZones(true);
              }}
              checked={showCustomRowAndZones}
            />
            <label
              htmlFor="addSections"
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
              id="donNotAddSections"
              name="addSections"
              value="no"
              checked={!showCustomRowAndZones}
              onChange={() => {
                setShowCustomRowAndZones(false);
              }}
            />
            <label
              htmlFor="donNotAddSections"
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
      {showCustomRowAndZones ? (
        <>
          <div className="col-12 mb-6">
            <FormStyledContentSection>
              <span className="question">
                How many sections/rows you want to add to this zone?
              </span>
              <div className="d-flex align-items-center gap-4">
                <StyledCountButton
                  onClick={handleDecrement}
                  className={count === 1 ? "disabled" : ""}
                >
                  <MinusIcon />
                </StyledCountButton>
                <span>{count}</span>
                <StyledCountButton onClick={handleIncrement}>
                  <PlusIcon />
                </StyledCountButton>
              </div>
            </FormStyledContentSection>
          </div>
          <div className="col-12 mb-6">
            <Form.Group>
              <Form.Label className="fs-5 fw-500 text-black">
                Add Sections & Rows{" "}
              </Form.Label>
              <FormInputDescriptionStyled>
                Sections and zones are different areas in your event that have
                different access and may have different prices. The tickets in
                each zone, must have similar prices. if you have multiple
                sections in one zone, then you need to define each of them as
                different zones .
              </FormInputDescriptionStyled>
            </Form.Group>
          </div>
          <>
            {Array.from({ length: count }).map((_) => (
              <>
                <div className="col-lg-4 col-12 mb-6 pe-0">
                  <Form.Group>
                    <FormLabelStyled className="fs-12px">Type</FormLabelStyled>
                    <SelectDropDown
                      options={TypeOptions}
                      placeholder="Select Type"
                      classNamePrefix="Select"
                      className="mb-2"
                      fontSize="12px"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-4 col-12 mb-6 pe-0">
                  <Form.Group>
                    <FormLabelStyled className="fs-12px">Name</FormLabelStyled>
                    <FormInputStyled
                      type="text"
                      className="form-control fs-12"
                      name="zoneName"
                      placeholder="Section/Row Name"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-2 col-md-6 col-12 mb-6 pe-0">
                  <Form.Group>
                    <FormLabelStyled className="fs-12px">
                      On Sale
                    </FormLabelStyled>
                    <FormInputStyled
                      type="number"
                      className="form-control fs-12"
                      name="onSale"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-2 col-md-6 col-12 mb-6 pe-0">
                  <Form.Group>
                    <FormLabelStyled className="fs-12px">
                      Blocked
                    </FormLabelStyled>
                    <FormInputStyled
                      type="number"
                      className="form-control fs-12"
                      name="blocked"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-2 col-md-6 col-12 mb-6 pe-0">
                  <Form.Group>
                    <FormLabelStyled className="fs-12px">Tag</FormLabelStyled>
                    <FormInputStyled
                      type="text"
                      className="form-control fs-12"
                      name="onSale"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-2 col-md-6 col-12 mb-6 pe-0">
                  <Form.Group>
                    <FormLabelStyled className="fs-12px">
                      Starting No
                    </FormLabelStyled>
                    <FormInputStyled
                      type="number"
                      className="form-control fs-12"
                      name="blocked"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-2 col-md-6 col-12 mb-6 pe-0">
                  <Form.Group>
                    <FormLabelStyled className="fs-12px">
                      Ending No
                    </FormLabelStyled>
                    <FormInputStyled
                      type="number"
                      className="form-control fs-12"
                      name="blocked"
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-6 col-12 mb-6 pe-0">
                  <Form.Group>
                    <FormLabelStyled className="fs-12px">
                      Allocation order
                    </FormLabelStyled>
                    <SelectDropDown
                      options={AllocationOrderOptions}
                      placeholder="Select Allocation Order"
                      classNamePrefix="Select"
                      className="mb-2 fs-12"
                      fontSize="12px"
                    />
                  </Form.Group>
                </div>
                <div className="col-12 border py-0 mb-7 mt-2 border-t-0"></div>
              </>
            ))}
          </>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddRowAndZones;
