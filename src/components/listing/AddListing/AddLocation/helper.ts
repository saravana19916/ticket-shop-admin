import * as Yup from "yup";
import { IAddLocationProps } from "./type";
export const addListingLocationValidationSchema = Yup.object().shape({
  locationName: Yup.string().nullable().required("Required"),
  locationWebsite: Yup.string().nullable().required("Required"),
  countryId: Yup.mixed().nullable().required("Required"),
  cityId: Yup.mixed().nullable().required("Required"),
  zipCode: Yup.number().nullable().required("Required"),
  address: Yup.string().nullable().required("Required"),
});

export const locationAccordionData: IAddLocationProps[] = [
  {
    locationName: "Burj Khalifa",
    locationWebsite: "https://www.burjkhalifa.ae",
    countryId: "UAE",
    cityId: "Dubai",
    zipCode: "00000",
    address: "1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, UAE",
  },
  {
    locationName: "Sheikh Zayed Grand Mosque",
    locationWebsite: "https://www.szgmc.gov.ae",
    countryId: "UAE",
    cityId: "Abu Dhabi",
    zipCode: "00000",
    address: "Sheikh Rashid Bin Saeed St, Abu Dhabi, UAE",
  },
  {
    locationName: "Al Ain Oasis",
    locationWebsite: "https://visitabudhabi.ae",
    countryId: "UAE",
    cityId: "Al Ain",
    zipCode: "00000",
    address: "Al Ain City, Abu Dhabi, UAE",
  },
];
