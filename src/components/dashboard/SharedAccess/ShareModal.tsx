import React, { FC, useEffect, useState } from "react";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Select from "react-select";
import moment from "moment";
import { toast } from "react-toastify";
import { ISharedAccessDataProps } from ".";
import {
  FormInputDescriptionStyled,
  FormInputRequired,
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import CustomTooltip from "../../shared/CustomTooltip";
import DateFlatpickr from "../../shared/DateFlatpickr";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";

interface IShareAccessModal {
  show: boolean;
  handleClose: (value: boolean) => void;
  setData: any;
  data: ISharedAccessDataProps[];
  editData: ISharedAccessDataProps | undefined;
}

interface Language {
  value: string;
  label: string;
}

const languages: Language[] = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  // Add more languages as needed
];
const ticketTypeDropdown: any = [
  { value: "1", label: "Type 1" },
  { value: "2", label: "Type 2" },
  { value: "3", label: "Type 3" },
];

const ShareAccessModal: FC<IShareAccessModal> = ({
  handleClose,
  show,
  setData,
  data,
  editData,
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
      padding: "3px",
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

  const [expiryDate, setExpiryDate] = useState("");
  const [id, setId] = useState<number | null | string>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<
    Language | null | undefined
  >(null);
  const [fullName, setFullName] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [company, setCompany] = useState("");
  const [ticketType, setTicketType] = useState("1");

  const setDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0]; // Formats date as YYYY-MM-DD
    setExpiryDate(formattedDate);
  };
  const minExpiryDate = moment().format("YYYY-MM-DD");
  const todayDate = new Date();

  useEffect(() => {
    setDate();
    setSelectedLanguage({
      value: languages[0]?.value,
      label: `${getFlagEmoji(languages[0]?.value)} ${languages[0]?.label}`,
    });
  }, []);
  useEffect(() => {
    if (editData) {
      const {
        cellPhone,
        fullName,
        company,
        expireDate,
        language,
        id,
        tickets,
      } = editData;
      setCellPhone(cellPhone);
      setFullName(fullName);
      setCompany(company);
      setExpiryDate(expireDate);
      setId(id);
      setTicketType(tickets);
      let selectedLang: any = languages?.find(
        (l: Language) => l.value === language
      );
      selectedLang = {
        ...selectedLang,
        label: `${getFlagEmoji(selectedLang?.value)} ${selectedLang?.label}`,
      };
      setSelectedLanguage(selectedLang);
    } else {
      setCellPhone("");
      setFullName("");
      setCompany("");
      setExpiryDate("");
      setId(null);
      setTicketType("");
      setSelectedLanguage({
        value: languages[0]?.value,
        label: `${getFlagEmoji(languages[0]?.value)} ${languages[0]?.label}`,
      });
    }
  }, [editData]);

  const handleDateChange = (value: any) => {
    const inputDate = value;
    const year = new Date(inputDate).getFullYear();

    if (year.toString().length <= 4) {
      setExpiryDate(inputDate);
    } else {
      toast.error("Year cannot exceed four digits.");
    }
  };

  const handleDateBlur = () => {
    const selectedDate = new Date(expiryDate);
    const todayDate = new Date();
    todayDate.setDate(todayDate.getDate() - 1);
    if (selectedDate > todayDate) {
      setExpiryDate(expiryDate);
    } else {
      toast.error("Expiry date cannot be in the past.");
      setExpiryDate(new Date().toISOString().substring(0, 10));
    }
  };

  const handleLanguageChange = (selectedOption: Language | null) => {
    setSelectedLanguage(selectedOption);
  };

  const changeYear = (increment: number) => {
    const date = new Date(expiryDate);
    date.setFullYear(date.getFullYear() + increment);
    if (date >= todayDate) {
      setExpiryDate(date.toISOString().substring(0, 10));
    } else {
      toast.error("Expiry date cannot be in the past.");
    }
  };

  const getFlagEmoji = (countryCode: string) => {
    if (countryCode === "en") return "🇬🇧"; // Use UK flag for English
    if (countryCode) {
      const codePoints = countryCode
        ?.toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt(0));
      return String.fromCodePoint(...codePoints);
    }
  };

  const handleAdd = () => {
    const formData = {
      fullName,
      cellPhone,
      expiryDate,
      company,
      ticketType,
      language: selectedLanguage?.value,
      id: new Date().toISOString(),
    };

    const updatedArray = {
      fullName: formData.fullName,
      company: formData.company,
      cellPhone: formData.cellPhone,
      expireDate: formData.expiryDate,
      tickets: `${formData.ticketType}`,
      status: "ACTIVE",
      language: formData.language,
      id: formData?.id,
    };

    setData([...data, updatedArray]);
    setFullName("");
    setCellPhone("");
    setCompany("");
    setTicketType("");
    setSelectedLanguage(null);
    handleClose(false);
    setDate();
  };
  const handleUpdate = () => {
    const formData = {
      fullName,
      cellPhone,
      expiryDate,
      company,
      ticketType,
      id,
      language: selectedLanguage?.value,
      status: editData?.status,
    };

    const updatedArray = {
      fullName: formData.fullName,
      company: formData.company,
      cellPhone: formData.cellPhone,
      expireDate: formData.expiryDate,
      tickets: `${formData.ticketType}`,
      status: formData?.status,
      id: formData?.id,
      language: formData?.language,
    };
    const updatedData = data.map((item) =>
      item.id === formData.id ? updatedArray : item
    );

    setData(updatedData);
    setFullName("");
    setCellPhone("");
    setCompany("");
    setTicketType("");
    setSelectedLanguage(null);
    handleClose(false);
    setDate();
  };

  const handleChangeTicketType = (e: any) => {
    setTicketType(e?.value);
  };
  return (
    <>
      <Modal show={show} onHide={() => handleClose(false)} centered size="lg">
        <Modal.Header className="p-6">
          <Modal.Title className="w-100 text-center m-0">
            <span className="fw-600 fs-4 text-center">Share</span>
          </Modal.Title>
          <span
            className="d-flex ms-auto fs-4"
            onClick={() => {
              handleClose(false);
              setDate();
            }}
          >
            <i className="fe fe-x ms-auto"></i>
          </span>
        </Modal.Header>
        {/* <ModalHeader className="d-flex align-items-center justify-content-between border-0 mt-3">
          <ModalTitle className="fw-semibold fs-5">Share</ModalTitle>
          <div
            className="btn btn-close fs-14px"
            onClick={() => {
              handleClose(false);
              setDate();
            }}
          ></div>
        </ModalHeader> */}
        <ModalBody className="pb-0">
          <div className="row">
            <div className="col-12 mb-3">
              <div className="w-100 ps-4 fs-6 text-start p-1 py-2 rounded-1 shared-modal-alert">
                <i className="bi bi-info-circle me-2"></i>Be mindful when
                sharing data.
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <Form.Group>
                <FormLabelStyled
                  htmlFor="fullName"
                  className="d-flex align-items-center"
                >
                  Full name <FormInputRequired>*</FormInputRequired>
                </FormLabelStyled>
                <FormInputStyled
                  type="text"
                  id="fullName"
                  className="form-control"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Group>
            </div>
            {/* <div className="col-lg-6 col-12 mb-3">
              <label htmlFor="fullName" className="fw-semibold mb-0 ms-3">
                Full name *
              </label>
              <input
                type="text"
                id="fullName"
                className="form-control rounded-pill"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div> */}
            <div className="col-12 col-lg-6 mb-3">
              <Form.Group>
                <FormLabelStyled
                  htmlFor="cellPhone"
                  className="d-flex align-items-center"
                >
                  Cellphone <FormInputRequired>*</FormInputRequired>
                </FormLabelStyled>
                <div className="position-relative">
                  <PhoneInput
                    country={"us"}
                    onChange={(phone) => setCellPhone(phone)}
                    value={cellPhone}
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
                      borderRadius: "50rem 0 0 50rem",
                    }}
                    inputClass="custom-phone-input"
                  />
                </div>
              </Form.Group>
            </div>
            {/* <div className="col-lg-6 col-12 mb-3">
              <label htmlFor="cellPhone" className="fw-semibold mb-0 ms-3">
                Cellphone *
              </label>
              <Form className="CountrySelector">
                <PhoneInput
                  containerClass="me-0"
                  country={"us"}
                  inputClass="rounded-pill bg-white w-100"
                  buttonClass="bg-white pe-1"
                  buttonStyle={{
                    borderStartStartRadius: "50%",
                    borderEndStartRadius: "50%",
                  }}
                  onChange={(phone) => setCellPhone(phone)}
                  value={cellPhone}
                />
              </Form>
            </div> */}
            <div className="col-12 col-lg-6 mb-3">
              <Form.Group>
                <FormLabelStyled htmlFor="expiryDate">
                  Expiry Date <FormInputRequired>*</FormInputRequired>
                </FormLabelStyled>
                <DateFlatpickr
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(date) => handleDateChange(date)}
                  // onBlur={handleDateBlur}
                  type="date"
                />
              </Form.Group>
            </div>
            {/* <div className="col-lg-6 col-12 mb-3">
              <label htmlFor="expiryDate" className="fw-semibold mb-0 ms-3">
                Expiry Date *
              </label>
              <div className="d-flex align-items-center position-relative">
                <input
                  type="date"
                  id="expiryDate"
                  value={expiryDate}
                  min={editData ? undefined : minExpiryDate}
                  onChange={handleDateChange}
                  onBlur={handleDateBlur}
                  className="form-control mx-2 rounded-pill custom-date-input"
                  style={{ paddingLeft: "20%" }}
                />
                <i
                  className="bi bi-caret-left-fill position-absolute cursor-pointer text-gray"
                  style={{ right: "18%" }}
                  onClick={() => changeYear(-1)}
                ></i>
                <i
                  className="bi bi-caret-right-fill position-absolute cursor-pointer text-gray"
                  style={{ right: "10%" }}
                  onClick={() => changeYear(1)}
                ></i>
                <i
                  className="bi bi-calendar4 position-absolute custom-calendar-icon cursor-pointer"
                  style={{ left: "10%" }}
                  onClick={() => document.getElementById("expiryDate")?.focus()}
                ></i>
              </div>
            </div> */}
            <div className="col-12 col-lg-6 mb-3">
              <Form.Group>
                <FormLabelStyled
                  htmlFor="company"
                  className="d-flex align-items-center"
                >
                  Company
                </FormLabelStyled>
                <FormInputStyled
                  type="text"
                  id="company"
                  className="form-control"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Form.Group>
            </div>
            {/* <div className="col-lg-6 col-12 mb-3">
              <label htmlFor="company" className="fw-semibold mb-0 ms-3">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="form-control rounded-pill"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div> */}
            <div className="col-12 col-lg-6 mb-3">
              <Form.Group>
                <FormLabelStyled htmlFor="ticketTypes">
                  Ticket types
                </FormLabelStyled>
                <Select
                  id="ticketTypes"
                  options={ticketTypeDropdown}
                  placeholder="Select Type"
                  classNamePrefix="Select"
                  styles={customStyles}
                  className="mt-1"
                  value={ticketTypeDropdown?.find(
                    (l: any) => l.value === ticketType
                  )}
                  onChange={(e: any) => handleChangeTicketType(e)}
                />
                <FormInputDescriptionStyled>
                  If no ticket type is selected all ticket types will be shared
                  with this link
                </FormInputDescriptionStyled>
              </Form.Group>
            </div>
            {/* <div className="col-12 mb-3">
              <label htmlFor="ticketTypes" className="fw-semibold mb-0 ms-3">
                Ticket types
              </label>
              <select
                id="ticketTypes"
                className="form-select rounded-pill mb-1"
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value)}
              >
                <option disabled>All ticket type(s)</option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
                <option value="3">Type 3</option>
              </select>
              <span className="d-inline-block ms-3">
                If no ticket type is selected all ticket types will be shared
                with this link
              </span>
            </div> */}
            <div className="col-12 col-lg-6 mb-3">
              <Form.Group>
                <FormLabelStyled htmlFor="language">
                  Language <FormInputRequired>*</FormInputRequired>
                </FormLabelStyled>
                <Select
                  id="language"
                  options={languages.map((lang) => ({
                    ...lang,
                    label: `${getFlagEmoji(lang.value)} ${lang.label}`,
                  }))}
                  placeholder="Language"
                  classNamePrefix="Select"
                  styles={customStyles}
                  className="mt-1"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                />
              </Form.Group>
            </div>
            {/* <div className="col-12 mb-3">
              <label htmlFor="language" className="fw-semibold mb-0 ms-3">
                Language *
              </label>
              <Select
                id="language"
                placeholder="Language"
                options={languages.map((lang) => ({
                  ...lang,
                  label: `${getFlagEmoji(lang.value)} ${lang.label}`,
                }))}
                value={selectedLanguage}
                onChange={handleLanguageChange}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderRadius: "50px",
                  }),
                  option: (base) => ({
                    ...base,
                    padding: "10px 15px",
                  }),
                }}
              />
            </div> */}
          </div>
        </ModalBody>
        <Modal.Footer className="modal-footer">
          <ButtonSecondary
            style={{ minWidth: "118px " }}
            type="button"
            className="btn "
            onClick={() => {
              handleClose(false);
              setDate();
            }}
          >
            <span className="d-none d-md-block">Close</span>
          </ButtonSecondary>
          <ButtonPrimary
            style={{ minWidth: "118px " }}
            type="button"
            className="btn"
            onClick={() => {
              if (id) {
                handleUpdate();
              } else {
                handleAdd();
              }
              handleClose(false);
              setDate();
            }}
          >
            <i
              className="fa fa-arrow-right d-block d-md-none"
              aria-hidden="true"
            ></i>{" "}
            {id ? "Update" : "Add"}
          </ButtonPrimary>
        </Modal.Footer>
        {/* <ModalFooter className="gap-3 border-0">
          <div
            className="text-primary fw-semibold cursor-pointer"
            onClick={() => {
              handleClose(false);
              setDate();
            }}
          >
            <span>Close</span>
          </div>
          <Button
            className="rounded-pill px-5"
            variant="primary"
            onClick={() => {
              if (id) {
                handleUpdate();
              } else {
                handleAdd();
              }
              handleClose(false);
              setDate();
            }}
          >
            {id ? "Update" : "Add"}
          </Button>
        </ModalFooter> */}
      </Modal>
    </>
  );
};

export default ShareAccessModal;
