import React, { FC, useState } from "react";
import {
  ButtonPrimary,
  IconButtonPrimary,
} from "../styledComponents/styledButton";
import SearchBar from "../shared/SearchBar";
import { ArrowDownTrayIcon, WifiIcon } from "@heroicons/react/24/outline";
import { DangerBadge, SuccessBadge } from "../styledComponents/badge";
import CustomDropdownMenu from "../shared/CustomDropdownMenu";
import { Delete, Edit2, Eye, Mail, Trash2 } from "react-feather";

interface IProps {}
const ContactDetails: FC<IProps> = () => {
  const contactDetails = [
    {
      Name: "Alice Johnson",
      ContactNumber: "+1-202-555-0134",
      EmailId: "alice.johnson@example.com",
      CreatedDate: "2025-03-01",
      Status: "Active",
    },
    {
      Name: "Bob Smith",
      ContactNumber: "+1-310-555-0198",
      EmailId: "bob.smith@example.com",
      CreatedDate: "2025-03-02",
      Status: "Inactive",
    },
    {
      Name: "Charlie Brown",
      ContactNumber: "+1-415-555-0234",
      EmailId: "charlie.brown@example.com",
      CreatedDate: "2025-03-03",
      Status: "Active",
    },
    {
      Name: "Diana Lopez",
      ContactNumber: "+1-646-555-0145",
      EmailId: "diana.lopez@example.com",
      CreatedDate: "2025-03-04",
      Status: "Active",
    },
    {
      Name: "Ethan Clark",
      ContactNumber: "+1-718-555-0172",
      EmailId: "ethan.clark@example.com",
      CreatedDate: "2025-03-05",
      Status: "Inactive",
    },
    {
      Name: "Fiona Davis",
      ContactNumber: "+1-213-555-0160",
      EmailId: "fiona.davis@example.com",
      CreatedDate: "2025-03-06",
      Status: "Active",
    },
  ];

  const orders = [
    {
      order_number: 7237614364,
      name: "Chidchanok",
      products: "1",
      revenue: "$5.00",
      status: "Completed",
      purchased: "07-02-2023 12:18",
      last_change: "07-02-2023 12:18",
    },
    {
      order_number: "X434983228",
      name: "Nina",
      products: "1",
      revenue: "$5.00",
      status: "Completed",
      purchased: "07-02-2023 12:17",
      last_change: "07-02-2023 12:18",
    },
    {
      order_number: "NE58647592",
      name: "Ahmed ahmed",
      products: "1",
      revenue: "$0.00",
      status: "Completed",
      purchased: "20-12-2022 11:11",
      last_change: "07-02-2023 12:18",
    },
  ];

  return (
    <>
      <div className="row pt-lg-5 pt-0 px-0 pt-xl-5" id="ContactDetails">
        <p className="fw-600 fs-26px text-black mb-6">Contact List</p>
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
        <div className="col-12 col-md-6 text-end mb-6">
          <IconButtonPrimary className="btn" style={{ width: "118px" }}>
            <ArrowDownTrayIcon className="w-5 h-5 me-2 mb-1" />
            <span>Export</span>
          </IconButtonPrimary>
          <a href="/add-contact">
            <ButtonPrimary
              type="submit"
              className="btn ms-3"
              style={{ minWidth: "118px" }}
            >
              Add Contact
            </ButtonPrimary>
          </a>
        </div>
        <div className="col-12 table-responsive">
          <table className="table table-striped table-hover bordered text-nowrap">
            <thead className="border-0">
              <tr>
                <th className="fw-bold text-start border-end text-capitalize">
                  Name
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Contact Number
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Email Id
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Created Date
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Status
                </th>
                <th className="fw-bold text-start text-capitalize">Action</th>
              </tr>
            </thead>
            <tbody className="border-0">
              {contactDetails.map((row, index) => (
                <tr key={index}>
                  <td className="text-start align-middle">{row.Name}</td>
                  <td className="text-start align-middle">
                    {row.ContactNumber}
                  </td>
                  <td className="text-start align-middle">{row.EmailId}</td>
                  <td className="text-start align-middle">{row.CreatedDate}</td>
                  <td className="text-start align-middle">
                    {row.Status == "Active" ? (
                      <SuccessBadge>{row.Status}</SuccessBadge>
                    ) : (
                      <DangerBadge>{row.Status}</DangerBadge>
                    )}
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

export default ContactDetails;
