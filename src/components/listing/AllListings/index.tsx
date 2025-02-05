import { TabPanel } from "@headlessui/react";
import moment from "moment";
import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { IListDetailsProps } from "..";
import ResponsiveTile from "../../styledComponents/tiles";
interface IAllListingProps {
  listDetailsData: IListDetailsProps[];
}

const index: FC<IAllListingProps> = ({ listDetailsData }) => {
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
                      <div className="col-3 d-flex flex-column gap-2 mt-3">
                        <button
                          type="button"
                          className={`btn rounded-pill p-1 text-capitalize fs-9px fw-600 ${
                            l.status === "Offline"
                              ? "badge-red"
                              : l.status === "Draft"
                              ? "badge-light-gray"
                              : "badge-light-green"
                          }`}
                        >
                          {l.status}
                        </button>
                        <button
                          type="button"
                          className="btn text-white rounded-pill p-1 fs-9px fw-600"
                          style={{ backgroundColor: "#000" }}
                        >
                          Edit
                        </button>
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
