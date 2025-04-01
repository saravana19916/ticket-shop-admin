import React, { Fragment, useState } from "react";
import SearchBar from "../../shared/SearchBar";
import {
  ButtonPrimary,
  ButtonSecondary,
  IconButtonPrimary,
} from "../../styledComponents/styledButton";
import { Edit2, Trash2, Mail, Eye } from "react-feather";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {
  DangerBadge,
  InfoBadge,
  SuccessBadge,
  WaringBadge,
} from "../../styledComponents/badge";
import CustomDropdownMenu from "../../shared/CustomDropdownMenu";
import { ButtonGroup, Dropdown } from "react-bootstrap";
interface EmailData {
  title: string;
  type: string;
  status: "Draft" | "Sent";
  lastEdited: string;
  sentDate?: string;
  audience?: string;
  recipients?: number;
  analytics?: {
    opens: string;
    clicks: string;
  };
}

const headerTable = [
  {
    id: "1",
    title: "Name",
  },
  {
    id: "2",
    title: "Status",
  },
  {
    id: "3",
    title: "Audience",
  },
  {
    id: "4",
    title: "Analytics",
  },
  {
    id: "5",
    title: "Action",
  },
];

const rowTable: EmailData[] = [
  {
    title: "Untitled",
    type: "Regular email - Legacy builder",
    status: "Draft",
    lastEdited: "Fri, Mar 28, 06:38 PM",
  },
  {
    title: "Untitled",
    type: "Regular email - Legacy builder",
    status: "Draft",
    lastEdited: "Fri, Mar 28, 06:32 PM",
  },
  {
    title: "The Limitless Mind-Body Retreat in the Heart of Sri Lanka",
    type: "Regular email",
    status: "Sent",
    lastEdited: "Wed, Mar 12, 12:54 PM",
    sentDate: "Wed, Mar 12, 12:54 PM",
    audience: "UAE & Qatar Profiles",
    recipients: 209394,
    analytics: { opens: "10.5%", clicks: "0.4%" },
  },
  {
    title: "Untitled",
    type: "Regular email",
    status: "Draft",
    lastEdited: "Wed, Mar 12, 12:51 PM",
  },
  {
    title: "Monthly Newsletter (January 2024)",
    type: "Regular email",
    status: "Sent",
    lastEdited: "Sun, Jan 19, 07:16 PM",
    sentDate: "Mon, Jan 20, 09:30 AM",
    audience: "UAE & Qatar Profiles",
    recipients: 210200,
    analytics: { opens: "11.6%", clicks: "0.4%" },
  },
  {
    title:
      "Limited Offer: Buy Your Tickets Now and Win a Signed Vinyl Record from Armin v an Buuren! (test)",
    type: "Regular email",
    status: "Draft",
    lastEdited: "Sun, Jan 19, 07:05 PM",
    audience: "UAE & Qatar Profiles",
  },
  {
    title: "AP New Year Message - 2025",
    type: "Regular email",
    status: "Sent",
    lastEdited: "Sat, Jan 04, 02:40 PM",
    sentDate: "Sat, Jan 04, 02:40 PM",
    audience: "AP Circle",
    recipients: 143,
    analytics: { opens: "37.3%", clicks: "0.0%" },
  },
];

const index = () => {
  return (
    <>
      <div className="row pt-lg-5 pt-0 px-0 pt-xl-5">
        {/* <p className="fw-600 fs-26px text-black mb-6">Report List</p> */}
        <div className="col-12 col-md-6 mb-6">
          <div className="row">
            <div className="col-8">
              <SearchBar />
              <p className="mt-3 ms-3">
                A minimum of four characters is required
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-6 text-end">
          <ButtonSecondary
            type="submit"
            className="btn ms-3"
            style={{ minWidth: "118px" }}
          >
            View analytics
          </ButtonSecondary>
          <a href="#">
            <ButtonPrimary
              type="submit"
              className="btn ms-3"
              style={{ minWidth: "118px" }}
            >
              Create
            </ButtonPrimary>
          </a>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center gap-3 mb-6">
            <ButtonGroup className="mt-2 mb-2 me-1">
              <Dropdown>
                <Dropdown.Toggle
                  className="btn-pill d-flex align-items-center gap-2 fs-11px text-white px-6"
                  variant="primary"
                  id="dropdown-basic"
                >
                  <span>Audience</span>
                  <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
                </Dropdown.Toggle>
                <Dropdown.Menu className="fs-12px">
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
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
                  <span>Type</span>
                  <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
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
                  <span>Status</span>
                  <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
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
                  <span>Folder</span>
                  <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
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
                  <span>Date</span>
                  <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
                </Dropdown.Toggle>
                <Dropdown.Menu className="fs-12px">
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
            <ButtonGroup className="mt-2 mb-2 me-1 ms-auto">
              <Dropdown>
                <Dropdown.Toggle
                  className="btn-pill d-flex align-items-center gap-2 fs-11px px-6"
                  variant="outline-default"
                  id="dropdown-basic"
                >
                  <span>Sort by:</span>
                  <b className="fa fa-angle-down fs-5" aria-hidden="true"></b>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1">All</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </div>
        <div className="col-12 table-responsive">
          <table className="table table-striped table-hover bordered ">
            <thead className="border-0">
              <tr>
                {headerTable.map((item) => {
                  return (
                    <th
                      key={item.id}
                      className="fw-bold text-start border-end text-capitalize"
                    >
                      {item.title}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="border-0">
              {rowTable.map((row: EmailData, index: number) => (
                <tr key={index}>
                  <td
                    className="text-start align-middle"
                    style={{ width: "30%" }}
                  >
                    <div className="d-flex flex-column">
                      <label className="fw-semibold text-primary">
                        {row.title}
                      </label>
                      <label>
                        <Mail size={12} /> {row.type}
                      </label>
                      <small className="text-gray">{row.lastEdited}</small>
                    </div>
                  </td>
                  <td className="text-start align-middle">
                    {row.status === "Sent" ? (
                      <SuccessBadge>{row.status}</SuccessBadge>
                    ) : row.status === "Draft" ? (
                      <DangerBadge>{row.status}</DangerBadge>
                    ) : (
                      <DangerBadge>{row.status}</DangerBadge>
                    )}
                    <p className="text-gray m-0 fs-12">{row.sentDate}</p>
                  </td>
                  <td className="text-start align-middle">
                    <div className="d-flex flex-column">
                      <span className="fw-semibold">{row.audience}</span>
                      <p className="text-gray m-0 fs-12">{row.recipients}</p>
                    </div>
                  </td>
                  <td className="text-start align-middle">
                    <div className="d-flex gap-3">
                      <div>
                        <span className="fw-semibold">
                          {row.analytics?.opens}
                        </span>
                        {row.analytics && (
                          <p className="text-gray m-0 fs-12">opens</p>
                        )}
                      </div>
                      <div>
                        <span className="fw-semibold">
                          {row.analytics?.clicks}
                        </span>
                        {row.analytics && (
                          <p className="text-gray m-0 fs-12">clicks</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="text-start align-middle">
                    <CustomDropdownMenu
                      menuItems={[
                        {
                          itemName: "Edit",
                          onClick: () => {},
                          icon: <Edit2 size={20} />,
                        },
                        {
                          itemName: "Delete",
                          onClick: () => {},
                          icon: <Trash2 size={20} />,
                        },
                        {
                          itemName: "View report",
                          onClick: () => {},
                          icon: <Eye size={20} />,
                        },
                      ]}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default index;
