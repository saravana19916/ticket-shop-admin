import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { ChangeEvent, FC, useState } from "react";
import { CustomDropdownToggle } from "../../../shared/CustomDropDownToggle";
import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import PlusMinusButton from "./PlusMinusButton";
interface ICommercialTermsProps {}
const commercialTermsList = [
  {
    label: "Service Fee",
    value: "Service Fee",
  },
  {
    label: "Sales Commission (%)",
    value: "Sales Commission (%)",
  },
];
const CommercialTerms: FC<ICommercialTermsProps> = () => {
  const [commercialTermsArray, setCommercialTermsArray] = useState<any>([
    {
      terms: "Service Fee",
      value: null,
    },
  ]);
  const _handleDropDownChange = (index: number, terms: string) => {
    const updatedArray = [...commercialTermsArray];
    updatedArray[index] = {
      ...updatedArray[index],
      terms,
      value: null,
    };
    setCommercialTermsArray(updatedArray);
  };
  const _handleAddButtonClick = () => {
    const updatedArray = [
      ...commercialTermsArray,
      {
        terms: "Service Fee",
        value: null,
      },
    ];
    setCommercialTermsArray(updatedArray);
  };
  const _handleMinusButtonClick = (index: number) => {
    if (commercialTermsArray?.length === 1) return;
    const updatedArray = [...commercialTermsArray];
    updatedArray.splice(index, 1);
    setCommercialTermsArray(updatedArray);
  };
  const _handleValueOnChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
    terms: string
  ) => {
    const { value } = event.target;
    const updatedArray = [...commercialTermsArray];
    updatedArray[index] = {
      ...updatedArray[index],
      terms,
      value,
    };
    setCommercialTermsArray(updatedArray);
  };
  return (
    <>
      <div className="col-12 mb-5">
        <span className="fw-600 d-block mb-2">Commercial Terms</span>
        <span
          className="d-block"
          style={{ fontWeight: "300", fontSize: "12px" }}
        >
          here you can define the commercial terms and incentives for your shops
          or sales channels
        </span>
      </div>
      {commercialTermsArray?.map((list: any, index: number) => (
        <>
          <div className="col-12 mb-5 d-flex">
            <Form.Group className="border-dark flex-grow-1">
              <InputGroup>
                <Dropdown>
                  <CustomDropdownToggle
                    variant="light"
                    id="dropdown-basic"
                    className="w-50 text-start p-2 fs-6 d-flex justify-content-between align-items-center custom-dropdown-toggle-start-rounded form-control-border-color"
                  >
                    <span className="d-block ps-4 fs-12px">{list.terms}</span>
                    <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                  </CustomDropdownToggle>
                  <Dropdown.Menu className="w-50 fs-6 m-0">
                    {commercialTermsList?.map((list) => (
                      <>
                        <Dropdown.Item
                          eventKey={list.value}
                          onClick={() =>
                            _handleDropDownChange(index, list.value)
                          }
                        >
                          {list.label}
                        </Dropdown.Item>
                      </>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <FormControl
                  className="p-2 fw-normal fs-6 ps-6 custom-dropdown-form-control  form-control-border-color border-inline-start-0 "
                  value={list?.value}
                  type="number"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    _handleValueOnChange(index, event, list.terms)
                  }
                />
              </InputGroup>
            </Form.Group>
            <PlusMinusButton
              handleAddButtonClick={_handleAddButtonClick}
              handleMinusButtonClick={() => _handleMinusButtonClick(index)}
            />
          </div>
        </>
      ))}
    </>
  );
};

export default CommercialTerms;
