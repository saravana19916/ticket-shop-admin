import React, { FC } from "react";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";
import { FormikErrors, FormikTouched } from "formik";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
interface IProps {
  errors: FormikErrors<IPricingDetailsProps>;
  values: IPricingDetailsProps;
  touched: FormikTouched<IPricingDetailsProps>;
  handleOnChange: (field: string, value: string | null) => void;
  setFieldError: (field: string, message: string | undefined) => void;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<IPricingDetailsProps>>;
}
const PricingInclusion: FC<IProps> = ({
  values,
  touched,
  errors,
  setFieldValue,
}) => {
  const _handleInclusionFieldOnChange = (e: any) => {
    const { value } = e.target;
    setFieldValue("inclusion.inclusionText", value);
  };
  const _handleAddInclusion = (values: IPricingDetailsProps) => {
    if (
      values?.inclusion?.inclusionText &&
      values?.inclusion?.inclusionText.split("").length
    ) {
      const inclusionsList = [
        ...values.inclusion.inclusionList,
        values.inclusion.inclusionText,
      ];
      setFieldValue("inclusion.inclusionList", inclusionsList);
      setFieldValue("inclusion.inclusionText", "");
    } else {
      toast.error("Please type inclusion to add!");
    }
  };
  const _handleRemoveInclusion = (
    e: string,
    values: IPricingDetailsProps,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IPricingDetailsProps>>
  ) => {
    const updatedInclusions =
      values?.inclusion?.inclusionList?.filter(
        (inclusion: string) => inclusion !== e
      ) || [];

    setFieldValue("inclusion.inclusionList", updatedInclusions);
  };
  return (
    <>
      <div className="col-12 mb-6">
        <Form.Group className="mb-1">
          <Form.Label className="fs-5 fw-500 text-black mb-4">
            Inclusion
          </Form.Label>
          <span className="text-gray d-block mb-6 fs-12px">
            insert what is included in the Product.{" "}
          </span>
          <div className="row">
            <div className="col-12 mb-4">
              <Form.Group>
                <FormLabelStyled>Add inclusions</FormLabelStyled>
                <div className="position-relative">
                  <FormInputStyled
                    type="text"
                    className="form-control"
                    onChange={(e) => _handleInclusionFieldOnChange(e)}
                    value={values.inclusion?.inclusionText}
                    placeholder="If you can't find your inclusion below, type them here and press + button"
                  />
                  <div
                    onClick={() => _handleAddInclusion(values)}
                    className="me-4 cursor-pointer bg-primary-1 position-absolute text-white rounded-circle top-50 end-0 translate-middle-y"
                  >
                    <PlusIcon className="h-5 w-5 fw-bold" />
                  </div>
                </div>
              </Form.Group>
            </div>
          </div>
        </Form.Group>
        {touched?.inclusion?.inclusionList &&
          errors?.inclusion?.inclusionList && (
            <span className="text-danger d-inline-block ms-5">
              {errors?.inclusion?.inclusionList}
            </span>
          )}
      </div>
      <div className="col-12 mb-5">
        <div className="d-flex flex-wrap gap-3">
          {values?.inclusion?.inclusionList?.map((l: string) => (
            <div
              key={l}
              className="p-2 px-5 rounded-pill d-flex align-items-center text-white bg-color-light-gray-3 border"
            >
              <span className="d-inline-block me-4 pe-1 fw-semibold">{l}</span>
              <span
                className="d-inline-block h-6 w-6 rounded d-flex align-items-center bg-white cursor-pointer justify-content-center text-white fs-5"
                onClick={() => _handleRemoveInclusion(l, values, setFieldValue)}
              >
                <MinusIcon className="h-5 w-5 fw-bold color-gray-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingInclusion;
