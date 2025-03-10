import React, { FC } from "react";
import { TabPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Card, Dropdown } from "react-bootstrap";
import moment from "moment";
import { LandingPageCardHeader } from "../styledComponents/LandingPage";
import Owl from "././../../assets/images/owl.jpg";
import ResponsiveTile from "../styledComponents/tiles";
import {
  WhiteBadge,
  NotActiveBadge,
  ActiveBadge,
} from "../styledComponents/badge";
import { IZoneDetailsProps } from "./ProductAllocationList";

interface IProps {
  list: IZoneDetailsProps[];
}
const List: FC<IProps> = ({ list }) => {
  return (
    <>
      <TabPanel>
        <div className="row" id="myProductAllocationList">
          {list?.map((l: IZoneDetailsProps, index) => (
            <>
              <ResponsiveTile key={(index + 1) * Math.random()}>
                <Card
                  className="overflow-hidden position-relative"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="position-absolute d-flex justify-content-between mx-4 my-4">
                    <WhiteBadge className="badge p-2" minWidth="130px">
                      {l.zoneType}
                    </WhiteBadge>
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

                  <Card.Body className="p-3 py-5">
                    <div className="d-flex justify-content-between">
                      <div className="col-9">
                        <span className="fw-semibold d-line-block fs-10px">
                          {l.format}
                        </span>
                        <LandingPageCardHeader>
                          {l.zoneName}
                        </LandingPageCardHeader>
                        <span className="fs-10px">{l.selection}</span>
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
