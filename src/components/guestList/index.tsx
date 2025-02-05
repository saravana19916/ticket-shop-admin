import { PlusIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";
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

const index = () => {
  const [showSetting, setShowSetting] = useState(false);

  const viewSettingClose = () => setShowSetting(false);
  const viewSettingShow = () => setShowSetting(true);
  return (
    <>
      {/* <DropDowns /> */}
      <div className="row p-0 p-md-2 p-lg-4 p-xl-4">
        <div className="col-6 mb-3 mt-3">
          <span className="fw-600 fs-26px">My Guest List</span>
        </div>
        <div className="col-6 mb-3 mt-3 d-flex align-items-center justify-content-end gap-2">
          <button
            className="btn btn-icon btn-primary btn-wave waves-effect waves-light rounded-pill p-2"
            onClick={viewSettingShow}
          >
            <Cog6ToothIcon className="w-5 h-5" />
          </button>
          <button className="btn btn-icon btn-primary btn-wave waves-effect waves-light rounded-pill p-2">
            <ArrowDownTrayIcon className="w-5 h-5" />
          </button>
          <Link
            to="/bulk-invitation"
            type="button"
            className="btn rounded-pill px-5 py-2 btn-primary"
          >
            <PlusIcon className="w-4 h-4 me-2 mb-1px" />
            Bulk Invitation
          </Link>
          <Link
            to="/single-invitation"
            type="button"
            className="btn rounded-pill px-5 py-2 btn-primary"
          >
            <PlusIcon className="w-4 h-4 me-2 mb-1px" />
            Single Invitation
          </Link>
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
      </div>
      <GuestListSetting show={showSetting} onClose={viewSettingClose} />
    </>
  );
};

export default index;
