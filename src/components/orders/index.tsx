import React from "react";
import { Card, Dropdown, InputGroup, FormControl } from "react-bootstrap";
import { Eye, Mail, Slash } from "react-feather";
import {
  IconButtonPrimary
} from "../styledComponents/styledButton";
import {
  ArrowDownTrayIcon,
  WifiIcon
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Download, Filter } from "react-feather";
import { ButtonPrimaryLight } from "../styledComponents/styledButton";
import { SuccessBadge } from "../styledComponents/badge";

const index = () => {
  const navigate = useNavigate();
  const orders = [
    { order_number: 7237614364, name: "Chidchanok", products: "1", revenue: "$5.00", status: "Completed", purchased: "07-02-2023 12:18", last_change: "07-02-2023 12:18" },
    { order_number: 'X434983228', name: "Nina", products: "1", revenue: "$5.00", status: "Completed", purchased: "07-02-2023 12:17", last_change: "07-02-2023 12:18" },
    { order_number: 'NE58647592', name: "Ahmed ahmed", products: "1", revenue: "$0.00", status: "Completed", purchased: "20-12-2022", last_change: "07-02-2023 12:18" },
  ];

  const handleViewDetails = () => {
    navigate(`${import.meta.env.BASE_URL}view-order/1`);
  };

  return (
    <>
      <div className="row pt-lg-5 pt-0 px-0 pt-xl-5">
        <p className="fw-600 fs-26px text-black mb-6">Orders</p>
        <div className="row mb-6">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-8">
                <div className="input-group mb-2" style={{ height: '55%' }}>
                  <span className="input-group-text">
                    <i className="bi bi-search"></i>
                  </span>
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <p>A minimum of four characters is required</p>
              </div>
              <div className="col-4">
              <ButtonPrimaryLight className="btn">
                <Filter className="w-5 h-5" />
              </ButtonPrimaryLight>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 text-end">
            <IconButtonPrimary className="btn" style={{width: "118px"}}>
              <ArrowDownTrayIcon className="w-5 h-5" />
              <span style={{ marginLeft: "8px" }}>Export</span>
            </IconButtonPrimary>
          </div>
        </div>
        <div className="col-12 table-responsive">
          <table className="table table-striped table-hover bordered text-nowrap">
            <thead className="border-0">
              <tr>
                <th className="fw-bold text-center border-end text-capitalize position-sticky start-0 z-fixed">Order Number</th>
                <th className="fw-bold text-center border-end text-capitalize">Name</th>
                <th className="fw-bold text-center border-end text-capitalize">Products</th>
                <th className="fw-bold text-center border-end text-capitalize">Revenue</th>
                <th className="fw-bold text-center border-end text-capitalize">Status</th>
                <th className="fw-bold text-center border-end text-capitalize">Purchased</th>
                <th className="fw-bold text-center border-end text-capitalize">Last Change</th>
                <th className="fw-bold text-center border-end text-capitalize position-sticky end-0">Action</th>
              </tr>
            </thead>
            <tbody className="border-0">
              {orders.map((row) => (
                <tr key={row.order_number}>
                  <td className="position-sticky start-0 z-fixed text-start align-middle">{row.order_number}</td>
                  <td className="text-start align-middle">{row.name}</td>
                  <td className="text-start align-middle">{row.products}</td>
                  <td className="text-start align-middle">{row.revenue}</td>
                  <td className="text-start align-middle">
                    <SuccessBadge>{row.status}</SuccessBadge>
                  </td>
                  <td className="text-start align-middle">{row.purchased}</td>
                  <td className="text-start align-middle">{row.last_change}</td>
                  <td className="position-sticky end-0 text-start align-middle">
                    <Dropdown align="end">
                      <Dropdown.Toggle
                        variant="link"
                        id="dropdown-basic"
                        className="text-black dark:text-white p-0"
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: "24px",
                          textDecoration: "none",
                        }}
                      >
                        ...
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="z-10">
                        <Dropdown.Item  onClick={handleViewDetails}><Eye size={20} className="me-2 mb-2" /> View details</Dropdown.Item>
                        <Dropdown.Item><Mail size={20} className="me-2 mb-2" /> Resend</Dropdown.Item>
                        <Dropdown.Item><i className="bi bi-fingerprint fs-3 me-2 mb-2"></i>Reset personalisation</Dropdown.Item>
                        <Dropdown.Item><Slash size={20} className="me-2" /> Cancel</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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
