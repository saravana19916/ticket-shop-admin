import { IDynamicPricingStrategyProps } from "./type";
import * as Yup from "yup";

const byDateSchema = Yup.object()
  .shape({
    strategyName: Yup.string().required("Required").nullable(),
    startDate: Yup.string().required("Required").nullable(),
    endDate: Yup.string().required("Required").nullable(),
    pricingAction: Yup.string().nullable().required("Required"),
    capacityAction: Yup.string().nullable().required("Required"),
    pricingActionValue: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Required"),
    pricingActionPrice: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Required"),
    capacityActionValue: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Required"),
    capacityActionUnit: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Required"),
    products: Yup.array().required("Required").nullable().min(1, "Required"),
    shops: Yup.array().required("Required").nullable().min(1, "Required"),
  })
  .nullable();

const byDemandSchema = Yup.object()
  .shape({
    strategyName: Yup.string().required("Required").nullable(),
    section: Yup.string().required("Required").nullable(),
    exceedBy: Yup.string().required("Required").nullable(),
    pricingAction: Yup.string().nullable().required("Required"),
    dateAndTime: Yup.string().required("Required").nullable(),
    sectionValue: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Required"),
    sectionUnit: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Required"),
    pricingActionValue: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Required"),
    pricingActionPrice: Yup.number()
      .required("Required")
      .nullable()
      .min(1, "Required"),
    products: Yup.array().required("Required").nullable().min(1, "Required"),
    shops: Yup.array().required("Required").nullable().min(1, "Required"),
  })
  .nullable();

export const getDynamicPricingStrategyValidationSchema = (
  strategyType: "By Date" | "By Demand"
) => {
  return Yup.object().shape({
    id: Yup.number().nullable(),
    strategyType: Yup.string().required("Required").nullable(),
    ...(strategyType === "By Date" && { byDate: byDateSchema }),
    ...(strategyType === "By Demand" && { byDemand: byDemandSchema }),
  });
};

export const addListingDynamicPricingStrategyInitialValue: IDynamicPricingStrategyProps =
  {
    id: 0,
    strategyType: "By Date",

    byDate: {
      strategyName: "",
      startDate: "",
      endDate: "",
      pricingAction: "",
      pricingActionValue: 0,
      capacityAction: "",
      capacityActionValue: 0,
      capacityActionUnit: 0,
      pricingActionPrice: 0,
      products: [],
      shops: [],
    },
    byDemand: {
      section: "",
      sectionValue: 0,
      sectionUnit: 0,
      exceedBy: "",
      pricingAction: "",
      pricingActionValue: 0,
      dateAndTime: undefined,
      pricingActionPrice: 0,
      products: [],
      shops: [],
      strategyName: "",
    },
  };
