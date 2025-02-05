import { IAddListingAddZoningAndCapacity } from "../components/listing/AddListing/AddZoningAndCapacity/type";

// Data
export const zoningAndCapacitySectionData: IAddListingAddZoningAndCapacity[] = [
  {
    id: 1,
    zones: {
      zoneName: "Zone A",
      zoneFormat: "Format 1",
      zoneType: "VIP",
      zoneColor: "Red",
      zoneSelection: "Manual & automated",
    },
    zoneDesign: [
      { label: "Section", value: "Section 1" },
      { label: "Floor", value: "1st Floor" },
      { label: "Block", value: "Block 10" },
      { label: "Row", value: "Row 1" },
      { label: "Wing", value: "East Wing" },
    ],
    capacity: {
      totalCapacity: 100,
      totalOnSale: 80,
      blocked: 20,
    },
    seats: {
      rangeFrom: 1,
      rangeUpTo: 50,
      order: "Left to Right",
      blockedSeats: [5, 10, 15],
      connectedProducts: ["Product A", "Product B"],
    },
  },
  {
    id: 2,
    zones: {
      zoneName: "Zone B",
      zoneFormat: "Format 2",
      zoneType: "Standard",
      zoneColor: "Blue",
      zoneSelection: "Manual & automated",
    },
    zoneDesign: [
      { label: "Floor", value: "2nd Floor" },
      { label: "Section", value: "Section 1" },
      { label: "Block", value: "Block 10" },
      { label: "Row", value: "Row 1" },
      { label: "Wing", value: "West Wing" },
    ],
    capacity: {
      totalCapacity: 150,
      totalOnSale: 120,
      blocked: 30,
    },
    seats: {
      rangeFrom: 51,
      rangeUpTo: 100,
      order: "Right to Left",
      blockedSeats: [60, 70, 80],
      connectedProducts: ["Product C", "Product D"],
    },
  },
  {
    id: 3,
    zones: {
      zoneName: "Zone C",
      zoneFormat: "Format 3",
      zoneType: "Premium",
      zoneSelection: "Manual & automated",
      zoneColor: "Green",
    },
    zoneDesign: [
      { label: "Floor", value: "2nd Floor" },
      { label: "Section", value: "Section 1" },
      { label: "Block", value: "Block 10" },
      { label: "Row", value: "Row 1" },
      { label: "Wing", value: "North Wing" },
    ],
    capacity: {
      totalCapacity: 200,
      totalOnSale: 170,
      blocked: 30,
    },
    seats: {
      rangeFrom: 101,
      rangeUpTo: 150,
      order: "Top to Bottom",
      blockedSeats: [110, 120, 130],
      connectedProducts: ["Product E", "Product F"],
    },
  },
];
