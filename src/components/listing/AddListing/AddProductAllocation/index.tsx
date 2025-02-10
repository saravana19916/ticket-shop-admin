import React, { FC, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Form, Formik, FormikErrors } from "formik";
import {
  addPricingDetailsInitialValue,
  addPricingValidationSchema,
} from "../../../pricing/AddPricing/helpers";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";
import { pricingDetailsData } from "../../../../commondata/pricingTableData";
import { toast } from "react-toastify";
import ButtonCustom from "../../../shared/ButtonCustom";
import { Accordion } from "react-bootstrap";
import ProductAllocationAccordion from "./ProductAllocationAccordion";
import { color } from "echarts";
import { FormInputDescriptionStyled } from "../../../styledComponents/styledForm";
import ProductInfo from "./Produt";

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
        {({ values, errors, touched, setFieldValue }) => (
          <>
            <Form
              className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 `}
            >
              <div className="card border p-4 rounded-16px">
                <div className="p-0 p-md-5">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <p
                        className="fw-600 fs-26px text-black mb-3"
                        id="addPricingTop"
                      >
                        Product Allocation
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
                    <div className="col-12 mb-7">
                      <div className="float-end mb-5">
                        <ButtonCustom
                          title={values?.id === 0 ? "Add" : "Update"}
                          className="fs-6"
                          paddingClassName="p-2 px-5"
                          icon={
                            <PlusIcon
                              className="w-4 h-4"
                              style={{ marginBottom: "1px" }}
                            />
                          }
                          type="submit"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-7">
                      <FormInputDescriptionStyled>
                        You can amend edit, update, delete, activate and
                        deactivate your zones and make changes to your sub
                        section, in the{" "}
                        <span className="text-primary-1">
                          'Product Allocation'
                        </span>{" "}
                        Tab. A list of your created zones and
                        sections/subsections/rows are listed below.
                      </FormInputDescriptionStyled>
                    </div>

                    <div className="mt-6">
                      <Accordion className="panel-default d-flex flex-column gap-4">
                        {tableData?.map(
                          (item: IPricingDetailsProps, index: number) => (
                            <>
                              <ProductAllocationAccordion
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
