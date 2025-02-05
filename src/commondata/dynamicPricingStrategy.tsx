import { IDynamicPricingStrategyProps } from "../components/listing/AddListing/DynamicPricingStrategy/type";

// Data

export const dynamicPricingStrategyTableData: IDynamicPricingStrategyProps[] = [
  {
    id: 1,
    strategyType: "By Date",
    byDate: {
      startDate: new Date("2024-12-01"),
      endDate: new Date("2024-12-31"),
      pricingAction: "Discount",
      pricingActionValue: 20,
      capacityAction: "Increase",
      capacityActionValue: 10,
      capacityActionUnit: 10,
      pricingActionPrice: 100,
      products: ["Product A", "Product B"],
      strategyName: "Holiday Special",
      shops: ["Shop 1", "Shop 2"],
    },
  },
  {
    id: 2,
    strategyType: "By Date",
    byDate: {
      startDate: new Date("2024-11-01"),
      endDate: new Date("2024-11-30"),
      pricingAction: "Increase",
      pricingActionValue: 15,
      capacityAction: "Decrease",
      capacityActionValue: 5,
      strategyName: "Weekend Surge",

      capacityActionUnit: 10,
      pricingActionPrice: 100,
      products: ["Product C"],
      shops: ["Shop 3"],
    },
  },
  {
    id: 3,
    strategyType: "By Demand",
    byDemand: {
      section: "VIP Section",
      exceedBy: "10%",
      pricingAction: "Increase",
      pricingActionValue: 30,
      dateAndTime: new Date("2024-12-01T09:00:00"),
      pricingActionPrice: 100,
      products: ["Product D"],
      shops: ["Shop 4"],
      strategyName: "High Demand Sections",

      sectionUnit: 11,
      sectionValue: 10,
    },
  },
  {
    id: 4,
    strategyType: "By Demand",
    byDemand: {
      section: "Standard Section",
      exceedBy: "10%",
      pricingAction: "Discount",
      strategyName: "Low Demand Sections",
      pricingActionValue: 10,
      dateAndTime: new Date("2024-12-01T09:00:00"),
      pricingActionPrice: 100,
      products: ["Product E", "Product F"],
      shops: ["Shop 5", "Shop 6"],
      sectionUnit: 11,
      sectionValue: 10,
    },
  },
];
