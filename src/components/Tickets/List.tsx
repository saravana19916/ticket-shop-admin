import React, { FC } from "react";
import { ITicketsProps } from "./data";
import { Card, Dropdown } from "react-bootstrap";
import { TabPanel } from "@headlessui/react";
import Owl from "../../assets/images/owl.jpg";

import {
  NotActiveBadge,
  WhiteBadge,
  ActiveBadge,
} from "../styledComponents/badge";
import ResponsiveTile from "../styledComponents/tiles";
import { LandingPageCardHeader } from "../styledComponents/LandingPage";
interface IProps {
  tickets: ITicketsProps[];
}
const List: FC<IProps> = ({ tickets }) => {
  return (
    <>
      <TabPanel>
        <div className="row" id="myTicketsDesignList">
          {tickets?.map((l: ITicketsProps, index) => (
            <>
              <ResponsiveTile key={(index + 1) * Math.random()}>
                <Card
                  className="overflow-hidden position-relative"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="position-absolute d-flex justify-content-between mx-4 my-4">
                    <WhiteBadge className="badge p-2">{l.type}</WhiteBadge>
                  </div>

                  <div className="position-absolute end-0 d-flex justify-content-between mx-4 my-4">
                    {l?.status === "draft" ? (
                      <>
                        <NotActiveBadge className="badge p-2">
                          Not Active
                        </NotActiveBadge>
                      </>
                    ) : (
                      <>
                        <ActiveBadge className="badge p-2">Active</ActiveBadge>
                      </>
                    )}
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
                        height: "252px",
                        backgroundColor: `#${Math.floor(Math.random() * 16777215)
                          .toString(16)
                          .padStart(6, "0")
                          .replace(/^(000000|ffffff)$/, "cccccc")}`,
                      }}
                    ></div> */}

                  <Card.Body className="p-3 py-5">
                    <div className="d-flex justify-content-between">
                      <div className="col-9">
                        <span className="fw-semibold d-line-block fs-10px">
                          {l.productName}
                        </span>
                        <LandingPageCardHeader>
                          {l.templateName}
                        </LandingPageCardHeader>
                        <span className="fs-10px">{l.ticketCategories}</span>
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
                              {l.status === "draft" ? (
                                <>
                                  <Dropdown.Item>Activate</Dropdown.Item>
                                </>
                              ) : (
                                <>
                                  <Dropdown.Item>Deactivate</Dropdown.Item>
                                </>
                              )}
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
