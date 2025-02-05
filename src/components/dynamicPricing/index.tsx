import React from "react";
import LandingPageWrapper from "../shared/LandingPageWrapper";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/outline";
import PoliciesList from "../listing/AddListing/Policies/PoliciesLists";
import DynamicPricingList from "./DynamicPricingList";

const index = () => {
  return (
    <>
      <LandingPageWrapper>
        <div className="row">
          <div className="col-6 mb-3">
            <p className="fw-600 fs-26px text-black mb-3">My Dynamic Pricing</p>
          </div>
          <div className="col-6 mb-3">
            <Link
              to="/add-dynamic-pricing"
              className="btn badge-red float-end rounded-pill mt-2 fs-6 px-6 py-2"
            >
              <PlusIcon
                className="w-5 h-5 me-1"
                style={{ marginBottom: "2px" }}
              />{" "}
              Add Dynamic Pricing
            </Link>
          </div>
          <DynamicPricingList />
        </div>
      </LandingPageWrapper>
    </>
  );
};

export default index;
