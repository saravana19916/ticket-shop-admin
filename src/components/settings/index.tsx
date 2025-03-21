import { Tab, TabGroup, TabList, TabPanels, Button } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, useEffect, useState } from "react";
import General from "./General";
import User from "./User";
import Roles from "./Roles";
import Security from "./Security";
import Owl from "../../assets/images/owl.jpg";
import { useNavigate } from "react-router-dom";
import LandingPageWrapper from "../shared/LandingPageWrapper";
import CustomTabButton from "../shared/CustomTabButton";
import { ButtonPrimary } from "../styledComponents/styledButton";

interface IListingProps {}
const tabList = [
  "General",
  "User",
  "Roles",
  "Security"
];
export interface IListDetailsProps {
  type: string;
  img: any;
  show: string;
  name: string;
  from: string;
  to: string;
  location: string;
  status: string;
}

const index: FC<IListingProps> = ({}) => {
  const navigate = useNavigate();
  const _handleAddListing = () => {
    navigate("/add-listing/info");
  };
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [itemsPerRow, setItemsPerRow] = useState<number | null>(0);
  const [maxWidth, setMaxWidth] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const getItemsPerRow = () => {
    const rows = document.querySelectorAll("#myListings > *");
    const rowWidth = document.querySelector("#myListings")?.clientWidth || 0;
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
  return (
    <>
      <LandingPageWrapper>
        <div className="row">
          <div className="col-12 mb-3">
            <TabGroup className="row px-0 py-2" selectedIndex={selectedTab}>
              <TabList
                className="filter-container mb-7"
                style={{ margin: "auto" }}
              >
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
              <TabPanels as="div" className="col-12">
                <General />
                <User  />
                <Roles />
                <Security />
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </LandingPageWrapper>
    </>
  );
};

export default index;
