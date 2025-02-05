import * as Yup from "yup";
import { IAddListingAddZoningAndCapacity } from "./type";

// VALIDATION SCHEMA

export const addListingAddZoningAndCapacityValidationSchema =
  Yup.object().shape({
    zones: Yup.object().shape({
      zoneName: Yup.string().required("Required").nullable(),
      zoneFormat: Yup.string().required("Required").nullable(),
      zoneType: Yup.string().required("Required").nullable(),
      zoneSelection: Yup.string().required("Required").nullable(),
      zoneColor: Yup.string().required("Required").nullable(),
    }),
    capacity: Yup.object().shape({
      totalCapacity: Yup.number()
        .required("Required")
        .nullable()
        .min(1, "Min 1"),
      totalOnSale: Yup.number().required("Required").nullable(),
      blocked: Yup.number().nullable(),
    }),
    seats: Yup.object().shape({
      rangeFrom: Yup.number().required("Required").nullable(),
      rangeUpTo: Yup.number().required("Required").nullable(),
      order: Yup.string().required("Required").nullable(),
      blockedSeats: Yup.array().nullable(),
      connectedProducts: Yup.array().nullable(),
    }),
    zoneDesign: Yup.array().min(1, "Need at least a zone design"),
  });

// INITIAL VALUES

export const addListingAddZoningAndCapacityInitialValue: IAddListingAddZoningAndCapacity =
  {
    zones: {
      zoneName: "",
      zoneFormat: "",
      zoneType: "",
      zoneSelection: "Manual & Automated",
      zoneColor: "",
    },
    zoneDesign: [
      {
        label: "Floor",
        value: undefined,
      },
      {
        label: "Section",
        value: undefined,
      },
      {
        label: "Block",
        value: undefined,
      },
      {
        label: "Row",
        value: undefined,
      },
      {
        label: undefined,
        value: undefined,
      },
      {
        label: undefined,
        value: undefined,
      },
      {
        label: undefined,
        value: undefined,
      },
      {
        label: undefined,
        value: undefined,
      },
      {
        label: undefined,
        value: undefined,
      },
    ],
    capacity: {
      totalCapacity: undefined,
      totalOnSale: undefined,
      blocked: undefined,
    },
    seats: {
      rangeFrom: undefined,
      rangeUpTo: undefined,
      order: undefined,
      blockedSeats: undefined,
      connectedProducts: undefined,
    },
  };

//DATA
