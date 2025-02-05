import { Tab, TabGroup, TabList, TabPanels, Button } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useEffect, useState } from "react";
import PricingList from "./PricingList";
import {
  allPricingDetailsData,
  entertainmentPricingDetailsData,
  culturalPricingDetailsData,
  businessPricingDetailsData,
} from "../../commondata/Pricing/pricingList";
import LandingPageWrapper from "../shared/LandingPageWrapper";
import { Link } from "react-router-dom";
import CustomTabButton from "../shared/CustomTabButton";

const index = () => {
  const tabList = ["All", "Entertainment", "Cultural", "Business"];
  const [itemsPerRow, setItemsPerRow] = useState<number | null>(0);
  const [maxWidth, setMaxWidth] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const getItemsPerRow = () => {
    const rows = document.querySelectorAll("#myPricingList > *");
    const rowWidth = document.querySelector("#myPricingList")?.clientWidth || 0;
    let totalWidth = 0;
    let count = 0;

    rows.forEach((item) => {
      const itemWidth = item.clientWidth;
      totalWidth += itemWidth;
      if (totalWidth > rowWidth) {
        return;
      }
      count++;
    });

    setItemsPerRow(count);
  };
  useEffect(() => {
    getItemsPerRow();
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth < 899);
    const handleResize = () => getItemsPerRow();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (itemsPerRow !== null && !isMobile) {
      setMaxWidth(`${itemsPerRow * 450}px`);
    } else {
      setMaxWidth("");
    }
  }, [itemsPerRow, isMobile]);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <>
      <LandingPageWrapper>
        <div className="row" style={{ maxWidth }}>
          <div className="col-6 mb-3">
            <p className="fw-600 fs-26px text-black mb-3">My Products</p>
          </div>
          <div className="col-6 mb-3">
            <Link
              to="/add-product"
              className="btn badge-red float-end rounded-pill mt-2 fs-6 px-6 py-2"
            >
              <PlusIcon
                className="w-5 h-5 me-1"
                style={{ marginBottom: "2px" }}
              />{" "}
              Add Product
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <TabGroup className="row py-2 px-0">
              <TabList
                className="filter-container mb-7"
                style={{ margin: "auto" }}
              >
                {tabList.map((tabName, idx) => (
                  <>
                    <Tab as={Fragment} key={idx}>
                      {({ selected }) => (
                        <CustomTabButton
                          tabName={tabName}
                          selected={selected}
                          index={idx}
                          setSelectedTab={setSelectedTab}
                        />
                      )}
                    </Tab>
                  </>
                ))}
              </TabList>
              <TabPanels as="div" className="col-12 ">
                <PricingList pricingListData={allPricingDetailsData} />
                <PricingList
                  pricingListData={entertainmentPricingDetailsData}
                />
                <PricingList pricingListData={culturalPricingDetailsData} />
                <PricingList pricingListData={businessPricingDetailsData} />
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </LandingPageWrapper>
    </>
  );
};

export default index;
