import { IAddListingShopProps } from "../components/listing/AddListing/AddShop/type";
import { IPricingTypes } from "./pricingTableData";

export interface IShopTableDataProps {
  id: number;
  shopName: string;
  shopCode: string;
  priceType: IPricingTypes;
  products: IShopTableProductsProps[];
}
export interface IShopTableProductsProps {
  unit: number;
  productName: string;
  type: string;
  country: string;
  city: string;
  allocation: string;
  allocationPercentage: number;
  discountPercentage: number;
  svcFee: string;
  commPercentage: number;
}

export const shopTableData: IAddListingShopProps[] = [
  {
    id: 1,
    shopInformation: {
      id: "S001",
      shopName: "Tech Hub",
      shopType: "Electronics",
      shopCode: "TH001",
      country: "USA",
      city: "San Francisco",
      address: "123 Tech St.",
      pointOfContact: "John Doe",
      emailAddress: "contact@techhub.com",
      phoneNumber: "+1-123-456-7890",
      serviceFee: "15.00",
      salesCommission: "5.00",
    },
    productAllocation: [
      {
        product: "Laptop",
        totalInventory: 100,
        allocationUnit: 10,
        discountPercentage: 5,
        price: 1500,
        allocation: 20,
        discountPrice: 1425,
      },
      {
        product: "Smartphone",
        totalInventory: 200,
        allocationUnit: 20,
        discountPercentage: 10,
        price: 800,
        allocation: 50,
        discountPrice: 720,
      },
    ],
  },
  {
    id: 2,
    shopInformation: {
      id: "S002",
      shopName: "Fashion Outlet",
      shopType: "Clothing",
      shopCode: "FO002",
      country: "USA",
      city: "New York",
      address: "456 Fashion Ave.",
      pointOfContact: "Jane Smith",
      emailAddress: "info@fashionoutlet.com",
      phoneNumber: "+1-987-654-3210",
      serviceFee: "10.00",
      salesCommission: "7.50",
    },
    productAllocation: [
      {
        product: "Jacket",
        totalInventory: 50,
        allocationUnit: 5,
        discountPercentage: 15,
        price: 120,
        allocation: 10,
        discountPrice: 102,
      },
      {
        product: "Shoes",
        totalInventory: 150,
        allocationUnit: 15,
        discountPercentage: 20,
        price: 80,
        allocation: 25,
        discountPrice: 64,
      },
    ],
  },
];
