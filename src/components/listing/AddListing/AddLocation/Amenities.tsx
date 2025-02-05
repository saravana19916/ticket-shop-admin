import React, { FC, useState } from "react";
import { Form } from "react-bootstrap";
import AmenitiesCheckBox from "./AmenitiesCheckBox";
import {
  generalAmenitiesList,
  healthSafetyAndSecurityAmenities,
  vipAmenities,
} from "../../../../commondata/Amenities";
interface IAmenitiesProps {}
const Amenities: FC<IAmenitiesProps> = ({}) => {
  const [selectedGeneralAmenities, setSelectedGeneralAmenities] = useState<
    string[]
  >([]);
  const [
    selectedHealthSafetySecurityAmenities,
    setSelectedHealthSafetySecurityAmenities,
  ] = useState<string[]>([]);
  const [selectedVipAmenities, setSelectedVipAmenities] = useState<string[]>(
    []
  );
  const handleCheckboxChange = (
    id: string,
    type: "general" | "healthSafetySecurity" | "vip"
  ) => {
    switch (type) {
      case "general":
        setSelectedGeneralAmenities((prev) => {
          if (prev.includes(id)) {
            return prev.filter((amenityId) => amenityId !== id);
          } else {
            return [...prev, id];
          }
        });
        return;
      case "healthSafetySecurity":
        setSelectedHealthSafetySecurityAmenities((prev) => {
          if (prev.includes(id)) {
            return prev.filter((amenityId) => amenityId !== id);
          } else {
            return [...prev, id];
          }
        });
        return;
      case "vip":
        setSelectedVipAmenities((prev) => {
          if (prev.includes(id)) {
            return prev.filter((amenityId) => amenityId !== id);
          } else {
            return [...prev, id];
          }
        });
        return;
      default:
        return;
    }
  };
  return (
    <>
      <div className="col-12 mb-3">
        <Form.Label
          className="fs-5 fw-500 mb-3 text-black"
          style={{ color: "#ed003b" }}
        >
          Amenities
        </Form.Label>
        <span
          className="text-gray d-inline-block mb-3"
          style={{ fontSize: "14px" }}
        >
          pick the facilities and amenities that are included in the location
        </span>
      </div>
      <div className="col-12 mb-3">
        <Form.Label className="fs-5 fw-600 mb-3">General Amenities</Form.Label>
      </div>
      {generalAmenitiesList?.map((l) => (
        <>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 ">
            <AmenitiesCheckBox
              checkBoxId={l.id}
              checkBoxClassName=""
              checkBoxValue={selectedGeneralAmenities.includes(l.id)}
              checkBoxLabel={l.value}
              labelClassName=""
              handleCheckboxChange={() => {
                handleCheckboxChange(l.id, "general");
              }}
            />
          </div>
        </>
      ))}
      <div className="col-12 mb-3 mt-3">
        <Form.Label className="fs-5 fw-600 mb-3">
          Health, Safety & Security Amenities
        </Form.Label>
      </div>
      {healthSafetyAndSecurityAmenities?.map((l) => (
        <>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <AmenitiesCheckBox
              checkBoxId={l.id}
              checkBoxClassName=""
              checkBoxValue={selectedHealthSafetySecurityAmenities.includes(
                l.id
              )}
              checkBoxLabel={l.value}
              labelClassName=""
              handleCheckboxChange={() => {
                handleCheckboxChange(l.id, "healthSafetySecurity");
              }}
            />
          </div>
        </>
      ))}
      <div className="col-12 mb-3 mt-3">
        <Form.Label className="fs-5 fw-600 mb-3">VIP Amenities</Form.Label>
      </div>
      {vipAmenities?.map((l) => (
        <>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <AmenitiesCheckBox
              checkBoxId={l.id}
              checkBoxClassName=""
              checkBoxValue={selectedVipAmenities.includes(l.id)}
              checkBoxLabel={l.value}
              labelClassName=""
              handleCheckboxChange={() => {
                handleCheckboxChange(l.id, "vip");
              }}
            />
          </div>
        </>
      ))}
    </>
  );
};

export default Amenities;
