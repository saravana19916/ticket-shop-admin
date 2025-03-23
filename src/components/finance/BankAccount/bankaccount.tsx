import React, { Fragment, useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import CustomTooltip from "../../shared/CustomTooltip";
import SelectDropDown from "../../shared/SelectDropDown";
import { GetCountries } from "react-country-state-city";
import { ButtonPrimary } from "../../styledComponents/styledButton";

const headerTable = [
  {
    id: "1",
    title: "Invoice",
  },
  {
    id: "2",
    title: "Created Date",
  },
  {
    id: "3",
    title: "Status",
  },
  {
    id: "4",
    title: "Action",
  },
];

const rowTable = [
  {
    id: "1",
    invoice: "Zelensk",
    createdDate: "25-Apr-2021",
    status: "Paid",
  },
  {
    id: "2",
    invoice: "Kim Jong",
    createdDate: "29-Apr-2022",
    status: "Pending",
  },
  {
    id: "3",
    invoice: "Obana",
    createdDate: "30-Nov-2022",
    status: "Paid",
  },
  {
    id: "4",
    invoice: "Sean Paul",
    createdDate: "01-Jan-2022",
    status: "Paid",
  },
  {
    id: "5",
    invoice: "Karizma",
    createdDate: "14-Feb-2022",
    status: "Pending",
  },
];

export const BankAccount = () => {
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

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Paid":
        return "text-success";
      case "Pending":
        return "text-danger";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="row mb-4">
        <div className="col-12 mb-3 mt-3">
          <span className="fw-600 fs-2">Bank Account</span>
        </div>
      </div>
      <Table borderless={true} responsive={true}>
        <thead>
          <tr>
            {headerTable.map((item: any) => {
              return (
                <>
                  <th
                    key={item.id}
                    style={{
                      fontWeight: "600",
                      textTransform: "unset",
                      fontSize: "14px",
                    }}
                  >
                    {item.title}
                  </th>
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rowTable.map((row: any) => {
            return (
              <>
                <tr key={row.id}>
                  <td className="text-start">
                    <Form.Check type="checkbox" label={row.invoice} />
                    {/* {row.invoice} */}
                  </td>
                  <td className="text-start"> {row.createdDate} </td>
                  <td className="text-start">
                    <span className={`${getStatusClass(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="text-start">
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn fs-6">
                        <i className="fe fe-download"></i>
                      </button>
                      <button className="btn">
                        <i className="fe fe-edit-3 fs-6"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <div className="row mb-4">
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
        <div className="col-xl-6 col-12 mb-7">
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
        <div className="col-xl-6 col-12 mb-7">
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
        </div>
        <div className="col-12 mb-7">
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
        </div>
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
export default BankAccount;
