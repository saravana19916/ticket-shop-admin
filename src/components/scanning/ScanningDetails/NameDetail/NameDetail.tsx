import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import SwitchButton from "../../../shared/SwitchButton";
import SelectDropDown from "../../../shared/SelectDropDown";
import { scanUserType } from "../../../../commondata/addListingPageOne";
import { ButtonPrimary } from "../../../styledComponents/styledButton";

const NameDetail = () => {
  const [selectedOption, setSelectedOption] = useState("Existing");

  const handleSwitchChange = (option: string) => {
    setSelectedOption(option);
    console.log("Selected Option:", option);
  };

  return (
    <>
      <div className="row">
        <div className="col-6 mt-3">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Scan service name
            </FormLabelStyled>
            <FormInputStyled type="text" className="form-control" />
            <span>A minimum of six characters is required</span>
          </Form.Group>
        </div>
        <div className="col-6 mt-3">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Scan User
            </FormLabelStyled>
            <SwitchButton
              options={["Existing", "New"]}
              defaultSelected="Existing"
              onChange={handleSwitchChange}
            />
          </Form.Group>
        </div>
        <div className="col-6 mt-3"></div>
        {selectedOption == "New" && (
          <>
            <div className="col-6 mb-3">
              <Form.Group>
                <FormLabelStyled className="d-flex align-items-center">
                  Scan User
                </FormLabelStyled>
                <SelectDropDown
                  options={scanUserType}
                  placeholder="Select"
                  classNamePrefix="Select"
                  className="mt-1"
                />
              </Form.Group>
            </div>
          </>
        )}
        {selectedOption == "Existing" && (
          <>
            <div className="col-6 mt-3">
              <Form.Group>
                <FormLabelStyled className="d-flex align-items-center">
                  Scan User
                </FormLabelStyled>
                <SelectDropDown
                  options={scanUserType}
                  placeholder="Select"
                  classNamePrefix="Select"
                  className="mt-1"
                />
              </Form.Group>
            </div>
            <div className="col-6 mt-3"></div>
            <div className="col-6 mt-3">
              <Form.Group>
                <FormLabelStyled className="d-flex align-items-center">
                  Username
                </FormLabelStyled>
                <FormInputStyled type="text" className="form-control" />
                <span>A minimum of six characters is required</span>
              </Form.Group>
            </div>
            <div className="col-6 mt-3"></div>
            <div className="col-6 mt-3">
              <Form.Group>
                <FormLabelStyled className="d-flex align-items-center">
                  Username
                </FormLabelStyled>
                <FormInputStyled type="text" className="form-control" />
                <span>A minimum of six characters is required</span>
              </Form.Group>
            </div>
          </>
        )}
      </div>
      <div className="col-12 pe-0 mt-3">
        <div className="float-end">
          <ButtonPrimary
            type="submit"
            className="btn"
            style={{ minWidth: "118px" }}
          >
            Save
          </ButtonPrimary>
        </div>
      </div>
    </>
  );
};

export default NameDetail;
