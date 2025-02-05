import * as Yup from "yup";
export const addListingLocationValidationSchema = Yup.object().shape({
  locationName: Yup.string().nullable().required("Required"),
  locationWebsite: Yup.string().nullable().required("Required"),
  countryId: Yup.mixed().nullable().required("Required"),
  cityId: Yup.mixed().nullable().required("Required"),
  zipCode: Yup.number().nullable().required("Required"),
  address: Yup.string().nullable().required("Required"),
});
