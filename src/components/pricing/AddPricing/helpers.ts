import * as Yup from "yup";
import { IPricingDetailsProps } from "./type";

// VALIDATION SCHEMA
export const addPricingValidationSchema = Yup.object().shape({
  productDetails: Yup.object().shape({
    productName: Yup.string().required("Required").nullable(),
    productType: Yup.string().required("Required").nullable(),
    productCategory: Yup.string().required("Required").nullable(),
    productSubCategory: Yup.string().required("Required").nullable(),
    productSubTitle: Yup.string().nullable(),
    description: Yup.string().nullable(),
  }),
  rulesAndTimeline: Yup.object().shape({
    minOrder: Yup.string().required("Required").nullable(),
    maxOrder: Yup.string().required("Required").nullable(),
    access: Yup.string().required("Required").nullable(),
    scan: Yup.string().required("Required").nullable(),
    salesStartDate: Yup.string().required("Required").nullable(),
    salesEndDate: Yup.string().required("Required").nullable(),
  }),
  inclusion: Yup.object().shape({
    inclusionList: Yup.array()
      .min(1, "At least one inclusion is required")
      .required("Inclusion list is required"),
  }),
  pricing: Yup.object().shape({
    netSalesPrice: Yup.number().required("Required").nullable(),
    transactionCurrency: Yup.string().required("Required").nullable(),
    vatTax: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Must be at least 1%")
      .max(100, "Must be 100% or less"),

    entertainmentTax: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Must be at least 1%")
      .max(100, "Must be 100% or less"),

    municipalTax: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Must be at least 1%")
      .max(100, "Must be 100% or less"),

    otherTax: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Must be at least 1%")
      .max(100, "Must be 100% or less"),
  }),
  // zoningAndAllocation: Yup.object().shape({
  //   zone: Yup.string().nullable().required("Required"),
  //   floor: Yup.string().nullable().required("Required"),
  //   section: Yup.string().nullable().required("Required"),
  //   row: Yup.string().nullable().required("Required"),
  //   totalCapacity: Yup.string().nullable().required("Required"),
  //   blocked: Yup.string().nullable().required("Required"),
  //   onSaleCap: Yup.string().nullable().required("Required"),
  // }),
});

// INITIAL VALUES

export const addPricingDetailsInitialValue: IPricingDetailsProps = {
  id: 0,
  productDetails: {
    productName: "",
    productType: "",
    productCategory: "",
    productSubCategory: "",
    productSubTitle: "",
    img: undefined,
  },
  rulesAndTimeline: {
    minOrder: undefined,
    maxOrder: undefined,
    access: undefined,
    scan: undefined,
    salesStartDate: undefined,
    salesEndDate: undefined,
  },
  inclusion: {
    inclusionList: [],
  },
  pricing: {
    netSalesPrice: undefined,
    transactionCurrency: undefined,
    vatTax: undefined,
    entertainmentTax: undefined,
    municipalTax: undefined,
    otherTax: undefined,
  },
};
