import React, { FC, useState } from "react";
import ProductInfo from "./ProductInfo";
import ZoningAndAllocation from "./ZoningAndAllocation";
import RulesAndTimeline from "./RulesAndTimeline";
import { PlusIcon } from "@heroicons/react/24/outline";
import PricingTable from "./PricingTable";
import { Form, Formik, FormikErrors } from "formik";
import {
  addPricingDetailsInitialValue,
  addPricingValidationSchema,
} from "../../../pricing/AddPricing/helpers";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";
import Pricing from "./Pricing";
import PricingInclusion from "./PricingInclusion";
import { pricingDetailsData } from "../../../../commondata/pricingTableData";
import { toast } from "react-toastify";
import { Accordion, OverlayTrigger, Tooltip } from "react-bootstrap";
import PricingAccordion from "./PricingAccordion";
import { color } from "echarts";
import { ButtonPrimary } from "../../../styledComponents/styledButton";

interface IAddPricingProps {}

const AddPricing: FC<IAddPricingProps> = () => {
  const isAddListingLocation = window.location?.pathname === "/add-listing";

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
  const _handlePricingOnChange = (
    field: string,
    value: string | number | undefined | null,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IPricingDetailsProps>>
  ) => {
    setFieldValue(`pricing.${field}`, value);
  };
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
  const [tableData, setTableData] =
    useState<IPricingDetailsProps[]>(pricingDetailsData);
  const [initialValues, setInitialValues] = useState<IPricingDetailsProps>(
    addPricingDetailsInitialValue
  );
  const dataIndex = tableData[tableData?.length - 1]?.id + 1;

  const handleRemove = (id: number | string) => {
    const newData = tableData?.filter((i: IPricingDetailsProps) => i.id !== id);
    setTableData(newData);
    toast.success("Removed successfully");
  };
  const handleDuplicated = (id: number | string) => {
    const duplicateData = tableData?.find(
      (i: IPricingDetailsProps) => i.id === id
    );

    const newData = {
      ...duplicateData,
      id: dataIndex,
    };
    setTableData((prev: any) => {
      return [...prev, newData];
    });
    toast.success("Duplicated successfully");
  };
  const handleEdit = (id: number | string) => {
    const data = tableData?.find((i: IPricingDetailsProps) => i.id === id);
    if (data) {
      setInitialValues(data);
      const element = document.getElementById("addPricingTop");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={addPricingValidationSchema}
        onSubmit={(values, { resetForm }) => {
          if (values.id === 0) {
            const data = {
              ...values,
              id: dataIndex,
            };
            setTableData((prev: any) => {
              return [data, ...prev];
            });
            toast.success(
              `${values?.productDetails?.productName}'s pricing created successfully`
            );
            resetForm();
          } else {
            setTableData((prev: any) => {
              return prev.map((item: any) =>
                item.id === values.id ? { ...item, ...values } : item
              );
            });
            toast.success(
              `${values?.productDetails?.productName}'s pricing updated successfully`
            );
            setInitialValues(addPricingDetailsInitialValue);
          }
        }}
      >
        {({ values, errors, touched, setFieldValue, setFieldError }) => (
          <>
            <Form
              className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 `}
            >
              <div className="card border p-4 rounded-16px">
                <div className="p-0 p-md-5">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <p
                        className="fw-600 fs-26px text-black mb-3 d-flex align-items-center"
                        id="addPricingTop"
                      >
                        Product & Pricing
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
                        _handleProductInfo(field, value, setFieldValue)
                      }
                    />
                    <PricingInclusion
                      errors={errors}
                      values={values}
                      touched={touched}
                      handleOnChange={(field, value) =>
                        _handleProductInfo(field, value, setFieldValue)
                      }
                      setFieldError={setFieldError}
                      setFieldValue={setFieldValue}
                    />
                    <div className="col-12 mb-7">
                      <div className="float-end mb-5">
                        <ButtonPrimary
                          type="submit"
                          className="btn"
                          style={{ minWidth: "118px" }}
                        >
                          {values?.id === 0
                            ? "Create Product"
                            : "Update Product"}{" "}
                        </ButtonPrimary>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Accordion className="panel-default d-flex flex-column gap-4">
                        {tableData?.map(
                          (item: IPricingDetailsProps, index: number) => (
                            <>
                              <PricingAccordion
                                item={item}
                                index={`${index}`}
                              />
                            </>
                          )
                        )}
                      </Accordion>
                    </div>
                    {/* <PricingTable
                      tableData={tableData}
                      handleRemove={handleRemove}
                      handleDuplicated={handleDuplicated}
                      handleEdit={handleEdit}
                    /> */}
                  </div>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default AddPricing;
