export interface IShopInformation {
  id: string | number;
  shopName: string;
  shopType: undefined | string;
  shopCode: undefined | string;
  country: undefined | string;
  city: undefined | string;
  address: undefined | string;
  pointOfContact: undefined | string;
  emailAddress: undefined | string;
  phoneNumber: undefined | string;
  serviceFee: undefined | string;
  salesCommission: undefined | string;
  status?: string;
}
export interface IProductAllocation {
  product: undefined | string;
  totalInventory: undefined | number;
  allocationUnit: undefined | number;
  discountPercentage: undefined | number;
  price: undefined | number;
  allocation: undefined | number;
  discountPrice: undefined | number;
}
export interface IAddListingShopProps {
  img?: any;
  id: number;
  shopInformation: IShopInformation;
  productAllocation: IProductAllocation[];
}
