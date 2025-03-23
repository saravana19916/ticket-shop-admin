import { TabPanel } from "@headlessui/react";
import { FC, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap"; // Correct import for Form
import { ButtonPrimary } from "../../styledComponents/styledButton";
import { Imagesdata } from "../../../commondata/commonimages";
import { Link } from "react-router-dom";

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
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Manager":
        return "tag-outline-success";
      case "Director":
        return "tag-outline-warning";
      case "Employee":
        return "tag-outline-danger";
      case "Team Lead":
        return "tag-outline-info";
      default:
        return "";
    }
  };

  return (
    <TabPanel>
      <div className="row" id="Role">
        <Card>
          <Card.Header>
            <div className="d-flex align-items-center gap-3 w-100">
              <Card.Title as="h3">Role Lists</Card.Title>
              <a href="add-role" className="btn btn-primary ms-auto">
                <i className="fe fe-plus me-2"></i> Create Role
              </a>
            </div>
          </Card.Header>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>
                    <Form.Check type="checkbox" label={""} />
                  </th>
                  {headerTable.map((item: any) => {
                    return (
                      <>
                        <th
                          key={item.id}
                          style={{
                            fontWeight: "600",
                            textTransform: "unset",
                            fontSize: "14px",
                          }}
                        >
                          {item.title}
                        </th>
                      </>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rowTable.map((row: any, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>
                          <Form.Check type="checkbox" label={""} />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="me-2 lh-1">
                              <span className="avatar avatar-rounded bg-transparent avatar-sm">
                                <img
                                  className="brround"
                                  src={Imagesdata("users1")}
                                />
                              </span>
                            </div>
                            <div className="d-flex flex-column align-items-start">
                              <p className="mb-0 fw-semibold">{row.name}</p>
                              {/* <p className="mb-0 fs-11 text-muted">
                                {row.email}
                              </p> */}
                            </div>
                          </div>
                        </td>
                        <td className="text-start"> {row.designation} </td>
                        <td className="text-start">
                          <span className={`tag ${getStatusClass(row.role)}`}>
                            {row.role}
                          </span>
                        </td>
                        <td className="text-start"> {row.email} </td>
                        <td className="text-start"> {row.teamAccess} </td>
                        <td className="text-start">
                          <div className="d-flex align-items-center gap-3">
                            <button className="btn btn-success-light btn-icon">
                              <i className="ri-download-2-line"></i>
                            </button>
                            <button className="btn btn-info-light btn-icon ms-1 invoice-btn">
                              <i className="ri-edit-line"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </TabPanel>
  );
};

export default Index;
