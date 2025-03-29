import React, { Fragment } from "react";
import { Button, Card, Dropdown, Table } from "react-bootstrap";
import { Imagesdata } from "../../../commondata/commonimages";
import SearchBar from "../../shared/SearchBar";
import {
  ButtonPrimary,
  IconButtonPrimary,
} from "../../styledComponents/styledButton";
import { Edit2, Trash2 } from "react-feather";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import CustomDropdownMenu from "../../shared/CustomDropdownMenu";
import {
  DangerBadge,
  InfoBadge,
  SuccessBadge,
  WaringBadge,
} from "../../styledComponents/badge";

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
      <div className="row pt-lg-5 pt-0 px-0 pt-xl-5">
        <p className="fw-600 fs-26px text-black mb-6">Invoice List</p>
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
          <IconButtonPrimary className="btn" style={{ width: "118px" }}>
            <ArrowDownTrayIcon className="w-5 h-5 me-2 mb-1" />
            <span>Export</span>
          </IconButtonPrimary>
          <a href="#">
            <ButtonPrimary
              type="submit"
              className="btn ms-3"
              style={{ minWidth: "118px" }}
            >
              Add Invoice
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
                  <td className="text-start align-middle">
                    <div className="d-flex align-items-center">
                      <div className="me-2 lh-1">
                        <span className="avatar avatar-rounded bg-transparent">
                          <img className="brround" src={Imagesdata("users1")} />
                        </span>
                      </div>
                      <div className="d-flex flex-column align-items-start">
                        <p className="mb-0 fw-semibold">{row.name}</p>
                        <p className="mb-0 fs-11 text-muted">{row.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-start align-middle">
                    <a
                      href={`invoice-detail/${index}`}
                      className="fw-semibold text-primary"
                    >
                      {row.invoiceId}
                    </a>
                  </td>
                  <td className="text-start align-middle">{row.issuedDate}</td>
                  <td className="text-start align-middle">{row.amount}</td>
                  <td className="text-start align-middle">
                    {row.status === "Paid" ? (
                      <SuccessBadge>{row.status}</SuccessBadge>
                    ) : row.status === "Overdue" ? (
                      <DangerBadge>{row.status}</DangerBadge>
                    ) : row.status === "Pending" ? (
                      <WaringBadge>{row.status}</WaringBadge>
                    ) : row.status === "Due By 1 Day" ? (
                      <InfoBadge>{row.status}</InfoBadge>
                    ) : (
                      <DangerBadge>{row.status}</DangerBadge>
                    )}
                  </td>
                  <td className="text-start align-middle">{row.dueDate}</td>
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
    </>
  );
};
export default InvoiceList;
