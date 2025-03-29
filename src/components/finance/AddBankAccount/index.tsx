import React, { FC, Fragment, useEffect, useState } from "react";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
import { Form } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import CustomTooltip from "../../shared/CustomTooltip";
import SelectDropDown from "../../shared/SelectDropDown";
import { ButtonPrimary } from "../../styledComponents/styledButton";
import { GetCountries } from "react-country-state-city";

interface IProps {}
const index: FC<IProps> = () => {
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
      <div className="row mb-4">
        <BackBreadCrumb />
        <div className="col-12 mb-3 mt-3">
          <span className="fw-600 fs-2">Add Bank Account</span>
        </div>
      </div>
      <div className="row w-75">
        <div className="col-12 mb-7">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Account Holder Name <CustomTooltip title="Account Holder Name" />
            </FormLabelStyled>
            <FormInputStyled
              type="text"
              placeholder="Enter Account Holder Name"
              className="form-control"
              value=""
            />
          </Form.Group>
        </div>
        <div className="col-12 mb-7">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Bank <CustomTooltip title="Bank" />
            </FormLabelStyled>
            <SelectDropDown
              options={[{ value: "Emirates NBD", label: "Emirates NBD" }]}
              placeholder="Select Bank"
              classNamePrefix="Select"
              className="mt-1"
            />
          </Form.Group>
        </div>
        <div className="col-12 mb-7">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              IBAN Number <CustomTooltip title="IBAN Number" />
            </FormLabelStyled>
            <FormInputStyled
              type="text"
              placeholder="Enter IBAN Number"
              className="form-control"
              value=""
            />
          </Form.Group>
        </div>
        <div className="col-xl-4 col-12 mb-7">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Currency
              <CustomTooltip title="Currency" />
            </FormLabelStyled>
            <SelectDropDown
              options={[
                { value: "USD", label: "USD" },
                { value: "AED", label: "AED" },
              ]}
              placeholder="Select Currency"
              classNamePrefix="Select"
              className="mt-1"
            />
          </Form.Group>
        </div>
        <div className="col-xl-4 col-12 mb-7">
          <FormLabelStyled>
            Country <CustomTooltip title="Country" />
          </FormLabelStyled>
          <SelectDropDown
            isSearchable
            options={countriesList}
            placeholder={"Country"}
            onChange={() => {
              handleCountryChange();
            }}
            onInputChange={filterCountries}
            className="city-default fs-12px from-control placeholder-danger-subtle"
          />
        </div>
        <div className="col-xl-4 col-12 mb-7">
          <FormLabelStyled>
            City <CustomTooltip title="City" />
          </FormLabelStyled>
          <SelectDropDown
            isSearchable
            options={cityData}
            placeholder="City"
            onInputChange={filterCities}
            className="city-default fs-12px from-control placeholder-danger-subtle"
          />
        </div>
        <div className="col-12 mb-7">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Swift Code
              <CustomTooltip title="Swift Code" />
            </FormLabelStyled>
            <FormInputStyled
              type="text"
              placeholder="Enter Swift Code"
              className="form-control"
              value=""
            />
          </Form.Group>
        </div>
        {/* <div className="col-xl-6 col-12 mb-7">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Routing Code
              <CustomTooltip title="Routing Code" />
            </FormLabelStyled>
            <FormInputStyled
              type="text"
              placeholder="Enter Routing Code"
              className="form-control"
              value=""
            />
          </Form.Group>
        </div> */}
        {/* <div className="col-12 mb-7">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Intermediary Bank {"(If Any)"}
              <CustomTooltip title="Intermediary Bank" />
            </FormLabelStyled>
            <SelectDropDown
              options={[{ value: "Emirates NBD", label: "Emirates NBD" }]}
              placeholder="Select Intermediary Bank"
              classNamePrefix="Select"
              className="mt-1"
            />
          </Form.Group>
        </div> */}
        <div className="col-12 pe-0">
          <div className="float-end">
            <ButtonPrimary
              type="submit"
              className="btn"
              style={{ minWidth: "118px" }}
            >
              Add
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
