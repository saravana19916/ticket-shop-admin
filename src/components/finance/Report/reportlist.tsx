import React, { Fragment, useState } from "react";
import { Button, Card, Dropdown, Table } from "react-bootstrap";
import { Imagesdata } from "../../../commondata/commonimages";
import { Edit2, Trash2 } from "react-feather";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import SearchBar from "../../shared/SearchBar";
import {
  ButtonPrimary,
  IconButtonPrimary,
} from "../../styledComponents/styledButton";
import {
  DangerBadge,
  InfoBadge,
  SuccessBadge,
  WaringBadge,
} from "../../styledComponents/badge";
import CustomDropdownMenu from "../../shared/CustomDropdownMenu";
import AddReportModal from "./AddReportModal";

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
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const handleAddModal = () => setShowAddModal((prev) => !prev);

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
      <AddReportModal
        show={showAddModal}
        handleClose={handleAddModal}
      />

      <div className="row pt-lg-5 pt-0 px-0 pt-xl-5">
        <p className="fw-600 fs-26px text-black mb-6">Report List</p>
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
              onClick={handleAddModal}
            >
              Add Report
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
              {rowTable.map((row: any, index: number) => (
                <tr key={index}>
                  <td className="text-start align-middle">{row.reportName}</td>
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
export default ReportList;
