import React, { FC } from "react";
import { TabPanel } from "@headlessui/react";
import { Card, Dropdown } from "react-bootstrap";
import { IPricingDetailsProps } from "./AddPricing/type";
import { LandingPageCardHeader } from "../styledComponents/LandingPage";
import { Link } from "react-router-dom";
import ResponsiveTile from "../styledComponents/tiles";

interface IProps {
  pricingListData: IPricingDetailsProps[];
}

const PricingList: FC<IProps> = ({ pricingListData }) => {
  return (
    <TabPanel>
      <div className="row" id="myPricingList">
        {pricingListData?.map((l: IPricingDetailsProps, index: number) => (
          <ResponsiveTile key={index}>
            <Card
              className="overflow-hidden position-relative d-flex flex-column"
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="position-absolute d-flex justify-content-between mx-4 my-4">
                <span
                  className="badge dark d-block p-2 px-3 rounded-pill"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  {l.productDetails?.productCategory}
                </span>
              </div>

              <div className="position-absolute end-0 d-flex justify-content-between mx-4 my-4">
                <span
                  className="badge dark d-block p-2 px-3 rounded-pill text-black"
                  style={{
                    borderRadius: "50px",
                    borderColor: "#00ff00",
                    color: "#fff",
                    backgroundColor: "#00ff00",
                    fontWeight: 500,
                    fontSize: "12px",
                    padding: "8px 32px",
                    minWidth: "130px",
                    transition:
                      "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  Active
                </span>
              </div>

              <img
                src={l.productDetails?.img}
                className="card-img-top"
                alt="..."
                height={252}
              />
              <Card.Body className="p-3 py-5">
                <div className="d-flex justify-content-between">
                  <div className="col-9">
                    <span className="fw-semibold d-line-block fs-10px">
                      {l.productDetails?.productSubCategory}
                    </span>
                    <LandingPageCardHeader>
                      {l.productDetails?.productName}
                    </LandingPageCardHeader>
                    <div className="fs-10px">
                      <span className="d-inline-block me-2">Inclusions:</span>
                      {l.inclusion?.inclusionList?.length || 0}
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
        ))}
      </div>
    </TabPanel>
  );
};

export default PricingList;
