import { IZoneDetailsProps } from "./ZoningList";

export const allZoneList: IZoneDetailsProps[] = [
  // Live zones
  {
    id: 1,
    zoneName: "Main Theater Zone",
    zoneType: "VIP",
    selection: "Manual",
    format: "Theater",
    status: "live",
  },
  {
    id: 2,
    zoneName: "Ground Floor Seating",
    zoneType: "General Admission",
    selection: "Automatic",
    format: "Ground",
    status: "live",
  },
  // Draft zones
  {
    id: 3,
    zoneName: "Balcony Zone",
    zoneType: "Premium",
    selection: "Manual & Automatic",
    format: "Theater",
    status: "draft",
  },
  {
    id: 4,
    zoneName: "Outdoor Stage Zone",
    zoneType: "Standard",
    selection: "Manual",
    format: "Ground",
    status: "draft",
  },
  // Offline zones
  {
    id: 5,
    zoneName: "Private Box Zone",
    zoneType: "Exclusive",
    selection: "Manual",
    format: "Theater",
    status: "offline",
  },
  {
    id: 6,
    zoneName: "Standing Area Zone",
    zoneType: "General Admission",
    selection: "Automatic",
    format: "Ground",
    status: "offline",
  },
];
