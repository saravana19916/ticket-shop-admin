import { PlusIcon } from "@heroicons/react/24/outline";
import { Form as FormikForm, Formik } from "formik";
import React, { FC, useEffect, useState } from "react";
import * as Yup from "yup";
import { GetCountries } from "react-country-state-city";

import { Form } from "react-bootstrap";
import Select from "react-select";
import { IAddLocationProps } from "./type";
import { addListingLocationValidationSchema } from "./helper";
import { toast } from "react-toastify";
import ButtonCustom from "../../../shared/ButtonCustom";
import {
  ButtonPrimary,
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
interface IProps {}
const ManualLocationTab: FC<IProps> = ({}) => {
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
  const initialValue: IAddLocationProps = {
    locationName: undefined,
    locationWebsite: undefined,
    countryId: undefined,
    cityId: undefined,
    zipCode: undefined,
    address: undefined,
  };
  const [countriesList, setCountriesList] = useState([]);
  const [sliceCountry, setSliceCountry] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [cityData, setCityData] = useState([]);
  const handleCountryChange = () => {
    fetchCitiesByCountry();
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
    });
  }, []);
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
  const fetchCitiesFromAPI = async () => {
    const response = await fetch(
      `https://venkatmcajj.github.io/react-country-state-city/data/citiesminified.json`
    );
    const data = await response.json();
    return data;
  };
  // Function to filter cities based on user input
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
  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={(values, { resetForm }) => {
          console.log(values, "values");
          toast.success("Location added successfully!");

          resetForm();
        }}
        validationSchema={addListingLocationValidationSchema}
      >
        {({ values, handleChange, setFieldValue, errors, touched }) => (
          <>
            <FormikForm>
              <div className="col-12 mb-7 pe-0">
                <Form.Group>
                  <FormLabelStyled>Location Name</FormLabelStyled>
                  <FormInputStyled
                    type="text"
                    placeholder="Enter location or destination name"
                    className="form-control"
                    value={values?.locationName || ""}
                    name="locationName"
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.locationName && touched?.locationName && (
                  <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                    {errors?.locationName}
                  </span>
                )}
              </div>
              <div className="col-12 mb-7 pe-0">
                <Form.Group>
                  <FormLabelStyled>Location Website</FormLabelStyled>
                  <FormInputStyled
                    type="text"
                    placeholder="Enter location address"
                    className="form-control"
                    value={values?.locationWebsite || ""}
                    name="locationWebsite"
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.locationWebsite && touched?.locationWebsite && (
                  <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                    {errors?.locationWebsite}
                  </span>
                )}
              </div>
              <div className="col-12 ">
                <Form.Group>
                  <div className="row">
                    <div className="col-xl-4 col-12 mb-7 pe-0">
                      <FormLabelStyled>Country</FormLabelStyled>
                      <Select
                        isSearchable
                        styles={customStyles}
                        options={countriesList}
                        placeholder={"Country"}
                        value={
                          sliceCountry?.find(
                            (option: any) => option.value == values.countryId
                          ) || null
                        }
                        onChange={(e: any) => {
                          console.log(e, "eeee");

                          setFieldValue("countryId", e?.value);
                          handleCountryChange();
                        }}
                        onInputChange={filterCountries}
                        className="city-default fs-12px from-control placeholder-danger-subtle"
                      />
                      {errors?.countryId && touched?.countryId && (
                        <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                          {errors?.countryId}
                        </span>
                      )}
                    </div>
                    <div className="col-xl-4 col-12 mb-7 pe-0">
                      <FormLabelStyled>City </FormLabelStyled>
                      <Select
                        isSearchable
                        options={cityData}
                        placeholder={"City"}
                        value={
                          cityData?.find(
                            (option: any) => option.value === values?.cityId
                          ) || null
                        }
                        onChange={(e: any) => {
                          setFieldValue("cityId", e?.value);
                        }}
                        onInputChange={filterCities}
                        className="city-default fs-12px from-control placeholder-danger-subtle"
                        styles={customStyles}
                      />
                      {errors?.cityId && touched?.cityId && (
                        <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                          {errors?.cityId}
                        </span>
                      )}
                    </div>
                    <div className="col-xl-4 col-12 mb-7 pe-0">
                      <FormLabelStyled>Zip Code </FormLabelStyled>

                      <FormInputStyled
                        type="text"
                        placeholder="PO Box / Zip code"
                        name="zipCode"
                        value={values.zipCode || ""}
                        className="form-control"
                        onChange={handleChange}
                      />
                      {errors?.zipCode && touched?.zipCode && (
                        <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                          {errors?.zipCode}
                        </span>
                      )}
                    </div>
                  </div>
                </Form.Group>
              </div>
              <div className="col-12 mb-7 pe-0">
                <Form.Group>
                  <FormLabelStyled>Address </FormLabelStyled>
                  <FormInputStyled
                    type="text"
                    placeholder="Enter your complete address here"
                    className="form-control"
                    value={values?.address || ""}
                    name="address"
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.address && touched?.address && (
                  <span className="text-danger d-inline-block ms-5 mt-1 fs-11px">
                    {errors?.address}
                  </span>
                )}
              </div>
              <div className="col-12 pe-0">
                <div className="float-end">
                  <ButtonPrimary type="submit" className="btn">
                    <PlusIcon className="w-4 h-4 me-3 mb-1px" />
                    Add
                  </ButtonPrimary>
                </div>
              </div>
            </FormikForm>
          </>
        )}
      </Formik>
    </>
  );
};

export default ManualLocationTab;
