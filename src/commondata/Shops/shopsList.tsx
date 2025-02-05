import Owl from "../../assets/images/owl.jpg";
import { IAddListingShopProps } from "../../components/listing/AddListing/AddShop/type";
export interface IShopDetailsProps {
  id: number | string;
  shopName: string | undefined;
  shopType: undefined | string;
  shopCode: undefined | string;
  img: any;
  //   from: string;
  //   to: string;
  address: undefined | string;
  status: undefined | string;
  pointOfContact: undefined | string;
  emailAddress: undefined | string;
  phoneNumber: undefined | string;
  city: undefined | string;
  country: undefined | string;
}
export const allShopsList: IAddListingShopProps[] = [
  {
    img: Owl,
    id: 1,
    shopInformation: {
      id: 1,
      shopName: "Physical Shop A",
      shopType: "Physical",
      shopCode: "PSA001",
      country: "UAE",
      city: "Dubai",
      address: "Dubai Mall",
      pointOfContact: "John Doe",
      emailAddress: "john.doe@psa.com",
      phoneNumber: "1234567890",
      serviceFee: "5%",
      status: "Live",
      salesCommission: "10%",
    },
    productAllocation: [
      {
        product: "Product A1",
        totalInventory: 100,
        allocationUnit: 50,
        discountPercentage: 5,
        price: 200,
        allocation: 20,
        discountPrice: 190,
      },
      {
        product: "Product A2",
        totalInventory: 80,
        allocationUnit: 40,
        discountPercentage: 8,
        price: 150,
        allocation: 25,
        discountPrice: 138,
      },
    ],
  },
  {
    img: Owl,
    id: 2,
    shopInformation: {
      id: 2,
      shopName: "Digital Shop B",
      shopType: "Digital",
      shopCode: "DSB002",
      country: "UAE",
      city: "Abu Dhabi",
      address: "Abu Dhabi Corniche",
      pointOfContact: "Jane Smith",
      emailAddress: "jane.smith@dsb.com",
      phoneNumber: "9876543210",
      serviceFee: "6%",
      salesCommission: "12%",
      status: "Live",
    },
    productAllocation: [
      {
        product: "Product B1",
        totalInventory: 120,
        allocationUnit: 60,
        discountPercentage: 10,
        price: 250,
        allocation: 30,
        discountPrice: 225,
      },
    ],
  },
  {
    img: Owl,
    id: 3,
    shopInformation: {
      id: 3,
      shopName: "Live Shop C",
      shopType: "Live",
      shopCode: "LSC003",
      country: "UAE",
      city: "Sharjah",
      address: "Sharjah Market",
      pointOfContact: "Mohamed Ali",
      emailAddress: "mohamed.ali@lsc.com",
      phoneNumber: "1122334455",
      serviceFee: "7%",
      salesCommission: "15%",
      status: "Draft",
    },
    productAllocation: [
      {
        product: "Product C1",
        totalInventory: 90,
        allocationUnit: 45,
        discountPercentage: 6,
        price: 210,
        allocation: 25,
        discountPrice: 197,
      },
    ],
  },
  {
    img: Owl,
    id: 4,
    shopInformation: {
      id: 4,
      shopName: "Office Shop D",
      shopType: "Office",
      shopCode: "OSD004",
      country: "UAE",
      city: "Dubai",
      address: "Business Bay",
      pointOfContact: "Sara Khan",
      emailAddress: "sara.khan@osd.com",
      phoneNumber: "2233445566",
      serviceFee: "8%",
      salesCommission: "9%",
      status: "Draft",
    },
    productAllocation: [
      {
        product: "Product D1",
        totalInventory: 75,
        allocationUnit: 35,
        discountPercentage: 4,
        price: 220,
        allocation: 18,
        discountPrice: 211,
      },
      {
        product: "Product D2",
        totalInventory: 60,
        allocationUnit: 30,
        discountPercentage: 5,
        price: 180,
        allocation: 15,
        discountPrice: 171,
      },
    ],
  },
];

// Filtered lists
export const physicalShopsList = allShopsList.filter(
  (shop) => shop.shopInformation.shopType === "Physical"
);
export const digitalShopsList = allShopsList.filter(
  (shop) => shop.shopInformation.shopType === "Digital"
);
export const liveShopsList = allShopsList.filter(
  (shop) => shop.shopInformation.shopType === "Live"
);
export const officeShopsList = allShopsList.filter(
  (shop) => shop.shopInformation.shopType === "Office"
);

// Drafts list - Assuming drafts are shops with missing values or marked as drafts (customize as needed)
export const draftShopsList = allShopsList.filter(
  (shop) => !shop.shopInformation.shopCode || !shop.productAllocation.length
);
