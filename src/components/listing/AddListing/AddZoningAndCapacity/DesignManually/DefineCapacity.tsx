import React, { ChangeEvent, FC } from "react";
import { Form, FormControl, InputGroup, Dropdown } from "react-bootstrap";

import { FormikErrors, FormikTouched } from "formik";
import { IAddListingAddZoningAndCapacity } from "../type";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../../../styledComponents/styledForm";
interface IProps {
  errors: FormikErrors<IAddListingAddZoningAndCapacity>;
  values: IAddListingAddZoningAndCapacity;
  touched: FormikTouched<IAddListingAddZoningAndCapacity>;
  handleOnChange: (field: string, value: string | null) => void;
}
const DefineCapacity: FC<IProps> = ({
  errors,
  values,
  touched,
  handleOnChange,
}) => {
  const handleChange = (event: ChangeEvent<any>) => {
    const { value, name } = event.target;
    if (value) {
      handleOnChange(`capacity.${name}`, value);
    }
  };
  return (
    <>
      <div className="col-12 px-0 mb-7">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black">
            Define Capacity
          </Form.Label>
          <span className="text-gray d-block mb-6 fs-12px">
            in this section you define the capacity of each area .{" "}
          </span>
          <div className="row">
            <div className="col-xl-6 col-12 mb-6 pe-0">
              <Form.Group>
                <FormLabelStyled>Total Capacity</FormLabelStyled>
                <FormInputStyled
                  type="number"
                  className="form-control"
                  name="totalCapacity"
                  value={values?.capacity?.totalCapacity}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.capacity?.totalCapacity &&
                touched?.capacity?.totalCapacity && (
                  <>
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.capacity?.totalCapacity}
                    </span>
                  </>
                )}
            </div>
            <div className="col-xl-6 col-12 mb-6 pe-0">
              <Form.Group>
                <FormLabelStyled>Blocked</FormLabelStyled>
                <FormInputStyled
                  type="number"
                  className="form-control"
                  name="blocked"
                  value={values?.capacity?.blocked}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.capacity?.blocked && touched?.capacity?.blocked && (
                <>
                  <span className="text-danger d-inline-block ms-5">
                    {errors?.capacity?.blocked}
                  </span>
                </>
              )}
            </div>
            <div className="col-xl-6 col-12 mb-6 pe-0">
              <Form.Group>
                <FormLabelStyled>Total On Sale</FormLabelStyled>
                <FormInputStyled
                  type="number"
                  className="form-control"
                  name="totalOnSale"
                  value={values?.capacity?.totalOnSale}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.capacity?.totalOnSale &&
                touched?.capacity?.totalOnSale && (
                  <>
                    <span className="text-danger d-inline-block ms-5">
                      {errors?.capacity?.totalOnSale}
                    </span>
                  </>
                )}
            </div>
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default DefineCapacity;
