import React, { FC, useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import ShopInformation from "./ShopInformation";
import CommercialTerms from "./CommercialTerms";
import ProductAllocation from "./ProductAllocation";
import {
  CheckCircleIcon,
  CheckIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import ShopTable from "./ShopTable";
import { Formik, setIn } from "formik";
import {
  addShopInitialValue,
  addShopValidationSchema,
} from "../../../shops/AddShops/helpers";
import { IAddListingShopProps } from "./type";
import { shopTableData } from "../../../../commondata/shopTableData";
import { toast } from "react-toastify";
import ButtonCustom from "../../../shared/ButtonCustom";
import ShopsAccordion from "./ShopsAccordion";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonSecondaryDarkGrey,
  ButtonSecondaryGrey,
} from "../../../styledComponents/styledForm";

interface IAddShopsProps {}

const AddShops: FC<IAddShopsProps> = () => {
  const isSeparateUrl =
    window.location?.pathname === "/add-info" ||
    window.location?.pathname.startsWith("/edit-info/");
  const [editId, setEditId] = useState<number | string | null>(null);
  const [initialValue, setInitialValue] =
    useState<IAddListingShopProps>(addShopInitialValue);
  const handleOnChange = (
    field: string,
    value: string | number | undefined | null,
    setFieldValue: any
  ) => {
    setFieldValue(field, value);
  };
  const [isLinkGenerated, setIsLinkGenerated] = useState<boolean>(false);
  const _handleGenerateShopLink = () => {
    const link: string = "https://ticketshop.tixbox.com";
    if (isLinkGenerated) {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          toast.dark("Link copied to clipboard!");
        })
        .catch((err) => {
          toast.error("Failed to copy the link: ", err);
        });
    } else {
      setIsLinkGenerated(true);
      navigator.clipboard
        .writeText(link)
        .then(() => {
          toast.dark("Link generated and copied to clipboard!");
        })
        .catch((err) => {
          toast.error("Failed to copy the link: ", err);
        });
    }
  };
  const [tableData, setTableData] =
    useState<IAddListingShopProps[]>(shopTableData);
  const dataIndex = tableData[tableData.length - 1]?.id + 1;
  function scrollToAddListingShops() {
    const element = document.getElementById("addListingShops");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  const handleEdit = (id: number | string) => {
    const editData: IAddListingShopProps | undefined = tableData?.find(
      (i: IAddListingShopProps) => i.id === id
    );
    if (editData) {
      setInitialValue(editData);
      scrollToAddListingShops();
      setEditId(id);
    } else {
      setInitialValue(addShopInitialValue);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValue}
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          if (values.id) {
            const index = tableData.findIndex((item) => item.id === values.id);
            if (index !== -1) {
              const updatedTableData = [...tableData];
              updatedTableData[index] = { ...values };
              setTableData(updatedTableData);
              toast.success("Shop updated successfully!");
              setInitialValue(addShopInitialValue);
              setEditId(null);
            }
          } else {
            const data = {
              ...values,
              id: dataIndex,
            };
            const newTableData = [data, ...tableData];
            setTableData(newTableData);
            toast.success("Shop created successfully!");
            resetForm();
          }
        }}
        validationSchema={addShopValidationSchema}
      >
        {({ setFieldValue, errors, values, touched, submitForm }) => (
          <>
            <div
              className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 ${
                isSeparateUrl ? "mt-7" : ""
              }`}
            >
              <div className="card border p-4 rounded-16px">
                <div className="p-0 p-md-5">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <p
                        className="fw-600 fs-26px text-black mb-3"
                        id="addListingShops"
                      >
                        Shops
                      </p>
                      <span className="text-gray d-block mb-6 fs-12px">
                        Shops represent your sales channels. you can add the
                        shops you like by filling up the below fields and
                        allocate your products to the shops.{" "}
                      </span>
                    </div>
                    <div className="col-12 mb-7">
                      <div className="row">
                        <ShopInformation
                          handleOnChange={(field, value) =>
                            handleOnChange(field, value, setFieldValue)
                          }
                          touched={touched}
                          values={values}
                          errors={errors}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-7">
                      <div className="row">
                        <ProductAllocation
                          handleOnChange={(field, value) =>
                            handleOnChange(field, value, setFieldValue)
                          }
                          touched={touched}
                          values={values}
                          errors={errors}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-8">
                      <div className="float-end d-flex gap-4">
                        <ButtonSecondaryDarkGrey type="button" className="btn">
                          <PlusIcon className="w-4 h-4 me-3 mb-1px" />
                          Add Another Shop
                        </ButtonSecondaryDarkGrey>
                        <ButtonPrimary
                          type="submit"
                          className="btn"
                          onClick={submitForm}
                        >
                          <PlusIcon className="w-4 h-4 me-3 mb-1px" />
                          {editId ? "Update Shop" : "Create Shop"}
                        </ButtonPrimary>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Accordion className="panel-default d-flex flex-column gap-4">
                        {tableData?.map(
                          (item: IAddListingShopProps, index: number) => (
                            <>
                              <ShopsAccordion item={item} index={`${index}`} />
                            </>
                          )
                        )}
                      </Accordion>
                    </div>
                    {/* <ShopTable
                      tableData={tableData}
                      setTableData={setTableData}
                      handleEdit={handleEdit}
                    /> */}
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

export default AddShops;
