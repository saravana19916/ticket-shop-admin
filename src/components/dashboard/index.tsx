import React, { FC, Fragment, useEffect, useState } from "react";
import PageHeader from "../../layouts/layoutcomponents/pageheader";
import moment from "moment";
import { Badge, Button, Modal } from "react-bootstrap";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import SalesSummary from "./SalesSummary/index";
import SharedAccess from "./SharedAccess";
import FinancialSummary from "./FinancialSummary";
import LiveAnalytics from "./LiveAnalytics";
import CustomIcons from "../icons/customIcons";
import {
  BanknotesIcon,
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
  CurrencyRupeeIcon,
  CurrencyYenIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Imagesdata } from "../../commondata/commonimages";
import { useTranslation } from "react-i18next";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CustomTabButton from "../shared/CustomTabButton";
interface IDashboardProps {}
interface IHeaderCurrencyProps {
  id: string;
  name: string;
  href: string;
  icon: any;
  active?: boolean;
  isCustomIcon?: boolean;
}
export const headerCurrency: IHeaderCurrencyProps[] = [
  {
    id: "AED",
    name: "AED",
    href: "##",
    active: true,
    icon: "dirham",
    isCustomIcon: true,
  },
  {
    id: "INR",
    name: "INR",
    href: "##",
    icon: CurrencyRupeeIcon,
  },
  {
    id: "EUR",
    name: "EUR",
    href: "##",
    icon: CurrencyEuroIcon,
  },
  {
    id: "USD",
    name: "USD",
    href: "##",
    icon: CurrencyDollarIcon,
  },
  {
    id: "YEN",
    name: "YEN",
    href: "##",
    icon: CurrencyYenIcon,
  },
  {
    id: "GBF",
    name: "GBF",
    href: "##",
    icon: CurrencyPoundIcon,
  },
];
const dashboards: FC<IDashboardProps> = () => {
  const location = useLocation();

  const urlParams = new URLSearchParams(window.location.search);

  const [activeLanguage, setActiveLanguage] = useState("English");

  useEffect(() => {
    const language = localStorage.getItem("language") || "english";
    setActiveLanguage(language);
    i18n.changeLanguage(language);
  }, []);

  const tabList = [
    "Sales Highlights",
    "Live Analytics",
    "Financial Summary",
    "Shared Access",
  ];
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => {
      return !prev;
    });
  };
  const [activeCurrency, setActiveCurrency] = useState("AED");
  const { t, i18n } = useTranslation();
  const queryClient = useQueryClient();

  const { data: currentEventId } = useQuery<string>({
    queryKey: ["currentEventId"],
    queryFn: () => queryClient.getQueryData<string>(["currentEventId"]) ?? "",
  });
  const [eventData, setEventData] = useState<any>();
  const [selectedEvent, setSelectedEvent] = useState<any>(undefined);
  useEffect(() => {
    const eventDataString = sessionStorage.getItem("response");
    const eventData: any | null = eventDataString
      ? JSON.parse(eventDataString)
      : null;
    setEventData(eventData);
  }, []);
  useEffect(() => {
    if (currentEventId && eventData) {
      const events = eventData?.user?.events;
      const selectedEvent = events?.find(
        (event: any) => event?.id === currentEventId
      );
      selectedEvent && setSelectedEvent(selectedEvent);
    }
  }, [currentEventId, eventData]);
  const getEventStatus = (
    endDate: string | undefined
  ): "past" | "onSale" | "cancelled" | null => {
    if (!endDate) {
      return null;
    }
    const currentDate = new Date();
    const eventEndDate = new Date(endDate);

    return currentDate > eventEndDate ? "past" : "onSale";
  };
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <>
      <Modal
        className="modal fade"
        show={show}
        onHide={handleShow}
        centered
        contentClassName="rounded-5"
      >
        <Modal.Header>
          <Modal.Title as="h6" className="fw-600 fs-5">
            {t("chooseCurrency")}
          </Modal.Title>
          <span className="d-flex ms-auto cursor-pointer" onClick={handleShow}>
            <i className="fe fe-x ms-auto fs-4"></i>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="row ">
            <div className="col-12">
              <div className="row">
                {headerCurrency.map((l: IHeaderCurrencyProps) => (
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
                          l.id === activeCurrency ? "bg-light rounded-1" : ""
                        }`}
                      >
                        <div className="d-flex justify-content-center align-items-center flex-column">
                          <h5 className="mt-1">{l.name}</h5>
                          {l.isCustomIcon ? (
                            <>
                              <CustomIcons
                                color="#777"
                                height="20"
                                width="20"
                                name={l.icon}
                              />
                            </>
                          ) : (
                            <>
                              <l.icon
                                className="h-5 w-5 "
                                style={{ color: "#777" }}
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="row p-0 p-md-2 p-lg-4 p-xl-4">
        <div className="col-12 mb-2 d-flex d-md-none align-items-center justify-content-between">
          <span className="fw-semibold">{selectedEvent?.display_date}</span>
          <button className="btn float-end text-black" onClick={handleShow}>
            Change Currency
            <BanknotesIcon className="ms-2 h-5 w-5 text-black" />
          </button>
        </div>
        <div className="col-xxl-6 col-xl-8 col-md-10 col-12">
          <div className="d-flex align-items-center justify-content-between justify-content-md-start gap-0 gap-md-3 mb-4 mb-md-0">
            <div className="">
              <span className="fw-600 fs-26px">
                {selectedEvent?.identifier}
              </span>
            </div>
            <div className="">
              <div className="d-flex gap-3">
                {getEventStatus(selectedEvent?.end_date) === "past" ? (
                  <>
                    <span
                      className="badge px-5 py-1 rounded-pill"
                      style={{ fontSize: "14px", backgroundColor: "#929BA4" }}
                    >
                      Past
                    </span>
                  </>
                ) : null}
                {getEventStatus(selectedEvent?.end_date) === "onSale" ? (
                  <>
                    <span
                      className="badge px-5 py-1 rounded-pill"
                      style={{ fontSize: "14px", backgroundColor: "#00A650" }}
                    >
                      On Sale
                    </span>
                  </>
                ) : null}
                {getEventStatus(selectedEvent?.end_date) === "cancelled" ? (
                  <>
                    <span
                      className="badge px-5 py-1 rounded-pill"
                      style={{ fontSize: "14px", backgroundColor: "#ed003b" }}
                    >
                      Cancelled
                    </span>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-md-block col-xxl-6 col-xl-4 col-md-2 col-12">
          <button className="btn float-end text-black" onClick={handleShow}>
            Change Currency
            <BanknotesIcon className="ms-2 h-5 w-5 text-black" />
          </button>
        </div>
      </div>
      <TabGroup
        className="row px-0 px-md-2 px-lg-4 px-xl-4 py-md-2 py-0"
        selectedIndex={selectedTab}
      >
        <TabList className="mb-7 filter-container">
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
          <SalesSummary
            activeCurrency={activeCurrency}
            currentEventId={currentEventId}
          />
          <LiveAnalytics currentEventId={currentEventId} />
          <FinancialSummary activeCurrency={activeCurrency} />
          <SharedAccess />
        </TabPanels>
      </TabGroup>
      {/* <div className="row py-2 px-4">
        <div className="col-6 mb-3">
          <div className="row">
            <div className="col-3">
              <Badge className="p-3 px-5 rounded-pill">Sales Summary</Badge>
            </div>
            <div className="col-3">
              <Badge className="p-3 px-5 rounded-pill bg-white text-dark border">
                Live Analytics
              </Badge>
            </div>
            <div className="col-3">
              <Badge className="p-3 px-5 rounded-pill bg-white text-dark border">
                Financial Summary
              </Badge>
            </div>
            <div className="col-3">
              <Badge className="p-3 px-5 rounded-pill bg-white text-dark border">
                Shared Access
              </Badge>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default dashboards;
