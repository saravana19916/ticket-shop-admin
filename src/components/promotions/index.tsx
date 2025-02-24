// import ZoningAndAllocation from "../../listing/AddListing/AddPricing/ZoningAndAllocation";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import {
  ArrowDownTrayIcon,
  Cog6ToothIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { FC, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./../guestList/guest-list.css";
import { Accordion } from "react-bootstrap";
import "../../assets/css/_table.css";
import { promotionsDiscountCampaignsData } from "./helpers";
import AccordionPromotionsDiscountCampaigns from "./AccordionPromotionsDiscountCampaigns";
import CustomTabButton from "../shared/CustomTabButton";
import {
  IconButtonPrimary,
  LinkButtonPrimary,
} from "../styledComponents/styledButton";

interface IProps {}

const tabList = ["Discount Campaigns", "Barcodes"];

const index: FC<IProps> = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <>
      <div className="row p-0 p-md-2 p-lg-4 p-xl-4 mt-7 mb-6">
        <div className="col-12 col-lg-4 mb-3 mt-3">
          <span className="fw-600 fs-26px">My Promotions</span>
        </div>

        <div className="col-12 col-lg-8 mb-3 mt-3 d-flex flex-wrap justify-content-lg-end gap-2">
          <IconButtonPrimary className="btn">
            <ArrowDownTrayIcon className="w-5 h-5" />
          </IconButtonPrimary>
          <LinkButtonPrimary
            to="/promotions-import"
            type="button"
            className="btn"
          >
            Import
          </LinkButtonPrimary>
          <LinkButtonPrimary
            to="/generate-barcode"
            type="button"
            className="btn"
          >
            Barcode
          </LinkButtonPrimary>
          <LinkButtonPrimary
            to="/generate-discountcode"
            type="button"
            className="btn"
          >
            Discount code
          </LinkButtonPrimary>
        </div>
      </div>
      <div className="row px-0 px-md-2 px-lg-4 px-xl-4 py-2">
        <TabGroup className="row px-0 py-2" selectedIndex={selectedTab}>
          <TabList className="filter-container mb-7" style={{ margin: "auto" }}>
            {tabList.map((tabName, idx) => (
              <Tab as={Fragment} key={idx}>
                {({ selected }) => (
                  <>
                    <CustomTabButton
                      tabName={tabName}
                      selected={selected}
                      index={idx}
                      setSelectedTab={setSelectedTab}
                    />
                  </>
                )}
              </Tab>
            ))}
          </TabList>
          <TabPanels as="div" className="col-12 mt-6">
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
          </TabPanels>
        </TabGroup>
        {/* <div className="d-flex align-items-center gap-3 mb-8">
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
        </div> */}
      </div>
    </>
  );
};

export default index;
