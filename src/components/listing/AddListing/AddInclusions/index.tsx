import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { FC, useEffect, useState } from "react";
import { Dropdown, Form, InputGroup, FormControl } from "react-bootstrap";
import { CustomDropdownToggle } from "../../../shared/CustomDropDownToggle";
import InclusionTable from "./InclusionTable";
import { toast } from "react-toastify";
import { inclusionTableData } from "../../../../commondata/inclusionTableData";
import { Formik, FormikErrors } from "formik";
import {
  addListingInclusionInitialValues,
  addListingInclusionValidationSchema,
} from "./helper";
import { IInclusionProps } from "./type";

interface IAddInclusionsProps {}

const productsData = [
  {
    label: "Gold Ticket",
    value: "Gold Ticket",
  },
  {
    label: "Platinum Ticket",
    value: "Platinum Ticket",
  },
];

const AddInclusions: FC<IAddInclusionsProps> = () => {
  const [tableData, setTableData] =
    useState<IInclusionProps[]>(inclusionTableData);
  const [edit, setEdit] = useState<number | string | null>(null);
  const [initialValues, setInitialValues] = useState<IInclusionProps>(
    addListingInclusionInitialValues
  );

  useEffect(() => {
    if (edit) {
      const editData = tableData?.find((l) => l.id == edit);
      setInitialValues(editData || addListingInclusionInitialValues);
    } else {
      setInitialValues(addListingInclusionInitialValues);
    }
  }, [edit]);

  const _handleInclusionFieldOnChange = (
    e: any,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IInclusionProps>>
  ) => {
    const { value } = e.target;
    setFieldValue("inclusionText", value);
  };

  const _handleAddInclusion = (
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IInclusionProps>>,
    setFieldError: (field: string, message: string | undefined) => void,
    values: IInclusionProps
  ) => {
    if (values?.inclusionText && values?.inclusionText.split("").length) {
      const inclusionsList = [...values.inclusionList, values.inclusionText];
      setFieldValue("inclusionList", inclusionsList);
      setFieldValue("inclusionText", "");
      setFieldError("inclusionList", undefined);
    } else {
      toast.error("Please type inclusion to add!");
    }
  };

  const _handleRemoveInclusion = (
    e: string,
    values: IInclusionProps,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IInclusionProps>>
  ) => {
    const updatedInclusions =
      values?.inclusionList?.filter((inclusion: string) => inclusion !== e) ||
      [];

    setFieldValue("inclusionList", updatedInclusions);
  };

  const _handleChooseProduct = (
    product: string,
    values: IInclusionProps,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IInclusionProps>>
  ) => {
    const products = values?.product || [];

    if (products.includes(product)) {
      const updatedProducts = products.filter((item) => item != product);
      setFieldValue("product", updatedProducts);
    } else {
      const updatedProducts = [...products, product];
      setFieldValue("product", updatedProducts);
    }
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          const newData: IInclusionProps = {
            id: edit ? edit : tableData.length + 1,
            product: values.product,
            subtitle: "Weekday",
            inclusionList: values.inclusionList,
          };
          if (edit) {
            const updatedTable = tableData.map((item: any) =>
              item.id === edit ? newData : item
            );
            setTableData(updatedTable);
            toast.success("Inclusion updated successfully!");
            setEdit(null);
          } else {
            setTableData((prev) => {
              return [...prev, newData];
            });
            toast.success("Inclusion created successfully!");
          }
          resetForm();
        }}
        validationSchema={addListingInclusionValidationSchema}
      >
        {({
          errors,
          touched,
          submitForm,
          values,
          setFieldValue,
          setFieldError,
        }) => (
          <>
            <div className="row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3">
              <div className="card border">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <h3 className="fw-bold">Inclusions</h3>
                    </div>
                    <div className="col-12 mb-5">
                      <Form.Group className="border-dark mb-3 ">
                        <InputGroup>
                          <FormControl
                            className="p-2 fw-normal fs-6 ps-6  form-control-label-rounded-start bg-white"
                            disabled
                            value="Choose Product"
                          />
                          <Dropdown>
                            <CustomDropdownToggle
                              variant="light"
                              id="dropdown-basic"
                              className="w-50 text-start p-2 fs-6 d-flex justify-content-between align-items-center bg-white  form-control-border-color border-inline-start-0  custom-dropdown-toggle-end-rounded"
                            >
                              <span className="d-block ps-6">
                                {(values?.product ?? []).join(", ") || "Choose"}
                              </span>
                              <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                            </CustomDropdownToggle>
                            <Dropdown.Menu className="w-50 fs-6 m-0">
                              {productsData?.map((l) => (
                                <>
                                  <Dropdown.Item
                                    eventKey={l.value}
                                    onClick={() => {
                                      _handleChooseProduct(
                                        l.label,
                                        values,
                                        setFieldValue
                                      );
                                    }}
                                  >
                                    {l.label}
                                  </Dropdown.Item>
                                </>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </InputGroup>
                      </Form.Group>
                      {errors &&
                        touched &&
                        touched?.product &&
                        errors?.product && (
                          <span className="text-danger d-inline-block ms-5">
                            {errors?.product}
                          </span>
                        )}
                      <span className="ms-6 fs-14px fw-300">
                        * You can choose multiple products
                      </span>
                    </div>
                    <div className="col-12 mb-5">
                      <Form.Group className="mb-3">
                        <InputGroup>
                          <InputGroup.Text className="p-2 fw-normal fs-6 ps-6 pe-6 form-control-label-rounded-start w-220px">
                            Add inclusions
                          </InputGroup.Text>
                          <FormControl
                            className="bg-white d-flex justify-content-between w-50 border-inline-end-0 form-control-border-color border-inline-start-0 "
                            placeholder="If you can't find your inclusion below, type them here and press + button"
                            onChange={(e) =>
                              _handleInclusionFieldOnChange(e, setFieldValue)
                            }
                            value={values.inclusionText}
                          />
                          <InputGroup.Text className="bg-white d-flex justify-content-between form-control-text-input-rounded-end">
                            <span
                              className="d-inline-block me-3 h-5 w-5 rounded d-flex align-items-center justify-content-center text-white fs-5 cursor-pointer bg-color-gray-3"
                              onClick={() =>
                                _handleAddInclusion(
                                  setFieldValue,
                                  setFieldError,
                                  values
                                )
                              }
                            >
                              <PlusIcon className="h-4 w-4 fw-bold" />
                            </span>
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                      {errors &&
                        touched &&
                        touched?.inclusionText &&
                        errors?.inclusionText &&
                        !errors?.inclusionList && (
                          <span className="text-danger d-inline-block ms-5">
                            {errors?.inclusionText}
                          </span>
                        )}
                      {errors &&
                        touched &&
                        touched?.inclusionList &&
                        errors?.inclusionList && (
                          <span className="text-danger d-inline-block ms-5">
                            {errors?.inclusionList}
                          </span>
                        )}
                    </div>
                    <div className="col-12 mb-5">
                      <div className="d-flex flex-wrap gap-3">
                        {values?.inclusionList?.map((l: string) => (
                          <div
                            key={l}
                            className="p-2 px-5 rounded-pill d-flex bg-color-light-gray-3"
                          >
                            <span className="d-inline-block me-4 pe-1">
                              {l}
                            </span>
                            <span
                              className="d-inline-block h-5 w-5 rounded d-flex align-items-center bg-white cursor-pointer justify-content-center text-white fs-5"
                              onClick={() =>
                                _handleRemoveInclusion(l, values, setFieldValue)
                              }
                            >
                              <MinusIcon className="h-4 w-4 fw-bold color-gray-3" />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-12 mb-5">
                      <div className="float-end">
                        <button
                          type="submit"
                          className="btn rounded-pill p-2 px-4 float-end fs-6 text-white bg-primary-1"
                          onClick={submitForm}
                        >
                          <PlusIcon className="w-5 h-5 me-2" />{" "}
                          {edit
                            ? "Edit Product Inclusion"
                            : "Add Product Inclusion"}
                        </button>
                      </div>
                    </div>
                    <div className="col-12 mb-4">
                      <InclusionTable
                        setEdit={setEdit}
                        tableData={tableData}
                        setTableData={setTableData}
                      />
                    </div>
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

export default AddInclusions;
