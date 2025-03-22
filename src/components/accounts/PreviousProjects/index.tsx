import {
  Tab,
  TabGroup,
  TabList,
  TabPanels,
  Button,
  TabPanel,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, useEffect, useState } from "react";
import AllListings from "../AllListings";
import Owl from "../../../assets/images/owl.jpg";
import { useNavigate } from "react-router-dom";
import CustomTabButton from "../../shared/CustomTabButton";
import {
  DEMO_CAR_LISTINGS,
  DEMO_EXPERIENCES_LISTINGS,
  DEMO_STAY_LISTINGS,
} from "../../../data/listings";
import { ButtonPrimary } from "../../styledComponents/styledButton";

import StayCard from "../StayCard";
import { Col } from "react-bootstrap";

interface IListingProps {}
const tabList = ["Events", "Experiences", "Cars"];
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
const allListings: IListDetailsProps[] = [
  {
    type: "Events",
    img: Owl,
    show: "Show 1",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T15:30:00Z",
    to: "2023-12-18T16:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
  },
  {
    type: "Experiences",
    img: Owl,
    show: "Show 1",
    name: "Premium Merch Pack",
    from: "2023-12-18T12:30:00Z",
    to: "2023-12-18T13:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Offline",
  },
  {
    type: "Experiences",
    img: Owl,
    show: "Show 1",
    name: "Meet & Greet",
    from: "2023-12-18T15:30:00Z",
    to: "2023-12-18T16:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Draft",
  },
  {
    type: "Events",
    img: Owl,
    show: "Show 2",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T19:30:00Z",
    to: "2023-12-18T20:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
  },
  {
    type: "Events",
    img: Owl,
    show: "Show 3",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T13:30:00Z",
    to: "2023-12-18T14:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
  },
  {
    type: "Cars",
    img: Owl,
    show: "Show 4",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T12:30:00Z",
    to: "2023-12-18T13:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
  },
];

const index: FC<IListingProps> = ({}) => {
  const navigate = useNavigate();
  const _handleAddListing = () => {
    navigate("/accounts/add-listing");
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
    setTimeout(getItemsPerRow, 100);
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
      <TabPanel>
        <div className="row" style={{ maxWidth }}>
          <div className="col-6 mb-6">
            <p className="fw-600 fs-26px text-black mb-3">Previous Listings</p>
          </div>
          <div className="col-6 mb-6">
            <ButtonPrimary
              type="button"
              className="float-end mt-2 btn"
              onClick={_handleAddListing}
            >
              <span>Add Listing</span>
            </ButtonPrimary>
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
              <TabPanels as="div" className="row d-flex justify-content-start">
              {DEMO_STAY_LISTINGS.filter((_, i) => i < 8).map((stay) => (
                <Col key={stay.id} md={4}> {/* 3 cards per row (4 columns each in md screens) */}
                  <StayCard key={stay.id} data={stay} />
              </Col>
                  ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </TabPanel>
    </>
  );
};

export default index;
