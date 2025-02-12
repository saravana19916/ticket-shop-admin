import React, { FC } from "react";
import { Card, Dropdown } from "react-bootstrap";
import moment from "moment";
import { TabPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import { IShowDetailsProps } from "./ShowsLists";
import { LandingPageCardHeader } from "../../../styledComponents/LandingPage";
import Owl from "../../../../assets/images/owl.jpg";
import ResponsiveTile from "../../../styledComponents/tiles";

interface IProps {
  list: IShowDetailsProps[];
}
const List: FC<IProps> = ({ list }) => {
  return (
    <>
      <TabPanel>
        <div className="row" id="myShowsList">
          {list?.map((l: IShowDetailsProps) => (
            <>
              <ResponsiveTile>
                <Card
                  className="overflow-hidden position-relative"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="position-absolute d-flex justify-content-between mx-4 my-4">
                    <span
                      className="badge dark d-block p-2 px-4 fs-10px rounded-pill"
                      style={{ backgroundColor: "#fff", color: "#000" }}
                    >
                      {l.duration}
                    </span>
                  </div>

                  <div className="position-absolute end-0 d-flex justify-content-between mx-4 my-4">
                    <span
                      className="badge dark d-block p-2 px-3 rounded-pill text-black"
                      style={{
                        borderRadius: "50px",
                        borderColor:
                          l.status === "draft"
                            ? "#00dcfa"
                            : "#00ff00",
                        color: "#fff",
                        backgroundColor:
                          l.status === "draft"
                            ? "#00dcfa"
                            : "#00ff00",
                        fontWeight: 500,
                        fontSize: "12px",
                        padding: "8px 32px",
                        minWidth: "130px",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                      }}
                    >
                      {l.status === "draft"
                        ? "Not Active"
                        : "Active"}
                    </span>
                  </div>

                  <img
                    src={Owl}
                    className="card-img-top"
                    alt="..."
                    height={252}
                  ></img>
                  {/* <div
                    className="card-div-top"
                    style={{
                      padding: "108px",
                      backgroundColor: `#${Math.floor(Math.random() * 16777215)
                        .toString(16)
                        .padStart(6, "0")
                        .replace(/^(000000|ffffff)$/, "cccccc")}`, // Avoid full black or white
                    }}
                  ></div> */}

                  <Card.Body className="p-3 py-5">
                    <div className="d-flex justify-content-between">
                      <div className="col-9">
                        <span className="fw-semibold d-line-block fs-10px">
                          {moment(l.startDateTime)?.format("DD MMM YYYY")}
                        </span>
                        <LandingPageCardHeader>
                          {l.showName}
                        </LandingPageCardHeader>
                        <span className="fs-10px">{l.language}</span>
                      </div>
                      
                      <div className="col-3 d-flex flex-column gap-2 mt-2 align-items-end">
                        <span className="position-absolute d-flex">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="link"
                              id="dropdown-basic"
                              className="text-black dark:text-white"
                              style={{
                                background: "none",
                                border: "none",
                                fontSize: "24px",
                                textDecoration: "none",
                              }}
                            >
                              ...
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>Share Link</Dropdown.Item>
                              <Dropdown.Item>Edit</Dropdown.Item>
                              <Dropdown.Item>Generate</Dropdown.Item>
                              <Dropdown.Item>Copy</Dropdown.Item>
                              <Dropdown.Item>Active</Dropdown.Item>
                              <Dropdown.Item>Not Active</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </span>
                      </div>

                    </div>
                  </Card.Body>
                </Card>
              </ResponsiveTile>
            </>
          ))}
        </div>
      </TabPanel>
    </>
  );
};

export default List;
