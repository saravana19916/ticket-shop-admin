import { TabPanel } from "@headlessui/react";
import { FC, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import { ButtonPrimary } from "../../styledComponents/styledButton";
import ProfileImageUploader from "./ProfileImageUploader";
import SelectDropDown from "../../shared/SelectDropDown";
import { GetCountries } from "react-country-state-city";
import DateFlatpickr from "../../shared/DateFlatpickr";
import { Link } from "react-router-dom";
import CustomTooltip from "../../shared/CustomTooltip";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import VerifyOTPModel from "../../guestList/SingleInvitation/VerfiyOTPModel";
import { toast } from "react-toastify";
import CustomToastContainer from "../../shared/CustomToastContainer";

const Index: FC = () => {
  // const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({ email: "", mobile: "" });

  const [countriesList, setCountriesList] = useState([]);
  const [sliceCountry, setSliceCountry] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [cityData, setCityData] = useState([]);

  const [userInput, setUserInput] = useState("");
  const [heading, setHeading] = useState("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showEmail, setShowEmail] = useState(false);

  const viewEmailClose = () => setShowEmail(false);
  const viewEmailShow = () => {
    if (email == "") {
      toast.error("Please enter email id!");
    } else {
      setHeading("Email");
      setUserInput(email);
      setShowEmail(true);
    }
  };
  const viewPhoneShow = () => {
    if (phoneNumber == "") {
      toast.error("Please enter phone number!");
    } else {
      setHeading("Phone number");
      setUserInput(phoneNumber);
      setShowEmail(true);
    }
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumberChange = (phone: string) => {
    setPhoneNumber(phone);
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value) ? "" : "Invalid email format";
  };

  const validateMobile = (value: string) => {
    const mobileRegex = /^[0-9]{10,15}$/;
    return mobileRegex.test(value) ? "" : "Invalid mobile number";
  };

  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  //   setErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }));
  // };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(e.target.value);
    setErrors((prev) => ({ ...prev, mobile: validateMobile(e.target.value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const mobileError = validateMobile(mobile);

    if (emailError || mobileError) {
      setErrors({ email: emailError, mobile: mobileError });
    } else {
      alert("Form submitted successfully!");
    }
  };

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

  return (
    <>
      <CustomToastContainer />

      <TabPanel>
        <div className="row" id="myProfile">
          <div className="col-2">
            <ProfileImageUploader />
          </div>
          <div className="col-10">
            <Form onSubmit={handleSubmit}>
              <div className="col-lg-9 col-12 mb-6">
                <Form.Group>
                  <FormLabelStyled>First Name</FormLabelStyled>
                  <FormInputStyled type="text" className="form-control" />
                </Form.Group>
              </div>

              <div className="col-lg-9 col-12 mb-6">
                <Form.Group>
                  <FormLabelStyled>Last Name</FormLabelStyled>
                  <FormInputStyled type="text" className="form-control" />
                </Form.Group>
              </div>

              <div className="col-lg-9 col-12 mb-6">
                <Form.Group>
                  <FormLabelStyled>Username</FormLabelStyled>
                  <FormInputStyled type="text" className="form-control" />
                </Form.Group>
              </div>

              <div className="col-lg-9 col-12 mb-6">
                <Form.Group>
                  <FormLabelStyled>Date of Birth</FormLabelStyled>
                  <DateFlatpickr
                    value=""
                    type="date"
                    placeholder=""
                    onChange={() => {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </Form.Group>
              </div>

              <div className="col-lg-9 col-12 mb-6">
                <Form.Group>
                  <FormLabelStyled>Nationality</FormLabelStyled>
                  <SelectDropDown
                    options={countriesList}
                    placeholder="Select Country"
                    classNamePrefix="Select"
                    className="mb-2"
                  />
                </Form.Group>
              </div>

              <div className="col-lg-9 col-12 mb-6">
                <Form.Group>
                  <FormLabelStyled>Occupation</FormLabelStyled>
                  <SelectDropDown
                    options={[
                      { value: "Occupation", label: "Occupation" },
                      { value: "Occupation", label: "Occupation" },
                    ]}
                    placeholder="Select Occupation"
                    classNamePrefix="Select"
                    className="mt-1"
                  />
                </Form.Group>
              </div>

              <div className="col-lg-9 col-12 mb-6">
                <Form.Group>
                  <FormLabelStyled>Country of Residence</FormLabelStyled>
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
                </Form.Group>
              </div>

              <div className="col-lg-9 col-12 mb-6">
                <Form.Group>
                  <FormLabelStyled>City of Residence</FormLabelStyled>
                  <SelectDropDown
                    isSearchable
                    options={cityData}
                    placeholder="City"
                    onInputChange={filterCities}
                    className="city-default fs-12px from-control placeholder-danger-subtle"
                  />
                </Form.Group>
              </div>

              <div className="col-lg-9 col-12 mb-6">
                <Form.Group>
                  <FormLabelStyled>PO Box</FormLabelStyled>
                  <FormInputStyled type="text" className="form-control" />
                </Form.Group>
              </div>
              <div className="col-lg-9 col-12 mb-6 d-flex gap-3">
                <div className="w-100">
                  <Form.Group>
                    <FormLabelStyled className="d-flex align-items-center">
                      Email Address
                      <CustomTooltip
                        iconMarginBottom="2px"
                        title="your tickets can be sent to this email address"
                      />
                    </FormLabelStyled>{" "}
                    <div className="position-relative">
                      <FormInputStyled
                        type="email"
                        placeholder=""
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <Link
                        to="#"
                        className="btn btn-default btn-pill position-absolute top-50 translate-middle-y"
                        style={{ right: "0.75rem" }}
                        onClick={viewEmailShow}
                      >
                        Verify
                      </Link>
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="col-lg-9 col-12 mb-6 d-flex gap-3">
                <div className="w-100">
                  <Form.Group>
                    <FormLabelStyled className="d-flex align-items-center">
                      Phone Number
                      <CustomTooltip
                        iconMarginBottom="2px"
                        title="your tickets can be sent to this phone number or its
                            associated whatsapp account."
                      />
                    </FormLabelStyled>{" "}
                    <div className="position-relative">
                      <PhoneInput
                        country={"us"}
                        value={phoneNumber}
                        onChange={(phone) => handlePhoneNumberChange(phone)}
                        inputStyle={{
                          width: "100%",
                          minHeight: "3.55rem !important",
                          fontSize: "14px",
                          borderRadius: "50rem",
                          border: "1px solid #e5e7eb",
                          outline: "none",
                          height: "3.4rem",
                        }}
                        buttonStyle={{
                          background: "transparent",
                          border: "none",
                          borderRadius: "50rem 0 0 50rem", // Rounded left side of the button
                        }}
                        inputClass="custom-phone-input"
                      />
                      <Link
                        to="#"
                        className="btn btn-default btn-pill position-absolute top-50 translate-middle-y"
                        style={{ right: "0.75rem" }}
                        onClick={viewPhoneShow}
                      >
                        Verify
                      </Link>
                    </div>
                  </Form.Group>
                </div>
              </div>

              {/* Save Button */}
              <div className="col-lg-9 col-12 mb-6 text-end">
                <ButtonPrimary
                  type="submit"
                  className="btn"
                  style={{ minWidth: "118px" }}
                >
                  Update Information
                </ButtonPrimary>
              </div>
            </Form>
          </div>
        </div>
      </TabPanel>
      <VerifyOTPModel
        show={showEmail}
        onClose={viewEmailClose}
        heading={heading}
        userInput={userInput}
      />
    </>
  );
};

export default Index;
