import { ILocationDetailsProps } from "./LocationList";

export const allLocationData: ILocationDetailsProps[] = [
  // Live locations
  {
    id: 1,
    locationName: "Royal Theater",
    website: "https://www.royaltheater.com",
    country: "United States",
    city: "New York",
    address: "123 Broadway Street",
    zipcode: "10001",
    status: "live",
  },
  {
    id: 2,
    locationName: "Sunset Cinema",
    website: "https://www.sunsetcinema.com",
    country: "Australia",
    city: "Sydney",
    address: "45 Harbor Road",
    zipcode: "2000",
    status: "live",
  },
  // Draft locations
  {
    id: 3,
    locationName: "Comedy Hub",
    website: "https://www.comedyhub.com",
    country: "Canada",
    city: "Toronto",
    address: "78 King Street West",
    zipcode: "M5X 1A1",
    status: "draft",
  },
  {
    id: 4,
    locationName: "Drama Palace",
    website: "https://www.dramapalace.com",
    country: "United Kingdom",
    city: "London",
    address: "22 Baker Street",
    zipcode: "NW1 6XE",
    status: "draft",
  },
  // Offline locations
  {
    id: 5,
    locationName: "Retro Drive-In",
    website: "https://www.retrodrivein.com",
    country: "United States",
    city: "Los Angeles",
    address: "890 Sunset Boulevard",
    zipcode: "90028",
    status: "offline",
  },
  {
    id: 6,
    locationName: "Rock Arena",
    website: "https://www.rockarena.com",
    country: "Germany",
    city: "Berlin",
    address: "50 Alexanderplatz",
    zipcode: "10178",
    status: "offline",
  },
];
