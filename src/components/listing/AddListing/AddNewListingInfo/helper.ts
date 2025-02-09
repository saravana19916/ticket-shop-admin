import * as Yup from "yup";
import { IListingInfoProps } from "./type";
export const listingInfoValidationSchema = Yup.object().shape({
  listingType: Yup.string().nullable().required("Required"),
  listingName: Yup.string().nullable().required("Required"),
  listingCategory: Yup.string().nullable().required("Required"),
  listingSubCategory: Yup.string().nullable().required("Required"),
  suitability: Yup.array().nullable().required("Required").min(1, "Required"),
  ageLimit: Yup.array().nullable().required("Required").min(1, "Required"),
  description: Yup.string().nullable().required("Required"),
});
export const listingInfoInitialState: IListingInfoProps = {
  listingType: null,
  listingName: null,
  listingCategory: null,
  listingSubCategory: null,
  suitability: null,
  ageLimit: null,
  description: null,
  language: null,
  subtitles: null,
  contentGrading: null,
  facilities: null,
};
