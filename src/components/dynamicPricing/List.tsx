import React, { FC } from "react";
import { TabPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import moment from "moment";
import { LandingPageCardHeader } from "../styledComponents/LandingPage";
import { IDynamicPricingDetailsProps } from "./DynamicPricingList";

interface IProps {
  list: IDynamicPricingDetailsProps[];
}
const List: FC<IProps> = ({ list }) => {
  return (
    <>
      <TabPanel>
        <div className="row">
          {list?.map((l: IDynamicPricingDetailsProps) => (
            <>
              <div className="col-12 col-lg-6 col-xl-4 col-md-6">
                <Card
                  className="overflow-hidden position-relative"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    maxWidth: "450px",
                  }}
                >
                  <div className="position-absolute d-flex justify-content-between mx-4 my-4">
                    <span
                      className="badge dark d-block p-2 px-4 fs-10px rounded-pill"
                      style={{ backgroundColor: "#fff", color: "#000" }}
                    >
                      {l.mode}
                    </span>
                  </div>
                  <div
                    className="card-div-top"
                    style={{
                      padding: "108px",
                      backgroundColor: `#${Math.floor(Math.random() * 16777215)
                        .toString(16)
                        .padStart(6, "0")
                        .replace(/^(000000|ffffff)$/, "cccccc")}`, // Avoid full black or white
                    }}
                  ></div>

                  <Card.Body className="p-3 py-5">
                    <div className="d-flex justify-content-between">
                      <div className="col-9">
                        <span className="fw-semibold d-line-block fs-10px">
                          {moment(l.startDateTime)?.format("DD MMM YYYY")}
                        </span>
                        <LandingPageCardHeader>
                          {l.strategyName}
                        </LandingPageCardHeader>
                        <span className="fs-10px">{l.shopAllocation}</span>
                      </div>
                      <div className="col-3 d-flex flex-column gap-2 mt-2">
                        <button
                          type="button"
                          className={`btn rounded-pill p-1 text-capitalize fs-9px fw-600 ${
                            l.status === "offline"
                              ? "badge-red"
                              : l.status === "draft"
                              ? "badge-light-gray"
                              : "badge-light-green"
                          }`}
                        >
                          {l.status}
                        </button>
                        <Link
                          to={`/edit-dynamic-pricing/${l.id}`}
                          className="btn text-white rounded-pill p-1 fs-9px fw-600"
                          style={{ backgroundColor: "#000" }}
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </>
          ))}
        </div>
      </TabPanel>
    </>
  );
};

export default List;
