import { TabPanel } from "@headlessui/react";
import moment from "moment";
import React, { FC, useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import { IListDetailsProps } from "..";
import ResponsiveTile from "../../styledComponents/tiles";
import { toast } from "react-toastify";
import { WhiteBadge, NotActiveBadge, ActiveBadge } from "../../styledComponents/badge";
interface IAllListingProps {
  listDetailsData: IListDetailsProps[];
}

const index: FC<IAllListingProps> = ({ listDetailsData }) => {
  const _handleEdit = (shopData: IAllListingProps) => {
    sessionStorage.setItem("editShop", JSON.stringify(shopData));
  };

  return (
    <>
      <TabPanel>
        <div className="row" id="myListings">
          {listDetailsData?.map((l: IListDetailsProps) => (
            <>
              <ResponsiveTile>
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
                    {l?.status == "draft" ? (
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
                    src={l.img}
                    className="card-img-top"
                    alt="..."
                    height={252}
                  ></img>
                  <Card.Body className="p-3 py-5">
                    <div className="d-flex justify-content-between">
                      <div className="col-9">
                        <small className="fw-semibold d-line-block mb-1 fs-10px">
                          {l.show}
                        </small>
                        <h3 className="fw-bold mb-1 fs-1rem">{l.name}</h3>
                        <div className="mb-1 mt-2 fs-10px">
                          <span>{moment(l.from).format("DD MMMM YYYY")}</span> |{" "}
                          <span>{moment(l.from).format("HH:MM")}</span>{" "}
                          <span>to</span>{" "}
                          <span>{moment(l.to).format("HH:MM")}</span>
                        </div>
                        <div className="fs-10px">
                          <span>{l.location}</span>
                        </div>
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
                              {l.status === "Draft" ? (
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

export default index;
