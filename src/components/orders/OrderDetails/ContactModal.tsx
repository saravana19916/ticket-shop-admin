import React, { FC, useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";
import { FaPencilAlt, FaSave } from "react-icons/fa";
import { IOrderDetailsModalType } from ".";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import SelectDropDown from "../../shared/SelectDropDown";
import DateFlatpickr from "../../shared/DateFlatpickr";
import { GetCountries } from "react-country-state-city";

interface IProps {
  handleClose: () => void;
  activeModal: IOrderDetailsModalType | null;
}

const ContactModal: FC<IProps> = ({ handleClose, activeModal }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Youssef",
    lastName: "Ibrahim",
    email: "ib.youssef@outlook.com",
    mobile: "+97455439646",
    street: "",
    houseNumber: "",
    country: "Qatar",
    city: "",
    zipcode: "",
    gender: "M",
    dateOfBirth: "",
    customField1: "",
    customField2: "",
    customField3: "",
  });

  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [gender, setGender] = useState<{ label: string; value: string }[]>([]);
  const [selectedGender, setSelectedGender] = useState<{ label: string; value: string } | null>(null);

  useEffect(() => {
    GetCountries().then((result: any) => {
      const data = result.map((country: any) => {
        return {
          value: country.id,
          label: country.name,
        };
      });
      setCountriesList(data);

      if (data.length > 0) {
        setSelectedCountry(data[0]);
      }
    });

    const genderData = [
      { label: "Male", value: "M" },
      { label: "Female", value: "F" }
    ];
    
    setGender(genderData);
    setSelectedGender(genderData[0]);
  }, []);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };  

  return (
    <Modal show={activeModal === "contact"} onHide={handleClose} centered size="lg">
      <Modal.Header className="d-flex justify-content-end">
        <Modal.Title className="d-flex align-items-center justify-content-between gap-2 my-4 w-100">
          <div className="d-flex flex-column gap-1">
            <div className="d-flex align-items-center gap-2">Contact</div>
          </div>
        </Modal.Title>
        <span className="d-flex align-items-center justify-content-center cursor-pointer" onClick={handleClose} style={{ width: "40px", height: "40px" }}>
          <i className="fe fe-x fs-4"></i>
        </span>
      </Modal.Header>
      <Modal.Body>
        <div className="row m-3">
          <div className="col-8 p-0">
            <span className="text-danger mb-0">
              To personalize tickets in this order, please download the order and personalize the tickets in the PDF.
            </span>
          </div>
          <div className="col-4 text-end">
            {!isEditing ? (
              <div className="text-info cursor-pointer" onClick={handleEditToggle}>
                <FaPencilAlt /> <span className="ms-2">Edit</span>
              </div>
            ) : (
              <div className="d-flex align-items-center gap-3">
                <span className="cursor-pointer text-info">
                  Cancel
                </span>
                <div className="cursor-pointer text-info d-flex align-items-center" onClick={handleEditToggle}>
                  <FaSave />
                  <span className="ms-2">Save Changes</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-3">
          <div className="row mb-md-5">
            <div className="col-md-6">
              <Form.Group>
                <FormLabelStyled>First name</FormLabelStyled>
                {isEditing ? (
                  <FormInputStyled type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} />
                ) : (
                  <p>{formData.firstName || "-"}</p>
                )}
              </Form.Group>              
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>Last name</FormLabelStyled>
                {isEditing ? (
                  <FormInputStyled type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} />
                ) : (
                  <p>{formData.lastName || "-"}</p>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-md-5">
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>Email</FormLabelStyled>
                {isEditing ? (
                  <FormInputStyled type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                ) : (
                  <p>{formData.email || "-"}</p>
                )}
              </Form.Group>              
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>Mobile number</FormLabelStyled>
                {isEditing ? (
                  <FormInputStyled type="text" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} />
                ) : (
                  <p>{formData.mobile || "-"}</p>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-md-5">
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>Street</FormLabelStyled>
                {isEditing ? (
                  <FormInputStyled type="text" className="form-control" name="street" value={formData.street} onChange={handleChange} />
                ) : (
                  <p>{formData.street || "-"}</p>
                )}
              </Form.Group>              
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>House number</FormLabelStyled>
                {isEditing ? (
                  <FormInputStyled type="text" className="form-control" name="houseNumber" value={formData.houseNumber} onChange={handleChange} />
                ) : (
                  <p>{formData.houseNumber || "-"}</p>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-md-5">
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>Country</FormLabelStyled>
                {isEditing ? (
                  <SelectDropDown
                    options={countriesList}
                    placeholder="Select Country"
                    classNamePrefix="Select"
                    className="mb-2"
                    selectedValue={selectedCountry}
                  />
                ) : (
                  <p>{formData.country || "-"}</p>
                )}
              </Form.Group>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>City</FormLabelStyled>
                {isEditing ? (
                  <FormInputStyled type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
                ) : (
                  <p>{formData.city || "-"}</p>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-md-5">
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>Zipcode</FormLabelStyled>
                {isEditing ? (
                  <FormInputStyled type="text" className="form-control" name="zipcode" value={formData.zipcode} onChange={handleChange} />
                ) : (
                  <p>{formData.zipcode || "-"}</p>
                )}
              </Form.Group>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>Gender</FormLabelStyled>
                {isEditing ? (
                  <SelectDropDown
                    options={gender}
                    placeholder="Select Gender"
                    classNamePrefix="Select"
                    className="mb-2"
                    selectedValue={selectedGender}
                  />
                ) : (
                  <p>{formData.gender || "-"}</p>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-md-5">
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>Date of Birth</FormLabelStyled>
                {isEditing ? (
                  <DateFlatpickr
                    type="date"
                    placeholder=""
                    value={formData.dateOfBirth}
                    onChange={() => {handleChange}}
                  />
                ) : (
                  <p>{formData.dateOfBirth || "-"}</p>
                )}
              </Form.Group>              
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>custom_field</FormLabelStyled>
                {isEditing ? (
                  <FormInputStyled type="text" className="form-control" name="customField1" value={formData.customField1} onChange={handleChange} />
                ) : (
                  <p>{formData.customField1 || "-"}</p>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-md-5">
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>custom_field</FormLabelStyled>
                {isEditing ? (
                  <FormInputStyled type="text" className="form-control" name="customField2" value={formData.customField2} onChange={handleChange} />
                ) : (
                  <p>{formData.customField2 || "-"}</p>
                )}
              </Form.Group>              
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <Form.Group>
                <FormLabelStyled>custom_field</FormLabelStyled>
                {isEditing ? (
                  <FormInputStyled type="text" className="form-control" name="customField3" value={formData.customField3} onChange={handleChange} />
                ) : (
                  <p>{formData.customField3 || "-"}</p>
                )}
              </Form.Group>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
