import React, { Fragment } from "react";
import { Button, Card, Dropdown, Table } from "react-bootstrap";
import { Imagesdata } from "../../../commondata/commonimages";

const headerTable = [
  {
    id: "1",
    title: "Client",
  },
  {
    id: "2",
    title: "Invoice ID",
  },
  {
    id: "3",
    title: "Issued Date",
  },
  {
    id: "4",
    title: "Amount",
  },
  {
    id: "5",
    title: "Status",
  },
  {
    id: "6",
    title: "Due Date",
  },
  {
    id: "7",
    title: "Action",
  },
];

const rowTable = [
  {
    name: "Json Taylor",
    email: "jsontaylor2416@gmail.com",
    invoiceId: "#SPK12032901",
    issuedDate: "25,Nov 2022",
    amount: "$212.45",
    status: "Paid",
    dueDate: "25,Dec 2022",
  },
  {
    name: "Suzika Stallone",
    email: "suzikastallone3214@gmail.com",
    invoiceId: "#SPK12032912",
    issuedDate: "13,Nov 2022",
    amount: "$512.99",
    status: "Pending",
    dueDate: "13,Dec 2022",
  },
  {
    name: "Roman Killon",
    email: "romankillon143@gmail.com",
    invoiceId: "#SPK12032945",
    issuedDate: "30,Nov 2022",
    amount: "$2199.49",
    status: "Overdue",
    dueDate: "30,Dec 2022",
  },
  {
    name: "Charlie Davieson",
    email: "charliedavieson@gmail.com",
    invoiceId: "#SPK12032922",
    issuedDate: "18,Nov 2022",
    amount: "$1569.99",
    status: "Paid",
    dueDate: "18,Dec 2022",
  },
  {
    name: "Selena Deoyl",
    email: "selenadeoyl114@gmail.com",
    invoiceId: "#SPK12032932",
    issuedDate: "18,Nov 2022",
    amount: "$4,873.99",
    status: "Due By 1 Day",
    dueDate: "18,Dec 2022",
  },
  {
    name: "Kiara Advensh",
    email: "kiaraadvensh87@gmail.com",
    invoiceId: "#SPK12032978",
    issuedDate: "02,Nov 2022",
    amount: "$1923.99",
    status: "Paid",
    dueDate: "18,Dec 2022",
  },
  {
    name: "Joseph Samurai",
    email: "josephsamurai@gmail.com",
    invoiceId: "#SPK12032919",
    issuedDate: "15,Nov 2022",
    amount: "$1,623.99",
    status: "Paid",
    dueDate: "15,Dec 2022",
  },
  {
    name: "Kevin Powell",
    email: "kevinpowell@gmail.com",
    invoiceId: "#SPK12032931",
    issuedDate: "21,Nov 2022",
    amount: "$3,423.99",
    status: "Pending",
    dueDate: "21,Dec 2022",
  },
  {
    name: "Darla Jung",
    email: "darlajung555@gmail.com",
    invoiceId: "#SPK12032958",
    issuedDate: "15,Oct 2022",
    amount: "$2,982.99",
    status: "Paid",
    dueDate: "15,Nov 2022",
  },
];

export const InvoiceList = () => {
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
            <Card.Title as="h3">Manage Invoices</Card.Title>
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
              {rowTable.map((row: any, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="me-2 lh-1">
                            <span className="avatar avatar-rounded bg-transparent">
                              <img
                                className="brround"
                                src={Imagesdata("users1")}
                              />
                            </span>
                          </div>
                          <div className="d-flex flex-column align-items-start">
                            <p className="mb-0 fw-semibold">{row.name}</p>
                            <p className="mb-0 fs-11 text-muted">{row.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-start">
                        <a
                          href={`invoice-detail/${index}`}
                          className="fw-semibold text-primary"
                        >
                          {row.invoiceId}
                        </a>
                      </td>
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
export default InvoiceList;
