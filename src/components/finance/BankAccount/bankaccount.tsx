import React, { Fragment, useEffect, useState } from "react";
import {
  ButtonPrimary,
  IconButtonPrimary,
} from "../../styledComponents/styledButton";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {
  DangerBadge,
  SuccessBadge,
  WaringBadge,
} from "../../styledComponents/badge";
import CustomDropdownMenu from "../../shared/CustomDropdownMenu";
import { Edit2, Trash2 } from "react-feather";
import SearchBar from "../../shared/SearchBar";

export const BankAccount = () => {
  const rowTable = [
    {
      id: "1",
      accountName: "Zelensk",
      country: "Ukraine",
      bankName: "Bank of Kyiv",
      iban: "UA1234567890123456789012345678901",
      swiftCode: "BKYIUAUK",
    },
    {
      id: "2",
      accountName: "Kim Jong",
      country: "North Korea",
      bankName: "Pyongyang Bank",
      iban: "KP1234567890123456789012345678901",
      swiftCode: "PYNKPRKP",
    },
    {
      id: "3",
      accountName: "Obana",
      country: "USA",
      bankName: "Bank of America",
      iban: "US1234567890123456789012345678901",
      swiftCode: "BOFAUS3N",
    },
    {
      id: "4",
      accountName: "Sean Paul",
      country: "Jamaica",
      bankName: "National Commercial Bank",
      iban: "JM1234567890123456789012345678901",
      swiftCode: "NCBJJMKX",
    },
    {
      id: "5",
      accountName: "Karizma",
      country: "France",
      bankName: "BNP Paribas",
      iban: "FR1234567890123456789012345678901",
      swiftCode: "BNPAFRPP",
    },
  ];

  const headerTable = [
    { id: "1", title: "Account Name" },
    { id: "2", title: "Country" },
    { id: "3", title: "Bank Name" },
    { id: "4", title: "IBAN" },
    { id: "5", title: "Swift Code" },
    { id: "6", title: "Action" },
  ];

  return (
    <>
      <div className="row pt-lg-5 pt-0 px-0 pt-xl-5">
        <p className="fw-600 fs-26px text-black mb-6">Bank Account List</p>
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
          <a href="/add-bank">
            <ButtonPrimary
              type="submit"
              className="btn ms-3"
              style={{ minWidth: "118px" }}
            >
              Add Bank
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
                  <td className="text-start align-middle">{row.accountName}</td>
                  <td className="text-start align-middle">{row.country}</td>
                  <td className="text-start align-middle">{row.bankName}</td>
                  <td className="text-start align-middle">{row.iban}</td>
                  <td className="text-start align-middle">{row.swiftCode}</td>
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

export default BankAccount;
