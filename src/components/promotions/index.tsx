// import ZoningAndAllocation from "../../listing/AddListing/AddPricing/ZoningAndAllocation";
import {
  ArrowDownTrayIcon,
  Cog6ToothIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./../guestList/guest-list.css";
import { Accordion } from "react-bootstrap";
import "../../assets/css/_table.css";
import { promotionsDiscountCampaignsData } from "./helpers";
import AccordionPromotionsDiscountCampaigns from "./AccordionPromotionsDiscountCampaigns";

interface IProps {}

const index: FC<IProps> = () => {
  return (
    <>
      <div className="row p-0 p-md-2 p-lg-4 p-xl-4">
        <div className="col-4 mb-3 mt-3">
          <span className="fw-600 fs-26px">My Promotions</span>
        </div>
        <div className="col-8 mb-3 mt-3 d-flex align-items-center justify-content-end gap-2">
          <button className="btn btn-icon btn-primary btn-wave waves-effect waves-light rounded-pill mt-2">
            <ArrowDownTrayIcon />
          </button>
          <Link
            to="#"
            type="button"
            className="btn btn-primary float-end rounded-pill mt-2 px-5"
          >
            <PlusIcon className="w-4 h-4 me-1 mb-1px" />
            Import
          </Link>
          <Link
            to="/generate-barcode"
            type="button"
            className="btn btn-primary float-end rounded-pill mt-2 px-5"
          >
            <PlusIcon className="w-4 h-4 me-1 mb-1px" />
            Barcode
          </Link>
          <Link
            to="#"
            type="button"
            className="btn btn-primary float-end rounded-pill mt-2 px-5"
          >
            <PlusIcon className="w-4 h-4 me-1 mb-1px" />
            Discount code
          </Link>
        </div>
      </div>
      <div className="row px-0 px-md-2 px-lg-4 px-xl-4 py-2">
        <div className="d-flex align-items-center gap-3 mb-8">
          <Link
            to="#"
            type="button"
            className="btn badge-red float-end rounded-pill mt-2 px-5"
          >
            Discount Campaigns
          </Link>
          <Link
            to="#"
            className="btn btn-outline-default rounded-pill mt-2 px-5"
          >
            Barcodes
          </Link>
        </div>
        <div className="mt-6">
          <Accordion className="panel-default d-flex flex-column gap-4">
            {promotionsDiscountCampaignsData?.map((item, index) => (
              <>
                <AccordionPromotionsDiscountCampaigns
                  item={item}
                  index={`${index}`}
                />
              </>
            ))}
          </Accordion>
          {/* <Pagination
            count={10}
            variant="outlined"
            className="d-flex align-items-center justify-content-center m-5"
          /> */}
        </div>
      </div>
    </>
  );
};

export default index;
