import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../layouts/firebase/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../shared/input";
import Button from "../../shared/Button";
import facebook from "../../../assets/images/facebook.svg";
import apple from "../../../assets/images/apple.svg";
import instagram from "../../../assets/images/instagram.svg";
import google from "../../../assets/images/google.svg";
import SocialAuthButton from "../../shared/SocialAuthButton";
import CheckBoxGroup from "../../shared/CheckBoxGroup";
import InputGroup from "../../shared/InputGroup";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import AuthenticationService from "../../../service/authentication.service";
import UtilityService from "../../../service/utility.service";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../utils/i18next";
// import { Country, State, City } from "country-state-city";
// import Select, { SingleValue } from "react-select";
// import { Country, City } from "country-state-city";
import { BanknotesIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Imagesdata } from "../../../commondata/commonimages";
import {
  ButtonGroup,
  Col,
  Modal,
  Row,
  Button as BootstrapButton,
} from "react-bootstrap";
import VerificationModal from "./VerificationModal";
import ReactSelect from "react-select";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  GetCountries,
} from "react-country-state-city";
import AsyncSelect from "react-select/async";

import "react-country-state-city/dist/react-country-state-city.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import CustomToastContainer from "../../shared/CustomToastContainer";
import Password from "../../shared/password";
import VerifyOTPModel from "../../guestList/SingleInvitation/VerfiyOTPModel";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface socialSignInType {
  title: string;
  brand: string;
  href: string;
  logo: any;
  driver?: string;
}
type IModalInterface = "Language" | "Currency";

interface ICheckBoxFieldProps {
  checkBoxId: string;
  checkBoxClassName: string;
  checkBoxValue: boolean;
  checkBoxLabel: string;
  labelClassName: string;
}

export const headerLanguage = [
  {
    id: "english",
    name: "English",
    description: "United States",
  },
  {
    id: "french",
    name: "French",
    description: "France",
  },
  {
    id: "arabic",
    name: "Arabic",
    description: "Saudi Arabia",
  },
  {
    id: "german",
    name: "German",
    description: "Germany",
  },
  {
    id: "turkish",
    name: "Turkish",
    description: "Turkey",
  },
  // {
  //   id: "spanish",
  //   name: "Spanish",
  //   description: "Spain",
  // },
  // {
  //   id: "chinese",
  //   name: "Chinese",
  //   description: "China, Taiwan",
  // },
  // {
  //   id: "japanese",
  //   name: "Japanese",
  //   description: "Japan",
  // },
  // {
  //   id: "russian",
  //   name: "Russian",
  //   description: "Russia",
  // },
  // {
  //   id: "hindi",
  //   name: "Hindi",
  //   description: "India",
  // },
  // {
  //   id: "portuguese",
  //   name: "Portuguese",
  //   description: "Portugal",
  // },
  // {
  //   id: "italian",
  //   name: "Italian",
  //   description: "Italy",
  // },
];

export const headerCurrency = [
  {
    id: "EUR",
    name: "EUR",
    href: "##",
    active: true,
  },
  {
    id: "USD",
    name: "USD",
    href: "##",
  },
  {
    id: "GBF",
    name: "GBF",
    href: "##",
  },
  {
    id: "SAR",
    name: "SAR",
    href: "##",
  },
  {
    id: "QAR",
    name: "QAR",
    href: "##",
  },
];
const index = () => {
  const [err, setError] = useState("");
  const [loading, setLoader] = useState(false);
  const [data, setData] = useState({
    email: "adminreact@gmail.com",
    password: "1234567890",
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {}, [loginForm]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState("AED");
  const [activeLanguage, setActiveLanguage] = useState("English");
  const [countryId, setCountryId] = useState(0);
  const [cityList, setCityList] = useState([]);
  const [cityID, setCityId] = useState("");

  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const Login = (e: any) => {
    setLoader(true);
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        console.log(err);
        console.log(user);
        RouteChange();
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoader(false);
      });
  };
  const RouteChange = () => {
    const path = `${import.meta.env.BASE_URL}dashboard`;
    navigate(path);
  };
  // LOGIN ONCHANGE

  const _handleOnChange = (e: any, type: "email" | "password") => {
    setLoginForm((prev) => {
      return {
        ...prev,
        [type]: e.target.value,
      };
    });
    if (type === "email") {
      setEmail(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    }
  };
  // LOGIN FORM VALIDATION
  const loginSchema = z.object({
    email: z.string().min(1, "Required").email("Invalid email"),
    password: z.string().min(1, "Required"),
  });
  type loginSchemaType = z.infer<typeof loginSchema>;
  useEffect(() => {
    const user: any = AuthenticationService.authUser();
    user?.token && RouteChange();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  useEffect(() => {
    if (
      errors?.email?.message === "Required" &&
      errors?.password?.message === "Required"
    ) {
      toast.error("Email and Password are required!");
    } else if (errors?.email && errors?.email?.message) {
      if (errors?.email?.message === "Required") {
        toast.error("Email is required");
      } else toast.error(errors?.email?.message);
    } else if (errors?.password && errors?.password?.message) {
      if (errors?.password?.message === "Required") {
        toast.error("Password is required");
      } else toast.error(errors.password.message);
    }
  }, [errors]);
  const onSubmit = async (dataLogin: any) => {
    setIsLoading(true);
    try {
      const data = await AuthenticationService.login(
        dataLogin.email,
        dataLogin.password
      );
      if (data.success) {
        // toast.success(data?.message);
        UtilityService.storeResponse(data);
        setTimeout(() => {
          navigate("/dashboard");
          setIsLoading(false);
        }, 1000);
      }
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.response.data.error.message);
    }
  };
  const socialSignIn: socialSignInType[] = [
    {
      title: "Sign in with",
      brand: "Google",
      href: "",
      logo: google,
      driver: "google",
    },
    {
      title: "Sign in with",
      brand: "Apple",
      href: "",
      driver: "apple",
      logo: apple,
    },
    // {
    //   title: "Sign in with",
    //   brand: "Instagram",
    //   href: "",
    //   driver: "instagram",
    //   logo: instagram,
    // },
    // {
    //   title: "Sign in with",
    //   brand: "Facebook",
    //   href: "",
    //   logo: facebook,
    //   driver: "facebook",
    // },
  ];
  const checkBoxFields: ICheckBoxFieldProps[] = [
    {
      checkBoxId: "organizer",
      checkBoxClassName: "",
      checkBoxValue: false,
      checkBoxLabel: "organizer",
      labelClassName: "fw-semibold ms-1",
    },
    {
      checkBoxId: "destination",
      checkBoxClassName: "",
      checkBoxValue: false,
      labelClassName: "fw-semibold ms-1",
      checkBoxLabel: "destination",
    },
    {
      checkBoxId: "producer",
      checkBoxClassName: "",
      checkBoxValue: false,
      labelClassName: "fw-semibold ms-1",
      checkBoxLabel: "producer",
    },
    {
      checkBoxId: "contentOwner",
      checkBoxClassName: "",
      checkBoxValue: false,
      labelClassName: "fw-semibold ms-1",
      checkBoxLabel: "contentOwner",
    },
    {
      checkBoxId: "performer",
      checkBoxClassName: "",
      checkBoxValue: false,
      labelClassName: "fw-semibold ms-1",
      checkBoxLabel: "performer",
    },
    {
      checkBoxId: "agency",
      labelClassName: "fw-semibold ms-1",
      checkBoxClassName: "",
      checkBoxValue: false,
      checkBoxLabel: "agency",
    },
  ];

  const [selectedModalType, setSelectedModalType] =
    useState<IModalInterface>("Language");
  const navigate = useNavigate();
  const _handleOnSubmit = (e: any) => {
    e.preventDefault();
    if (!termsAndConditions) {
      toast.error("Please click terms and condition");
    }
    // navigate("/dashboard");
  };
  const [checkedType, setCheckedType] = useState<string>();
  const [promotionsAndDiscounts, setPromotionsAndDiscounts] =
    useState<boolean>(false);
  const [termsAndConditions, setTermsAndConditions] = useState<boolean>(false);
  const _handleOnClick = (
    type: "Google" | "Apple" | "Instagram" | "Facebook" | "login" | string,
    e?: any
  ) => {
    if (type === "login") {
      // navigate("/dashboard");
      return;
    } else {
      e?.preventDefault();
      navigate("/dashboard");
    }
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [verifyPhoneOtp, setVerifyPhoneOtp] = useState<string | undefined>();
  const [verifyEmailOtp, setVerifyEmailOtp] = useState<string | undefined>();
  const [otpError, setOtpError] = useState<string | undefined>();
  const [verifyType, setVerifyType] = useState<"Phone" | "Email">("Phone");
  const [cityData, setCityData] = useState([]);
  const handleShow = () => {
    setShow((prev) => {
      return !prev;
    });
  };
  const _handleShowVerifyModal = (type?: "Phone" | "Email") => {
    setShowVerifyModal((prev) => {
      return !prev;
    });
    setOtpError(undefined);
    type && setVerifyType(type);
  };
  const _handleOtpChange = (e: any) => {
    const otp = e.target.value;
    if (otp?.length === 6) {
      setOtpError(undefined);
    }
    if (verifyType === "Email") {
      setVerifyEmailOtp(otp);
    } else {
      setVerifyPhoneOtp(otp);
    }
  };
  const _handleOtpVerify = () => {
    if (verifyType === "Email") {
      const isValidOtp = verifyEmailOtp?.length === 6;
      if (isValidOtp) {
        _handleShowVerifyModal("Email");
        toast.success("Email otp verified successfully");
        setVerifyEmailOtp(undefined);
      } else {
        setOtpError("Otp should be 6 digit!");
        toast.error("Otp should be 6 digit!");
      }
    } else {
      const isValidOtp = verifyPhoneOtp?.length === 6;
      if (isValidOtp) {
        _handleShowVerifyModal("Phone");
        toast.success("Phone otp verified successfully");
        setVerifyPhoneOtp(undefined);
      } else {
        setOtpError("Otp should be 6 digit!");
        toast.error("Otp should be 6 digit!");
      }
    }
  };
  const _handleForgotPassword = () => {
    sessionStorage.setItem("forgotPassword", "true");
  };
  const [countriesList, setCountriesList] = useState([]);
  const [sliceCountry, setSliceCountry] = useState([]);

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
    const getForgotPassword = sessionStorage.getItem("forgotPassword");
    if (getForgotPassword === "true") {
      sessionStorage.removeItem("forgotPassword");
      navigate(0);
    }
  }, []);

  const handleCountryChange = (e: any) => {
    setCountryId(e.value);
    // Fetch cities based on the selected country
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
    // Replace this with actual API call
    // This is a mock function to illustrate
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

  const handleCityChange = (e: any) => {
    setCityId(e.value || null);
  };

  // const [countries, setCountries] = useState<CountryOption[]>([]);
  // const [cities, setCities] = useState<CityOption[]>([]);
  // const [selectedCountry, setSelectedCountry] = useState<string>("");
  // const [selectedCity, setSelectedCity] = useState<string>("");

  // useEffect(() => {
  //   const fetchCountries = () => {
  //     const countryList = Country.getAllCountries();
  //     const countryOptions = countryList.map((country) => ({
  //       value: country.isoCode,
  //       label: country.name,
  //     }));
  //     setCountries(countryOptions);
  //   };

  //   fetchCountries();
  // }, []);

  // useEffect(() => {
  //   if (selectedCountry) {
  //     const fetchCities = () => {
  //       const cityList = City.getCitiesOfCountry(selectedCountry);
  //       const cityOptions: any = cityList?.map((city) => ({
  //         value: city.name,
  //         label: city.name,
  //       }));
  //       setCities(cityOptions);
  //     };

  //     fetchCities();
  //   } else {
  //     setCities([]);
  //   }
  // }, [selectedCountry]);

  // const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedCountry(e.target.value);
  //   setSelectedCity(""); // Reset city when country changes
  // };

  // const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedCity(e.target.value);
  // };
  //country and city selector
  // const [countryCode, setCountryCode] = useState<string | undefined>(undefined);
  // const [cityCode, setCityCode] = useState<string | undefined>(undefined);
  // const [countryList, setCountryList] = useState<any[]>([]);
  // const [cities, setCities] = useState<any[]>([]);
  // useEffect(() => {
  //   if (countryCode) {
  //     const country = Country.getCountryByCode(countryCode);
  //     const states = State.getStatesOfCountry(country?.isoCode);
  //     let cityList: any[] = [];
  //     states.forEach((state) => {
  //       const citiesInState = City.getCitiesOfState(
  //         state.countryCode,
  //         state.isoCode
  //       );
  //       cityList = [...cityList, ...citiesInState];
  //     });
  //     console.log(cityList);

  //     const citiesOptions = cityList?.map((l: any) => {
  //       return {
  //         label: l.name,
  //         value: l.name,
  //       };
  //     });
  //     setCities(citiesOptions);
  //   } else {
  //     setCityCode(undefined);
  //     setCities([]);
  //   }
  // }, [countryCode]);
  // useEffect(() => {
  //   const countries: any = Country.getAllCountries();
  //   setCountryList(() => {
  //     return countries?.map((l: any) => {
  //       return {
  //         value: l.isoCode,
  //         label: l.name,
  //       };
  //     });
  //   });
  // }, []);
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setActiveLanguage(langCode);
    localStorage.setItem("language", langCode);
    handleShow();
  };

  const [showVerifyOTP, setShowVerifyOTP] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [heading, setHeading] = useState("");
  const [emailUser, setEmailUser] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const viewEmailClose = () => setShowVerifyOTP(false);
  const viewEmailShow = () => {
    if (emailUser == "") {
      toast.error("Please enter email id!");
    } else {
      setHeading("Email");
      setUserInput(emailUser);
      setShowVerifyOTP(true);
    }
  };
  const viewPhoneShow = () => {
    if (phoneNumber == "") {
      toast.error("Please enter phone number!");
    } else {
      setHeading("Phone number");
      setUserInput(phoneNumber);
      setShowVerifyOTP(true);
    }
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailUser(event.target.value);
  };
  const handlePhoneNumberChange = (phone: string) => {
    setPhoneNumber(phone);
  };

  useEffect(() => {
    const language = localStorage.getItem("language") || "english";
    setActiveLanguage(language);
    i18n.changeLanguage(language);
  }, []);
  return (
    <>
      <div className="custom-container">
        <VerificationModal
          showVerifyModal={showVerifyModal}
          handleShowVerifyModal={_handleShowVerifyModal}
          verifyType={verifyType}
          handleOtpChange={_handleOtpChange}
          handleOtpVerify={_handleOtpVerify}
          verifyPhoneOtp={verifyPhoneOtp}
          verifyEmailOtp={verifyEmailOtp}
          otpError={otpError}
        />
        <CustomToastContainer />
        {/* <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: "#06D001",
              },
            },
            error: {
              style: {
                background: "red",
                color: "#fff",
              },
            },
          }}
        /> */}
        <div className="container-login100">
          <div className="row mt-6 w-100">
            <div className="col-6 d-flex gap-3 align-items-center">
              <div
                className="img-fluid"
                onClick={() => {
                  navigate(0);
                }}
              >
                <img
                  src={Imagesdata("logo")}
                  className="header-brand-img desktop-logo"
                  alt="logo"
                />{" "}
              </div>
              <div
                className="d-inline-block mt-lg-2 mt-0"
                onClick={() => {
                  navigate(0);
                }}
              >
                <span className="fw-bold fs-6">Client</span>
                <br />
                <span className="fw-bold fs-6">Platform</span>
              </div>
            </div>
            <div className="col-6 pe-6">
              <div className="float-end mt-4">
                <Link className="d-block text-dark" onClick={handleShow} to="#">
                  <GlobeAltIcon className="w-5 h-5 opacity-75" />
                </Link>
              </div>
              <Modal
                className="modal fade"
                show={show}
                onHide={handleShow}
                contentClassName="rounded-5"
              >
                <Modal.Header>
                  <Modal.Title as="h6" className="fw-600 fs-5">
                    {t("chooseLanguage")}
                  </Modal.Title>
                  <span className="d-flex ms-auto" onClick={handleShow}>
                    <i className="fe fe-x ms-auto fs-4"></i>
                  </span>
                </Modal.Header>
                <Modal.Body>
                  <div className="row ">
                    {/* <div className="col-12 mb-3 text-center">
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className={`btn ${
                            selectedModalType === "Language"
                              ? "btn-primary"
                              : "btn-light"
                          }`}
                          onClick={() => setSelectedModalType("Language")}
                        >
                          Language
                        </button>
                        <button
                          type="button"
                          className={`btn ${
                            selectedModalType === "Currency"
                              ? "btn-primary"
                              : "btn-light"
                          }`}
                          onClick={() => setSelectedModalType("Currency")}
                        >
                          Currency
                        </button>
                      </div>
                    </div> */}
                    <div className="col-12">
                      {selectedModalType === "Language" ? (
                        <>
                          <div className="row g-3">
                            {headerLanguage.map((l: any) => (
                              <>
                                <div
                                  className="col-lg-6 rounded-1 col-12"
                                  onClick={() => {
                                    handleLanguageChange(l.id);
                                  }}
                                >
                                  <div
                                    className={`p-2 ${
                                      l.id === activeLanguage
                                        ? "bg-light rounded-1"
                                        : ""
                                    }`}
                                  >
                                    <h5 className="mb-0">{l.name}</h5>
                                    <small>{l.description}</small>
                                  </div>
                                </div>
                              </>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="row">
                            {headerCurrency.map((l: any) => (
                              <>
                                <div
                                  className="col-lg-6 rounded-1 col-12"
                                  onClick={() => {
                                    setActiveCurrency(l.id);
                                    handleShow();
                                  }}
                                >
                                  <div
                                    className={`p-2 ${
                                      l.id === activeCurrency
                                        ? "bg-light rounded-1"
                                        : ""
                                    }`}
                                  >
                                    <h5 className="mb-0">{l.name}</h5>
                                    <small>{l.id}</small>
                                  </div>
                                </div>
                              </>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className="row mt-3 w-100">
            <div className="col-xl-4 d-block pe-0">
              <div className=" py-6 mb-1 mt-1">
                <img
                  src={Imagesdata("tourImage")}
                  alt=""
                  style={{ borderRadius: "20px" }}
                  className="h-100 pb-3"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-5 col-12 h-100">
              <div className="mt-6 h-100">
                <form
                  className="login100-form h-100 ps-lg-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row px-xl-6">
                    <div className="col-12 mb-3">
                      <span className="fw-600 fs-4 pb-5 login-inputs">
                        {t("signIn")}
                      </span>
                    </div>
                    <div className="col-12 mb-4">
                      <Input
                        type="text"
                        placeholder="emailAddressOrMobileNumber"
                        bgColorClass="border-0"
                        style={{
                          backgroundColor: "#FEF2F4",
                          borderRadius: "50px",
                        }}
                        handleChange={(e: any) => {
                          _handleOnChange(e, "email");
                        }}
                        value={email}
                        sizeClass="px-4 py-2 ps-5"
                        {...register("email")}
                      />
                      {errors.email && (
                        <span className="w-100 text-danger">
                          {errors.email?.message}
                        </span>
                      )}
                    </div>
                    {/* <div className="col-12 mb-1">
                      <Input
                        type="password"
                        placeholder="password"
                        bgColorClass="border-0"
                        handleChange={(e: any) =>
                          _handleOnChange(e, "password")
                        }
                        sizeClass="px-4 py-2"
                        style={{ backgroundColor: "#FEF2F4" }}
                        value={password}
                        {...register("password")}
                      />
                      {errors.email && (
                        <span className="w-100 text-danger">
                          {errors.password?.message}
                        </span>
                      )}
                    </div> */}
                    <div className="col-12 mb-1">
                      <Password
                        type="password"
                        placeholder="password"
                        bgColorClass="border-0"
                        handleChange={(e: any) =>
                          _handleOnChange(e, "password")
                        }
                        sizeClass="px-4 py-2 ps-5"
                        style={{
                          backgroundColor: "#FEF2F4",
                        }}
                        value={password}
                        {...register("password")}
                      />
                      {errors.email && (
                        <span className="w-100 text-danger">
                          {errors.password?.message}
                        </span>
                      )}
                    </div>
                    <div
                      className="col-12 mb-4 text-end"
                      onClick={_handleForgotPassword}
                    >
                      <Link
                        className="d-inline-block me-2 text-gray"
                        to="/authentication/forgotpassword"
                      >
                        {t("forgotPassword?")}
                      </Link>
                    </div>
                    <div className="col-12 mb-3">
                      <Button
                        title="signIn"
                        className="bg-primary text-white w-100 text-center fs-6 p-3"
                        type="submit"
                        onClick={(e: any) => {
                          _handleOnClick("login", e);
                        }}
                        isLoading={isLoading}
                        style={{ borderRadius: "50px" }}
                      />
                    </div>
                  </div>
                  <div className="row px-xl-6">
                    <div className="col-12 mb-5 mt-3 text-center fw-semibold">
                      <span>{t("orSignInWith")}</span>
                    </div>
                  </div>
                  <div className="row px-xl-6">
                    {socialSignIn?.map((signInOptions: socialSignInType) => (
                      <>
                        <div className="col-12 mb-3">
                          <SocialAuthButton
                            className="btn-light w-100 p-3 text-start d-flex align-items-center justify-content-center gap-2"
                            title={signInOptions?.title}
                            logo={signInOptions?.logo}
                            brand={signInOptions?.brand}
                            onClick={_handleOnClick}
                            driver={signInOptions.driver}
                            // style={{ marginLeft: "120px" }}
                          />
                        </div>
                      </>
                    ))}
                  </div>
                  {/* <div className="col-12 m-3 text-center ">
                <span>
                  Don't have account?{" "}
                  <Link to="/signup" className="text-primary">
                    Sign Up Here
                  </Link>
                </span>
              </div> */}
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-md-7 col-12 mt-6 mt-md-0 pe-lg-0">
              <div className="p-0 p-md-6">
                <div className="login100-form">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <span className="fw-600 fs-4 pb-5 login-inputs">
                        {t("signUp")}
                      </span>
                    </div>
                    <div className="col-12 mb-3 mb-lg-2">
                      <Input
                        type="text"
                        placeholder={t("organizationName")}
                        bgColorClass="bg-light border-0"
                        style={{ borderRadius: "50px" }}
                        sizeClass="px-4 py-2 ps-5"
                      />
                    </div>
                    <div className="col-md-6 col-12 mb-3">
                      {/* <CountrySelect
                        onChange={(e: any) => {
                          handleCountryChange(e);
                        }}
                        placeHolder="Country"
                      /> */}
                      <ReactSelect
                        // isClearable
                        isSearchable
                        options={countriesList}
                        placeholder={t("country")}
                        value={
                          sliceCountry?.find(
                            (option: any) => option.value == Number(countryId)
                          ) || null
                        }
                        onChange={(e: any) =>
                          handleCountryChange(e ? e : undefined)
                        }
                        onInputChange={filterCountries}
                        className="city-default fs-12px from-control placeholder-danger-subtle"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            borderRadius: "50px", // Rounded corners
                            backgroundColor: "#f6f6fb",
                            border: "none",
                            padding: "4px 4px 4px 10px",
                          }),
                        }}
                      />
                    </div>
                    <div className="col-md-6 col-12 mb-3">
                      {/* <select
                        value={cityID}
                        onChange={handleCityChange}
                        className="form-select select-height bg-light border-0"
                      >
                        <option value="">Select city Mohan</option>
                        {cityList.map((city: any) => (
                          <option key={city.id} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select> */}
                      {/* <AsyncSelect
                        cacheOptions
                        loadOptions={loadOptions}
                        onChange={handleCityChange}
                        placeholder="Select city"
                        getOptionLabel={(option: any) => option.name}
                        getOptionValue={(option: any) => option.id}
                        isClearable
                      /> */}
                      <ReactSelect
                        isSearchable
                        options={cityData}
                        placeholder={t("city")}
                        value={cityData?.find(
                          (option: any) => option.value === cityID
                        )}
                        onChange={(e: any) =>
                          handleCityChange(e ? e : undefined)
                        }
                        onInputChange={filterCities}
                        className="city-default fs-12px from-control placeholder-danger-subtle"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            borderRadius: "50px", // Rounded corners
                            backgroundColor: "#f6f6fb",
                            border: "none",
                            padding: "4px 4px 4px 10px",
                          }),
                          menuPortal: (base) => ({ ...base, zIndex: 999999 }),
                          menu: (base) => ({ ...base, zIndex: 999999 }),
                          menuList: (base) => ({ ...base, zIndex: 999999 }),
                        }}
                      />
                    </div>
                    {/* <div className="col-md-6 col-12 mb-3 mb-lg-2">
                      {/* <ReactSelect
                        isClearable
                        isSearchable
                        options={countryList}
                        placeholder="Country"
                        value={
                          countryList?.find(
                            (l: any) => l.value === countryCode
                          ) || null
                        }
                        onChange={(e) =>
                          setCountryCode(e ? e.value : undefined)
                        }
                      /> */}
                    {/* <Input
                        type="text"
                        placeholder="Country"
                        bgColorClass="bg-light border-0"
                      />
                    </div>
                    <div className="col-md-6 col-12 mb-3 mb-lg-2">
                      <Input
                        type="text"
                        placeholder="City"
                        bgColorClass="bg-light border-0"
                      />  */}
                    {/* <ReactSelect
                        isClearable
                        isSearchable
                        options={cities}
                        placeholder="City"
                        value={
                          cities?.find((l: any) => l.value === cityCode) || null
                        }
                        onChange={(e) => setCityCode(e ? undefined : e.value)}
                      /> */}
                    {/* </div> */}
                    <div className="col-12 mb-3 mb-lg-2">
                      <Input
                        type="text"
                        placeholder={t("commercialRegistrationNumber")}
                        bgColorClass="bg-light border-0"
                        style={{ borderRadius: "50px" }}
                        sizeClass="px-4 py-2 ps-5"
                      />
                    </div>
                    <div className="col-12 mb-3 mb-lg-2">
                      <Input
                        type="text"
                        placeholder={t("Tax ID/ TIN / VAT")}
                        bgColorClass="bg-light border-0"
                        style={{ borderRadius: "50px" }}
                        sizeClass="px-4 py-2 ps-5"
                      />
                    </div>
                    <div className="col-12">
                      <InputGroup
                        inputClassName="p-4 bg-light border-0 ps-5"
                        inputStyle=""
                        inputType="email"
                        inputPlaceholder={t("emailAddress")}
                        inputGroupId="emailVerify"
                        buttonClassName="bg-primary text-white  p-3 px-5 border-0"
                        buttonType="submit"
                        buttonTitle={t("verify")}
                        handleAction={viewEmailShow}
                        inputValue={emailUser}
                        handleChange={handleEmailChange}
                      />
                    </div>
                    <div className="col-12 mb-2">
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
                          inputClass="form-control bg-light border-0 "
                        />
                        <Link
                          to="#"
                          className="btn bg-primary text-white text-center  p-3 px-5 border-0 position-absolute top-0 right-0 h-100"
                          style={{
                            right: "0",
                            borderRadius: "0px 50px 50px 0px",
                          }}
                          onClick={viewPhoneShow}
                        >
                          <span className="d-inline-block mt-1">Verify</span>
                        </Link>
                      </div>
                      {/* <InputGroup
                        inputClassName="p-4 bg-light border-0 ps-5"
                        inputStyle=""
                        inputType="text"
                        inputPlaceholder={t("mobileNumberWithCountryCode")}
                        inputGroupId="mobileVerify"
                        buttonClassName="bg-primary text-white p-3 px-5 border-0"
                        buttonType="submit"
                        buttonTitle={t("verify")}
                        handleAction={() => {
                          _handleShowVerifyModal("Phone");
                        }}
                      /> */}
                    </div>
                    <div className="col-12 my-3 mx-1">
                      <div className="row">
                        {checkBoxFields?.map((l: ICheckBoxFieldProps) => (
                          <>
                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                              <CheckBoxGroup
                                checkBoxId={l.checkBoxId}
                                checkBoxClassName={l.checkBoxClassName}
                                checkBoxValue={checkedType === l.checkBoxId}
                                checkBoxLabel={l.checkBoxLabel}
                                handleCheckboxChange={(e: string | undefined) =>
                                  setCheckedType(e)
                                }
                                labelClassName={l.labelClassName}
                              />
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                    <div className="col-12 mb-3 mx-1">
                      <CheckBoxGroup
                        checkBoxId="promotionsAndDiscounts"
                        checkBoxClassName={""}
                        checkBoxValue={promotionsAndDiscounts}
                        checkBoxLabel="iWantToInformedAboutSpecialPromotions&Discounts"
                        labelClassName="text-gray ms-1 fs-10px"
                        handleCheckboxChange={(e: string | undefined) => {
                          if (e) {
                            setPromotionsAndDiscounts(true);
                          } else setPromotionsAndDiscounts(false);
                        }}
                      />
                    </div>
                    <div className="col-12 mb-3 mx-1">
                      <CheckBoxGroup
                        checkBoxId="termsAndConditions"
                        checkBoxClassName={""}
                        checkBoxValue={termsAndConditions}
                        checkBoxLabel="bySigningUpIAgreeToThe"
                        checkBoxLabelLink="termsAndConditions"
                        labelClassName="text-gray ms-1 fs-10px"
                        handleCheckboxChange={(e: string | undefined) => {
                          if (e) {
                            setTermsAndConditions(true);
                          } else setTermsAndConditions(false);
                        }}
                      />
                    </div>
                    <div className="col-12 mb-3 mb-lg-2">
                      <Button
                        title="signUp"
                        className="bg-primary text-white w-100 text-center fs-6 p-3"
                        type="submit"
                        onClick={(e: any) => _handleOnSubmit(e)}
                        style={{ borderRadius: "50px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3 w-100 border-top border-bottom">
            <div className="col-md-2 col-lg-2 col-xl-2 pt-3 d-none d-md-block d-lg-block d-xl-block"></div>
            <div className="col-md-10 col-12 pt-3 px-md-0 px-6">
              <p className="fs-6 fw-normal">
                {t("doYouNeedSomeHelp?")}{" "}
                <a href="#">
                  <u>{t("chatWithUs")}</u>
                </a>{" "}
                {t("orCallUsOn")} xxx xxxx
              </p>
            </div>
          </div>
          <div className="row mb-2 w-100 border-bottom">
            <div className="col-md-2 col-lg-2 col-xl-2 pt-3 d-none d-md-block d-lg-block d-xl-block pb-3"></div>
            <div className="col-md-10 col-12 px-md-0 px-6 pb-3">
              <small className="fs-6 d-block mb-3">
                {t(
                  "Tixbox online shop uses industry-standard encryption to protect the confidentiality of the information you submit, learn more about our"
                )}{" "}
                <a href="#">
                  <u>{t("securityPolicy")}</u>
                </a>
              </small>
              <div className="row">
                <div className="col-12 col-lg-4 mb-1">
                  <span>
                    {t("copyright")} (c) 2013 Tixbox.com.{" "}
                    {t("allRightsReserved")}.
                  </span>
                </div>
                <div className="col-12 col-lg-7 d-none d-lg-block">
                  <span>
                    <a href="#" className="text-dark">
                      {t("privacyPolicy")}
                    </a>
                    &nbsp; &nbsp;|&nbsp; &nbsp;
                    <a href="#" className="text-dark">
                      {t("termsOfUse")}
                    </a>
                    &nbsp; &nbsp;|&nbsp;&nbsp;
                    <a href="#" className="text-dark">
                      {t("sales&Refunds")}
                    </a>
                    &nbsp; &nbsp;|&nbsp;&nbsp;
                    <a href="#" className="text-dark">
                      {t("legal")}
                    </a>
                    &nbsp; &nbsp;|&nbsp;&nbsp;
                    <a href="#" className="text-dark">
                      {t("siteMap")}
                    </a>
                  </span>
                </div>
                <div className="col-12 d-block mt-3 d-lg-none">
                  <div className="row gap-2">
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                      <a href="#" className="text-dark">
                        {t("privacyPolicy")}
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                      <a href="#" className="text-dark">
                        {t("termsOfUse")}
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                      <a href="#" className="text-dark">
                        {t("sales&Refunds")}
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                      <a href="#" className="text-dark">
                        {t("legal")}
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                      <a href="#" className="text-dark">
                        {t("siteMap")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VerifyOTPModel
        show={showVerifyOTP}
        onClose={viewEmailClose}
        heading={heading}
        userInput={userInput}
      />
    </>
  );
};

export default index;
