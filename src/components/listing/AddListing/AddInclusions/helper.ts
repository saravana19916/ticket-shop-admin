import * as Yup from "yup";
import { IInclusionProps } from "./type";

// VALIDATION SCHEMA

export const addListingInclusionValidationSchema = Yup.object().shape({
  product: Yup.array()
    .min(1, "At least one product is required")
    .required("Required")
    .nullable(),
  inclusionText: Yup.string().nullable(),
  inclusionList: Yup.array()
    .min(1, "At least one inclusion is required")
    .required("Required")
    .nullable(),
});

// INITIAL VALUE

export const addListingInclusionInitialValues: IInclusionProps = {
  product: undefined,
  inclusionText: undefined,
  inclusionList: [],
};
