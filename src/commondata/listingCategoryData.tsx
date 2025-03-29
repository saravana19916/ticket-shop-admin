export type ListingType = "event" | "attraction" | "experience" | "accommodation" | "service";

export interface ListingOptions {
    [key: string]: string[];
}

export const listingCategory: ListingOptions = {
    event: [
      "Concerts & Live Music",
      "Festivals",
      "Fashion",
      "Conferences & Seminars",
      "Sports & Fitness",
      "Theater & Performing Arts",
      "Nightlife & Parties",
      "Exhibitions & Trade Shows",
      "Charity & Fundraisers",
      "Workshops & Training",
    ],
    attraction: [
      "Museums & Exhibitions",
      "Theme Parks",
      "Landmarks & Sightseeing",
      "Zoos & Aquariums",
      "Nature & Outdoor Parks",
      "Historical Sites",
    ],
    experience: [
      "Food & Culinary",
      "Adventure & Sports",
      "Wellness & Relaxation",
      "Cultural & Educational",
      "Guided Tours",
      "Shopping & Retail",
      "Cruises & Water Activities",
    ],
    accommodation: [
      "Hotels",
      "Resorts",
      "Hostels",
      "Vacation Rentals",
      "Guesthouses",
      "Lodges",
    ],
    service: [
      "Restaurants & Dining",
      "Spas & Wellness",
      "Transportation & Rentals",
      "Event Venues & Spaces",
      "Photography & Videography",
      "Travel & Tourism Services",
    ],
  };
  