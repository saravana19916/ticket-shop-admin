import { TabPanel } from "@headlessui/react";
import { FC, useState } from "react";
import { Form } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
  FormStyledContentSection,
  StyledInputDiv,
} from "../../styledComponents/styledForm";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";
import { IOptionProps } from "../../../commondata/addListingPageOne";
import TimezoneSelect from "react-timezone-select";
import styled from "styled-components";
import TimezoneField from "./TimezoneField";

const languageOptions: IOptionProps[] = [
  {
    id: "1",
    label: "English",
    value: "English",
  },
  {
    id: "3",
    label: "Spanish",
    value: "Spanish",
  },
  {
    id: "3",
    label: "French",
    value: "French",
  },
];
const currencyOptions: IOptionProps[] = [
  {
    id: "1",
    label: "USD",
    value: "USD",
  },
  {
    id: "3",
    label: "EUR",
    value: "EUR",
  },
  {
    id: "3",
    label: "INR",
    value: "INR",
  },
];

const Index: FC = () => {
  const [selectedTimezone, setSelectedTimezone] = useState<any>({});

  return (
    <TabPanel>
      <div className="row" id="General">
        <div className="col-lg-9 col-12 mb-7">
          <Form.Group>
            <FormLabelStyled>Preferred Language</FormLabelStyled>
            <div className="row">
              {currencyOptions.map((option) => (
                <div className="col-lg-4 col-md-6 col-12 ps-4" key={option.id}>
                  <StyledInputDiv className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={option.value}
                      name={option.value}
                      value={option.value}
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
        <div className="col-lg-9 col-12 mb-7">
          <Form.Group>
            <FormLabelStyled>Preferred Currencies </FormLabelStyled>
            <div className="row">
              {languageOptions.map((option) => (
                <div className="col-lg-4 col-md-6 col-12 ps-4" key={option.id}>
                  <StyledInputDiv className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={option.value}
                      name={option.value}
                      value={option.value}
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
        <div className="col-lg-9 col-12 mb-7">
          <Form.Group>
            <FormLabelStyled>Time Zone </FormLabelStyled>
            <TimezoneField />
            {/* <TimezoneSelect
              value={selectedTimezone}
              onChange={setSelectedTimezone}
            /> */}
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
    </TabPanel>
  );
};

export default Index;
