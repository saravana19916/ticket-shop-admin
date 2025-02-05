import React, { Dispatch, FC, SetStateAction } from "react";
import DefineZone from "./DefineZone";
import DesignZone from "./DesignZone";
import DefineCapacity from "./DefineCapacity";
import SeatNumbering from "./SeatNumbering";
import BlockedSeats from "./BlockedSeats";
import ConnectProducts from "./ConnectProducts";
import { FormikErrors, FormikTouched } from "formik";
import {
  IAddListingAddZoningAndCapacity,
  IAddListingAddZoningAndCapacityZoneDesign,
} from "../type";
interface IProps {
  errors: FormikErrors<IAddListingAddZoningAndCapacity>;
  values: IAddListingAddZoningAndCapacity;
  touched: FormikTouched<IAddListingAddZoningAndCapacity>;
  handleOnChange: (
    field: string,
    value:
      | string
      | null
      | (string | number)[]
      | IAddListingAddZoningAndCapacityZoneDesign[]
  ) => void;
  zoneDesignData: IAddListingAddZoningAndCapacityZoneDesign[];
  setZoneDesignData: Dispatch<
    SetStateAction<IAddListingAddZoningAndCapacityZoneDesign[]>
  >;
}
const DesignZoningAndCapacityManually: FC<IProps> = ({
  touched,
  values,
  errors,
  handleOnChange,
  setZoneDesignData,
  zoneDesignData,
}) => {
  return (
    <>
      <DefineZone
        touched={touched}
        values={values}
        errors={errors}
        handleOnChange={handleOnChange}
      />
      <DesignZone
        touched={touched}
        values={values}
        errors={errors}
        handleOnChange={handleOnChange}
        setZoneDesignData={setZoneDesignData}
        zoneDesignData={zoneDesignData}
      />
      <DefineCapacity
        touched={touched}
        values={values}
        errors={errors}
        handleOnChange={handleOnChange}
      />
      <SeatNumbering
        touched={touched}
        values={values}
        errors={errors}
        handleOnChange={handleOnChange}
      />
      <BlockedSeats
        touched={touched}
        values={values}
        errors={errors}
        handleOnChange={handleOnChange}
      />
      <ConnectProducts
        touched={touched}
        values={values}
        errors={errors}
        handleOnChange={handleOnChange}
      />
    </>
  );
};

export default DesignZoningAndCapacityManually;
