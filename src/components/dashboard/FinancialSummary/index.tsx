import React, { FC } from "react";
import { TabPanel } from "@headlessui/react";
import {
  TotalRevenueChart,
  TotalClearing,
  TotalDeductions,
  TotalRefund,
} from "../../../commondata/chartdata";
import { Badge, Card } from "react-bootstrap";
import Totals from "./Totals";

interface IFinancialSummaryProps {
  activeCurrency: string;
}

const index: FC<IFinancialSummaryProps> = ({ activeCurrency }) => {
  return (
    <>
      <TabPanel>
        <div className="row">
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      {activeCurrency}
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div className="mt-2">
                    <h6 className="fw-600 fs-6">Total Revenue</h6>
                    <h2 className="mb-0 number-font">-13,728</h2>
                  </div>
                  <div className="ms-auto">
                    <div className="chart-wrapper mt-1">
                      <TotalRevenueChart />
                    </div>
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      {activeCurrency}
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div className="mt-2">
                    <h6 className="fw-600 fs-6">Total Refunds</h6>
                    <h2 className="mb-0 number-font">-3,597</h2>
                  </div>
                  <div className="ms-auto">
                    <div className="chart-wrapper mt-1">
                      <TotalRefund />
                    </div>
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor, eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.{" "}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      {activeCurrency}
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div className="mt-2">
                    <h6 className="fw-600 fs-6">Total Deductions</h6>
                    <h2 className="mb-0 number-font">-34,597</h2>
                  </div>
                  <div className="ms-auto">
                    <div className="chart-wrapper mt-1">
                      <TotalDeductions />
                    </div>
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor, eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.{" "}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      {activeCurrency}
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div className="mt-2">
                    <h6 className="fw-600 fs-6">Total Clearing</h6>
                    <h2 className="mb-0 number-font">114,000</h2>
                  </div>
                  <div className="ms-auto">
                    <div className="chart-wrapper mt-1">
                      <TotalClearing />
                    </div>
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <Totals />
        </div>
      </TabPanel>
    </>
  );
};

export default index;
