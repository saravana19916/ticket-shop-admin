import React, { useState } from "react";
import { Card, Dropdown, InputGroup, FormControl } from "react-bootstrap";
import { Eye, Mail, Slash } from "react-feather";
import { IconButtonPrimary } from "../styledComponents/styledButton";
import { ArrowDownTrayIcon, WifiIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Download, Filter } from "react-feather";
import { ButtonPrimaryLight } from "../styledComponents/styledButton";
import { SuccessBadge } from "../styledComponents/badge";
import SearchBar from "../shared/SearchBar";
import CustomDropdownMenu from "../shared/CustomDropdownMenu";
import { FaFingerprint } from "react-icons/fa";
import ResendOrderModal from "./ResendOrderModal";

const index = () => {
  const navigate = useNavigate();
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

  const handleViewDetails = (id: number) => {
    navigate(`${import.meta.env.BASE_URL}view-order/${id}`);
  };
  const [resendOrderModal, setResendOrderModal] = useState<boolean>(false);
  return (
    <>
      <ResendOrderModal
        handleClose={() => setResendOrderModal(false)}
        show={resendOrderModal}
      />
      <div className="row pt-lg-5 pt-0 px-0 pt-xl-5 mt-6">
        <p className="fw-600 fs-26px text-black mb-6">Orders</p>
        <div className="row mb-6">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-8">
                <SearchBar />
                <p className="mt-3 ms-3">
                  A minimum of four characters is required
                </p>
              </div>
              <div className="col-4">
                <ButtonPrimaryLight className="btn py-2">
                  <Filter className="w-5 h-5" />
                </ButtonPrimaryLight>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 text-end">
            <IconButtonPrimary className="btn" style={{ width: "118px" }}>
              <ArrowDownTrayIcon className="w-5 h-5 me-2 mb-1" />
              <span>Export</span>
            </IconButtonPrimary>
          </div>
        </div>
        <div className="col-12 table-responsive">
          <table className="table table-striped table-hover bordered text-nowrap">
            <thead className="border-0">
              <tr>
                <th className="fw-bold text-start border-end text-capitalize">
                  Order Number
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Name
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Products
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Revenue
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Status
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Purchased
                </th>
                <th className="fw-bold text-start border-end text-capitalize">
                  Last Change
                </th>
                <th className="fw-bold text-start text-capitalize">Action</th>
              </tr>
            </thead>
            <tbody className="border-0">
              {orders.map((row) => (
                <tr key={row.order_number}>
                  <td className="text-start align-middle">
                    {row.order_number}
                  </td>
                  <td className="text-start align-middle">{row.name}</td>
                  <td className="text-start align-middle">{row.products}</td>
                  <td className="text-start align-middle">{row.revenue}</td>
                  <td className="text-start align-middle">
                    <SuccessBadge>{row.status}</SuccessBadge>
                  </td>
                  <td className="text-start align-middle">{row.purchased}</td>
                  <td className="text-start align-middle">{row.last_change}</td>
                  <td className="text-start align-middle">
                    <CustomDropdownMenu
                      menuItems={[
                        {
                          itemName: "View Details",
                          onClick: () => handleViewDetails(1),
                          icon: <Eye size={20} />,
                        },
                        {
                          itemName: "Resend",
                          onClick: () => setResendOrderModal(true),
                          icon: <Mail size={20} />,
                        },
                        {
                          itemName: "Reset personalization",
                          onClick: () => {},
                          icon: <FaFingerprint size={20} />,
                          isDisabled: true,
                        },
                        {
                          itemName: "Cancel",
                          onClick: () => {},
                          icon: <Slash size={20} />,
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
