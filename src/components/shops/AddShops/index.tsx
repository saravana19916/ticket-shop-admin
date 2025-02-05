import React, { useEffect, useState } from "react";
import ShopInformation from "../../listing/AddListing/AddShop/ShopInformation";
import CommercialTerms from "../../listing/AddListing/AddShop/CommercialTerms";
import ShopDesign from "./ShopDesign";
import CreativeGuidelines from "./CreativeGuidelines";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Form, Formik } from "formik";
import { addShopInitialValue, addShopValidationSchema } from "./helpers";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  IAddListingShopProps,
  IShopInformation,
} from "../../listing/AddListing/AddShop/type";
import ProductAllocation from "../../listing/AddListing/AddShop/ProductAllocation";

const index = () => {
  const navigate = useNavigate();
  const _handleOnChange = (
    field: string,
    value: string | number | undefined | null,
    setFieldValue: any
  ) => {
    setFieldValue(field, value);
  };
  const [isAddingShop, setIsAddingShop] = useState<boolean>(false);
  const isEditShop = window.location?.pathname != "/add-shop";
  const editShopDetailsSessionStorage = sessionStorage?.getItem("editShop");
  const [editShopDetails, setEditShopDetails] = useState<
    IAddListingShopProps | undefined
  >(undefined);

  useEffect(() => {
    if (isEditShop && editShopDetailsSessionStorage) {
      const data = JSON.parse(editShopDetailsSessionStorage);

      setEditShopDetails(() => {
        return {
          ...data,
        };
      });
    }
  }, [editShopDetailsSessionStorage]);

  const _handleSubmit = (values: IAddListingShopProps) => {
    setIsAddingShop(true);
    const previousShops = sessionStorage?.getItem("shopsList");
    const previousShopsObj = previousShops ? JSON.parse(previousShops) : null;
    if (previousShopsObj) {
      if (isEditShop) {
        const filteredShopsList = previousShopsObj?.filter(
          (l: any) => l.id != values.id
        );
        const shopsList = [values, ...filteredShopsList];
        sessionStorage.setItem("shopsList", JSON.stringify(shopsList));
      } else {
        const shopsList = [
          {
            ...values,
            id: new Date().toUTCString,
          },
          ...previousShopsObj,
        ];
        sessionStorage.setItem("shopsList", JSON.stringify(shopsList));
      }
    } else {
      const shopsList = [
        {
          ...values,
          id: new Date().toUTCString,
        },
      ];
      sessionStorage.setItem("shopsList", JSON.stringify(shopsList));
    }
    setTimeout(() => {
      const toastMessage = isEditShop
        ? "Shop updated successfully!"
        : "Shop created successfully!";
      toast.success(toastMessage);
      setIsAddingShop(false);
      navigate("/shops");
    }, 1000);
  };
  const isSeparateUrl =
    window.location?.pathname === "/add-shop" ||
    window.location?.pathname.startsWith("/edit-shop/");
  return (
    <>
      <div className="center-container">
        <Formik
          initialValues={addShopInitialValue}
          onSubmit={_handleSubmit}
          validationSchema={addShopValidationSchema}
          enableReinitialize
        >
          {({ setFieldValue, errors, values, touched }) => (
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
                        <p className="fw-600 fs-26px text-black mb-3">Shop</p>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <ShopInformation
                        errors={errors}
                        values={values}
                        handleOnChange={(field, value) =>
                          _handleOnChange(field, value, setFieldValue)
                        }
                        touched={touched}
                      />
                    </div>
                    <div className="row mb-5">
                      <ProductAllocation
                        handleOnChange={(field, value) =>
                          _handleOnChange(field, value, setFieldValue)
                        }
                        touched={touched}
                        values={values}
                        errors={errors}
                      />
                    </div>
                    {/* <div className="row mb-5">
                  <CommercialTerms />
                </div> */}
                    {/* <div className="row mb-7">
                      <ShopDesign />
                    </div> */}
                    {/* <div className="row mb-7">
                      <CreativeGuidelines />
                    </div> */}
                    <div className="row">
                      <div className="col-12 my-5 p-0">
                        <div className="float-end">
                          <button
                            type="submit"
                            className="btn rounded-pill p-2 px-4 float-end fs-6 text-white bg-primary-1"
                            disabled={isAddingShop}
                          >
                            {isAddingShop ? (
                              <>
                                <div
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                >
                                  <span className="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                              </>
                            ) : (
                              <>
                                {isEditShop ? (
                                  <>
                                    <i className="bi bi-pencil-square w-5 h-5 me-2"></i>
                                  </>
                                ) : (
                                  <>
                                    <PlusIcon className="w-5 h-5 me-2" />
                                  </>
                                )}
                              </>
                            )}{" "}
                            {isEditShop ? "Update Shop" : "Publish Shop"}
                          </button>
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
