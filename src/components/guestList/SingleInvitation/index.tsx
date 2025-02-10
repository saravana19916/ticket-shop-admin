import { PlusIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, useState } from "react";
import Input from "../../shared/input";
import { Link } from "react-router-dom";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import { Accordion, Button, ProgressBar } from "react-bootstrap";
import { MinusIcon } from "@heroicons/react/24/outline";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SingleGuestListAccordion from "./SingleGuestListAccordion";
import { SingleGuestInvitationList } from "../helpers";
import "../guest-list.css";
interface IProps {}
const tabList = ["Tickets", "Services", "Add ons", "Mechandise", "F&B"];

const index: FC<IProps> = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleInputChange = (value: any) => {
    setPhoneNumber(value);
  };
  return (
    <>
      <div className="center-container">
      <div className="card border p-4 rounded-16px">
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
                <div className="col-12 col-md-6">
                  <label className="form-label">Full Name on the Ticket</label>
                  <Input
                    type={"text"}
                    placeholder={""}
                    className="rounded-pill text-black fs-14px"
                    bgColorClass={""}
                    style={{ borderColor: "#B3B3B3" }}
                  />
                  <small className="text-gray">
                    your name should be simillar to your official ID
                  </small>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Organization</label>
                  <Input
                    type={"text"}
                    placeholder={""}
                    className="rounded-pill text-black fs-14px"
                    bgColorClass={""}
                    style={{ borderColor: "#B3B3B3" }}
                  />
                  <small className="text-gray">
                    insert the organization or company this invitation or issued
                    to.
                  </small>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Email Address</label>
                  <div className="position-relative">
                    <Input
                      type={"email"}
                      placeholder={""}
                      className="rounded-pill text-black fs-14px"
                      bgColorClass={""}
                      style={{ borderColor: "#B3B3B3" }}
                    />
                    <Link
                      to="#"
                      className="btn btn-default btn-pill position-absolute top-50 translate-middle-y"
                      style={{ right: "0.75rem" }}
                    >
                      verify
                    </Link>
                  </div>

                  <small className="text-gray">
                    your tickets can be sent to this email address.
                  </small>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Phone Number</label>
                  <div className="position-relative">
                    <PhoneInput
                      country={"us"}
                      inputStyle={{
                        width: "100%",
                        minHeight: "3.55rem !important",
                        fontSize: "14px",
                        color: "#000",
                        borderRadius: "50rem",
                        border: "1px solid #B3B3B3",
                        outline: "none",
                        height: "3.55rem",
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
                      verify
                    </Link>
                  </div>

                  <small className="text-gray">
                    your tickets can be sent to this phone number or its
                    associated whatsapp account.
                  </small>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                  <label className="form-label">Nationality</label>
                  <Input
                    type={"text"}
                    placeholder={""}
                    className="rounded-pill text-black fs-14px"
                    bgColorClass={""}
                    style={{ borderColor: "#B3B3B3" }}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <label className="form-label">Place of Residence</label>
                  <Input
                    type={"text"}
                    placeholder={""}
                    className="rounded-pill text-black fs-14px"
                    bgColorClass={""}
                    style={{ borderColor: "#B3B3B3" }}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <label className="form-label">Gender</label>
                  <Input
                    type={"text"}
                    placeholder={""}
                    className="rounded-pill text-black fs-14px"
                    bgColorClass={""}
                    style={{ borderColor: "#B3B3B3" }}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <label className="form-label">Age</label>
                  <Input
                    type={"text"}
                    placeholder={""}
                    className="rounded-pill text-black fs-14px"
                    bgColorClass={""}
                    style={{ borderColor: "#B3B3B3" }}
                  />
                </div>
              </form>
            </div>
            <div className="mt-5">
              <p>
                Choose and add the products you would like to allocate to guest
              </p>
              <TabGroup className="row px-0 px-md-2 px-lg-4 px-xl-4 py-2">
                <TabList className="filter-container mb-5">
                  {tabList.map((tabName, idx) => (
                    <Tab as={Fragment} key={idx}>
                      {({ selected }) => (
                        <Button
                          type="button"
                          className={`px-6 py-2 rounded-pill ${
                            selected ? "" : "bg-white text-gray border"
                          }`}
                          style={{
                            backgroundColor: `${selected ? "#ED003B" : ""}`,
                          }}
                        >
                          {tabName}
                        </Button>
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
            <Accordion
              defaultActiveKey="0"
              className="d-flex flex-column gap-4"
            >
              <Accordion.Item eventKey="0" className="border">
                <div className="d-flex p-3">
                  <div className="row align-items-center flex-fill gap-2">
                    <div className="col-12 col-md-5 col-lg-3 d-flex align-items-center gap-4">
                      <i
                        style={{ color: "#9f7e58" }}
                        className="fa fa-circle fs-3"
                        aria-hidden="true"
                      ></i>
                      <h4 className="fw-bold m-0">Bronze Ticket</h4>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                      <p className="m-0">availability</p>
                      <div className="d-flex align-items-center justify-content-between bg-light-gray px-3 py-2 rounded-pill gap-5">
                        <small className="bg-white px-4 py-1 rounded-pill w-100 text-dark">
                          420 from 1500
                        </small>
                        <h6 className="m-0 fw-bold">30.2%</h6>
                      </div>
                    </div>
                    <div className="col-6 ms-auto col-lg-2 d-flex justify-content-around bg-light-gray rounded-pill px-3 py-2 mt-4">
                      <MinusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                      <span className="fw-bold">4</span>
                      <PlusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                    </div>
                    <div className="col-6 col-lg-2 d-flex flex-column align-self-end ms-auto">
                      <h4 className="m-0 fw-bold">AED 69.00</h4>
                      <p className="m-0">net of all taxes</p>
                    </div>
                  </div>
                  <Accordion.Header></Accordion.Header>
                </div>
                <Accordion.Body>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-2">
                      <h5 className="m-0 fw-bold">Age Limit : </h5>
                      <p className="m-0">above 2 years of age</p>
                    </div>
                    <div className="w-75 d-flex flex-column gap-3">
                      <span className="d-flex border-bottom border-grey my-2"></span>
                      <h5 className="m-0 fw-bold">Inclusions</h5>
                      <div
                        className="ms-3 d-flex flex-column flex-md-row align-items-start align-items-md-center flex-wrap"
                        style={{ gap: "2rem 4rem" }}
                      >
                        <span>Access to Gold Area</span>
                        <span>Free Parking</span>
                        <span>2 Free Drinks</span>
                        <span>Access to General Food Court</span>
                        <span>Access to Gold Area</span>
                        <span>Free Parking</span>
                        <span>2 Free Drinks</span>
                        <span>Access to General Food Court</span>
                      </div>
                    </div>
                    <div className="filter-container my-5">
                      <Link to="#" className="btn btn-default btn-pill">
                        Ticket Rules
                      </Link>
                      <Link to="#" className="btn btn-default btn-pill">
                        Floor Plan
                      </Link>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="border">
                <div className="d-flex p-3">
                  <div className="row align-items-center flex-fill gap-2">
                    <div className="col-12 col-md-5 col-lg-3 d-flex align-items-center gap-4">
                      <i
                        style={{ color: "#e5e5e5" }}
                        className="fa fa-circle fs-3"
                        aria-hidden="true"
                      ></i>
                      <h4 className="fw-bold m-0">Silver Ticket</h4>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                      <p className="m-0">availability</p>
                      <div className="d-flex align-items-center justify-content-between bg-light-gray px-3 py-2 rounded-pill gap-5">
                        <small className="bg-white px-4 py-1 rounded-pill w-100 text-dark">
                          420 from 1500
                        </small>
                        <h6 className="m-0 fw-bold">30.2%</h6>
                      </div>
                    </div>
                    <div className="col-6 ms-auto col-lg-2 d-flex justify-content-around bg-light-gray rounded-pill px-3 py-2 mt-4">
                      <MinusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                      <span className="fw-bold">4</span>
                      <PlusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                    </div>
                    <div className="col-6 col-lg-2 d-flex flex-column align-self-end ms-auto">
                      <h4 className="m-0 fw-bold">AED 69.00</h4>
                      <p className="m-0">net of all taxes</p>
                    </div>
                  </div>
                  <Accordion.Header></Accordion.Header>
                </div>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="border">
                <div className="d-flex p-3">
                  <div className="row align-items-center flex-fill gap-2">
                    <div className="col-12 col-md-5 col-lg-3 d-flex align-items-center gap-4">
                      <i
                        style={{ color: "#a7a72b" }}
                        className="fa fa-circle fs-3"
                        aria-hidden="true"
                      ></i>
                      <h4 className="fw-bold m-0">Gold Ticket</h4>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                      <p className="m-0">availability</p>
                      <div className="d-flex align-items-center justify-content-between bg-light-gray px-3 py-2 rounded-pill gap-5">
                        <small className="bg-white px-4 py-1 rounded-pill w-100 text-dark">
                          420 from 1500
                        </small>
                        <h6 className="m-0 fw-bold">30.2%</h6>
                      </div>
                    </div>
                    <div className="col-6 ms-auto col-lg-2 d-flex justify-content-around bg-light-gray rounded-pill px-3 py-2 mt-4">
                      <MinusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                      <span className="fw-bold">4</span>
                      <PlusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                    </div>
                    <div className="col-6 col-lg-2 d-flex flex-column align-self-end ms-auto">
                      <h4 className="m-0 fw-bold">AED 69.00</h4>
                      <p className="m-0">net of all taxes</p>
                    </div>
                  </div>
                  <Accordion.Header></Accordion.Header>
                </div>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="border">
                <div className="d-flex p-3">
                  <div className="row align-items-center flex-fill gap-2">
                    <div className="col-12 col-md-5 col-lg-3 d-flex align-items-center gap-4">
                      <i
                        style={{ color: "#00ffff" }}
                        className="fa fa-circle fs-3"
                        aria-hidden="true"
                      ></i>
                      <h4 className="fw-bold m-0">Platinum Ticket</h4>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                      <p className="m-0">availability</p>
                      <div className="d-flex align-items-center justify-content-between bg-light-gray px-3 py-2 rounded-pill gap-5">
                        <small className="bg-white px-4 py-1 rounded-pill w-100 text-dark">
                          420 from 1500
                        </small>
                        <h6 className="m-0 fw-bold">30.2%</h6>
                      </div>
                    </div>
                    <div className="col-6 ms-auto col-lg-2 d-flex justify-content-around bg-light-gray rounded-pill px-3 py-2 mt-4">
                      <MinusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                      <span className="fw-bold">4</span>
                      <PlusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                    </div>
                    <div className="col-6 col-lg-2 d-flex flex-column align-self-end ms-auto">
                      <h4 className="m-0 fw-bold">AED 69.00</h4>
                      <p className="m-0">net of all taxes</p>
                    </div>
                  </div>
                  <Accordion.Header></Accordion.Header>
                </div>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="border">
                <div className="d-flex p-3">
                  <div className="row align-items-center flex-fill gap-2">
                    <div className="col-12 col-md-5 col-lg-3 d-flex align-items-center gap-4">
                      <i
                        style={{ color: "#ff00ff" }}
                        className="fa fa-circle fs-3"
                        aria-hidden="true"
                      ></i>
                      <h4 className="fw-bold m-0">VIP Ticket</h4>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                      <p className="m-0">availability</p>
                      <div className="d-flex align-items-center justify-content-between bg-light-gray px-3 py-2 rounded-pill gap-5">
                        <small className="bg-white px-4 py-1 rounded-pill w-100 text-dark">
                          420 from 1500
                        </small>
                        <h6 className="m-0 fw-bold">30.2%</h6>
                      </div>
                    </div>
                    <div className="col-6 ms-auto col-lg-2 d-flex justify-content-around bg-light-gray rounded-pill px-3 py-2 mt-4">
                      <MinusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                      <span className="fw-bold">4</span>
                      <PlusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                    </div>
                    <div className="col-6 col-lg-2 d-flex flex-column align-self-end ms-auto">
                      <h4 className="m-0 fw-bold">AED 69.00</h4>
                      <p className="m-0">net of all taxes</p>
                    </div>
                  </div>
                  <Accordion.Header></Accordion.Header>
                </div>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="border">
                <div className="d-flex p-3">
                  <div className="row align-items-center flex-fill gap-2">
                    <div className="col-12 col-md-5 col-lg-3 d-flex align-items-center gap-4">
                      <i
                        style={{ color: "#f90046" }}
                        className="fa fa-circle fs-3"
                        aria-hidden="true"
                      ></i>
                      <h4 className="fw-bold m-0">VIP Lounge</h4>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                      <p className="m-0">availability</p>
                      <div className="d-flex align-items-center justify-content-between bg-light-gray px-3 py-2 rounded-pill gap-5">
                        <small className="bg-white px-4 py-1 rounded-pill w-100 text-dark">
                          420 from 1500
                        </small>
                        <h6 className="m-0 fw-bold">30.2%</h6>
                      </div>
                    </div>
                    <div className="col-6 ms-auto col-lg-2 d-flex justify-content-around bg-light-gray rounded-pill px-3 py-2 mt-4">
                      <MinusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                      <span className="fw-bold">4</span>
                      <PlusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                    </div>
                    <div className="col-6 col-lg-2 d-flex flex-column align-self-end ms-auto">
                      <h4 className="m-0 fw-bold">AED 69.00</h4>
                      <p className="m-0">net of all taxes</p>
                    </div>
                  </div>
                  <Accordion.Header></Accordion.Header>
                </div>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="d-flex align-items-center justify-content-end">
              <Link
                to="/single-invitation"
                type="button"
                className="btn btn-primary rounded-pill fs-12px mt-6"
              >
                <PlusIcon className="w-4 h-4 me-1 mb-1px" />
                Invite
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default index;
