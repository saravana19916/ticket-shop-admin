import React, { FC } from "react";
import { TabPanel } from "@headlessui/react";
import { Card, Dropdown } from "react-bootstrap";
import { IPricingDetailsProps } from "./AddPricing/type";
import { LandingPageCardHeader } from "../styledComponents/LandingPage";
import { Link } from "react-router-dom";
import ResponsiveTile from "../styledComponents/tiles";
import { NotActiveBadge, ActiveBadge, WhiteBadge } from "../styledComponents/badge";

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
                <WhiteBadge className="badge p-2">
                  {l.productDetails?.productCategory}
                </WhiteBadge>
              </div>

              <div className="position-absolute end-0 d-flex justify-content-between mx-4 my-4">
                {status === "draft" ? (
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
                          {status === "draft" ? (
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
        ))}
      </div>
    </TabPanel>
  );
};

export default PricingList;
