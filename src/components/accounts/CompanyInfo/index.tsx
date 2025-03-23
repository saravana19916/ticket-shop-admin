import { TabPanel } from "@headlessui/react";
import { FC, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ProfileImageUploader from "../MyProfile/ProfileImageUploader";
import {
  FormDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import DateFlatpickr from "../../shared/DateFlatpickr";
import SelectDropDown from "../../shared/SelectDropDown";
import { GetCountries } from "react-country-state-city";
import CustomTooltip from "../../shared/CustomTooltip";
import { ButtonPrimary } from "../../styledComponents/styledButton";

const Index: FC = () => {
  // Define Type for formData
  interface FormDataType {
    logo: string;
    name: string;
    dateOfEstablishment: string;
    country: string;
    tin: string;
    vat: string;
    registration: string;
    sector: boolean;
    address: string;
    poBox: string;
    website: string;
    shortDescription: string;
    longDescription: string;
  }

  // Initialize state with empty values
  const [formData, setFormData] = useState<FormDataType>({
    logo: "",
    name: "",
    dateOfEstablishment: "",
    country: "",
    tin: "",
    vat: "",
    registration: "",
    sector: false,
    address: "",
    poBox: "",
    website: "",
    shortDescription: "",
    longDescription: "",
  });

  const [errors, setErrors] = useState<Partial<FormDataType>>({});

  const [countriesList, setCountriesList] = useState([]);
  const [sliceCountry, setSliceCountry] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [cityData, setCityData] = useState([]);
  const handleCountryChange = () => {
    fetchCitiesByCountry();
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

  useEffect(() => {
    GetCountries().then((result: any) => {
      const data = result.map((country: any) => {
        return {
          value: country.id,
          label: country.name,
        };
      });
      setCountriesList(data);
    });
  }, []);
  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" && e.target instanceof HTMLInputElement
          ? e.target.checked
          : value,
    }));
  };

  // Validation Function
  const validate = () => {
    let tempErrors: Partial<FormDataType> = {};
    if (!formData.name) tempErrors.name = "Organization Name is required";
    if (!formData.dateOfEstablishment)
      tempErrors.dateOfEstablishment = "Date is required";
    if (!formData.country) tempErrors.country = "Country is required";
    if (!/^\d+$/.test(formData.tin)) tempErrors.tin = "TIN must be a number";
    if (!/^\d+$/.test(formData.vat)) tempErrors.vat = "VAT must be a number";
    if (!/^\d+$/.test(formData.registration))
      tempErrors.registration = "Registration must be a number";
    if (formData.shortDescription.length > 150)
      tempErrors.shortDescription = "Max 150 characters";
    if (formData.longDescription.length > 500)
      tempErrors.longDescription = "Max 500 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
    }
  };

  return (
    <TabPanel>
      <div className="row" id="myProfile">
        <div className="col-2">
          <ProfileImageUploader />
        </div>
        <div className="col-10">
          <Form onSubmit={handleSubmit}>
            {/* <Form.Group>
              <Form.Label>Organization Logo</Form.Label>
              <Form.Control type="file" name="logo" onChange={handleChange} />
            </Form.Group> */}
            <div className="col-lg-9 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Organization Name</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  // isInvalid={!!errors.name}
                  className="form-control"
                />
              </Form.Group>
            </div>
            <div className="col-lg-9 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Date of Establishment</FormLabelStyled>
                <DateFlatpickr
                  type="date"
                  placeholder=""
                  value={formData.dateOfEstablishment}
                  onChange={handleChange}
                  // isInvalid={!!errors.dateOfEstablishment}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.dateOfEstablishment}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-lg-9 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Country of Establishment</FormLabelStyled>
                <SelectDropDown
                  // name="country"
                  options={countriesList}
                  placeholder="Select Country"
                  classNamePrefix="Select"
                  className="mb-2"
                  // selectedValue={formData.country}
                  // onChange={handleChange}
                  // isInvalid={!!errors.country}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.country}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            {/* <Form.Group>
              <Form.Label>Country of Establishment</Form.Label>
              <Form.Control
                as="select"
                name="country"
                value={formData.country}
                onChange={handleChange}
                isInvalid={!!errors.country}
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.country}
              </Form.Control.Feedback>
            </Form.Group> */}
            <div className="col-lg-9 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>TIN Number</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  name="tin"
                  value={formData.tin}
                  onChange={handleChange}
                  // isInvalid={!!errors.tin}
                  className="form-control"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.tin}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            {/* <Form.Group>
              <Form.Label>TIN Number</Form.Label>
              <Form.Control
                type="text"
                name="tin"
                value={formData.tin}
                onChange={handleChange}
                isInvalid={!!errors.tin}
              />
              <Form.Control.Feedback type="invalid">
                {errors.tin}
              </Form.Control.Feedback>
            </Form.Group> */}
            <div className="col-lg-9 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>VAT Number</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  name="vat"
                  value={formData.vat}
                  onChange={handleChange}
                  // isInvalid={!!errors.vat}
                  className="form-control"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.vat}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            {/* <Form.Group>
              <Form.Label>VAT Number</Form.Label>
              <Form.Control
                type="text"
                name="vat"
                value={formData.vat}
                onChange={handleChange}
                isInvalid={!!errors.vat}
              />
              <Form.Control.Feedback type="invalid">
                {errors.vat}
              </Form.Control.Feedback>
            </Form.Group> */}
            <div className="col-lg-9 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Commercial Registration</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  name="registration"
                  value={formData.registration}
                  onChange={handleChange}
                  // isInvalid={!!errors.registration}
                  className="form-control"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.registration}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            {/* <Form.Group>
              <Form.Label>Commercial Registration</Form.Label>
              <Form.Control
                type="text"
                name="registration"
                value={formData.registration}
                onChange={handleChange}
                isInvalid={!!errors.registration}
              />
              <Form.Control.Feedback type="invalid">
                {errors.registration}
              </Form.Control.Feedback>
            </Form.Group> */}
            <div className="col-lg-9 col-12 mb-6">
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Sector/Role"
                  name="sector"
                  checked={formData.sector}
                  onChange={handleChange}
                  className="my-4"
                />
              </Form.Group>
            </div>
            <div className="col-lg-9 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>
                  Short Description
                  <CustomTooltip
                    iconMarginBottom="1px"
                    title="150 characters max"
                  />
                </FormLabelStyled>
                <FormDescriptionStyled
                  className="p-5 form-control"
                  style={{
                    height: "250px",
                  }}
                  value={formData.shortDescription}
                  onChange={handleChange}
                  maxLength={150}
                  // isInvalid={!!errors.shortDescription}
                ></FormDescriptionStyled>

                <Form.Control.Feedback type="invalid">
                  {errors.shortDescription}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            {/* <Form.Group>
              <Form.Label>Short Description (150 characters max)</Form.Label>
              <Form.Control
                as="textarea"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                maxLength={150}
                isInvalid={!!errors.shortDescription}
              />
              <Form.Control.Feedback type="invalid">
                {errors.shortDescription}
              </Form.Control.Feedback>
            </Form.Group> */}
            <div className="col-lg-9 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>
                  Long Description
                  <CustomTooltip
                    iconMarginBottom="1px"
                    title="150 characters max"
                  />
                </FormLabelStyled>
                <FormDescriptionStyled
                  className="p-5 form-control"
                  style={{
                    height: "250px",
                  }}
                  value={formData.longDescription}
                  onChange={handleChange}
                  maxLength={500}
                  // isInvalid={!!errors.longDescription}
                ></FormDescriptionStyled>

                <Form.Control.Feedback type="invalid">
                  {errors.longDescription}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            {/* <Form.Group>
              <Form.Label>Long Description (500 characters max)</Form.Label>
              <Form.Control
                as="textarea"
                name="longDescription"
                value={formData.longDescription}
                onChange={handleChange}
                maxLength={500}
                isInvalid={!!errors.longDescription}
              />
              <Form.Control.Feedback type="invalid">
                {errors.longDescription}
              </Form.Control.Feedback>
            </Form.Group> */}
            <div className="col-lg-9 col-12 mb-6 text-end">
              <ButtonPrimary
                type="submit"
                className="btn"
                style={{ minWidth: "118px" }}
              >
                Submit
              </ButtonPrimary>
            </div>
          </Form>
        </div>
      </div>
    </TabPanel>
  );
};

export default Index;
