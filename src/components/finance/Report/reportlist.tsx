import React, { Fragment } from "react";
import { Button, Card, Dropdown, Table } from "react-bootstrap";
import { Imagesdata } from "../../../commondata/commonimages";

const headerTable = [
  {
    id: "1",
    title: "Caption",
  },
  {
    id: "2",
    title: "Issued Date",
  },
  {
    id: "3",
    title: "Amount",
  },
  {
    id: "4",
    title: "Status",
  },
  {
    id: "5",
    title: "Due Date",
  },
  {
    id: "6",
    title: "Action",
  },
];

const rowTable: any = [
  {
    name: "Json Taylor",
    email: "jsontaylor2416@gmail.com",
    issuedDate: "25,Nov 2022",
    amount: "$212.45",
    status: "Paid",
    dueDate: "25,Dec 2022",
    reportName: "Annual Report", // New data field
  },
  {
    name: "Suzika Stallone",
    email: "suzikastallone3214@gmail.com",
    issuedDate: "13,Nov 2022",
    amount: "$512.99",
    status: "Pending",
    dueDate: "13,Dec 2022",
    reportName: "Project X Overview", // New data field
  },
  {
    name: "Roman Killon",
    email: "romankillon143@gmail.com",
    issuedDate: "30,Nov 2022",
    amount: "$2199.49",
    status: "Overdue",
    dueDate: "30,Dec 2022",
    reportName: "Financial Report Q4", // New data field
  },
  {
    name: "Charlie Davieson",
    email: "charliedavieson@gmail.com",
    issuedDate: "18,Nov 2022",
    amount: "$1569.99",
    status: "Paid",
    dueDate: "18,Dec 2022",
    reportName: "Client Summary", // New data field
  },
  {
    name: "Selena Deoyl",
    email: "selenadeoyl114@gmail.com",
    amount: "$4,873.99",
    status: "Due By 1 Day",
    dueDate: "18,Dec 2022",
    reportName: "Year-End Review", // New data field
  },
  {
    name: "Kiara Advensh",
    email: "kiaraadvensh87@gmail.com",
    issuedDate: "02,Nov 2022",
    amount: "$1923.99",
    status: "Paid",
    dueDate: "18,Dec 2022",
    reportName: "Product Launch Report", // New data field
  },
  {
    name: "Joseph Samurai",
    email: "josephsamurai@gmail.com",
    issuedDate: "15,Nov 2022",
    amount: "$1,623.99",
    status: "Paid",
    dueDate: "15,Dec 2022",
    reportName: "Marketing Campaign", // New data field
  },
  {
    name: "Kevin Powell",
    email: "kevinpowell@gmail.com",
    issuedDate: "21,Nov 2022",
    amount: "$3,423.99",
    status: "Pending",
    dueDate: "21,Dec 2022",
    reportName: "Team Performance", // New data field
  },
  {
    name: "Darla Jung",
    email: "darlajung555@gmail.com",
    issuedDate: "15,Oct 2022",
    amount: "$2,982.99",
    status: "Paid",
    dueDate: "15,Nov 2022",
    reportName: "Sales Overview", // New data field
  },
];

export const ReportList = () => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Paid":
        return "tag-outline-success";
      case "Pending":
        return "tag-outline-warning";
      case "Overdue":
        return "tag-outline-danger";
      case "Due By 1 Day":
        return "tag-outline-info";
      default:
        return "";
    }
  };
  return (
    <>
      <Card>
        <Card.Header>
          <div className="d-flex align-items-center gap-3 w-100">
            <Card.Title as="h3">Manage Reports</Card.Title>
            <Button className="btn btn-primary ms-auto">
              <i className="fe fe-plus me-2"></i> Create Invoice
            </Button>
            <Dropdown>
              <Dropdown.Toggle variant="default">
                <i className="fe fe-more-vertical"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Dropdown Link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown Link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Header>
        <Card.Body>
          <Table bordered>
            <thead>
              <tr>
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
              {rowTable.map((row: any, index: any) => {
                return (
                  <>
                    <tr key={index}>
                      <td className="text-start">{row.reportName}</td>

                      <td className="text-start"> {row.issuedDate} </td>
                      <td className="text-start"> {row.amount} </td>
                      <td className="text-start">
                        <span className={`tag ${getStatusClass(row.status)}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="text-start"> {row.dueDate} </td>
                      <td className="text-start">
                        <div className="d-flex align-items-center gap-3">
                          <button
                            className="btn btn-info-light btn-icon btn-sm"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Print"
                          >
                            <i className="ri-printer-line"></i>
                          </button>
                          <button
                            className="btn btn-danger-light btn-icon ms-1 btn-sm invoice-btn"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Delete"
                          >
                            <i className="ri-delete-bin-5-line"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
          <div className="d-block d-sm-flex mt-4 ">
            <span className="">
              Page <strong>1 of 3</strong>{" "}
            </span>
            <span className="ms-sm-auto">
              <Button
                variant=""
                className="btn-default tablebutton d-sm-inline d-block me-2 my-2"
              >
                {" Previous "}
              </Button>
              {/* <Button variant="" className="btn-default tablebutton me-2 my-2">
                {" << "}
              </Button>
              <Button variant="" className="btn-default tablebutton me-2 my-2">
                {" < "}
              </Button> */}
              <Button variant="" className="btn-default tablebutton me-2 my-2">
                {" 1 "}
              </Button>
              <Button variant="" className="btn-default tablebutton me-2 my-2">
                {" 2 "}
              </Button>
              <Button variant="" className="btn-default tablebutton me-2 my-2">
                {" 3 "}
              </Button>
              {/* <Button variant="" className="btn-default tablebutton me-2 my-2">
                {" > "}
              </Button>
              <Button variant="" className="btn-default tablebutton me-2 my-2">
                {" >> "}
              </Button> */}
              <Button variant="" className="btn-default tablebutton me-2 my-2">
                {" Next "}
              </Button>
            </span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default ReportList;
