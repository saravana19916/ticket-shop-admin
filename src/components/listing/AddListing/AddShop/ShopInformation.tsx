import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { FC, useEffect, useState } from "react";
import { InputGroup, Form, FormControl, Dropdown } from "react-bootstrap";
import { CustomDropdownToggle } from "../../../shared/CustomDropDownToggle";
import { FormikErrors, FormikTouched } from "formik";
import { IAddListingShopProps } from "./type";
import { GetCountries } from "react-country-state-city";
import ReactSelect from "react-select";
import { t } from "i18next";
import {
  FormInputDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import Select from "react-select";

interface IShopInformationProps {
  handleOnChange: (field: string, value: string) => void;
  errors: FormikErrors<IAddListingShopProps>;
  values: IAddListingShopProps;
  touched: FormikTouched<IAddListingShopProps>;
}
const ShopType = [
  {
    label: "Physical",
    value: "Physical",
  },
  {
    label: "Live",
    value: "Live",
  },
  {
    label: "Office",
    value: "Office",
  },
  {
    label: "Draft",
    value: "Draft",
  },
];
type IShopType = "Physical" | "Live" | "Office" | "Draft";
const ShopInformation: FC<IShopInformationProps> = ({
  errors,
  values,
  handleOnChange,
  touched,
}) => {
  const customStyles = {
    singleValue: (provided: any) => ({
      ...provided,
      color: "#000",
      fontWeight: "400",
      fontSize: "14px",
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "#777",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      padding: "4px",
      paddingLeft: "14px",
      borderRadius: "50px",
      borderColor: state.isFocused ? "#fec9da80" : "#e5e7eb",
      outline: state.isFocused ? "1px solid #fec9da80" : "none",
      boxShadow: "null",
      "&:focus": {
        borderColor: "#fec9da80",
        outline: "1px solid #fec9da80",
      },
      "&:focus-within": {
        borderColor: "#fec9da80",
        outline: "1px solid #fec9da80",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: "8px",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      color: "#000",
      fontWeight: "500",
      fontSize: "18px",
      margin: "0px",
      padding: "0px",
      backgroundColor: "",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#ED003B" : "transparent",
      color: state.isSelected ? "#fff" : provided.color,
      cursor: "pointer",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: state.isSelected ? "#ED003B" : "#fec9da80",
      },
    }),
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    handleOnChange(`shopInformation.${name}`, value);
  };
  const handleDropDownChange = (field: string, value: string) => {
    handleOnChange(`shopInformation.${field}`, value);
  };
  useEffect(() => {
    GetCountries().then((result: any) => {
      const data = result.map((country: any) => {
        return {
          value: country.id,
          label: country.name,
        };
      });
      setCountriesList(data);
      setSliceCountry(data);
      fetchCitiesByCountry();
    });
  }, []);
  const [countriesList, setCountriesList] = useState([]);
  const [sliceCountry, setSliceCountry] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [cityList, setCityList] = useState([]);
  const fetchCitiesFromAPI = async () => {
    const response = await fetch(
      `https://venkatmcajj.github.io/react-country-state-city/data/citiesminified.json`
    );
    const data = await response.json();
    return data;
  };
  const fetchCitiesByCountry = async () => {
    const stateList = await fetchCitiesFromAPI();
    const citiesList = stateList?.map((i: any) => i.states);
    const citiesData = citiesList?.flatMap((array: any) =>
      array.flatMap((item: any) => item.cities)
    );
    setCityList(citiesData);
    const data = citiesData?.slice(0, 10);
    const transformedData = data?.map((city: any) => ({
      value: city.id,
      label: city.name,
    }));

    setCityData(transformedData);
  };
  const filterCountries = (inputValue: any) => {
    const filteredCountries = sliceCountry?.filter((country: any) =>
      country.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    const data = filteredCountries?.slice(0, 10);
    const transformedData: any = data?.map((city: any) => ({
      value: city.value,
      label: city.label,
    }));

    setCountriesList(transformedData);
  };
  const filterCities = (inputValue: any) => {
    const filteredCities = cityList?.filter((city: any) =>
      city.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    const data = filteredCities?.slice(0, 10);
    const transformedData: any = data?.map((city: any) => ({
      value: city.name,
      label: city.name,
    }));

    setCityData(transformedData);
  };

  return (
    <>
      <div className="col-12 mb-6">
        <Form.Group>
          <FormLabelStyled>Show Name</FormLabelStyled>
          <FormInputStyled
            type="text"
            className="form-control"
            placeholder="Type the shop name"
            value={values.shopInformation?.shopName || ""}
            name="shopName"
            onChange={handleChange}
          />
          <FormInputDescriptionStyled>
            Add the shops you like by filling up the below fields
          </FormInputDescriptionStyled>
        </Form.Group>
        {touched?.shopInformation?.shopName &&
          errors?.shopInformation?.shopName && (
            <span className="text-danger d-inline-block ms-5">
              {errors?.shopInformation?.shopName}
            </span>
          )}
      </div>
      <div className="col-xl-6 col-12 mb-6 mb-xl-0">
        <Form.Group>
          <FormLabelStyled>Shop type</FormLabelStyled>
          <Select
            id="dropdown-basic"
            options={ShopType}
            placeholder="Select Shop type"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
            value={ShopType?.find(
              (l) => l.value === values?.shopInformation?.shopType || ""
            )}
            onChange={(e: any) => handleDropDownChange("shopType", e?.value)}
          />
        </Form.Group>
        {touched?.shopInformation?.shopType &&
          errors?.shopInformation?.shopType && (
            <span className="text-danger d-inline-block ms-5">
              {errors?.shopInformation?.shopType}
            </span>
          )}
      </div>
      <div className="col-xl-6 col-12 mb-5 mb-xl-0">
        <Form.Group>
          <FormLabelStyled>Shop tag/code</FormLabelStyled>
          <FormInputStyled
            type="text"
            className="form-control"
            placeholder="Insert short code"
            value={values.shopInformation?.shopCode || ""}
            name="shopCode"
            onChange={handleChange}
          />
        </Form.Group>
        {errors &&
          touched &&
          touched?.shopInformation?.shopCode &&
          errors?.shopInformation?.shopCode && (
            <span className="text-danger d-inline-block ms-5">
              {errors?.shopInformation?.shopCode}
            </span>
          )}
      </div>
      <div className="col-12 mb-6">
        <FormInputDescriptionStyled>
          Choose the type of store you are presenting your product in alongside
          a tag for the shop. Physical store means a store that would sell your
          products physically without a web page Digital Store, means a store
          that would sell your products through a dedicated web page.{" "}
        </FormInputDescriptionStyled>
      </div>
      <div className="col-xl-6 col-12 mb-6">
        <Form.Group>
          <FormLabelStyled>Shop Country</FormLabelStyled>
          <Select
            id="dropdown-basic"
            options={countriesList}
            placeholder="Choose"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
            value={
              countriesList?.find(
                (l: any) => l.label == values?.shopInformation?.country
              ) || ""
            }
            onChange={(country: any) => {
              if (country) {
                handleDropDownChange("country", country.label);
              }
            }}
          />
        </Form.Group>
        {errors &&
          touched &&
          touched?.shopInformation?.country &&
          errors?.shopInformation?.country && (
            <span className="text-danger d-inline-block ms-5">
              {errors?.shopInformation?.country}
            </span>
          )}
      </div>
      <div className="col-xl-6 col-12 mb-6">
        <Form.Group>
          <FormLabelStyled>Shop city</FormLabelStyled>
          <Select
            id="dropdown-basic"
            options={cityData}
            placeholder="Select Shop city"
            classNamePrefix="Select"
            className="mb-2"
            styles={customStyles}
            onChange={(city: any) => {
              if (city) {
                handleDropDownChange("city", city.label);
              }
            }}
            value={
              cityData?.find(
                (l: any) => l.label == values?.shopInformation?.city
              ) || ""
            }
          />
        </Form.Group>
      </div>
      <div className="col-12 mb-6">
        <Form.Group>
          <FormLabelStyled>Shop Address</FormLabelStyled>
          <FormInputStyled
            type="text"
            className="form-control"
            placeholder="Enter address"
            value={values?.shopInformation?.address || ""}
            name="address"
            onChange={handleChange}
          />
        </Form.Group>
        <FormInputDescriptionStyled>
          Add the shops you like by filling up the below fields.
        </FormInputDescriptionStyled>
        {errors &&
          touched &&
          touched?.shopInformation?.address &&
          errors?.shopInformation?.address && (
            <span className="text-danger d-inline-block ms-5">
              {errors?.shopInformation?.address}
            </span>
          )}
      </div>
      <div className="col-12 mb-6">
        <Form.Group>
          <FormLabelStyled> Point of contact</FormLabelStyled>
          <FormInputStyled
            type="text"
            className="form-control"
            placeholder="First name and last name"
            value={values?.shopInformation?.pointOfContact || ""}
            name="pointOfContact"
            onChange={handleChange}
          />
        </Form.Group>
        <FormInputDescriptionStyled>
          Add the shops you like by filling up the below fields.
        </FormInputDescriptionStyled>
        {errors &&
          touched &&
          touched?.shopInformation?.pointOfContact &&
          errors?.shopInformation?.pointOfContact && (
            <span className="text-danger d-inline-block ms-5">
              {errors?.shopInformation?.pointOfContact}
            </span>
          )}
      </div>
      <div className="col-12 mb-6">
        <Form.Group>
          <FormLabelStyled> Email Address</FormLabelStyled>
          <FormInputStyled
            type="email"
            className="form-control"
            placeholder="Enter email address"
            value={values.shopInformation?.emailAddress || ""}
            name="emailAddress"
            onChange={handleChange}
          />
        </Form.Group>
        <FormInputDescriptionStyled>
          Add the shops you like by filling up the below fields.
        </FormInputDescriptionStyled>
        {errors &&
          touched &&
          touched?.shopInformation?.emailAddress &&
          errors?.shopInformation?.emailAddress && (
            <span className="text-danger d-inline-block ms-5">
              {errors?.shopInformation?.emailAddress}
            </span>
          )}
      </div>
      <div className="col-12 mb-6">
        <Form.Group>
          <FormLabelStyled> Phone Number</FormLabelStyled>
          <FormInputStyled
            type="tel"
            className="form-control"
            placeholder="Enter phone number"
            value={values.shopInformation?.phoneNumber || ""}
            name="phoneNumber"
            onChange={handleChange}
          />
        </Form.Group>
        <FormInputDescriptionStyled>
          Add the shops you like by filling up the below fields.
        </FormInputDescriptionStyled>
        {errors &&
          touched &&
          touched?.shopInformation?.phoneNumber &&
          errors?.shopInformation?.phoneNumber && (
            <span className="text-danger d-inline-block ms-5">
              {errors?.shopInformation?.phoneNumber}
            </span>
          )}
      </div>
      <div className="col-xl-6 col-12">
        <Form.Group>
          <FormLabelStyled> Service Fee</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            placeholder="AED 1500"
            value={values.shopInformation?.serviceFee || ""}
            name="serviceFee"
            onChange={handleChange}
          />
        </Form.Group>
        {errors &&
          touched &&
          touched?.shopInformation?.serviceFee &&
          errors?.shopInformation?.serviceFee && (
            <span className="text-danger d-inline-block ms-5">
              {errors?.shopInformation?.serviceFee}
            </span>
          )}
      </div>
      <div className="col-xl-6 col-12">
        <Form.Group>
          <FormLabelStyled>Sales Commission</FormLabelStyled>
          <FormInputStyled
            type="number"
            className="form-control"
            placeholder="10%"
            value={values.shopInformation?.salesCommission || ""}
            name="salesCommission"
            onChange={handleChange}
          />
        </Form.Group>
        {errors &&
          touched &&
          touched?.shopInformation?.salesCommission &&
          errors?.shopInformation?.salesCommission && (
            <span className="text-danger d-inline-block ms-5">
              {errors?.shopInformation?.salesCommission}
            </span>
          )}
      </div>
      <div className="col-12 mb-6">
        <FormInputDescriptionStyled>
          in this section you mention the commercial terms for your shop.
        </FormInputDescriptionStyled>
      </div>
    </>
  );
};

export default ShopInformation;
