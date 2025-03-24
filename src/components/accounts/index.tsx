import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import { FC, Fragment, useEffect, useState } from "react";
import MyProfile from "./MyProfile";
import CompanyInfo from "./CompanyInfo";
import SocialMedia from "./SocialMedia";
import PreviousProjects from "./PreviousProjects";
import { useNavigate } from "react-router-dom";
import LandingPageWrapper from "../shared/LandingPageWrapper";
import CustomTabButton from "../shared/CustomTabButton";

interface IListingProps {}
const tabList = [
  "My Profile",
  "Company Info",
  // "Social Media",
  "Previous Projects",
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
  isLiked: boolean;
  price: number;
  reviewPoint: number;
  reviewCount: number;
  categoryName: string;
  bedCount: number;
  isAds: boolean;
  title: string;
  address: string;
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
      <div className="row mt-8">
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
              <MyProfile />
              <CompanyInfo />
              {/* <SocialMedia /> */}
                <PreviousProjects />
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </>
  );
};

export default index;
