import { PlusIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, useState } from "react";
import Input from "../../shared/input";
import { Link } from "react-router-dom";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
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
import { SingleGuestInvitationList } from "../helpers";
import "../guest-list.css";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import CustomTabButton from "../../shared/CustomTabButton";
import { LinkButtonPrimary } from "../../styledComponents/styledButton";

interface IProps {}
const tabList = ["Tickets", "Services", "Add ons", "Mechandise", "F&B"];

const index: FC<IProps> = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleInputChange = (value: any) => {
    setPhoneNumber(value);
  };
  return (
    <>
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
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>
                            your name should be similar to your official ID
                          </Tooltip>
                        }
                      >
                        <i
                          style={{
                            marginBottom: "2px",
                          }}
                          className="fe fe-info d-inline-block ms-2 cursor-pointer"
                        ></i>
                      </OverlayTrigger>
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
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>
                            insert the organization or company this invitation
                            or issued to
                          </Tooltip>
                        }
                      >
                        <i
                          style={{
                            marginBottom: "2px",
                          }}
                          className="fe fe-info d-inline-block ms-2 cursor-pointer"
                        ></i>
                      </OverlayTrigger>
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
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>
                            your tickets can be sent to this email address
                          </Tooltip>
                        }
                      >
                        <i
                          style={{
                            marginBottom: "2px",
                          }}
                          className="fe fe-info d-inline-block ms-2 cursor-pointer"
                        ></i>
                      </OverlayTrigger>
                    </FormLabelStyled>{" "}
                    <div className="position-relative">
                      <FormInputStyled
                        type="text"
                        placeholder=""
                        className="form-control"
                        name="organization"
                      />
                      <Link
                        to="#"
                        className="btn btn-default btn-pill position-absolute top-50 translate-middle-y"
                        style={{ right: "0.75rem" }}
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
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>
                            your tickets can be sent to this phone number or its
                            associated whatsapp account.
                          </Tooltip>
                        }
                      >
                        <i
                          style={{
                            marginBottom: "2px",
                          }}
                          className="fe fe-info d-inline-block ms-2 cursor-pointer"
                        ></i>
                      </OverlayTrigger>
                    </FormLabelStyled>{" "}
                    <div className="position-relative">
                      <PhoneInput
                        country={"us"}
                        inputStyle={{
                          width: "100%",
                          minHeight: "3.55rem !important",
                          fontSize: "14px",
                          color: "#000",
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
              <TabGroup className="row px-0 py-2">
                <TabList className="filter-container mb-5">
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
                  {/* <AllListings listDetailsData={allListings} />
          <AllListings listDetailsData={showsListings} />
          <AllListings listDetailsData={merchandiseListings} />
          <AllListings listDetailsData={foodAndBeverageListings} />
          <AllListings listDetailsData={hospitalityListings} />
          <AllListings listDetailsData={serviceListings} /> */}
                </TabPanels>
              </TabGroup>
            </div>
            <div className="mt-6">
              <Accordion className="panel-default d-flex flex-column gap-4">
                {SingleGuestInvitationList?.map((item, index) => (
                  <>
                    <SingleGuestListAccordion item={item} index={`${index}`} />
                    {/* <GuestListAccordion item={item} index={`${index}`} /> */}
                  </>
                ))}
              </Accordion>
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
    </>
  );
};

export default index;
