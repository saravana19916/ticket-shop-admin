import React, { FC, Fragment, useState } from "react";
import {
  Card,
  Nav,
  Dropdown,
  InputGroup,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { onlineusers } from "../../commondata/commondata";
import { Imagesdata } from "../../commondata/commonimages";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../styledComponents/styledButton";

interface IProps {}
const index: FC<IProps> = () => {
  return (
    <>
      <div className="row mb-4">
        <div className="col-12 mb-3 mt-3">
          <span className="fw-600 fs-2">Chat</span>
        </div>
      </div>
      <Row className="row-sm">
        <Col sm={12} md={12} lg={12} xl={4}>
          <Card className="overflow-hidden">
            <div className="main-content-app pt-0 main-chat-2">
              <PerfectScrollbar>
                <div className="main-content-left main-content-left-chat">
                  <Card.Body className="d-flex">
                    <h6 className="fw-semibold mb-0">Messages</h6>
                  </Card.Body>
                  <Card.Body>
                    <InputGroup>
                      <FormControl type="text" placeholder="Search ..." />
                      <Button variant="primary" className="input-group-text">
                        <i className="fe fe-search"></i>
                      </Button>
                    </InputGroup>
                    <PerfectScrollbar>
                      <div className="main-chat-contacts-wrapper d-none d-sm-block">
                        <Form.Label className="mb-2 fs-13">Online</Form.Label>

                        <div className="lSSlideOuter main-chat-contacts-slider">
                          <div className="main-chat-contacts-slider lSSlideWrapper usingCss">
                            <div
                              className="main-chat-contacts lightSlider lsGrab lSSlide ps-0"
                              id="chatActiveContacts"
                            >
                              {onlineusers.map((onlineuser) => (
                                <div
                                  className="lslide active position-relative"
                                  key={Math.random()}
                                >
                                  <img
                                    className="avatar avatar-md cover-image rounded"
                                    alt="user5"
                                    src={onlineuser.src1}
                                  />
                                  <span
                                    className={`avatar-status bg-${onlineuser.color}`}
                                  ></span>
                                  <small></small>
                                </div>
                              ))}
                              <div className="lslide position-relative">
                                <div className="avatar avatar-md bradius text-primary">
                                  <i className="fe fe-plus"></i>
                                </div>
                                <small>More</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PerfectScrollbar>
                  </Card.Body>
                  <div className="tabs-menu1">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="msg"
                    >
                      <Nav as="ul" variant="" className="px-4">
                        <Nav.Item as="li">
                          <Nav.Link eventKey="msg">
                            <i className="fe fe-mail"></i> Chat
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link eventKey="grp">
                            <i className="fe fe-users"></i> Groups
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link eventKey="cnts">
                            <i className="fe fe-phone-call"></i> Contacts
                          </Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item as="li">
                          <Nav.Link eventKey="net"> Networks</Nav.Link>
                        </Nav.Item> */}
                      </Nav>
                      <Tab.Content className=" main-chat-list flex-2">
                        <Tab.Pane eventKey="msg">
                          <div className="main-chat-list tab-pane">
                            <Link className="media new border-top-0" to="#">
                              <div className="main-img-user online">
                                <img alt="user5" src={Imagesdata("users5")} />
                              </div>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Raymart Santiago</span>{" "}
                                  <span>10 min</span>
                                </div>
                                <p> Hey! there I'm available </p>
                              </div>
                            </Link>
                            <Link className="media new" to="#">
                              <div className="main-img-user">
                                <img alt="user6" src={Imagesdata("users6")} />{" "}
                                <span>3</span>
                              </div>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Ariana Monino</span> <span>30 min</span>
                                </div>
                                <p>Good Morning</p>
                              </div>
                            </Link>
                            <Link className="media selected" to="#">
                              <div className="main-img-user online">
                                <img alt="user9" src={Imagesdata("users9")} />
                              </div>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Reynante Labares</span>{" "}
                                  <span>9.40 am</span>
                                </div>
                                <p> Nice to meet you </p>
                              </div>
                            </Link>
                            <Link className="media new" to="#">
                              <span className="avatar avatar-md brround bg-danger-transparent text-danger">
                                J
                              </span>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Joyce Chua</span> <span>11.20 am</span>
                                </div>
                                <p> Hi, How are you? </p>
                              </div>
                            </Link>
                            <Link className="media new" to="#">
                              <div className="main-img-user">
                                <img alt="user4" src={Imagesdata("users4")} />
                              </div>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Rolando Paloso</span>{" "}
                                  <span>1.38 pm</span>
                                </div>
                                <p> Hey! there I'm available </p>
                              </div>
                            </Link>
                            <Link className="media new" to="#">
                              <div className="main-img-user">
                                <div className="avatar avatar-md brround bg-primary-transparent text-primary">
                                  D
                                </div>
                                <span>1</span>
                              </div>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Dexter dela Cruz</span>{" "}
                                  <span>4.08 pm</span>
                                </div>
                                <p>Typing...</p>
                              </div>
                            </Link>
                            <Link className="media new" to="#">
                              <div className="main-img-user">
                                <img alt="user21" src={Imagesdata("users21")} />
                              </div>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Maricel Villalon</span>{" "}
                                  <span>8.09 pm</span>
                                </div>
                                <p> Hey! there I'm available </p>
                              </div>
                            </Link>
                            <Link className="media new" to="#">
                              <span className="avatar avatar-md brround bg-success-transparent text-success">
                                M
                              </span>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Maryjane Pechon</span>{" "}
                                  <span>1 day ago</span>
                                </div>
                                <p>I have some work</p>
                              </div>
                            </Link>
                            <Link className="media new" to="#">
                              <div className="main-img-user">
                                <img alt="user5" src={Imagesdata("users5")} />
                              </div>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Lovely Dela Cruz</span>{" "}
                                  <span>3 days ago</span>
                                </div>
                                <p>I have some work</p>
                              </div>
                            </Link>
                            <Link className="media new" to="#">
                              <div className="avatar avatar-md brround bg-secondary-transparent">
                                <i className="fe fe-user text-secondary"></i>
                              </div>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Daniel Padilla</span>{" "}
                                  <span>5 days ago</span>
                                </div>
                                <p>I have some work</p>
                              </div>
                            </Link>
                            <Link className="media new" to="#">
                              <div className="main-img-user">
                                <img alt="user3" src={Imagesdata("users3")} />
                              </div>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>John Pratts</span>{" "}
                                  <span>20/06/2021</span>
                                </div>
                                <p>I have some work</p>
                              </div>
                            </Link>
                            <Link className="media new" to="#">
                              <div className="main-img-user">
                                <img alt="user7" src={Imagesdata("users7")} />
                              </div>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Socrates Itumay</span>{" "}
                                  <span>18/07/2021</span>
                                </div>
                                <p> Hey! there I'm available </p>
                              </div>
                            </Link>
                            <Link className="media new border-bottom-0" to="#">
                              <div className="main-img-user">
                                <img alt="user6" src={Imagesdata("users6")} />
                              </div>
                              <div className="media-body">
                                <div className="media-contact-name">
                                  <span>Samuel Lerin</span>{" "}
                                  <span>29/07/2021</span>
                                </div>
                                <p> Hey! there I'm available </p>
                              </div>
                            </Link>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="grp">
                          <div className="tab-content main-chat-list flex-2 ">
                            <Link
                              to="#"
                              className="d-flex align-items-center media border-top-0"
                            >
                              <div className="mb-0 me-2">
                                <div className="main-img-user online text-primary">
                                  <img alt="user4" src={Imagesdata("users4")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Web Designers</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                {" "}
                                <i className="contact-status text-primary fe fe-user-plus"></i>{" "}
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="d-flex align-items-center media"
                            >
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user4" src={Imagesdata("users4")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Project 2020</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                {" "}
                                <i className="contact-status text-primary fe fe-user-plus"></i>{" "}
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="d-flex align-items-center media"
                            >
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user9" src={Imagesdata("users9")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Project 2021</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                {" "}
                                <i className="contact-status text-primary fe fe-user-plus"></i>{" "}
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="d-flex align-items-center media"
                            >
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img
                                    alt="user12"
                                    src={Imagesdata("users12")}
                                  />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Freshers</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                {" "}
                                <i className="contact-status text-primary fe fe-user-plus"></i>{" "}
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="d-flex align-items-center media"
                            >
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user6" src={Imagesdata("users6")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Experienced</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                {" "}
                                <i className="contact-status text-primary fe fe-user-plus"></i>{" "}
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="d-flex align-items-center media"
                            >
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user7" src={Imagesdata("users7")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Freelancer</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                {" "}
                                <i className="contact-status text-primary fe fe-user-plus"></i>{" "}
                              </div>
                            </Link>
                            <div className="text-center p-5">
                              <Link to="#" className="btn btn-outline-primary">
                                Create New Group
                              </Link>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="cnts">
                          <div>
                            <div className="py-4 px-6 fw-bold">A</div>
                            <div className="d-flex align-items-center media">
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user3" src={Imagesdata("users3")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Anna Sthesia</span>
                                    <span></span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="text-muted fs-13">Home</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                <i className="contact-status text-primary fe fe-message-square me-2"></i>
                                <i className="contact-status text-success fe fe-phone-call me-2"></i>
                                <i className="contact-status text-danger fe fe-video me-2"></i>
                              </div>
                            </div>
                            <div className="d-flex align-items-center media">
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user9" src={Imagesdata("users9")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Abraham Clark</span>
                                    <span></span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="text-muted fs-13">Mobile</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                <i className="contact-status text-primary fe fe-message-square me-2"></i>
                                <i className="contact-status text-success fe fe-phone-call me-2"></i>
                                <i className="contact-status text-danger fe fe-video me-2"></i>
                              </div>
                            </div>
                            <div className="d-flex align-items-center media">
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user4" src={Imagesdata("users4")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Anderson</span>
                                    <span></span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="text-muted fs-13">Office</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                <i className="contact-status text-primary fe fe-message-square me-2"></i>
                                <i className="contact-status text-success fe fe-phone-call me-2"></i>
                                <i className="contact-status text-danger fe fe-video me-2"></i>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="py-4 px-6 fw-bold">B</div>
                            <div className="d-flex align-items-center media">
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user5" src={Imagesdata("users5")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Bernadette</span>
                                    <span></span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="text-muted fs-13">Mobile</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                <i className="contact-status text-primary fe fe-message-square me-2"></i>
                                <i className="contact-status text-success fe fe-phone-call me-2"></i>
                                <i className="contact-status text-danger fe fe-video me-2"></i>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="py-4 px-6 fw-bold">C</div>
                            <div className="d-flex align-items-center media">
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="" src={Imagesdata("users5")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Cameron Watson</span>
                                    <span></span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="text-muted fs-13">Home</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                <i className="contact-status text-primary fe fe-message-square me-2"></i>
                                <i className="contact-status text-success fe fe-phone-call me-2"></i>
                                <i className="contact-status text-danger fe fe-video me-2"></i>
                              </div>
                            </div>
                            <div className="d-flex align-items-center media">
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="" src={Imagesdata("users21")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Christopher Arnold</span>
                                    <span></span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="text-muted fs-13">Mobile</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                <i className="contact-status text-primary fe fe-message-square me-2"></i>
                                <i className="contact-status text-success fe fe-phone-call me-2"></i>
                                <i className="contact-status text-danger fe fe-video me-2"></i>
                              </div>
                            </div>
                            <div className="d-flex align-items-center media">
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user2" src={Imagesdata("users2")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Clarkson Gray</span>
                                    <span></span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="text-muted fs-13">Home</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                <i className="contact-status text-primary fe fe-message-square me-2"></i>
                                <i className="contact-status text-success fe fe-phone-call me-2"></i>
                                <i className="contact-status text-danger fe fe-video me-2"></i>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="py-4 px-6 fw-bold">D</div>
                            <div className="d-flex align-items-center media">
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user7" src={Imagesdata("users7")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Deirdre Short</span>
                                    <span></span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="text-muted fs-13">Home</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                <i className="contact-status text-primary fe fe-message-square me-2"></i>
                                <i className="contact-status text-success fe fe-phone-call me-2"></i>
                                <i className="contact-status text-danger fe fe-video me-2"></i>
                              </div>
                            </div>
                            <div className="d-flex align-items-center media">
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img
                                    alt="user12"
                                    src={Imagesdata("users12")}
                                  />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Dylan Gill</span>
                                    <span></span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="text-muted fs-13">Mobile</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                <i className="contact-status text-primary fe fe-message-square me-2"></i>
                                <i className="contact-status text-success fe fe-phone-call me-2"></i>
                                <i className="contact-status text-danger fe fe-video me-2"></i>
                              </div>
                            </div>
                            <div className="d-flex align-items-center media">
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user1" src={Imagesdata("users1")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Donna Davies</span>
                                    <span></span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="text-muted fs-13">Office</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                <i className="contact-status text-primary fe fe-message-square me-2"></i>
                                <i className="contact-status text-success fe fe-phone-call me-2"></i>
                                <i className="contact-status text-danger fe fe-video me-2"></i>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="py-4 px-6 fw-bold">E</div>
                            <div className="d-flex align-items-center media">
                              <div className="mb-0 me-2">
                                <div className="main-img-user online">
                                  <img alt="user4" src={Imagesdata("users4")} />{" "}
                                  <span>2</span>
                                </div>
                              </div>
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-2">
                                  <div className="media-contact-name">
                                    <span>Elizabeth Scott</span>
                                    <span></span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="text-muted fs-13">Office</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-auto">
                                <i className="contact-status text-primary fe fe-message-square me-2"></i>
                                <i className="contact-status text-success fe fe-phone-call me-2"></i>
                                <i className="contact-status text-danger fe fe-video me-2"></i>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="net">
                          <div>
                            <div className="d-flex py-4 px-6 fw-bold">
                              <span>Networks</span>
                              <div className="ms-auto">
                                <i className="fe fe-plus"></i>
                              </div>
                            </div>
                            <Link to="#" className="align-items-center media">
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-4">
                                  <div className="media-contact-name">
                                    <span>Work</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                            <Link to="#" className="align-items-center media">
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-4">
                                  <div className="media-contact-name">
                                    <span>Freelancer</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                            <Link to="#" className="align-items-center media">
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-4">
                                  <div className="media-contact-name">
                                    <span>Personal</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="">
                            <div className="d-flex py-4 px-6 fw-bold">
                              <span>Rooms</span>
                              <Link to="#" className="ms-auto">
                                <i className="fe fe-plus"></i>
                              </Link>
                            </div>
                            <Link to="#" className="align-items-center media">
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-4">
                                  <div className="media-contact-name">
                                    <span>Project Managers</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                            <Link to="#" className="align-items-center media">
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-4">
                                  <div className="media-contact-name">
                                    <span>Designers</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                            <Link to="#" className="align-items-center media">
                              <div className="align-items-center justify-content-between">
                                <div className="media-body ms-4">
                                  <div className="media-contact-name">
                                    <span>Developers</span>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="">
                            <div className="d-flex py-4 px-6 fw-bold">
                              <span>On Hand Talk</span>
                              <Link to="#" className="ms-auto">
                                <i className="fe fe-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </PerfectScrollbar>
            </div>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={12} xl={8}>
          <Card>
            <div className="main-content-app pt-0">
              <div className="main-content-body main-content-body-chat h-100">
                <div className="main-chat-header pt-3 d-block d-sm-flex">
                  <div className="main-img-user online">
                    <img alt="avatar" src={Imagesdata("users1")} />
                  </div>
                  <div className="main-chat-msg-name mt-2">
                    <h6>Saul Goodmate</h6>
                    <span className="dot-label bg-success"></span>
                    <small className="">online</small>
                  </div>
                  <Nav>
                    <div className="d-flex">
                    <button
                        aria-label="button"
                        type="button"
                        className="btn btn-icon btn-light ms-2 d-none d-sm-block"
                      >
                        <i className="bx bx-phone" style={{ fontSize: 24, marginTop: 4 }}></i>
                      </button>

                      <button
                        aria-label="button"
                        type="button"
                        className="btn btn-icon btn-light ms-2 d-none d-sm-block"
                      >
                        <i className="bx bx-video" style={{ fontSize: 24, marginTop: 4 }}></i>
                      </button>
                      <button
                        aria-label="button"
                        type="button"
                        className="btn btn-icon btn-light ms-2 responsive-userinfo-open"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        {" "}
                        <i
                          className="bx bx-user-circle"
                          id="responsive-chat-close"
                          style={{ fontSize: 24, marginTop: 4 }}
                        ></i>{" "}
                      </button>
                      {/* <InputGroup>
                        <FormControl type="text" placeholder="Search ..." />
                        <InputGroup.Text className="btn bg-white text-muted border-start-0">
                          <i className="fe fe-search"></i>
                        </InputGroup.Text>
                      </InputGroup> */}
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="text-muted fs-20 no-caret"
                        as="a"
                      >
                        <i className="fe fe-more-vertical mx-3"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end">
                        <Dropdown.Item href="#">Profile</Dropdown.Item>
                        <Dropdown.Item href="#">Clear Chat</Dropdown.Item>
                        <Dropdown.Item href="#">Delete User</Dropdown.Item>
                        <Dropdown.Item href="#">Block User</Dropdown.Item>
                        <Dropdown.Item href="#">Report</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav>
                </div>
                <div className="main-chat-body flex-2" id="ChatBody">
                  <PerfectScrollbar>
                    <div className="content-inner">
                      <label className="main-chat-time">
                        <span>2 days ago</span>
                      </label>
                      <div className="media flex-row-reverse chat-right">
                        <div className="main-img-user online">
                          <img alt="avatar" src={Imagesdata("users21")} />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Nulla consequat massa quis enim. Donec pede justo,
                            fringilla vel...
                          </div>
                          <div className="main-msg-wrapper">
                            rhoncus ut, imperdiet a, venenatis vitae, justo...
                          </div>
                          <div>
                            <span>9:48 am</span>{" "}
                            <Link to="">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="media chat-left">
                        <div className="main-img-user online">
                          <img alt="avatar" src={Imagesdata("users1")} />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                          </div>
                          <div>
                            <span>9:32 am</span>{" "}
                            <Link to="">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="media flex-row-reverse chat-right">
                        <div className="main-img-user online">
                          <img alt="avatar" src={Imagesdata("users21")} />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor
                          </div>
                          <div className="main-msg-wrapper">
                            <span className="text-dark">
                              <span>
                                <i className="fa fa-image fs-14 text-muted pe-2"></i>
                              </span>
                              <span className="fs-14 mt-1">
                                {" "}
                                Image_attachment.jpg{" "}
                              </span>
                              <i className="fe fe-download mt-3 text-muted ps-2"></i>
                            </span>
                          </div>
                          <div>
                            <span>11:22 am</span>{" "}
                            <Link to="">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <label className="main-chat-time">
                        <span>Yesterday</span>
                      </label>
                      <div className="media chat-left">
                        <div className="main-img-user online">
                          <img alt="avatar" src={Imagesdata("users1")} />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                          </div>
                          <div>
                            <span>9:32 am</span>{" "}
                            <Link to="">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="media flex-row-reverse chat-right">
                        <div className="main-img-user online">
                          <img alt="avatar" src={Imagesdata("users21")} />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Donec quam felis, ultricies nec, pellentesque eu,
                            pretium quis, sem. Nulla consequat massa quis enim.
                            Donec pede justo, fringilla vel, aliquet nec. In
                            enim justo, rhoncus ut, imperdiet a, venenatis
                            vitae, justo.
                          </div>
                          <div className="main-msg-wrapper">
                            Nullam dictum felis eu pede mollis pretium
                          </div>
                          <div>
                            <span>9:48 am</span>{" "}
                            <Link to="">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <label className="main-chat-time">
                        <span>Today</span>
                      </label>
                      <div className="media chat-left">
                        <div className="main-img-user online">
                          <img alt="avatar" src={Imagesdata("users1")} />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Maecenas tempus, tellus eget condimentum rhoncus
                          </div>
                          <div className="main-msg-wrapper">
                            <img
                              alt="avatar"
                              className="w-10 h-10 me-1"
                              src={Imagesdata("media3")}
                            />
                            <img
                              alt="avatar"
                              className="w-10 h-10 me-1"
                              src={Imagesdata("media5")}
                            />
                            <img
                              alt="avatar"
                              className="w-10 h-10 me-1"
                              src={Imagesdata("media5")}
                            />
                          </div>
                          <div>
                            <span>10:12 am</span>{" "}
                            <Link to="">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="media flex-row-reverse chat-right">
                        <div className="main-img-user online">
                          <img alt="avatar" src={Imagesdata("users21")} />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Maecenas tempus, tellus eget condimentum rhoncus
                          </div>
                          <div className="main-msg-wrapper">
                            Nam quam nunc, blandit vel, luctus pulvinar,
                            hendrerit id, lorem. Maecenas nec odio et ante
                            tincidunt tempus. Donec vitae sapien ut libero
                            venenatis faucibus.
                          </div>
                          <div>
                            <span>09:40 am</span>{" "}
                            <Link to="">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PerfectScrollbar>
                </div>
                <div className="main-chat-footer">
                  <a
                    aria-label="anchor"
                    className="btn btn-icon me-2 btn-warning-light"
                    href="javascript:void(0)"
                  >
                    {" "}
                    <i className="ri-emotion-line"></i>{" "}
                  </a>{" "}
                  <input
                    className="form-control"
                    placeholder="Type your message here..."
                    type="text"
                  />{" "}
                  <a
                    aria-label="anchor"
                    className="btn btn-icon mx-2 btn-primary-light"
                    href="javascript:void(0)"
                  >
                    {" "}
                    <i className="ri-attachment-2"></i>{" "}
                  </a>{" "}
                  <a
                    aria-label="anchor"
                    className="btn btn-icon me-2 btn-success-light"
                    href="javascript:void(0)"
                  >
                    {" "}
                    <i className="ri-mic-line"></i>{" "}
                  </a>{" "}
                  <ButtonPrimary
                    type="submit"
                    className="btn m-3"
                    style={{ minWidth: "118px" }}
                  >
                    Send
                  </ButtonPrimary>
                </div>
                {/* <div className="main-chat-footer">

                  <input
                    className="form-control"
                    placeholder="Type your message here..."
                    type="text"
                  />
                  <Link
                    className="nav-link"
                    data-bs-toggle="tooltip"
                    to=""
                    title="Attach a File"
                  >
                    <i className="fe fe-paperclip"></i>
                  </Link>
                  <Button className="btn btn-icon  btn-primary brround">
                    <i className="fa fa-paper-plane-o"></i>
                  </Button>
                  <nav className="nav"></nav>
                </div> */}
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default index;
