import { IDynamicPricingDetailsProps } from "./DynamicPricingList";

export const allDynamicPricing: IDynamicPricingDetailsProps[] = [
  // Live dynamic pricing
  {
    id: 1,
    mode: "By Date",
    strategyName: "Weekend Premium",
    startDateTime: new Date("2025-01-15T00:00:00").toISOString(),
    endDateTime: new Date("2025-01-31T23:59:59").toISOString(),
    shopAllocation: "All Shops",
    status: "live",
  },
  {
    id: 2,
    mode: "By Demand",
    strategyName: "High Traffic Surge",
    startDateTime: new Date("2025-02-01T12:00:00").toISOString(),
    endDateTime: new Date("2025-02-10T18:00:00").toISOString(),
    shopAllocation: "Selected Shops",
    status: "live",
  },
  // Draft dynamic pricing
  {
    id: 3,
    mode: "By Date",
    strategyName: "Holiday Discount",
    startDateTime: new Date("2025-02-15T00:00:00").toISOString(),
    endDateTime: new Date("2025-02-20T23:59:59").toISOString(),
    shopAllocation: "All Shops",
    status: "draft",
  },
  {
    id: 4,
    mode: "By Demand",
    strategyName: "Event-Based Surge",
    startDateTime: new Date("2025-03-05T10:00:00").toISOString(),
    endDateTime: new Date("2025-03-07T22:00:00").toISOString(),
    shopAllocation: "Specific Locations",
    status: "draft",
  },
  // Offline dynamic pricing
  {
    id: 5,
    mode: "By Date",
    strategyName: "Off-Peak Discount",
    startDateTime: new Date("2024-12-01T00:00:00").toISOString(),
    endDateTime: new Date("2024-12-31T23:59:59").toISOString(),
    shopAllocation: "All Shops",
    status: "offline",
  },
  {
    id: 6,
    mode: "By Demand",
    strategyName: "Limited Time Offer",
    startDateTime: new Date("2025-01-10T08:00:00").toISOString(),
    endDateTime: new Date("2025-01-12T20:00:00").toISOString(),
    shopAllocation: "Selected Shops",
    status: "offline",
  },
];
