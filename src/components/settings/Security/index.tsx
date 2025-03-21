import { Tab, TabGroup, TabList, TabPanels, Button, TabPanel } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, useEffect, useState } from "react";
import AllListings from "../AllListings";
import Owl from "../../../assets/images/owl.jpg";
import { useNavigate } from "react-router-dom";
import CustomTabButton from "../../shared/CustomTabButton";
import { ButtonPrimary } from "../../styledComponents/styledButton";

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
    <TabPanel>
      <div className="row" id="Role">
        Tab Security
      </div>
    </TabPanel>
    </>
  );
};

export default index;
