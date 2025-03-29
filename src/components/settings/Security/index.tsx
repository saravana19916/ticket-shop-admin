import { TabPanel } from "@headlessui/react";
import React, { FC, Fragment, useEffect, useState } from "react";
import { ButtonPrimary } from "../../styledComponents/styledButton";
import { Button, Form, ListGroup } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
  StyledInputDiv,
} from "../../styledComponents/styledForm";
import Password from "../../shared/password";
import CustomTooltip from "../../shared/CustomTooltip";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import VerifyOTPModel from "../../guestList/SingleInvitation/VerfiyOTPModel";
import { Bounce, toast, ToastContainer } from "react-toastify";
import CustomToastContainer from "../../shared/CustomToastContainer";

const ListItem = styled(ListGroup.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .device-info {
    display: flex;
    flex-direction: column;
  }
  &:first-child {
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
  }

  &:last-child {
    border-bottom-left-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
  }
  .logout-btn {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;

    &:hover {
      background-color: #c82333;
    }
  }
`;
interface ISecurityProps {}

const recentLogins = [
  { device: "MacBook Pro", lastUsed: "March 20, 2025 - 10:45 AM" },
  { device: "iPhone 13", lastUsed: "March 19, 2025 - 9:30 PM" },
  { device: "Windows PC", lastUsed: "March 18, 2025 - 4:15 PM" },
];

const index: FC<ISecurityProps> = ({}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const [heading, setHeading] = useState("");
  const [userInput, setUserInput] = useState("");
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

  const [isTFA, setIsTFA] = useState<boolean>(false);
  const handleTFAChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTFA(event.target.checked); // Update state with the checkbox value
  };
  return (
    <>
      <CustomToastContainer />
      <TabPanel>
        <div className="row" id="Security">
          <div className="col-lg-9 col-12 mb-7">
            <Form.Group>
              <FormLabelStyled>Username</FormLabelStyled>
              <FormInputStyled
                type="text"
                className="form-control"
                placeholder="Enter Username"
                value=""
              />
            </Form.Group>
          </div>
          <div className="col-lg-9 col-12 mb-7">
            <Form.Group>
              <FormLabelStyled>Password</FormLabelStyled>
              <div className="position-relative">
                <FormInputStyled
                  type={isPasswordVisible ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter Password"
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`position-absolute top-50 translate-middle-y align-middle fs-6 cursor-pointer ${
                    isPasswordVisible ? "ri-eye-line" : "ri-eye-off-line"
                  }`}
                  style={{ right: "20px " }}
                ></i>
              </div>
            </Form.Group>
          </div>
          <div className="col-lg-9 col-12 mb-7">
            <Form.Group>
              <StyledInputDiv className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Authentication"
                  name="Authentication"
                  value="Authentication"
                  checked={isTFA}
                  onChange={handleTFAChange}
                />
                <label
                  htmlFor="Authentication"
                  className="form-check-label ms-3"
                  style={{
                    marginTop: "7px",
                  }}
                >
                  Enable Two Factor Authentication
                  <CustomTooltip title="Two Factor Authentication with Email or Phone OTP" />
                </label>
              </StyledInputDiv>
            </Form.Group>
          </div>
          {isTFA && (
            <>
              <div className="col-lg-9 col-12 mb-7">
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
              <div className="col-lg-9 col-12 mb-7">
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
            </>
          )}

          <div className="col-lg-9 col-12 mb-7">
            <h5>Recent Login Activity</h5>
            <ListGroup>
              {recentLogins.map((login, index) => (
                <ListItem key={index}>
                  <div className="device-info">
                    <strong>{login.device}</strong>
                    <small>{login.lastUsed}</small>
                  </div>
                  <Button variant="outline-primary">Log Out</Button>
                </ListItem>
              ))}
            </ListGroup>
          </div>
          <div className="col-lg-9 col-12 mb-7 pe-0">
            <div className="float-end">
              <ButtonPrimary
                type="submit"
                className="btn"
                style={{ minWidth: "118px" }}
              >
                Submit
              </ButtonPrimary>
            </div>
          </div>
        </div>
        <VerifyOTPModel
          show={showEmail}
          onClose={viewEmailClose}
          heading={heading}
          userInput={userInput}
        />
      </TabPanel>
    </>
  );
};

export default index;
