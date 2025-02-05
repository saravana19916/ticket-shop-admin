import { IInfoDetailsProps } from "./InfoList";

export const allInfoList: IInfoDetailsProps[] = [
  // Live events
  {
    id: 1,
    listingName: "The Grand Concert",
    listingType: "Live Show",
    createdAt: new Date("2025-01-01").toISOString(),
    category: "Music",
    subCategory: "Concert",
    status: "live",
  },
  {
    id: 2,
    listingName: "Blockbuster Movie",
    listingType: "Movie",
    createdAt: new Date("2025-01-02").toISOString(),
    category: "Cinema",
    subCategory: "Premiere",
    status: "live",
  },
  // Draft events
  {
    id: 3,
    listingName: "Comedy Night Prep",
    listingType: "Stand-Up Show",
    createdAt: new Date("2025-01-03").toISOString(),
    category: "Comedy",
    subCategory: "Stand-Up",
    status: "draft",
  },
  {
    id: 4,
    listingName: "Upcoming Drama",
    listingType: "Theater",
    createdAt: new Date("2025-01-04").toISOString(),
    category: "Drama",
    subCategory: "Play",
    status: "draft",
  },
  // Offline events
  {
    id: 5,
    listingName: "Archived Rock Festival",
    listingType: "Live Show",
    createdAt: new Date("2025-01-05").toISOString(),
    category: "Music",
    subCategory: "Festival",
    status: "offline",
  },
  {
    id: 6,
    listingName: "Classic Movie",
    listingType: "Movie",
    createdAt: new Date("2025-01-06").toISOString(),
    category: "Cinema",
    subCategory: "Retro Screening",
    status: "offline",
  },
];
