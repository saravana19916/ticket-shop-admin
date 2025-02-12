import { TabPanel } from "@headlessui/react";
import moment from "moment";
import React, { FC, useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import { IListDetailsProps } from "..";
import ResponsiveTile from "../../styledComponents/tiles";
import { toast } from "react-toastify";
interface IAllListingProps {
  listDetailsData: IListDetailsProps[];
}

const index: FC<IAllListingProps> = ({ listDetailsData }) => {
  const [copiedLink, setCopiedLink] = useState<undefined | number | string>(
    undefined
  );

  const _handleCopyLink = (id: string | number, link: string) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopiedLink(id);
        toast.success("Link copied successfully!");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        toast.error("Failed to copy link!");
      });
  };

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
                    <span
                      className="badge dark d-block p-2 px-3 rounded-pill"
                      style={{ backgroundColor: "#fff", color: "#000" }}
                    >
                      {l.type}
                    </span>
                  </div>

                  <div className="position-absolute end-0 d-flex justify-content-between mx-4 my-4">
                    <span
                      className="badge dark d-block p-2 px-3 rounded-pill text-black"
                      style={{
                        borderRadius: "50px",
                        borderColor:
                          l.status === "Draft"
                            ? "#00dcfa"
                            : "#00ff00",
                        color: "#fff",
                        backgroundColor:
                          l.status === "Draft"
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
                      {l.status === "Draft"
                        ? "Not Active"
                        : "Active"}
                    </span>
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

export default index;
