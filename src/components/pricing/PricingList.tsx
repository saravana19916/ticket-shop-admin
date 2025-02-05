import React, { FC } from "react";
import { TabPanel } from "@headlessui/react";
import { Card } from "react-bootstrap";
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
                  <div className="col-3 d-flex flex-column gap-2 mt-2">
                    <button
                      type="button"
                      className="btn rounded-pill p-1 text-capitalize fs-9px fw-600 badge-light-green"
                    >
                      {l.productDetails?.productType}
                    </button>
                    <Link
                      to={`/edit-product/${l.id}`}
                      className="btn text-white rounded-pill p-1 fs-9px fw-600"
                      style={{ backgroundColor: "#000" }}
                    >
                      Edit
                    </Link>
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
