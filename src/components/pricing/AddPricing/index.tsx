// import ZoningAndAllocation from "../../listing/AddListing/AddPricing/ZoningAndAllocation";
import React, { FC } from "react";
import ProductInfo from "../../listing/AddListing/AddPricing/ProductInfo";
import RulesAndTimeline from "../../listing/AddListing/AddPricing/RulesAndTimeline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Form, Formik, FormikErrors } from "formik";
import {
  addPricingDetailsInitialValue,
  addPricingValidationSchema,
} from "./helpers";
import { IPricingDetailsProps } from "./type";
import { ButtonPrimary } from "../../styledComponents/styledButton";

interface IProps {}

const index: FC<IProps> = () => {
  const _handleProductInfo = (
    field: string,
    value: string | number | undefined | null,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IPricingDetailsProps>>
  ) => {
    setFieldValue(`productDetails.${field}`, value);
  };
  // const _handleZoningAndAllocation = (
  //   field: string,
  //   value: string | number | undefined | null,
  //   setFieldValue: (
  //     field: string,
  //     value: any,
  //     shouldValidate?: boolean | undefined
  //   ) => Promise<void | FormikErrors<IPricingDetailsProps>>
  // ) => {
  //   setFieldValue(`zoningAndAllocation.${field}`, value);
  // };
  const _handleRulesAndTimelineOnChange = (
    field: string,
    value: string | number | undefined | null,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IPricingDetailsProps>>
  ) => {
    setFieldValue(`rulesAndTimeline.${field}`, value);
  };
  const isSeparateUrl =
    window.location?.pathname === "/add-product" ||
    window.location?.pathname.startsWith("/edit-product/");

  return (
    <>
      <div className="center-container">
        <Formik
          initialValues={addPricingDetailsInitialValue}
          validationSchema={addPricingValidationSchema}
          onSubmit={() => {}}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <>
              <Form
                className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 ${
                  isSeparateUrl ? "mt-7" : ""
                }`}
              >
                <div className="card border p-4 rounded-16px">
                  <div className="p-0 p-md-5">
                    <div className="row">
                      <div className="col-12 mb-3">
                        <p className="fw-600 fs-26px text-black mb-3">
                          Your Product
                        </p>
                      </div>
                      <ProductInfo
                        values={values}
                        errors={errors}
                        touched={touched}
                        handleOnChange={(field, value) =>
                          _handleProductInfo(field, value, setFieldValue)
                        }
                      />
                      <RulesAndTimeline
                        values={values}
                        errors={errors}
                        touched={touched}
                        handleOnChange={(field, value) =>
                          _handleRulesAndTimelineOnChange(
                            field,
                            value,
                            setFieldValue
                          )
                        }
                      />
                      <div className="col-12 mb-3 mt-5">
                        <div className="float-end mb-3">
                          <ButtonPrimary
                            type="submit"
                            className="btn"
                            style={{ minWidth: "118px" }}
                          >
                            {/* <PlusIcon className="w-4 h-4 me-3 mb-1px" /> */}
                            Add
                          </ButtonPrimary>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};

export default index;
