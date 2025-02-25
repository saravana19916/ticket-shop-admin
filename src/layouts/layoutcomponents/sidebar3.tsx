import { Fragment, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  MENUITEMS,
  SIDE_ITEM_NEED_HELP,
  SIDE_MENU_ITEM_DESIGNER,
  SIDE_MENU_ITEM_GUEST,
  SIDE_MENU_ITEM_ONE,
  SIDE_MENU_ITEM_THREE,
  SIDE_MENU_ITEM_TWO,
  SIDE_MENU_ITEM_ADVERTISEMENT,
  SIDE_MENU_ITEM_MARKETING,
} from "../../commondata/sidemenu";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Imagesdata } from "../../commondata/commonimages";
import { match } from "path-to-regexp";
import moment from "moment";
import {
  Menu,
  MenuButton,
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
const CustomDropdownToggle = styled(DropdownToggle)`
  &::before,
  &::after {
    content: none !important;
  }
`;
const Onhover = () => {
  if (document.querySelector(".app")?.classList.contains("sidenav-toggled"))
    document.querySelector(".app")?.classList.add("sidenav-toggled-open");
};
const Outhover = () => {
  document.querySelector(".app")?.classList.remove("sidenav-toggled-open");
};
let history: any = [];
interface IEventDetails {
  id: any;
  identifier: any;
  displayDate: any;
  type: any;
  short_description: string;
  publish_status: string;
}

export const Sidebar = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [pathname, setPathName] = useState();
  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);
  const [menuitems, setMenuitems] = useState(MENUITEMS);
  const isSideBarShow = !document
    .querySelector(".app")
    ?.classList.contains("sidenav-toggled");
  useEffect(() => {
    history.push(location.pathname); // add  history to history  stack for current location.pathname to prevent multiple history calls innerWidth  and innerWidth calls from  multiple users. This is important because the history stack is not always empty when the user clicks  the history
    if (history.length > 2) {
      history.shift();
    }
    if (history[0] !== history[1]) {
      setSidemenu();
    }
    let mainContent: any = document.querySelector(".main-content");

    //when we click on the body to remove

    //eslint
    mainContent.addEventListener("click", mainContentClickFn);
    return () => {
      mainContent.removeEventListener("click", mainContentClickFn);
    };
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  const isActive = (url: string) => {
    const pathname = window.location.pathname;
    const matchUrl = match(url, { decode: decodeURIComponent });
    return !!matchUrl(pathname);
  };
  // location
  useEffect(() => {
    if (
      document.body.classList.contains("horizontal") &&
      window.innerWidth >= 992
    ) {
      clearMenuActive();
    }
  }, []);

  const bodyElement = document.querySelector("body");

  const hasSideNavToggledClass =
    bodyElement?.classList.contains("sidenav-toggled");

  //  In Horizontal When we click the body it should we Closed using in useEfffect Refer line No:16
  //eslint
  function mainContentClickFn() {
    if (
      document.body.classList.contains("horizontal") &&
      window.innerWidth >= 992
    ) {
      clearMenuActive();
    }
  }

  function clearMenuActive() {
    MENUITEMS.map((mainlevel: any) => {
      if (mainlevel.Items) {
        mainlevel.Items.map((sublevel: any) => {
          sublevel.active = false;
          if (sublevel.children) {
            sublevel.children.map((sublevel1: any) => {
              sublevel1.active = false;
              if (sublevel1.children) {
                sublevel1.children.map((sublevel2: any) => {
                  sublevel2.active = false;
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

    setMenuitems((arr) => [...arr]);
  }

  function setSidemenu() {
    if (menuitems) {
      menuitems.map((mainlevel: any) => {
        if (mainlevel.Items) {
          mainlevel.Items.map((items: any) => {
            items.active = false;
            items.selected = false;
            if (
              location.pathname === "/sash/preview/" ||
              location.pathname === "/sash/preview"
            ) {
              location.pathname = "/sash/preview/Dashboard/";
            }

            if (location.pathname === items.path + "/") {
              items.active = true;
              items.selected = true;
            }
            if (items.children) {
              items.children.map((submenu: any) => {
                submenu.active = false;
                submenu.selected = false;
                if (location.pathname === submenu.path + "/") {
                  items.active = true;
                  items.selected = true;
                  submenu.active = true;
                  submenu.selected = true;
                }
                if (submenu.children) {
                  submenu.children.map((submenu1: any) => {
                    submenu1.active = false;
                    submenu1.selected = false;
                    if (location.pathname === submenu1.path + "/") {
                      items.active = true;
                      items.selected = true;
                      submenu.active = true;
                      submenu.selected = true;
                      submenu1.active = true;
                      submenu1.selected = true;
                    }
                    return submenu1;
                  });
                }
                return submenu;
              });
            }
            return items;
          });
        }
        setMenuitems((arr) => [...arr]);
        return mainlevel;
      });
    }
  }

  function toggleSidemenu(item: any) {
    if (
      !document.body.classList.contains("horizontal-hover") ||
      window.innerWidth < 992
    ) {
      // To show/hide the menu
      if (!item.active) {
        menuitems.map((mainlevel) => {
          if (mainlevel.Items) {
            mainlevel.Items.map((sublevel: any) => {
              sublevel.active = false;
              if (item === sublevel) {
                sublevel.active = true;
              }
              if (sublevel.children) {
                sublevel.children.map((sublevel1: any) => {
                  sublevel1.active = false;
                  if (item === sublevel1) {
                    sublevel.active = true;
                    sublevel1.active = true;
                  }
                  if (sublevel1.children) {
                    sublevel1.children.map((sublevel2: any) => {
                      sublevel2.active = false;
                      if (item === sublevel2) {
                        sublevel.active = true;
                        sublevel1.active = true;
                        sublevel2.active = true;
                      }
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
      } else {
        item.active = !item.active;
      }
    }

    setMenuitems((arr) => [...arr]);
  }
  const event = {
    identifier: "Cirque Du Soleil Bazzar",
    id: "cirque-du-soleil-bazzar",
    displayDate: "May, 31, 2024",
    type: "concert",
    publish_status: "",
    short_description: "",
  };
  const [selectedUser, setSelectedUser] = useState<IEventDetails>(event);
  const urlParams = new URLSearchParams(window.location.search);

  const [eventsList, setEventsList] = useState<IEventDetails[]>([]);
  const [eventData, setEventData] = useState<any>();
  useEffect(() => {
    const eventDataString = sessionStorage.getItem("response");
    const eventData: any | null = eventDataString
      ? JSON.parse(eventDataString)
      : null;
    setEventData(eventData);
  }, []);

  useEffect(() => {
    const extractedArray = eventData?.user?.events?.map(
      ({
        id,
        identifier,
        display_date,
        type,
        publish_status,
        detail,
      }: any) => ({
        id,
        identifier,
        displayDate: display_date,
        type,
        publish_status,
        short_description: detail?.short_description,
      })
    );
    console.log(eventData?.user?.events);

    if (extractedArray) {
      setSelectedUser(extractedArray[0]);
      handleEventChange(extractedArray?.[0]?.id);
    }
    console.log(extractedArray, "xtractedArray?.[0]");

    extractedArray && setEventsList([event, ...extractedArray]);
  }, [eventData]);
  const _handleSearchEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value.toLowerCase();
    console.log(searchInput, "searchInput");
    const extractedArray = eventData?.user?.events?.map(
      ({
        id,
        identifier,
        display_date,
        type,
        publish_status,
        detail,
      }: any) => ({
        id,
        identifier,
        displayDate: display_date,
        type,
        publish_status,
        short_description: detail?.short_description,
      })
    );
    if (searchInput) {
      const filteredEvents = extractedArray.filter((event: IEventDetails) =>
        event.identifier.toLowerCase().includes(searchInput)
      );
      console.log(filteredEvents);
      setEventsList(filteredEvents);
    } else {
      setEventsList(extractedArray);
    }
  };
  const _setSelectedUserWithIdentifier = (identifier: any) => {
    const extractedArray = eventData?.user?.events?.map(
      ({
        id,
        identifier,
        display_date,
        type,
        publish_status,
        detail,
      }: any) => ({
        id,
        identifier,
        displayDate: display_date,
        type,
        publish_status,
        short_description: detail?.short_description,
      })
    );
    const selectedUser = extractedArray?.find(
      (l: IEventDetails) => l.identifier == identifier
    );
    if (selectedUser) setSelectedUser(selectedUser);
  };
  const [showChooseEventModal, setShowChooseEventModal] = useState(false);
  const handleShowChooseEventModal = () => {
    const extractedArray = eventData?.user?.events?.map(
      ({
        id,
        identifier,
        display_date,
        type,
        publish_status,
        detail,
      }: any) => ({
        id,
        identifier,
        displayDate: display_date,
        type,
        publish_status,
        short_description: detail?.short_description,
      })
    );
    setEventsList(extractedArray);
    setShowChooseEventModal((prev) => {
      return !prev;
    });
  };
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const handleEventChange = (id: string) => {
    queryClient.setQueryData(["currentEventId"], id);
  };

  return (
    <Fragment>
      <Modal
        className="modal fade"
        show={showChooseEventModal}
        onHide={handleShowChooseEventModal}
        centered
        contentClassName="rounded-5"
      >
        <Modal.Header className="d-flex justify-content-between align-items-center">
          <Modal.Title as="h6" className="fw-600 fs-5 p-3">
            {t("chooseUserEvent")}
          </Modal.Title>
          <span
            className="d-flex align-items-center justify-content-center cursor-pointer"
            onClick={handleShowChooseEventModal}
            style={{ width: "40px", height: "40px" }} // Optional: Adjust size for better UI
          >
            <i className="fe fe-x fs-4"></i>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Search event"
              onChange={_handleSearchEvent}
            />
          </div>{" "}
          <div
            className="row overflow-auto p-3"
            style={{
              height: `${eventsList?.length * 120}px`,
              maxHeight: "500px",
            }}
          >
            <div className="card">
              <div className="list-group">
                {eventsList?.map((event: IEventDetails, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`mb-5 list-group-item list-group-item-action ${
                      event.identifier === selectedUser.identifier
                        ? "active border-lg"
                        : ""
                    }`}
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1 fw-semibold">{event.identifier}</h4>
                      {/* <small className="text-muted">4 hrs ago</small> */}
                    </div>
                    {/* <p className="mb-1">{event.short_description}</p> */}
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">{event.displayDate}</small>
                      <span
                        className={`badge ${
                          event.publish_status == "on_sale"
                            ? "bg-success"
                            : event.publish_status == "canceled"
                            ? "bg-danger"
                            : "bg-dark"
                        }`}
                      >
                        {event.publish_status}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* {eventsList?.map((event: IEventDetails, index) => (
              <>
                <div
                  key={Math.random() * index}
                  className={`col-12 card border cursor-pointer ${
                    event.identifier === selectedUser.identifier
                      ? "bg-light"
                      : ""
                  }`}
                  onClick={() => {
                    _setSelectedUserWithIdentifier(event.identifier);
                    handleEventChange(event.id);
                    handleShowChooseEventModal();
                  }}
                >
                  <div className="card-body p-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="d-inline-block">{event.identifier}</span>
                    </div>
                    <small>{event.displayDate}</small>
                  </div>
                </div>
              </>
            ))} */}
          </div>
        </Modal.Body>
      </Modal>
      <div
        className="app-sidebar"
        onMouseOver={() => Onhover()}
        onMouseOut={() => Outhover()}
      >
        <PerfectScrollbar
          options={{ suppressScrollX: true, useBothWheelAxes: false }}
        >
          <div
            className={`side-header ${
              isSideBarShow ? "" : "justify-content-center"
            }`}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <img
              src={Imagesdata("logoRounded")}
              className="w-auto h-100"
              alt="logo-4"
            />
            {isSideBarShow && (
              <>
                <div className="d-inline-block ms-2 header-brand-img light-logo1">
                  <span className="fw-600 fs-14px">Client Platform</span>
                </div>
              </>
            )}

            {/* <Link
              className="header-brand1"
              to={`${import.meta.env.BASE_URL}dashboard/`}
            >
              
            </Link> */}
          </div>
          <div className="main-sidemenu">
            <div className="slide-left disabled" id="slide-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7b8191"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
              </svg>
            </div>
            {/* first level */}
            <ul className="side-menu" style={{ marginLeft: "0px" }}>
              <>
                <div
                  className="row sub-category"
                  style={{ paddingInlineEnd: "4px", paddingInlineStart: "2px" }}
                >
                  <div className="col-12 p-3 text-center">
                    {/* <div className="btn border-primary px-3 py-3 rounded-pill  d-flex align-items-center gap-3">
                      <div
                        className="bg-primary rounded"
                        style={{ width: "22px", height: "22px" }}
                      ></div>
                      <div className="d-flex flex-column align-items-start">
                        <span className=" d-block" style={{ fontWeight: 900 }}>
                          Cirque du Soleil Bazzar
                        </span>
                        <span
                          className="fw-normal"
                          style={{ fontSize: "12px" }}
                        >
                          May, 31, 2024, Dubai
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="border border-primary bg-white btn-pill d-flex align-items-center gap-3 py-3 cursor-pointer"
                      onClick={handleShowChooseEventModal}
                    >
                      <div className="bg-primary-circle"></div>
                      <span className="text-dark fw-600 text-truncate w-75">
                        <span
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title={selectedUser?.identifier}
                        >
                          {selectedUser?.identifier}
                        </span>{" "}
                        <span
                          className="fw-normal d-block w-100 text-truncate"
                          style={{ fontSize: "12px" }}
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title={`${selectedUser?.displayDate}, Dubai`}
                        >
                          {selectedUser?.displayDate}, Dubai
                        </span>
                      </span>
                      <ChevronDownIcon className="w-4 h-4 dropdown-icon-dark" />
                    </div>
                    {/* <Dropdown
                      className="me-1 w-100 text-wrap"
                      key={Math.random()}
                    >
                      <CustomDropdownToggle
                        data-bs-toggle="dropdown"
                        className="w-100 sidebar-dropdown-border bg-white btn-pill d-flex align-items-center gap-3 py-3"
                      >
                        <div className="bg-primary-circle"></div>
                        <span className="text-dark fw-600 text-wrap">
                          <span
                            data-bs-toggle={
                              selectedUser.length > 20 ? "tooltip" : ""
                            }
                            data-bs-placement="top"
                            title={selectedUser.length > 20 ? selectedUser : ""}
                          >
                            {displayUser}
                          </span>{" "}
                          <span
                            className="fw-normal d-block text-start"
                            style={{ fontSize: "12px" }}
                          >
                            {selectedUser === "Cirque du Soleil Bazzar" ? (
                              <>April, 31, 2024, Dubai</>
                            ) : (
                              <> July, 13, 2024, Dubai</>
                            )}
                          </span>
                        </span>
                        <ChevronDownIcon className="w-4 h-4 dropdown-icon-dark" />
                      </CustomDropdownToggle>
                      <Dropdown.Menu
                        role="menu"
                        as="ul"
                        className="w-100 text-wrap"
                      >
                        <Dropdown.Item
                          as="li"
                          className={`p-4 ${
                            selectedUser === "Cirque du Soleil Bazzar"
                              ? "bg-primary text-white"
                              : "text-dark"
                          }`}
                          onClick={() => {
                            navigate(
                              "/dashboard?identifier=cirque-du-soleil-bazzar"
                            );
                            setSelectedUser("Cirque du Soleil Bazzar");
                          }}
                        >
                          Cirque du Soleil Bazzar <br />
                          05 Feb - 10 Oct 24
                        </Dropdown.Item>
                        <Dropdown.Item
                          as="li"
                          className={`p-4 ${
                            selectedUser === "Sound Healing 360°"
                              ? "bg-primary text-white"
                              : "text-dark"
                          }`}
                          onClick={() => {
                            navigate("/dashboard?identifier=sound-healing");
                            setSelectedUser("Sound Healing 360°");
                          }}
                        >
                          Sound Healing 360° <br />
                          10 May - 24 Nov 24
                        </Dropdown.Item>
                        {eventsList?.map((event: any) => (
                          <Dropdown.Item
                            as="li"
                            className={`p-4 text-wrap ${
                              selectedUser === `${event?.identifier}`
                                ? "bg-primary text-white "
                                : "text-dark"
                            }`}
                            onClick={() => {
                              navigate(`/dashboard?identifier=${event?.id}`);
                            }}
                          >
                            {event?.identifier} <br></br>
                            {event?.displayDate}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown> */}
                  </div>
                </div>
                {SIDE_MENU_ITEM_ONE.map((menuItem: any, index: number) => (
                  <Fragment key={index + Math.random() * 100}>
                    <li className="slide">
                      <Link
                        className="side-menu__item pb-0 ps-6"
                        to={menuItem.href ? menuItem.href : "#"}
                        onClick={() => {
                          if (window.screen.width <= 992)
                            document
                              .querySelector(".app")
                              ?.classList.toggle("sidenav-toggled");
                        }}
                      >
                        {hasSideNavToggledClass ? (
                          <>
                            <i
                              className={`${menuItem.icon} side-menu__icon`}
                            ></i>
                          </>
                        ) : null}
                        <span
                          className={`side-menu__label ${
                            menuItem.underDevelopment
                              ? "text-blue"
                              : "text-black"
                          } ${menuItem.fontWeight || "fw-500"} ${
                            menuItem.urls?.some((url: string) => isActive(url))
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {menuItem.title}
                        </span>
                      </Link>
                    </li>
                  </Fragment>
                ))}
                <br />
                {SIDE_MENU_ITEM_DESIGNER.map((menuItem: any, index: number) => (
                  <Fragment key={index + Math.random() * 100}>
                    <li className="slide">
                      <Link
                        className="side-menu__item pb-0 ps-6"
                        to={menuItem.href ? menuItem.href : "#"}
                        onClick={() => {
                          if (window.screen.width <= 992)
                            document
                              .querySelector(".app")
                              ?.classList.toggle("sidenav-toggled");
                        }}
                      >
                        {hasSideNavToggledClass ? (
                          <>
                            <i
                              className={`${menuItem.icon} side-menu__icon`}
                            ></i>
                          </>
                        ) : null}
                        <span
                          className={`side-menu__label ${
                            menuItem.underDevelopment
                              ? "text-blue"
                              : "text-black"
                          } ${menuItem.fontWeight || "fw-500"} ${
                            menuItem.urls?.some((url: string) => isActive(url))
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {menuItem.title}
                        </span>
                      </Link>
                    </li>
                  </Fragment>
                ))}
                <br />
                {SIDE_MENU_ITEM_GUEST.map((menuItem: any, index: number) => (
                  <Fragment key={index + Math.random() * 100}>
                    <li className="slide">
                      <Link
                        className="side-menu__item pb-0 ps-6"
                        to={menuItem.href ? menuItem.href : "#"}
                        onClick={() => {
                          if (window.screen.width <= 992)
                            document
                              .querySelector(".app")
                              ?.classList.toggle("sidenav-toggled");
                        }}
                      >
                        {hasSideNavToggledClass ? (
                          <>
                            <i
                              className={`${menuItem.icon} side-menu__icon`}
                            ></i>
                          </>
                        ) : null}
                        <span
                          className={`side-menu__label ${
                            menuItem.underDevelopment
                              ? "text-blue"
                              : "text-black"
                          } ${menuItem.fontWeight || "fw-500"} ${
                            menuItem.urls?.some((url: string) => isActive(url))
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {menuItem.title}
                        </span>
                      </Link>
                    </li>
                  </Fragment>
                ))}
                <br />
                {SIDE_MENU_ITEM_MARKETING.map(
                  (menuItem: any, index: number) => (
                    <Fragment key={index + Math.random() * 100}>
                      <li className="slide">
                        <Link
                          className="side-menu__item pb-0 ps-6"
                          to={menuItem.href ? menuItem.href : "#"}
                          onClick={() => {
                            if (window.screen.width <= 992)
                              document
                                .querySelector(".app")
                                ?.classList.toggle("sidenav-toggled");
                          }}
                        >
                          {hasSideNavToggledClass ? (
                            <>
                              <i
                                className={`${menuItem.icon} side-menu__icon`}
                              ></i>
                            </>
                          ) : null}
                          <span
                            className={`side-menu__label ${
                              menuItem.underDevelopment
                                ? "text-blue"
                                : "text-black"
                            } ${menuItem.fontWeight || "fw-500"} ${
                              menuItem.urls?.some((url: string) =>
                                isActive(url)
                              )
                                ? "text-primary"
                                : ""
                            }`}
                          >
                            {menuItem.title}
                          </span>
                        </Link>
                      </li>
                    </Fragment>
                  )
                )}
                <br />
                {SIDE_MENU_ITEM_ADVERTISEMENT.map(
                  (menuItem: any, index: number) => (
                    <Fragment key={index + Math.random() * 100}>
                      <li className="slide">
                        <Link
                          className="side-menu__item pb-0 ps-6"
                          to={menuItem.href ? menuItem.href : "#"}
                          onClick={() => {
                            if (window.screen.width <= 992)
                              document
                                .querySelector(".app")
                                ?.classList.toggle("sidenav-toggled");
                          }}
                        >
                          {hasSideNavToggledClass ? (
                            <>
                              <i
                                className={`${menuItem.icon} side-menu__icon`}
                              ></i>
                            </>
                          ) : null}
                          <span
                            className={`side-menu__label ${
                              menuItem.underDevelopment
                                ? "text-blue"
                                : "text-black"
                            } ${menuItem.fontWeight || "fw-500"} ${
                              menuItem.urls?.some((url: string) =>
                                isActive(url)
                              )
                                ? "text-primary"
                                : ""
                            }`}
                          >
                            {menuItem.title}
                          </span>
                        </Link>
                      </li>
                    </Fragment>
                  )
                )}
                <br />
                {SIDE_MENU_ITEM_TWO.map((menuItem: any, index: number) => (
                  <Fragment key={index + Math.random() * 100}>
                    <li className="slide">
                      <Link
                        className="side-menu__item pb-0 ps-6"
                        to="#"
                        onClick={() => {
                          if (window.screen.width <= 992)
                            document
                              .querySelector(".app")
                              ?.classList.toggle("sidenav-toggled");
                        }}
                      >
                        {hasSideNavToggledClass ? (
                          <>
                            <i
                              className={`${menuItem.icon} side-menu__icon`}
                            ></i>
                          </>
                        ) : null}
                        <span
                          className={`side-menu__label  ${
                            menuItem.underDevelopment
                              ? "text-blue"
                              : "text-black"
                          } ${menuItem.fontWeight || "fw-500"}`}
                        >
                          {menuItem.title}
                        </span>
                      </Link>
                    </li>
                  </Fragment>
                ))}
                <br />

                {SIDE_MENU_ITEM_THREE.map((menuItem: any, index: number) => (
                  <Fragment key={index + Math.random() * 100}>
                    <li className="slide">
                      <Link
                        className="side-menu__item pb-0 ps-6"
                        to="#"
                        onClick={() => {
                          if (window.screen.width <= 992)
                            document
                              .querySelector(".app")
                              ?.classList.toggle("sidenav-toggled");
                        }}
                      >
                        {hasSideNavToggledClass ? (
                          <>
                            <i
                              className={`${menuItem.icon} side-menu__icon`}
                            ></i>
                          </>
                        ) : null}
                        <span
                          className={`side-menu__label  ${
                            menuItem.underDevelopment
                              ? "text-blue"
                              : "text-black"
                          } ${menuItem.fontWeight || "fw-500"}`}
                        >
                          {menuItem.title}
                        </span>
                      </Link>
                    </li>
                  </Fragment>
                ))}
                <br />
                {SIDE_ITEM_NEED_HELP.map((menuItem: any, index: number) => (
                  <Fragment key={index + Math.random() * 100}>
                    <li className="slide">
                      <Link
                        className="side-menu__item pb-0 ps-6"
                        to="#"
                        onClick={() => {
                          if (window.screen.width <= 992)
                            document
                              .querySelector(".app")
                              ?.classList.toggle("sidenav-toggled");
                        }}
                      >
                        {hasSideNavToggledClass ? (
                          <>
                            <i
                              className={`${menuItem.icon} side-menu__icon`}
                            ></i>
                          </>
                        ) : null}
                        <span className="side-menu__label fw-600 text-primary">
                          {menuItem.title}
                        </span>
                      </Link>
                    </li>
                  </Fragment>
                ))}

                <>
                  {/* {menuitems.map((Item, i) => (
                    <Fragment key={i + Math.random() * 100}>
                      <li className="sub-category">
                        <h3>{Item.menutitle}</h3>
                      </li>
                      {Item.Items.map((menuItem: any, i) => (
                        <>
                          <li
                            className={`slide ${
                              menuItem.selected ? "is-expanded" : ""
                            }`}
                            key={i}
                          >
                            {menuItem.type === "sub" ? (
                              <Link
                                to="#"
                                className={`side-menu__item ${
                                  menuItem.selected ? "" : ""
                                }`}
                                onClick={(event: any) => {
                                  event.preventDefault();
                                  toggleSidemenu(menuItem);
                                }}
                              >
                                <i
                                  className={`${menuItem.icon} side-menu__icon`}
                                ></i>
                                <span className="side-menu__label">
                                  {menuItem.title}
                                  {menuItem.active}
                                </span>
                                {menuItem.badge ? (
                                  <span className={menuItem.badge}>
                                    {menuItem.badgetxt}
                                  </span>
                                ) : (
                                  ""
                                )}

                                {menuItem.active ? (
                                  document.body.classList.contains(
                                    "horizontal"
                                  ) ? (
                                    <i className="angle fe fe-chevron-up"></i>
                                  ) : (
                                    <i className="angle fe fe-chevron-down"></i>
                                  )
                                ) : document.body.classList.contains(
                                    "horizontal"
                                  ) ? (
                                  <i className="angle fe fe-chevron-right"></i>
                                ) : (
                                  <i className="angle fe fe-chevron-right"></i>
                                )}
                              </Link>
                            ) : (
                              ""
                            )}
                            {menuItem.type === "link" ? (
                              <NavLink
                                to={menuItem.path + "/"}
                                className={`side-menu__item ${
                                  menuItem.selected ? " active" : ""
                                }`}
                                onClick={() => toggleSidemenu(menuItem)}
                              >
                                <i
                                  className={`${menuItem.icon} side-menu__icon`}
                                ></i>
                                <span className="side-menu__label">
                                  {menuItem.title}
                                </span>
                                {menuItem.badge ? (
                                  <span className={menuItem.badge}>
                                    {menuItem.badgetxt}
                                  </span>
                                ) : (
                                  ""
                                )}
                              </NavLink>
                            ) : (
                              ""
                            )}
                            Second Level
                            {menuItem.children ? (
                              <ul
                                className={`slide-menu ${menuItem.Names} ${
                                  menuItem.active ? "open" : ""
                                }`}
                                style={
                                  menuItem.active
                                    ? {
                                        opacity: 1,
                                        transition: "opacity 500ms ease-in",
                                        display: "block",
                                      }
                                    : { display: "none" }
                                }
                              >
                                <div className={`${menuItem.Name}`}>
                                  {menuItem.children.map(
                                    (childrenItem: any, index: any) => {
                                      return (
                                        <li
                                          key={index}
                                          className={`sub-slide ${
                                            childrenItem.active
                                              ? "is-expanded"
                                              : ""
                                          }`}
                                        >
                                          {childrenItem.type === "sub" ? (
                                            <Link
                                              to="#"
                                              className={`sub-side-menu__item ${
                                                childrenItem.selected
                                                  ? "active"
                                                  : ""
                                              }`}
                                              onClick={(event: any) => {
                                                event.preventDefault();
                                                toggleSidemenu(childrenItem);
                                              }}
                                            >
                                              <span className="sub-side-menu__label">
                                                {childrenItem.title}
                                                {childrenItem.active}
                                              </span>
                                              {childrenItem.active ? (
                                                <i className="sub-angle fa fa-angle-down"></i>
                                              ) : (
                                                <i className="sub-angle fa fa-angle-right"></i>
                                              )}
                                            </Link>
                                          ) : (
                                            ""
                                          )}
                                          {childrenItem.type === "link" ? (
                                            <NavLink
                                              to={childrenItem.path + "/"}
                                              className="slide-item"
                                            >
                                              {childrenItem.title}
                                            </NavLink>
                                          ) : (
                                            ""
                                          )}
                                          third lavel
                                          {childrenItem.children ? (
                                            <ul
                                              className="sub-slide-menu"
                                              style={
                                                childrenItem.active
                                                  ? { display: "block" }
                                                  : { display: "none" }
                                              }
                                            >
                                              {childrenItem.children.map(
                                                (
                                                  childrenSubItem: any,
                                                  key: any
                                                ) => (
                                                  <li
                                                    className={`${
                                                      childrenSubItem.selected
                                                        ? " is-expanded"
                                                        : ""
                                                    }`}
                                                    key={key}
                                                  >
                                                    {childrenSubItem.type ===
                                                    "link" ? (
                                                      <NavLink
                                                        to={
                                                          childrenSubItem.path +
                                                          "/"
                                                        }
                                                        className="sub-slide-item"
                                                      >
                                                        {childrenSubItem.title}
                                                      </NavLink>
                                                    ) : (
                                                      ""
                                                    )}

                                                    {childrenSubItem.type ===
                                                    "sub" ? (
                                                      <Link
                                                        to="#"
                                                        className={`"sub-slide-item" ${
                                                          childrenSubItem.selected
                                                            ? " is-expanded"
                                                            : ""
                                                        }`}
                                                        onClick={(
                                                          event: any
                                                        ) => {
                                                          event.preventDefault();
                                                          toggleSidemenu(
                                                            childrenSubItem
                                                          );
                                                        }}
                                                      >
                                                        <span className="sub-side-menu__label">
                                                          {
                                                            childrenSubItem.title
                                                          }
                                                        </span>
                                                        {childrenSubItem.active ? (
                                                          <i className="sub-angle fa fa-angle-down"></i>
                                                        ) : (
                                                          <i className="sub-angle fa fa-angle-right"></i>
                                                        )}
                                                      </Link>
                                                    ) : (
                                                      ""
                                                    )}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          ) : (
                                            ""
                                          )}
                                        </li>
                                      );
                                    }
                                  )}
                                </div>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                        </>
                      ))}
                    </Fragment>
                  ))} */}
                </>
              </>
            </ul>
            <div className="slide-right" id="slide-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7b8191"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
              </svg>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </Fragment>
  );
};
