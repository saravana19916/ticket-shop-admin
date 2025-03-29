import { TabPanel } from "@headlessui/react";
import { FC, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap"; // Correct import for Form
import {
  ButtonPrimary,
  IconButtonPrimary,
} from "../../styledComponents/styledButton";
import { Imagesdata } from "../../../commondata/commonimages";
import { Link } from "react-router-dom";
import SearchBar from "../../shared/SearchBar";
import { Edit2, Trash2 } from "react-feather";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {
  DangerBadge,
  InfoBadge,
  SuccessBadge,
  WaringBadge,
} from "../../styledComponents/badge";
import CustomDropdownMenu from "../../shared/CustomDropdownMenu";

const headerTable = [
  {
    id: "1",
    title: "Name",
  },
  {
    id: "2",
    title: "Designation",
  },
  {
    id: "3",
    title: "Role",
  },
  {
    id: "4",
    title: "Email",
  },
  {
    id: "5",
    title: "Team Access",
  },
  {
    id: "6",
    title: "Action",
  },
];

const rowTable = [
  {
    name: "Mayor Kelly ",
    designation: "Manufacturer",
    role: "Team Lead",
    email: "mayorkrlly@gmail.com",
    teamAccess: "Admin",
  },
  {
    name: "Andrew Garfield ",
    designation: "Managing Director",
    role: "Director",
    email: "andrewgarfield@gmail.com",
    teamAccess: "Admin",
  },
  {
    name: "Simon Cowel ",
    designation: "Service Manager",
    role: "Manager",
    email: "simoncowel234@gmail.com",
    teamAccess: "Admin",
  },
  {
    name: "Mirinda Hers ",
    designation: "Recruiter",
    role: "Employee",
    email: "mirindahers@gmail.com",
    teamAccess: "Admin",
  },
];

const Index: FC = () => {
  return (
    <TabPanel>
      <div className="row pt-lg-5 pt-0 px-0 pt-xl-5">
        <p className="fw-600 fs-26px text-black mb-6">Role List</p>
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
        <div className="col-12 col-md-6 text-end">
          <IconButtonPrimary className="btn" style={{ width: "118px" }}>
            <ArrowDownTrayIcon className="w-5 h-5 me-2 mb-1" />
            <span>Export</span>
          </IconButtonPrimary>
          <a href="/add-role">
            <ButtonPrimary
              type="submit"
              className="btn ms-3"
              style={{ minWidth: "118px" }}
            >
              Add Role
            </ButtonPrimary>
          </a>
        </div>
        <div className="col-12 table-responsive">
          <table className="table table-striped table-hover bordered text-nowrap">
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
              {rowTable.map((row, index) => (
                <tr key={index}>
                  <td className="text-start align-middle">{row.name}</td>
                  <td className="text-start align-middle">{row.designation}</td>
                  <td className="text-start align-middle">
                    {row.role === "Manager" ? (
                      <SuccessBadge>{row.role}</SuccessBadge>
                    ) : row.role === "Employee" ? (
                      <DangerBadge>{row.role}</DangerBadge>
                    ) : row.role === "Director" ? (
                      <WaringBadge>{row.role}</WaringBadge>
                    ) : row.role === "Team Lead" ? (
                      <InfoBadge>{row.role}</InfoBadge>
                    ) : (
                      <DangerBadge>{row.role}</DangerBadge>
                    )}
                  </td>
                  <td className="text-start align-middle">{row.email}</td>
                  <td className="text-start align-middle">{row.teamAccess}</td>

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
                      ]}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </TabPanel>
  );
};

export default Index;
