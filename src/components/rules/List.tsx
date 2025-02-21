import React, { FC } from "react";
import { TabPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Card, Dropdown } from "react-bootstrap";
import moment from "moment";
import { IRulesDetailsProps } from "./RulesList";
import { LandingPageCardHeader } from "../styledComponents/LandingPage";
import ResponsiveTile from "../styledComponents/tiles";
import Owl from "../../assets/images/owl.jpg";
import {
  ActiveBadge,
  NotActiveBadge,
  WhiteBadge,
} from "../styledComponents/badge";

interface IProps {
  list: IRulesDetailsProps[];
}
const List: FC<IProps> = ({ list }) => {
  return (
    <>
      <TabPanel>
        <div className="row" id="myRulesList">
          {list?.map((l: IRulesDetailsProps, index) => (
            <>
              <ResponsiveTile key={(index + 1) * Math.random()}>
                <Card
                  className="overflow-hidden position-relative"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="position-absolute d-flex justify-content-between mx-4 my-4">
                    <WhiteBadge className="badge p-2">Rule</WhiteBadge>
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
                          {moment(l.createdAt)?.format("DD MMM YYYY")}
                        </span>
                        <LandingPageCardHeader>{l.rule}</LandingPageCardHeader>
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
