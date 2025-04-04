import { Tab, TabGroup, TabList, TabPanels, Button, TabPanel } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, useEffect, useState } from "react";
import AllListings from "../AllListings";
import Account from "../../../assets/images/accounts/account1.jpeg";
import Account2 from "../../../assets/images/accounts/account2.jpg";
import Account3 from "../../../assets/images/accounts/account3.jpg";
import Account4 from "../../../assets/images/accounts/account4.jpg";
import Account5 from "../../../assets/images/accounts/account5.jpg";
import Account6 from "../../../assets/images/accounts/account6.jpg";
import Account7 from "../../../assets/images/accounts/account7.jpg";
import Account8 from "../../../assets/images/accounts/account8.jpg";
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
const eventsListing: IListDetailsProps[] = [
  {
    type: "-10% today",
    img: Account,
    show: "Show 1",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T15:30:00Z",
    to: "2023-12-18T16:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 26,
    reviewPoint: 4.8,
    reviewCount: 28,
    categoryName: 'Entire cabin',
    bedCount: 10,
    isAds: true,
    title: 'Best Western Cedars',
    address: '1 Anzinger Court'
  },
  {
    type: "-10% today",
    img: Account2,
    show: "Show 1",
    name: "Premium Merch Pack",
    from: "2023-12-18T12:30:00Z",
    to: "2023-12-18T13:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Offline",
    isLiked: false,
    price: 250,
    reviewPoint: 4.4,
    reviewCount: 198,
    categoryName: 'Entire cabin',
    bedCount: 6,
    isAds: false,
    title: 'Bell By Greene King inns',
    address: '32923 Judy Hill'
  },
  {
    type: "",
    img: Account3,
    show: "Show 1",
    name: "Meet & Greet",
    from: "2023-12-18T15:30:00Z",
    to: "2023-12-18T16:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Draft",
    isLiked: true,
    price: 278,
    reviewPoint: 3.6,
    reviewCount: 16,
    categoryName: 'Entire cabin',
    bedCount: 9,
    isAds: false,
    title: 'Half Moon, Sherborne By',
    address: '6731 Killdeer Park'
  },
  {
    type: "",
    img: Account4,
    show: "Show 2",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T19:30:00Z",
    to: "2023-12-18T20:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 40,
    reviewPoint: 4.8,
    reviewCount: 34,
    categoryName: 'Entire cabin',
    bedCount: 7,
    isAds: false,
    title: 'White Horse Hotel By Greene',
    address: '35 Sheman Park'
  },
  {
    type: "",
    img: Account5,
    show: "Show 3",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T13:30:00Z",
    to: "2023-12-18T14:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 147,
    reviewPoint: 3.4,
    reviewCount: 340,
    categoryName: 'Entire cabin',
    bedCount: 3,
    isAds: false,
    title: 'Ship And Castle Hotel',
    address: '3 Creast Line Park'
  },
  {
    type: "",
    img: Account6,
    show: "Show 4",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T12:30:00Z",
    to: "2023-12-18T13:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 90,
    reviewPoint: 3.8,
    reviewCount: 508,
    categoryName: 'Entire cabin',
    bedCount: 7,
    isAds: false,
    title: 'The Windmill Family &',
    address: '55974 Waxwing Junction'
  },
  {
    type: "-10% today",
    img: Account7,
    show: "Show 3",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T13:30:00Z",
    to: "2023-12-18T14:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 282,
    reviewPoint: 3,
    reviewCount: 481,
    categoryName: 'Entire cabin',
    bedCount: 2,
    isAds: false,
    title: 'Unicorn, Gunthorpe By',
    address: '79361 Chinook Place'
  },
  {
    type: "",
    img: Account8,
    show: "Show 4",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T12:30:00Z",
    to: "2023-12-18T13:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 79,
    reviewPoint: 3.9,
    reviewCount: 188,
    categoryName: 'Entire cabin',
    bedCount: 7,
    isAds: false,
    title: 'Holiday Inn Express Ramsgate',
    address: '6 Chive Avenue'
  },
];
const experiencesListing: IListDetailsProps[] = [
  {
    type: "-10% today",
    img: Account,
    show: "Show 1",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T15:30:00Z",
    to: "2023-12-18T16:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 26,
    reviewPoint: 4.8,
    reviewCount: 28,
    categoryName: 'Entire cabin',
    bedCount: 10,
    isAds: true,
    title: 'Best Western Cedars',
    address: '1 Anzinger Court'
  },
  {
    type: "-10% today",
    img: Account2,
    show: "Show 1",
    name: "Premium Merch Pack",
    from: "2023-12-18T12:30:00Z",
    to: "2023-12-18T13:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Offline",
    isLiked: false,
    price: 250,
    reviewPoint: 4.4,
    reviewCount: 198,
    categoryName: 'Entire cabin',
    bedCount: 6,
    isAds: false,
    title: 'Bell By Greene King inns',
    address: '32923 Judy Hill'
  },
  {
    type: "",
    img: Account3,
    show: "Show 1",
    name: "Meet & Greet",
    from: "2023-12-18T15:30:00Z",
    to: "2023-12-18T16:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Draft",
    isLiked: true,
    price: 278,
    reviewPoint: 3.6,
    reviewCount: 16,
    categoryName: 'Entire cabin',
    bedCount: 9,
    isAds: false,
    title: 'Half Moon, Sherborne By',
    address: '6731 Killdeer Park'
  },
  {
    type: "",
    img: Account4,
    show: "Show 2",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T19:30:00Z",
    to: "2023-12-18T20:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 40,
    reviewPoint: 4.8,
    reviewCount: 34,
    categoryName: 'Entire cabin',
    bedCount: 7,
    isAds: false,
    title: 'White Horse Hotel By Greene',
    address: '35 Sheman Park'
  },
  {
    type: "",
    img: Account5,
    show: "Show 3",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T13:30:00Z",
    to: "2023-12-18T14:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 147,
    reviewPoint: 3.4,
    reviewCount: 340,
    categoryName: 'Entire cabin',
    bedCount: 3,
    isAds: false,
    title: 'Ship And Castle Hotel',
    address: '3 Creast Line Park'
  },
  {
    type: "",
    img: Account6,
    show: "Show 4",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T12:30:00Z",
    to: "2023-12-18T13:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 90,
    reviewPoint: 3.8,
    reviewCount: 508,
    categoryName: 'Entire cabin',
    bedCount: 7,
    isAds: false,
    title: 'The Windmill Family &',
    address: '55974 Waxwing Junction'
  },
  {
    type: "-10% today",
    img: Account7,
    show: "Show 3",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T13:30:00Z",
    to: "2023-12-18T14:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 282,
    reviewPoint: 3,
    reviewCount: 481,
    categoryName: 'Entire cabin',
    bedCount: 2,
    isAds: false,
    title: 'Unicorn, Gunthorpe By',
    address: '79361 Chinook Place'
  },
  {
    type: "",
    img: Account8,
    show: "Show 4",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T12:30:00Z",
    to: "2023-12-18T13:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 79,
    reviewPoint: 3.9,
    reviewCount: 188,
    categoryName: 'Entire cabin',
    bedCount: 7,
    isAds: false,
    title: 'Holiday Inn Express Ramsgate',
    address: '6 Chive Avenue'
  },
];
const carsListing: IListDetailsProps[] = [
  {
    type: "-10% today",
    img: Account,
    show: "Show 1",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T15:30:00Z",
    to: "2023-12-18T16:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 26,
    reviewPoint: 4.8,
    reviewCount: 28,
    categoryName: 'Entire cabin',
    bedCount: 10,
    isAds: true,
    title: 'Best Western Cedars',
    address: '1 Anzinger Court'
  },
  {
    type: "-10% today",
    img: Account2,
    show: "Show 1",
    name: "Premium Merch Pack",
    from: "2023-12-18T12:30:00Z",
    to: "2023-12-18T13:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Offline",
    isLiked: false,
    price: 250,
    reviewPoint: 4.4,
    reviewCount: 198,
    categoryName: 'Entire cabin',
    bedCount: 6,
    isAds: false,
    title: 'Bell By Greene King inns',
    address: '32923 Judy Hill'
  },
  {
    type: "",
    img: Account3,
    show: "Show 1",
    name: "Meet & Greet",
    from: "2023-12-18T15:30:00Z",
    to: "2023-12-18T16:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Draft",
    isLiked: true,
    price: 278,
    reviewPoint: 3.6,
    reviewCount: 16,
    categoryName: 'Entire cabin',
    bedCount: 9,
    isAds: false,
    title: 'Half Moon, Sherborne By',
    address: '6731 Killdeer Park'
  },
  {
    type: "",
    img: Account4,
    show: "Show 2",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T19:30:00Z",
    to: "2023-12-18T20:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 40,
    reviewPoint: 4.8,
    reviewCount: 34,
    categoryName: 'Entire cabin',
    bedCount: 7,
    isAds: false,
    title: 'White Horse Hotel By Greene',
    address: '35 Sheman Park'
  },
  {
    type: "",
    img: Account5,
    show: "Show 3",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T13:30:00Z",
    to: "2023-12-18T14:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 147,
    reviewPoint: 3.4,
    reviewCount: 340,
    categoryName: 'Entire cabin',
    bedCount: 3,
    isAds: false,
    title: 'Ship And Castle Hotel',
    address: '3 Creast Line Park'
  },
  {
    type: "",
    img: Account6,
    show: "Show 4",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T12:30:00Z",
    to: "2023-12-18T13:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 90,
    reviewPoint: 3.8,
    reviewCount: 508,
    categoryName: 'Entire cabin',
    bedCount: 7,
    isAds: false,
    title: 'The Windmill Family &',
    address: '55974 Waxwing Junction'
  },
  {
    type: "-10% today",
    img: Account7,
    show: "Show 3",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T13:30:00Z",
    to: "2023-12-18T14:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 282,
    reviewPoint: 3,
    reviewCount: 481,
    categoryName: 'Entire cabin',
    bedCount: 2,
    isAds: false,
    title: 'Unicorn, Gunthorpe By',
    address: '79361 Chinook Place'
  },
  {
    type: "",
    img: Account8,
    show: "Show 4",
    name: "Cirque du Soleil Bazzar",
    from: "2023-12-18T12:30:00Z",
    to: "2023-12-18T13:30:00Z",
    location: "Dubai Opera House, UAE",
    status: "Live",
    isLiked: false,
    price: 79,
    reviewPoint: 3.9,
    reviewCount: 188,
    categoryName: 'Entire cabin',
    bedCount: 7,
    isAds: false,
    title: 'Holiday Inn Express Ramsgate',
    address: '6 Chive Avenue'
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
        <div className="row">
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
              <TabPanels as="div" className="col-12">
                <AllListings listDetailsData={eventsListing} />
                <AllListings listDetailsData={experiencesListing} />
                <AllListings listDetailsData={carsListing} />
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </TabPanel>
    </>
  );
};

export default index;
