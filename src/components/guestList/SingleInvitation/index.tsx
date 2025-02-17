import { PlusIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, useState } from "react";
import Input from "../../shared/input";
import { Link } from "react-router-dom";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  Accordion,
  Button,
  ProgressBar,
  Form,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { MinusIcon } from "@heroicons/react/24/outline";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SingleGuestListAccordion from "./SingleGuestListAccordion";
import {
  SingleGuestInvitationFBList,
  SingleGuestInvitationList,
  SingleGuestInvitationServiceList,
  SingleGuestInvitationAddOnsList,
  SingleGuestInvitationMerchandiseList,
} from "../helpers";
import "../guest-list.css";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import CustomTabButton from "../../shared/CustomTabButton";
import { LinkButtonPrimary } from "../../styledComponents/styledButton";
import CustomTooltip from "../../shared/CustomTooltip";
import VerifyOTPModel from "./VerfiyOTPModel";
import CustomToastContainer from "../../shared/CustomToastContainer";
import { Bounce, toast, ToastContainer } from "react-toastify";
interface IProps {}
const tabList = ["All Listings", "Shows", "Mechandise", "Food & Beverage", "Hospitality", "Services"];

const index: FC<IProps> = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [userInput, setUserInput] = useState("");
  const [heading, setHeading] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  return (
    <>
      <CustomToastContainer />
      <div className="p-4">
        <div className="p-0 p-md-5">
          <div className="row">
            <div className="row mb-4">
              <BackBreadCrumb />
              <div className="col-12 mb-3 mt-3">
                <span className="fw-600 fs-2">Single Guest Invitation</span>
              </div>
            </div>
            <div>
              <form className="row g-3">
                <div className="col-12 col-md-6 mb-5">
                  <Form.Group>
                    <FormLabelStyled className="d-flex align-items-center">
                      Full Name on the Ticket
                      <CustomTooltip
                        iconMarginBottom="2px"
                        title="your name should be similar to your official ID"
                      />
                    </FormLabelStyled>{" "}
                    <FormInputStyled
                      type="text"
                      placeholder=""
                      className="form-control"
                      name="fullName"
                    />
                  </Form.Group>
                </div>
                <div className="col-12 col-md-6 mb-5">
                  <Form.Group>
                    <FormLabelStyled className="d-flex align-items-center">
                      Organization
                      <CustomTooltip
                        iconMarginBottom="2px"
                        title="insert the organization or company this invitation
                            or issued to"
                      />
                    </FormLabelStyled>{" "}
                    <FormInputStyled
                      type="text"
                      placeholder=""
                      className="form-control"
                      name="organization"
                    />
                  </Form.Group>
                </div>
                <div className="col-12 col-md-6 mb-5">
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
                <div className="col-12 col-md-6 mb-5">
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

                <div className="col-12 col-md-6 col-lg-3 mb-5">
                  <Form.Group>
                    <FormLabelStyled className="d-flex align-items-center">
                      Nationality
                    </FormLabelStyled>{" "}
                    <FormInputStyled
                      type="text"
                      placeholder=""
                      className="form-control"
                      name="organization"
                    />
                  </Form.Group>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-5">
                  <Form.Group>
                    <FormLabelStyled className="d-flex align-items-center">
                      Place of Residence
                    </FormLabelStyled>{" "}
                    <FormInputStyled
                      type="text"
                      placeholder=""
                      className="form-control"
                      name="organization"
                    />
                  </Form.Group>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-5">
                  <Form.Group>
                    <FormLabelStyled className="d-flex align-items-center">
                      Gender
                    </FormLabelStyled>{" "}
                    <FormInputStyled
                      type="text"
                      placeholder=""
                      className="form-control"
                      name="organization"
                    />
                  </Form.Group>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-5">
                  <Form.Group>
                    <FormLabelStyled className="d-flex align-items-center">
                      Age
                    </FormLabelStyled>{" "}
                    <FormInputStyled
                      type="text"
                      placeholder=""
                      className="form-control"
                      name="organization"
                    />
                  </Form.Group>
                </div>
              </form>
            </div>
            <div className="mt-5">
              <p className="mb-7">
                Choose and add the products you would like to allocate to guest
              </p>
              <TabGroup className="row px-0 py-2" selectedIndex={selectedTab}>
                <TabList
                  className="filter-container mb-5"
                  style={{ margin: "auto" }}
                >
                  {tabList.map((tabName, idx) => (
                    <Tab as={Fragment} key={idx}>
                      {({ selected }) => (
                        <CustomTabButton
                          tabName={tabName}
                          selected={selected}
                          index={idx}
                          setSelectedTab={setSelectedTab}
                        />
                      )}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels as="div" className="col-12 ">
                  <TabPanel>
                    <div className="mt-6">
                      <Accordion className="panel-default d-flex flex-column gap-4">
                        {SingleGuestInvitationList?.map((item, index) => (
                          <>
                            <SingleGuestListAccordion
                              item={item}
                              index={`${index}`}
                            />
                          </>
                        ))}
                      </Accordion>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-6">
                      <Accordion className="panel-default d-flex flex-column gap-4">
                        {SingleGuestInvitationServiceList?.map(
                          (item, index) => (
                            <>
                              <SingleGuestListAccordion
                                item={item}
                                index={`${index}`}
                              />
                            </>
                          )
                        )}
                      </Accordion>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-6">
                      <Accordion className="panel-default d-flex flex-column gap-4">
                        {SingleGuestInvitationAddOnsList?.map((item, index) => (
                          <>
                            <SingleGuestListAccordion
                              item={item}
                              index={`${index}`}
                            />
                          </>
                        ))}
                      </Accordion>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-6">
                      <Accordion className="panel-default d-flex flex-column gap-4">
                        {SingleGuestInvitationMerchandiseList?.map(
                          (item, index) => (
                            <>
                              <SingleGuestListAccordion
                                item={item}
                                index={`${index}`}
                              />
                            </>
                          )
                        )}
                      </Accordion>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-6">
                      <Accordion className="panel-default d-flex flex-column gap-4">
                        {SingleGuestInvitationFBList?.map((item, index) => (
                          <>
                            <SingleGuestListAccordion
                              item={item}
                              index={`${index}`}
                            />
                          </>
                        ))}
                      </Accordion>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <LinkButtonPrimary
                to="/single-invitation"
                className="btn mt-6"
                style={{ minWidth: "118px" }}
              >
                Invite
              </LinkButtonPrimary>
            </div>
          </div>
        </div>
      </div>
      <VerifyOTPModel
        show={showEmail}
        onClose={viewEmailClose}
        heading={heading}
        userInput={userInput}
      />
    </>
  );
};

export default index;
