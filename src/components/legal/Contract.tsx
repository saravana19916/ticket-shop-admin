import React, { FC, useState } from "react";
import { Form } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../styledComponents/styledForm";
import {
  ButtonPrimary,
  IconButtonPrimary,
} from "../styledComponents/styledButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SearchBar from "../shared/SearchBar";
import { ArrowDownTrayIcon, WifiIcon } from "@heroicons/react/24/outline";
import {
  DangerBadge,
  SuccessBadge,
  WaringBadge,
} from "../styledComponents/badge";
import CustomDropdownMenu from "../shared/CustomDropdownMenu";
import { Edit2, Eye, Mail, Trash2 } from "react-feather";

interface IProps {}
const Contract: FC<IProps> = () => {
  const contractsData = [
    {
      ContractTitle: "Service Agreement",
      PartyName: "ABC Corp",
      StartDate: "2024-01-15",
      EndDate: "2026-01-15",
      PaymentType: "Monthly",
      Tenure: "2 years",
      Amount: "$50,000",
      Status: "Active",
    },
    {
      ContractTitle: "Software License",
      PartyName: "Tech Solutions Ltd",
      StartDate: "2023-06-01",
      EndDate: "2025-06-01",
      PaymentType: "Annual",
      Tenure: "2 years",
      Amount: "$120,000",
      Status: "Active",
    },
    {
      ContractTitle: "Maintenance Contract",
      PartyName: "XYZ Services",
      StartDate: "2022-03-10",
      EndDate: "2024-03-10",
      PaymentType: "Quarterly",
      Tenure: "2 years",
      Amount: "$30,000",
      Status: "Expired",
    },
    {
      ContractTitle: "Consulting Agreement",
      PartyName: "Global Advisors",
      StartDate: "2024-05-01",
      EndDate: "2024-11-01",
      PaymentType: "One-time",
      Tenure: "6 months",
      Amount: "$15,000",
      Status: "Active",
    },
    {
      ContractTitle: "Supply Agreement",
      PartyName: "LogiTrade Inc.",
      StartDate: "2023-09-01",
      EndDate: "2024-09-01",
      PaymentType: "Monthly",
      Tenure: "1 year",
      Amount: "$75,000",
      Status: "Cancelled",
    },
    {
      ContractTitle: "Partnership Agreement",
      PartyName: "NextGen Partners",
      StartDate: "2021-01-01",
      EndDate: "2024-01-01",
      PaymentType: "Bi-annual",
      Tenure: "3 years",
      Amount: "$200,000",
      Status: "Expired",
    },
  ];

  return (
    <>
      <div className="row pt-lg-5 pt-0 px-0 pt-xl-5">
        <p className="fw-600 fs-26px text-black mb-6">Contract List</p>
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
        </div>
        <div className="col-12 table-responsive">
          <table className="table table-striped table-hover bordered text-nowrap">
            <thead className="border-0">
              <tr>
                <th className="fw-bold text-start border-end text-capitalize">
                  Contract Title
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Party Name
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Start Date
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  End Date
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Payment Type
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Tenure
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Amount
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Status
                </th>
                <th className="fw-bold text-start text-capitalize">Action</th>
              </tr>
            </thead>
            <tbody className="border-0">
              {contractsData.map((row, index) => (
                <tr key={index}>
                  <td className="text-start align-middle">
                    {row.ContractTitle}
                  </td>
                  <td className="text-start align-middle">{row.PartyName}</td>
                  <td className="text-start align-middle">{row.StartDate}</td>
                  <td className="text-start align-middle">{row.EndDate}</td>
                  <td className="text-start align-middle">{row.PaymentType}</td>
                  <td className="text-start align-middle">{row.Tenure}</td>
                  <td className="text-start align-middle">{row.Amount}</td>
                  <td className="text-start align-middle">
                    {row.Status === "Active" ? (
                      <SuccessBadge>{row.Status}</SuccessBadge>
                    ) : row.Status === "Cancelled" ? (
                      <WaringBadge>{row.Status}</WaringBadge>
                    ) : row.Status === "Expired" ? (
                      <DangerBadge>{row.Status}</DangerBadge>
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

export default Contract;
