import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState, Fragment } from "react";
import { Accordion, Badge, ButtonGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import GuestListSetting from "./GuestListSetting/GuestListSetting";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./guest-list.css";
import "../../assets/css/_table.css";
import { GuestListData } from "./helpers";
import GuestListAccordion from "./GuestListAccordion";
import {
  IconButtonPrimary,
  LinkButtonPrimary,
} from "../styledComponents/styledButton";
import CustomTabButton from "../shared/CustomTabButton";

const tabList = [
  "Organization",
  "Date",
  "Delivery",
  "Product",
  "Status",
  "Issued By",
];

const index = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [showSetting, setShowSetting] = useState(false);

  const viewSettingClose = () => setShowSetting(false);
  const viewSettingShow = () => setShowSetting(true);
  return (
    <>
      {/* <DropDowns /> */}
      <div className="row p-0 p-md-2 p-lg-4 p-xl-4 mt-7 mb-6">
        <div className="col-6 mb-3 mt-3">
          <span className="fw-600 fs-26px">My Guest List</span>
        </div>
        <div className="col-6 mb-3 mt-3 d-flex align-items-center justify-content-end gap-2">
          <IconButtonPrimary className="btn" onClick={viewSettingShow}>
            <Cog6ToothIcon className="w-5 h-5" />
          </IconButtonPrimary>
          <IconButtonPrimary className="btn">
            <ArrowDownTrayIcon className="w-5 h-5" />
          </IconButtonPrimary>
          <LinkButtonPrimary
            to="/bulk-invitation"
            type="button"
            className="btn"
          >
            Bulk Invitation
          </LinkButtonPrimary>
          <LinkButtonPrimary
            to="/single-invitation"
            type="button"
            className="btn"
          >
            Single Invitation
          </LinkButtonPrimary>
        </div>
      </div>
      <div className="row px-0 px-md-2 px-lg-4 px-xl-4 py-2">
        <div className="d-flex align-items-center gap-3 mb-6">
          <ButtonGroup className="mt-2 mb-2 me-1">
            <Dropdown>
              <Dropdown.Toggle
                className="btn-pill d-flex align-items-center gap-2 fs-11px text-white px-6"
                variant="primary"
                id="dropdown-basic"
              >
                <span>Organization</span>
                <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
              </Dropdown.Toggle>
              <Dropdown.Menu className="fs-12px">
                <Dropdown.Item eventKey="1">Alchemy Project</Dropdown.Item>
                <Dropdown.Item eventKey="1">Alchemy Project</Dropdown.Item>
                <Dropdown.Item eventKey="1">Alchemy Project</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
          <ButtonGroup className="mt-2 mb-2 me-1">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-default"
                className="btn-pill d-flex align-items-center gap-2 fs-11px px-6"
                id="dropdown-basic"
              >
                <span>Date</span>
                <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
              </Dropdown.Toggle>
              <Dropdown.Menu className="fs-12px"></Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
          <ButtonGroup className="mt-2 mb-2 me-1">
            <Dropdown>
              <Dropdown.Toggle
                className="btn-pill d-flex align-items-center gap-2 fs-11px px-6"
                variant="outline-default"
                id="dropdown-basic"
              >
                <span>Delivery</span>
                <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Email</Dropdown.Item>
                <Dropdown.Item eventKey="1">Email</Dropdown.Item>
                <Dropdown.Item eventKey="1">Email</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
          <ButtonGroup className="mt-2 mb-2 me-1">
            <Dropdown>
              <Dropdown.Toggle
                className="btn-pill d-flex align-items-center gap-2 fs-11px px-6"
                variant="outline-default"
                id="dropdown-basic"
              >
                <span>Product</span>
                <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
              </Dropdown.Toggle>
              <Dropdown.Menu className="fs-12px"></Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
          <ButtonGroup className="mt-2 mb-2 me-1">
            <Dropdown>
              <Dropdown.Toggle
                className="btn-pill d-flex align-items-center gap-2 fs-11px px-6"
                variant="outline-default"
                id="dropdown-basic"
              >
                <span>Status</span>
                <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
              </Dropdown.Toggle>
              <Dropdown.Menu className="fs-12px">
                <Dropdown.Item eventKey="1">Cancelled</Dropdown.Item>
                <Dropdown.Item eventKey="1">Issued</Dropdown.Item>
                <Dropdown.Item eventKey="1">Used</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
          <ButtonGroup className="mt-2 mb-2 me-1">
            <Dropdown>
              <Dropdown.Toggle
                className="btn-pill d-flex align-items-center gap-2 fs-11px px-6"
                variant="outline-default"
                id="dropdown-basic"
              >
                <span>Issued By</span>
                <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
              </Dropdown.Toggle>
              <Dropdown.Menu className="fs-12px"></Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
        </div>
        <div className="mt-6">
          <Accordion className="panel-default d-flex flex-column gap-4">
            {GuestListData?.map((item, index) => (
              <>
                <GuestListAccordion item={item} index={`${index}`} />
              </>
            ))}
          </Accordion>
        </div>

        {/* <TabGroup className="row px-0 py-2" selectedIndex={selectedTab}>
          <TabList className="filter-container mb-7" style={{ margin: "auto" }}>
            {tabList.map((tabName, idx) => (
              <Tab as={Fragment} key={idx}>
                {({ selected }) => (
                  <>
                    <CustomTabButton
                      tabName={tabName}
                      selected={selected}
                      index={idx}
                      setSelectedTab={setSelectedTab}
                    />
                  </>
                )}
              </Tab>
            ))}
          </TabList>
          <TabPanels as="div" className="col-12 mt-6">
            <Accordion className="panel-default d-flex flex-column gap-4">
              {GuestListData?.map((item, index) => (
                <>
                  <GuestListAccordion item={item} index={`${index}`} />
                </>
              ))}
            </Accordion>
          </TabPanels>
        </TabGroup> */}
      </div>
      <GuestListSetting show={showSetting} onClose={viewSettingClose} />
    </>
  );
};

export default index;
