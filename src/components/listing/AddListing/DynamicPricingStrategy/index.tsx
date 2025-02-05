import React, { FC, useState } from "react";
import DynamicPricingStrategyTable from "./DynamicPricingStrategyTable";
import { Accordion, Form } from "react-bootstrap";
import ByDateForm from "./ByDateForm";
import ByDemandForm from "./ByDemandForm";
import { PlusIcon } from "@heroicons/react/24/outline";
import ToggleButton from "../../../shared/ToggleButton";
import { dynamicPricingStrategyTableData } from "../../../../commondata/dynamicPricingStrategy";
import { IDynamicPricingStrategyProps } from "./type";
import { Formik, FormikErrors } from "formik";
import {
  getDynamicPricingStrategyValidationSchema,
  addListingDynamicPricingStrategyInitialValue,
} from "./helper";
import { toast } from "react-toastify";
import ButtonCustom from "../../../shared/ButtonCustom";
import DynamicPricingAccordion from "./DynamicPricingAccordion";
const index: FC = () => {
  const isAddListingLocation = window.location?.pathname === "/add-listing";

  const [initialValues, setInitialValues] =
    useState<IDynamicPricingStrategyProps>(
      addListingDynamicPricingStrategyInitialValue
    );
  const [isDynamicPricing, setIsDynamicPricing] = useState(true);
  const [strategyType, setStrategyType] = useState<"By Date" | "By Demand">(
    "By Date"
  );
  const toggleDynamicPricing = () => {
    setIsDynamicPricing((prev) => {
      return !prev;
    });
  };
  const [tableData, setTableData] = useState<IDynamicPricingStrategyProps[]>(
    dynamicPricingStrategyTableData
  );
  const dataIndex = tableData[tableData.length - 1]?.id + 1;
  const _handleOnChange = (
    field: string,
    value: string | number | undefined | null | (string | number)[],
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IDynamicPricingStrategyProps>>
  ) => {
    if (
      field === "strategyType" &&
      (value === "By Date" || value === "By Demand")
    ) {
      setStrategyType(value);
    }
    setFieldValue(field, value);
  };
  const [editId, setEditId] = useState<number | string | null>(null);
  const handleEdit = (id: number | string) => {
    const editData = tableData?.find((data) => data.id === id);
    if (editData) {
      setEditId(id);
      setInitialValues(editData);
      setStrategyType(editData?.strategyType);
      if (editData?.strategyType === "By Date") {
        document
          ?.getElementById("dynamicPricingStrategyByDateForm")
          ?.scrollIntoView({
            behavior: "smooth",
          });
        document?.getElementById("byDateRadioButton")?.click();
      } else {
        document
          ?.getElementById("dynamicPricingStrategyByDemandForm")
          ?.scrollIntoView({
            behavior: "smooth",
          });
        document?.getElementById("byDemandRadioButton")?.click();
      }
    } else {
      setEditId(null);
      setInitialValues(addListingDynamicPricingStrategyInitialValue);
    }
  };
  const isSeparateUrl =
    window.location?.pathname === "/add-dynamic-pricing" ||
    window.location?.pathname.startsWith("/edit-dynamic-pricing/");
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          if (editId) {
            const updatedTableData = tableData.map((item) =>
              item.id === editId ? values : item
            );
            toast.success(
              `Dynamic Pricing ${values.strategyType} updated successfully!`
            );
            setTableData(updatedTableData);
            setInitialValues(addListingDynamicPricingStrategyInitialValue);
          } else {
            const id = dataIndex;
            const data = {
              ...values,
              id,
            };
            setTableData((prev) => {
              return [data, ...prev];
            });
            toast.success(
              `Dynamic Pricing ${data.strategyType} created successfully!`
            );
          }
          setEditId(null);
          resetForm();
          setStrategyType("By Date");
        }}
        validationSchema={getDynamicPricingStrategyValidationSchema(
          strategyType
        )}
      >
        {({ submitForm, values, errors, touched, setFieldValue }) => (
          <>
            <div
              className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 ${
                isSeparateUrl ? "mt-7" : ""
              }`}
            >
              <div
                className={`${isSeparateUrl ? "" : "card border py-5 px-6"}`}
              >
                <div className="p-0 p-md-5">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <p className="fw-600 fs-26px text-black mb-3">
                        Dynamic Pricing Strategy
                      </p>
                    </div>
                    <ToggleButton
                      isToggled={isDynamicPricing}
                      handleToggle={toggleDynamicPricing}
                    />
                    <div className="col-12 mb-5">
                      <Form.Group>
                        <Form.Label className="fs-5 fw-500 text-black">
                          Pricing Mode
                        </Form.Label>
                        <span className="text-gray d-block mb-6 fs-12px">
                          choose the pricing mode you would like to base your
                          dynamic pricing from.
                        </span>
                      </Form.Group>
                    </div>
                    <div className="col-xl-10 col-lg-11 col-12 mb-7">
                      <div className="row">
                        <ByDateForm
                          values={values}
                          errors={errors}
                          touched={touched}
                          handleOnChange={(field, value) =>
                            _handleOnChange(field, value, setFieldValue)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-xl-10 col-lg-11 col-12 mb-7">
                      <div className="row">
                        <ByDemandForm
                          values={values}
                          errors={errors}
                          touched={touched}
                          handleOnChange={(field, value) =>
                            _handleOnChange(field, value, setFieldValue)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-xl-10 col-lg-11 col-12 mb-7">
                      <div className="float-end">
                        <ButtonCustom
                          title="Add Strategy"
                          className="fs-6"
                          onClick={submitForm}
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
                    {isSeparateUrl ? (
                      <></>
                    ) : (
                      <>
                        <div className="col-12 mb-5">
                          <div className="mt-6">
                            <Accordion className="panel-default d-flex flex-column gap-4">
                              {tableData?.map(
                                (
                                  item: IDynamicPricingStrategyProps,
                                  index: number
                                ) => (
                                  <>
                                    <DynamicPricingAccordion
                                      item={item}
                                      index={`${index}`}
                                    />
                                  </>
                                )
                              )}
                            </Accordion>
                          </div>
                          {/* <DynamicPricingStrategyTable
                            setTableData={setTableData}
                            tableData={tableData}
                            handleEdit={handleEdit}
                          /> */}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default index;
