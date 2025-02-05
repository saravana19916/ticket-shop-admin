import { Button, TabGroup, TabList, Tab, TabPanels } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopsList from "./ShopsList";
import {
  allShopsList,
  digitalShopsList,
  draftShopsList,
  IShopDetailsProps,
  liveShopsList,
  officeShopsList,
  physicalShopsList,
} from "../../commondata/Shops/shopsList";
import {
  IAddListingShopProps,
  IShopInformation,
} from "../listing/AddListing/AddShop/type";
import Owl from "../../assets/images/owl.jpg";
import { Link } from "react-router-dom";
import LandingPageWrapper from "../shared/LandingPageWrapper";
import CustomTabButton from "../shared/CustomTabButton";

const tabList = ["All", "Physical", "Digital", "Live", "Office", "Draft"];
const index = () => {
  const [shopsList, setShopsList] = useState<IAddListingShopProps[]>([]);
  const [itemsPerRow, setItemsPerRow] = useState<number | null>(0);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const [maxWidth, setMaxWidth] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const previousShops = sessionStorage?.getItem("shopsList");
    const previousShopsObj = previousShops ? JSON.parse(previousShops) : null;
    if (previousShopsObj) {
      const previousShopsList = previousShopsObj?.map(
        (shop: IAddListingShopProps): IAddListingShopProps => {
          return {
            img: Owl,
            ...shop,
            shopInformation: { ...shop.shopInformation, status: "Live" },
          };
        }
      );
      setShopsList(() => {
        return [...previousShopsList, ...allShopsList];
      });
    } else {
      setShopsList(allShopsList);
    }
  }, [allShopsList]);

  const getItemsPerRow = () => {
    const rows = document.querySelectorAll("#myShopLandingList > *");
    const rowWidth =
      document.querySelector("#myShopLandingList")?.clientWidth || 0;
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
      setMaxWidth(itemsPerRow ? `${itemsPerRow * 450}px` : "1350px;");
    } else {
      setMaxWidth("");
    }
  }, [itemsPerRow, isMobile]);

  return (
    <>
      <LandingPageWrapper>
        <div className="row" style={{ maxWidth }}>
          <div className="col-6 mb-3">
            <span className="fw-600 fs-26px text-black mb-3">My Shops</span>
          </div>
          <div className="col-6 mb-3">
            <Link
              to="/add-shop"
              className="btn badge-red float-end rounded-pill mt-2 fs-6 px-6 py-2"
            >
              <PlusIcon
                className="w-5 h-5 me-1"
                style={{ marginBottom: "2px" }}
              />{" "}
              Add Shop
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <TabGroup className="row px-0 py-2" selectedIndex={selectedTab}>
              <TabList
                className="filter-container mb-7"
                style={{ margin: "auto" }}
              >
                {tabList.map((tabName, idx) => (
                  <>
                    <Tab as={Fragment} key={idx + 1}>
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
                <ShopsList shopsListData={shopsList} />
                <ShopsList shopsListData={physicalShopsList} />
                <ShopsList shopsListData={digitalShopsList} />
                <ShopsList shopsListData={liveShopsList} />
                <ShopsList shopsListData={officeShopsList} />
                <ShopsList shopsListData={draftShopsList} />
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </LandingPageWrapper>
    </>
  );
};

export default index;
