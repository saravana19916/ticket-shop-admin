import * as Yup from "yup";
import {
  IAddListingShopProps,
  IProductAllocation,
  IShopInformation,
} from "../../listing/AddListing/AddShop/type";

// VALIDATION SCHEMA
export const addShopValidationSchema = Yup.object().shape({
  shopInformation: Yup.object().shape({
    shopName: Yup.string().required("Required").nullable(),
    shopType: Yup.string().required("Required").nullable(),
    shopCode: Yup.string().required("Required").nullable(),
    country: Yup.string().required("Required").nullable(),
    city: Yup.string().required("Required").nullable(),
    address: Yup.string().required("Required").nullable(),
    pointOfContact: Yup.string().required("Required").nullable(),
    emailAddress: Yup.string().required("Required").nullable(),
    phoneNumber: Yup.string().required("Required").nullable(),
    serviceFee: Yup.number().nullable().required("Required"),
    salesCommission: Yup.number().nullable().required("Required"),
  }),
  productAllocation: Yup.array().of(
    Yup.object().shape({
      product: Yup.string().required("Required").nullable(),
      totalInventory: Yup.number().required("Required").nullable(),
      allocationUnit: Yup.number().required("Required").nullable(),
      discountPercentage: Yup.number().required("Required").nullable(),
      price: Yup.number().required("Required").nullable(),
      allocation: Yup.number().required("Required").nullable(),
      discountPrice: Yup.number().required("Required").nullable(),
    })
  ),
});

// INITIAL VALUES

export const shopInformationInitialValue: IShopInformation = {
  id: 0,
  shopName: '',
  shopType: undefined,
  shopCode: undefined,
  country: undefined,
  city: undefined,
  address: undefined,
  pointOfContact: undefined,
  emailAddress: undefined,
  phoneNumber: undefined,
  serviceFee: undefined,
  salesCommission: undefined,
};
export const productAllocationInitialValue: IProductAllocation = {
  product: undefined,
  totalInventory: undefined,
  allocationUnit: undefined,
  discountPercentage: undefined,
  price: undefined,
  allocation: undefined,
  discountPrice: undefined,
};

export const addShopInitialValue: IAddListingShopProps = {
  shopInformation: shopInformationInitialValue,
  id: 0,
  productAllocation: [productAllocationInitialValue],
};
