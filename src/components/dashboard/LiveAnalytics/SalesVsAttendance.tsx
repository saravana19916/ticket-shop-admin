import React, { FC } from "react";
import { Badge, Card } from "react-bootstrap";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ISalesDetails } from "../../../service/dashboard-live-analysis.service";
import { roundToNearestWhole } from "../../../utils/helpers";
import SalesVsAttendanceChart from "../../../commondata/SalesvsAttendanceChart";
interface IProps {
  sales: ISalesDetails | undefined;
  attend: ISalesDetails | undefined;
  absent: ISalesDetails | undefined;
}
const SalesVsAttendance: FC<IProps> = ({ sales, absent, attend }) => {
  const totalCount =
    (sales?.unit || 0) + (attend?.unit || 0) + (absent?.unit || 0);
  return (
    <>
      <div className="mb-5 tile-min-max-width d-flex">
        <Card
          className="overflow-hidden  h-100 d-flex flex-column"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        >
          <Card.Body className="pb-0 flex-grow-0 card-body-custom">
            <Card.Title as="h3" className="text-dark ">
              Sales vs Attendance
            </Card.Title>
            <div className="chartjs-wrapper-demo">
              <SalesVsAttendanceChart
                series={[
                  {
                    name: "Sales vs Attendance",
                    data: [
                      sales?.unit || 0,
                      attend?.unit || 0,
                      absent?.unit || 0,
                    ],
                  },
                ]}
                categories={["Sales", "Attended", "Absent"]}
              />
            </div>
          </Card.Body>
          <div
            id="flotback-chart"
            className="flot-background flex-grow-1"
          ></div>
          <Card.Body className="flex-grow-0">
            <div className="mb-5 mt-2">
              <span className="badge rounded-pill py-2 px-3 px-xl-4 fw-semibold text-capitalize fs-12px badge-bg-gray">
                Sort By <ChevronDownIcon className="h-4 w-4 ms-3" />
              </span>
            </div>
            <div className="d-flex mb-5">
              <div
                className="avatar avatar-md text-white text-center me-2 rounded-2"
                style={{ backgroundColor: "#51B1DF" }}
              >
                {sales?.percentage ? roundToNearestWhole(sales.percentage) : 0}%
              </div>
              <div className="d-flex flex-column">
                <span className="fw-600 fs-6">Sales</span>
                <small className="text-gray">total number of sales</small>
              </div>
              <div className="ms-auto my-auto">
                <p className="fw-600 fs-6">
                  {" "}
                  {sales?.unit ? sales.unit : 0} / {totalCount || 0}
                </p>
              </div>
            </div>
            <div className="d-flex mb-5">
              <div
                className="avatar avatar-md text-white text-center me-2 rounded-2"
                style={{ backgroundColor: "#53B9A9" }}
              >
                {attend?.percentage
                  ? roundToNearestWhole(attend.percentage)
                  : 0}
                %
              </div>
              <div className="d-flex flex-column">
                <span className="fw-600 fs-6">Attended</span>
                <small className="text-gray">total number of attended</small>
              </div>
              <div className="ms-auto my-auto">
                <p className="fw-600 fs-6">
                  {attend?.unit ? attend.unit : 0} / {totalCount || 0}
                </p>
              </div>
            </div>
            <div className="d-flex mb-5">
              <div
                className="avatar avatar-md text-white text-center me-2 rounded-2"
                style={{ backgroundColor: "#ed003b" }}
              >
                {absent?.percentage
                  ? roundToNearestWhole(absent.percentage)
                  : 0}
                %
              </div>
              <div className="d-flex flex-column">
                <span className="fw-600 fs-6">Absent</span>
                <small className="text-gray">total number of absent</small>
              </div>
              <div className="ms-auto my-auto">
                <p className="fw-600 fs-6">
                  {absent?.unit ? absent.unit : 0} / {totalCount || 0}
                </p>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-10 text-center">
                <span>
                  Page <span className="fw-bold"> 1 </span> of 4
                </span>
              </div>
              <div className="col-2">
                <ChevronRightIcon className="h-4 w-4  " />
              </div>
            </div> */}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SalesVsAttendance;
