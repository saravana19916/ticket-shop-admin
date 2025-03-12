import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import subscribeSvg from "../../assets/images/SVG-subcribe2.png";
import NewsLetterService from "../../service/subscribeNewsletter.service";

import {
  FormControl,
  Nav,
  Modal,
  Row,
  Col,
  Dropdown,
  Badge,
  Navbar,
  InputGroup,
  ModalHeader,
  ModalTitle,
  Button,
  ModalBody,
  Image,
} from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { MENUITEMS } from "../../commondata/sidemenu";
import { Imagesdata } from "../../commondata/commonimages";
import * as SwitcherData from "../../commondata/switcherdata";
import AuthenticationService from "../../service/authentication.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import usFlag from "../../assets/images/flags-img/italy_flag.jpg";
const SideMenuIcon: any = () => {
  // leftsidemenu
  document.querySelector(".app")?.classList.toggle("sidenav-toggled");
};
import AccountsSwitch from "./accountsswitch";
import CustomToastContainer from "../../components/shared/CustomToastContainer";
import { AxiosError } from "axios";

// Darkmode
const DarkMode = () => {
  if (document.querySelector("body")?.classList.contains("dark-mode")) {
    document.querySelector("body")?.classList.remove("dark-mode");
    localStorage.setItem("sashlightmode", "true");
    localStorage.removeItem("sashdarktheme");
    let myonoffswitch2 = document.querySelector(
      "#myonoffswitch1"
    ) as HTMLInputElement;
    myonoffswitch2.checked = true;
    let myonoffswitch5 = document.querySelector(
      "#myonoffswitch3"
    ) as HTMLInputElement;
    myonoffswitch5.checked = true;
    let myonoffswitch8 = document.querySelector(
      "#myonoffswitch6"
    ) as HTMLInputElement;
    myonoffswitch8.checked = true;
  } else {
    document.querySelector("body")?.classList.add("dark-mode");
    localStorage.setItem("sashdarktheme", "true");
    localStorage.removeItem("sashlightmode");
    let myonoffswitch2 = document.querySelector(
      "#myonoffswitch2"
    ) as HTMLInputElement;
    myonoffswitch2.checked = true;
    let myonoffswitch5 = document.querySelector(
      "#myonoffswitch5"
    ) as HTMLInputElement;
    myonoffswitch5.checked = true;
    let myonoffswitch8 = document.querySelector(
      "#myonoffswitch8"
    ) as HTMLInputElement;
    myonoffswitch8.checked = true;
  }
};
// FullScreen
var elem: any = document.documentElement;
var i = true;
const Fullscreen: any = (vale: any) => {
  switch (vale) {
    case true:
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
      i = false;
      break;
    case false:
      document.exitFullscreen();
      i = true;
      break;
  }
};
// SwitcherMenu
const SidSwitcherIcon: any = () => {
  console.log("working");
  // leftsidemenu
  document.querySelector(".demo_changer")?.classList.toggle("active");
  let Rightside: any = document.querySelector(".demo_changer");
  Rightside.style.insetInlineEnd = "0px";
};
const RightSideBar: any = () => {
  // leftsidemenu
  // rightsidebar
  document.querySelector(".sidebar-right")?.classList.toggle("sidebar-open");
  // swichermainright
};
const Header1 = () => {
  document.querySelector(".main-content")?.addEventListener("click", () => {
    document.querySelector(".search-result")?.classList.add("d-none");
  });
  useEffect(() => {
    SwitcherData.localStorageBackUp();
  });

  let authUser = JSON.parse(localStorage.getItem("user") || "{}");
  // For CountrySelector Modal
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [searchval, setsearchval] = useState("Type something");
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [NavData, setNavData] = useState<any>([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {});
  let myfunction = (inputvalue: any) => {
    document.querySelector(".search-result")?.classList.remove("d-none");
    console.log("ok");
    let i: any = [];
    let allElement2: any[] = [];
    MENUITEMS.map((mainlevel) => {
      if (mainlevel.Items) {
        mainlevel.Items.map((sublevel: any) => {
          if (sublevel.children) {
            sublevel.children.map((sublevel1: any) => {
              i.push(sublevel1);
              if (sublevel1.children) {
                sublevel1.children.map((sublevel2: any) => {
                  i.push(sublevel2);
                  return sublevel2;
                });
              }
              return sublevel1;
            });
          }
          return sublevel;
        });
      }
      return mainlevel;
    });
    for (let allElement of i) {
      if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
        if (
          allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())
        ) {
          setShow2(true);
          allElement2.push(allElement);
        }
      }
    }
    if (!allElement2.length || inputvalue === "") {
      if (inputvalue === "") {
        setShow2(false);
        setsearchval("Type something");
        setsearchcolor("text-dark");
      }
      if (!allElement2.length) {
        setShow2(false);
        setsearchcolor("text-danger");
        setsearchval("There is no component with this name");
      }
    }
    setNavData(allElement2);
  };
  const navigate = useNavigate();
  const handleLogout = async (e: any) => {
    e.preventDefault();
    try {
      const res = await AuthenticationService.logout();
      console.log(res);
      if (res.success) {
        toast.success(res.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        navigate("/");
      }
    } catch (error: any) {
      console.log(error);
      navigate("/");
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
  };
  const [showNewsletterModal, setShowNewsletterModal] =
    useState<boolean>(false);
  const [emailId, setEmailId] = useState<undefined | string>(undefined);
  const [isSubscribeNewsletterLoading, setIsSubscribeNewsletterLoading] =
    useState<boolean>(false);
  const _handleEmailIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value) {
      setEmailId(value);
    } else {
      setEmailId(undefined);
    }
  };
  const _handleSubscribeEmail = async () => {
    if (emailId) {
      setIsSubscribeNewsletterLoading(true);
      try {
        const response = await NewsLetterService.subscribeForNewsLetter(
          emailId
        );
        toast.success(response?.data?.message);
        setEmailId("");
        setShowNewsletterModal(false);
      } catch (error) {
        const errorResponse = error as AxiosError;
        console.log(errorResponse);
      } finally {
        setIsSubscribeNewsletterLoading(false);
      }
    } else {
      toast.error("Please enter Email Id");
    }
  };
  return (
    <>
      <div className="">
        <CustomToastContainer />
        {/* <AccountsSwitch show={show} handleClose={handleClose} /> */}
        <div className="header sticky app-header header1">
          <div className="container-fluid main-container custom-container">
            <div className="d-flex">
              <div className="d-flex align-items-center">
                <Link
                  aria-label="Hide Sidebar"
                  className="app-sidebar__toggle"
                  data-bs-toggle="sidebar"
                  to="#"
                  onClick={() => SideMenuIcon()}
                />
                <Link
                  className="logo-horizontal"
                  to={`${import.meta.env.BASE_URL}Dashboard`}
                >
                  <img
                    src={Imagesdata("logoRounded")}
                    className="header-brand-img desktop-logo"
                    style={{ height: "4vh", margin: "3px 50px" }}
                    alt="logo"
                  />
                  <img
                    src={Imagesdata("logoRounded")}
                    className="header-brand-img light-logo1 "
                    style={{ height: "4vh", margin: "3px 50px" }}
                    alt="logo"
                  />
                </Link>
              </div>

              <div className="main-header-center ms-3 d-none d-lg-block">
                <FormControl
                  onChange={(ele) => {
                    myfunction(ele.target.value);
                    setInputValue(ele.target.value);
                  }}
                  onClick={() => {
                    setShow1(true);
                  }}
                  placeholder="Search for results..."
                  type="search"
                />
                <button className="btn h-100">
                  <i className="fe fe-search" aria-hidden="false"></i>
                </button>
                {show1 ? (
                  <div className="card search-result p-absolute w-100 card border mt-1">
                    <div className="card-header">
                      <h4 className="card-title me-2 text-break">
                        Search result of "{InputValue}"{" "}
                      </h4>
                    </div>
                    <ul className="card-body list-group">
                      {" "}
                      {show2 ? (
                        NavData.map((e: any) => (
                          <li key={Math.random()}>
                            <Link className="" to={`${e.path}/`}>
                              {" "}
                              {e.title}{" "}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <b className={`${searchcolor} `}> {searchval}</b>
                      )}{" "}
                    </ul>
                  </div>
                ) : (
                  ""
                )}{" "}
              </div>
              <Navbar
                className="d-flex order-lg-2 ms-auto header-right-icons px-0"
                expand="lg"
              >
                <Dropdown className="dropdown d-none">
                  <Link to="#" className="nav-link icon ">
                    <i className="fe fe-search"></i>
                  </Link>
                  <Dropdown.Menu className="header-search dropdown-menu-start ">
                    <InputGroup className="input-group w-100 p-2">
                      <FormControl type="text" placeholder="Search...." />
                      <InputGroup.Text className="btn btn-primary">
                        <i className="fe fe-search" aria-hidden="true"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="p-2 navbar-toggler navresponsive-toggler d-lg-none ms-auto"
                >
                  <i className="fe fe-more-vertical"></i>
                </Navbar.Toggle> */}
                <div className="responsive-navbar p-0">
                  <div className="px-0" id="navbarSupportedContent-4">
                    <div className="d-flex order-lg-2 gap-0 justify-content-end">
                      <Dropdown className="d-lg-none d-flex">
                        <Dropdown.Toggle
                          href="#"
                          className="nav-link icon no-caret"
                          variant=""
                        >
                          <i className="fe fe-search"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-start">
                          <InputGroup className="w-100 p-2">
                            <FormControl type="text" placeholder="Search...." />
                            <InputGroup.Text>
                              <i
                                className="fa fa-search"
                                aria-hidden="true"
                              ></i>
                            </InputGroup.Text>
                          </InputGroup>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* Country Select Modal */}
                      {/* <div className="d-flex country">
                                        <Link to="#"
                                            onClick={handleShow}
                                            className="nav-link icon text-center">
                                            <i className="fe fe-repeat"></i>
                                            <span className="fs-16 ms-2 d-none d-xl-block">
                                                Accounts
                                            </span>
                                        </Link>
                                    </div> */}
                      {/* Country Select Modal */}

                      {/* <div className="d-flex country">
                      <Link
                        to="#"
                        onClick={handleShow}
                        className="nav-link icon text-center"
                      >
                        <i className="fe fe-globe"></i>
                      </Link>
                      <Modal
                        className="modal fade"
                        show={show}
                        onHide={handleClose}
                        centered
                      >
                        <Modal.Header>
                          <Modal.Title as="h6">Choose Country</Modal.Title>
                          <span
                            className="d-flex ms-auto"
                            onClick={handleClose}
                          >
                            <i className="fe fe-x ms-auto"></i>
                          </span>
                        </Modal.Header>
                        <Modal.Body>
                          <Row as="ul" className="p-3">
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block active"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={usFlag}
                                    className="me-3 language"
                                  />
                                </span>
                                USA
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt="italy"
                                    src={Imagesdata("italy")}
                                    className="me-3 language"
                                  />
                                </span>
                                Italy
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt="spain"
                                    src={Imagesdata("spain")}
                                    className="me-3 language"
                                  />
                                </span>
                                Spain
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={Imagesdata("india")}
                                    className="me-3 language"
                                  />
                                </span>
                                India
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={Imagesdata("french")}
                                    className="me-3 language"
                                  />
                                </span>
                                French
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={Imagesdata("russia")}
                                    className="me-3 language"
                                  />
                                </span>
                                Russia
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={Imagesdata("germany")}
                                    className="me-3 language"
                                  />
                                </span>
                                Germany
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={Imagesdata("argentina")}
                                    className="me-3 language"
                                  />
                                </span>
                                Argentina
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={Imagesdata("malaysia")}
                                    className="me-3 language"
                                  />
                                </span>
                                Malaysia
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={Imagesdata("turkey")}
                                    className="me-3 language"
                                  />
                                </span>
                                Turkey
                              </Link>
                            </Col>
                          </Row>
                        </Modal.Body>
                      </Modal>
                    </div> */}
                      {/* Dark Mode */}
                      <div className="dropdown  d-flex">
                        <Nav.Link
                          className="nav-link icon theme-layout nav-link-bg layout-setting"
                          onClick={() => DarkMode()}
                        >
                          <span className="dark-layout">
                            <i className="fe fe-moon"></i>
                          </span>
                          <span className="light-layout">
                            <i className="fe fe-sun"></i>
                          </span>
                        </Nav.Link>
                      </div>
                      {/* <!-- Shopping-Cart Theme-Layout --> */}
                      {/*<Dropdown className="d-flex shopping-cart">
                                        <Dropdown.Toggle variant="" className="nav-link icon text-center no-caret"> {" "}
                                            <i className="fe fe-shopping-cart"></i>
                                            <span className="badge bg-secondary header-badge">
                                                4
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                                            <div className="drop-heading border-bottom">
                                                <div className="d-flex">
                                                    <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark"> {" "}
                                                        My Shopping Cart
                                                    </h6>
                                                    <div className="ms-auto">
                                                        <Badge bg="danger-transparent" className="header-badge text-danger fs-14">
                                                            Hurry Up!
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                            <PerfectScrollbar style={
                                                {height: "300px"}
                                            }>
                                                <Dropdown.Item href="#" className="d-flex p-4">
                                                    <img className="avatar avatar-xl br-5 me-3 align-self-center cover-image"
                                                        src={
                                                            Imagesdata("product4")
                                                        }
                                                        alt="pngs-4"/>
                                                    <div className="wd-50p">
                                                        <h5 className="mb-1">
                                                            Flower Pot for Home Decor
                                                        </h5>
                                                        <span>
                                                            Status:{" "}
                                                            <span className="text-success">In Stock</span>
                                                        </span>
                                                        <p className="fs-13 text-muted mb-0">
                                                            Quantity: 01
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto text-end d-flex fs-16">
                                                        <span className="fs-16 text-dark d-none d-sm-block px-4">
                                                            $438
                                                        </span>
                                                    </div>
                                                    <div className="fs-16 btn p-0 cart-trash">
                                                        <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className=" d-flex p-4">
                                                    <img className="avatar avatar-xl br-5 me-3 align-self-center cover-image" alt="pngs-6"
                                                        src={
                                                            Imagesdata("product6")
                                                        }/>
                                                    <div className="wd-50p">
                                                        <h5 className="mb-1">Black Digital Camera</h5>
                                                        <span>
                                                            Status:{" "}
                                                            <span className="text-danger">Out Stock</span>
                                                        </span>
                                                        <p className="fs-13 text-muted mb-0">
                                                            Quantity: 06
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto text-end d-flex">
                                                        <span className="fs-16 text-dark d-none d-sm-block px-4">
                                                            $867
                                                        </span>
                                                    </div>
                                                    <div className="fs-16 btn p-0 cart-trash">
                                                        <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className="d-flex p-4">
                                                    <img className="avatar avatar-xl br-5 me-3 align-self-center cover-image" alt="pngs-8"
                                                        src={
                                                            Imagesdata("product7")
                                                        }/>
                                                    <div className="wd-50p">
                                                        <h5 className="mb-1">
                                                            Stylish Rockerz 255 Ear Pods
                                                        </h5>
                                                        <span>
                                                            Status:{" "}
                                                            <span className="text-success">In Stock</span>
                                                        </span>
                                                        <p className="fs-13 text-muted mb-0">
                                                            Quantity: 05
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto text-end d-flex">
                                                        <span className="fs-16 text-dark d-none d-sm-block px-4">
                                                            $323
                                                        </span>
                                                    </div>
                                                    <div className="fs-16 btn p-0 cart-trash">
                                                        <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className="d-flex p-4">
                                                    <img className="avatar avatar-xl br-5 me-3 align-self-center cover-image" alt="pngs-1"
                                                        src={
                                                            Imagesdata("product1")
                                                        }/>
                                                    <div className="wd-50p">
                                                        <h5 className="mb-1">Women Party Wear Dress</h5>
                                                        <span>
                                                            Status:{" "}
                                                            <span className="text-success">In Stock</span>
                                                        </span>
                                                        <p className="fs-13 text-muted mb-0">
                                                            Quantity: 05
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto text-end d-flex">
                                                        <span className="fs-16 text-dark d-none d-sm-block px-4">
                                                            $867
                                                        </span>
                                                    </div>
                                                    <div className="fs-16 btn p-0 cart-trash">
                                                        <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className="d-flex p-4">
                                                    <img className="avatar avatar-xl br-5 me-3 align-self-center cover-image" alt="pngs-3"
                                                        src={
                                                            Imagesdata("product3")
                                                        }/>
                                                    <div className="wd-50p">
                                                        <h5 className="mb-1">Running Shoes for men</h5>
                                                        <span>
                                                            Status:{" "}
                                                            <span className="text-success">In Stock</span>
                                                        </span>
                                                        <p className="fs-13 text-muted mb-0">
                                                            Quantity: 05
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto text-end d-flex">
                                                        <span className="fs-16 text-dark d-none d-sm-block px-4">
                                                            $456
                                                        </span>
                                                    </div>
                                                    <div className="fs-16 btn p-0 cart-trash">
                                                        <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                                    </div>
                                                </Dropdown.Item>
                                            </PerfectScrollbar>
                                            <Dropdown.Divider className="m-0"/>
                                            <div className="dropdown-footer">
                                                <Link className="btn btn-primary btn-pill w-sm btn-sm py-2"
                                                    to={
                                                        `${
                                                            import
                                                                .meta
                                                                .env
                                                                .BASE_URL
                                                        }Ecommerce/checkout/`
                                                }>
                                                    <i className="fe fe-check-circle"></i>
                                                    Checkout
                                                </Link>
                                                <span className="float-end p-2 fs-17 fw-semibold">
                                                    Total: $6789
                                                </span>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>*/}
                      {/* FullScreen button */}
                      {/* <div className="dropdown d-flex">
                                        <Nav.Link className="nav-link icon full-screen-link nav-link-bg"
                                            onClick={
                                                () => Fullscreen(i)
                                        }>
                                            <i className="fe fe-minimize fullscreen-button"></i>
                                        </Nav.Link>
                                    </div> */}
                      {/* Notification */}
                      <Dropdown className="d-flex notifications">
                        <Dropdown.Toggle
                          variant=""
                          className="nav-link icon no-caret"
                        >
                          <i className="fe fe-bell"></i>
                          <span className=" pulse"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                          <div className="drop-heading border-bottom">
                            <div className="d-flex">
                              <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">
                                Notifications
                              </h6>
                            </div>
                          </div>
                          <div className="notifications-menu">
                            <Dropdown.Item
                              className=" d-flex"
                              href={`${
                                import.meta.env.BASE_URL
                              }notificationlist`}
                            >
                              <div className="me-3 notifyimg  bg-primary brround box-shadow-primary">
                                <i className="fe fe-mail"></i>
                              </div>
                              <div className="mt-1">
                                <h5 className="notification-label mb-1">
                                  New Application received
                                </h5>
                                <span className="notification-subtext">
                                  3 days ago
                                </span>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="d-flex"
                              href={`${
                                import.meta.env.BASE_URL
                              }notificationlist`}
                            >
                              <div className="me-3 notifyimg  bg-secondary brround box-shadow-secondary">
                                <i className="fe fe-check-circle"></i>
                              </div>
                              <div className="mt-1">
                                <h5 className="notification-label mb-1">
                                  Project has been approved
                                </h5>
                                <span className="notification-subtext">
                                  2 hours ago
                                </span>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="d-flex"
                              href={`${
                                import.meta.env.BASE_URL
                              }notificationlist`}
                            >
                              <div className="me-3 notifyimg  bg-success brround box-shadow-success">
                                <i className="fe fe-shopping-cart"></i>
                              </div>
                              <div className="mt-1">
                                <h5 className="notification-label mb-1">
                                  Your Product Delivered
                                </h5>
                                <span className="notification-subtext">
                                  30 min ago
                                </span>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="d-flex"
                              href={`${
                                import.meta.env.BASE_URL
                              }notificationlist`}
                            >
                              <div className="me-3 notifyimg bg-pink brround box-shadow-pink">
                                <i className="fe fe-user-plus"></i>
                              </div>
                              <div className="mt-1">
                                <h5 className="notification-label mb-1">
                                  Friend Requests
                                </h5>
                                <span className="notification-subtext">
                                  1 day ago
                                </span>
                              </div>
                            </Dropdown.Item>
                          </div>
                          <div className="dropdown-divider m-0"></div>
                          <Dropdown.Item
                            href={`/notificationlist`}
                            className="dropdown-item text-center p-3 text-muted"
                          >
                            View all Notification
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* Messages */}
                      <Dropdown className="d-flex message">
                        <Dropdown.Toggle
                          variant=""
                          className="nav-link icon text-center no-caret"
                        >
                          <i className="fe fe-message-square"></i>
                          <span className="pulse-danger"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                          <div className="drop-heading border-bottom">
                            <div className="d-flex">
                              <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">
                                You have 5 Messages
                              </h6>
                              <div className="ms-auto">
                                <Link to="#" className="text-muted p-0 fs-12">
                                  make all unread
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="message-menu">
                            <Dropdown.Item
                              className="d-flex"
                              href={`${import.meta.env.BASE_URL}apps/chat/`}
                            >
                              <img
                                className="avatar avatar-md brround me-3 align-self-center cover-image"
                                alt="user-1"
                                src={Imagesdata("users1")}
                              />
                              <div className="wd-90p">
                                <div className="d-flex">
                                  <h5 className="mb-1">Peter Theil</h5>
                                  <small className="text-muted ms-auto text-end">
                                    6:45 am
                                  </small>
                                </div>
                                <span>Commented on file Guest list....</span>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="d-flex"
                              href={`${import.meta.env.BASE_URL}apps/chat/`}
                            >
                              <img
                                className="avatar avatar-md brround me-3 align-self-center cover-image"
                                alt="user-15"
                                src={Imagesdata("users15")}
                              />
                              <div className="wd-90p">
                                <div className="d-flex">
                                  <h5 className="mb-1">Abagael Luth</h5>
                                  <small className="text-muted ms-auto text-end">
                                    10:35 am
                                  </small>
                                </div>
                                <span>New Meetup Started......</span>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="d-flex"
                              href={`${import.meta.env.BASE_URL}apps/chat/`}
                            >
                              <img
                                className="avatar avatar-md brround me-3 align-self-center cover-image"
                                alt="user-12"
                                src={Imagesdata("users12")}
                              />
                              <div className="wd-90p">
                                <div className="d-flex">
                                  <h5 className="mb-1">Brizid Dawson</h5>
                                  <small className="text-muted ms-auto text-end">
                                    2:17 pm
                                  </small>
                                </div>
                                <span>Brizid is in the Warehouse...</span>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="dropdown-item d-flex"
                              href={`${import.meta.env.BASE_URL}apps/chat/`}
                            >
                              <img
                                className="avatar avatar-md brround me-3 align-self-center cover-image"
                                alt="user-4"
                                src={Imagesdata("users4")}
                              />
                              <div className="wd-90p">
                                <div className="d-flex">
                                  <h5 className="mb-1">Shannon Shaw</h5>
                                  <small className="text-muted ms-auto text-end">
                                    7:55 pm
                                  </small>
                                </div>
                                <span>New Product Realease......</span>
                              </div>
                            </Dropdown.Item>
                          </div>
                          <div className="dropdown-divider m-0"></div>
                          <Dropdown.Item
                            href="/chats"
                            className="text-center p-3 text-muted"
                          >
                            See all Messages
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* Right Side-bar */}
                      {/* <div className="dropdown d-flex header-settings"
                                        onClick={
                                            () => RightSideBar()
                                    }>
                                        <Link to="#;" className="nav-link icon" data-bs-toggle="sidebar-right" data-target=".sidebar-right">
                                            <i className="fe fe-align-right"></i>
                                        </Link>
                                    </div> */}
                      {/* Switcher  */}
                      {/* <div
                      className="demo-icon nav-link icon"
                      onClick={() => SidSwitcherIcon()}
                    >
                      <i className="fe fe-settings fa-spin  text_primary"></i>
                    </div> */}
                      {/* Profile  */}
                      <Dropdown className="d-flex profile-1">
                        <Dropdown.Toggle
                          variant=""
                          className="nav-link leading-none d-flex no-caret"
                        >
                          <img
                            src={Imagesdata("users21")}
                            alt="profile-user"
                            className="avatar  profile-user brround cover-image"
                          />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                          <div className="drop-heading">
                            <div className="text-center">
                              <h5 className="text-dark mb-0 fs-14 fw-semibold">
                                {authUser?.user?.profile?.first_name}{" "}
                                {authUser?.user?.profile?.last_name}
                              </h5>
                              <small className="text-muted">
                                {authUser?.user?.email}
                              </small>
                            </div>
                          </div>
                          <div className="dropdown-divider m-0"></div>
                          <Dropdown.Item
                            href={`${import.meta.env.BASE_URL}pages/profile/`}
                          >
                            <i className="dropdown-icon fe fe-user"></i>
                            Profile
                          </Dropdown.Item>
                          {/*<Dropdown.Item href={
                                                `${
                                                    import
                                                        .meta
                                                        .env
                                                        .BASE_URL
                                                }pages/mailinbox/`
                                            }>
                                                <i className="dropdown-icon fe fe-mail"></i>
                                                Inbox
                                                <span className="badge bg-danger rounded-pill float-end">
                                                    5
                                                </span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href={
                                                `${
                                                    import
                                                        .meta
                                                        .env
                                                        .BASE_URL
                                                }authentication/lockscreen/`
                                            }>
                                                <i className="dropdown-icon fe fe-lock"></i>
                                                {" "}
                                                Lockscreen
                                            </Dropdown.Item>*/}
                          <Dropdown.Item
                            href={`${import.meta.env.BASE_URL}`}
                            onClick={(e) => handleLogout(e)}
                          >
                            <i className="dropdown-icon fe fe-alert-circle"></i>{" "}
                            Sign out
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => setShowNewsletterModal(true)}
                          >
                            <i className="dropdown-icon fe fe-send"></i>{" "}
                            Newsletter
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={showNewsletterModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShowNewsletterModal(false)}
      >
        <ModalHeader closeButton>
          <ModalTitle className="mt-3 fs-4">Join our newsletter 🎉</ModalTitle>
        </ModalHeader>
        <ModalBody className="p-6">
          <div className="row align-items-center">
            <div className="col-6">
              <span>
                Read and share new perspectives on just about any topic.
              </span>
              <ul className="mt-6">
                <li className="d-flex align-items-center gap-2 mb-4">
                  <span className="badge bg-primary w-5 h-5 d-flex align-items-center justify-content-center">
                    1
                  </span>
                  Get more discount
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="badge bg-info text-light w-5 h-5 d-flex align-items-center justify-content-center">
                    2
                  </span>
                  Get premium magazines
                </li>
              </ul>
              <div className="mt-6">
                <InputGroup className="mb-3">
                  <FormControl
                    type="email"
                    placeholder="Enter email id"
                    required
                    onChange={_handleEmailIdChange}
                  />
                  <Button
                    className="btn-secondary"
                    id="button-addon2"
                    type="submit"
                    onClick={_handleSubscribeEmail}
                    disabled={isSubscribeNewsletterLoading}
                  >
                    Join
                  </Button>
                </InputGroup>
                <InputGroup></InputGroup>
              </div>
            </div>
            <div className="col-6">
              <img src={subscribeSvg}></img>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};
export default Header1;
