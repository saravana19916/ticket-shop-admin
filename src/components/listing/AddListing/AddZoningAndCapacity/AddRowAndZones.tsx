import React, { FC, useState } from "react";
import { FormStyledContentSection } from "../../../styledComponents/styledForm";
interface IProps {}
const AddRowAndZones: FC<IProps> = ({}) => {
  const [showCustomRowAndZones, setShowCustomRowAndZones] =
    useState<boolean>(false);
  return (
    <>
      <div className="col-12 mb-6">
        <FormStyledContentSection>
          <span className="question">
            Would you like to add more sections/rows to your Zone?
          </span>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="addSections"
              value="yes"
              id="addSections"
              onChange={() => {
                setShowCustomRowAndZones(true);
              }}
              checked={showCustomRowAndZones}
            />

            <label
              className="form-check-label ms-1"
              htmlFor="addSections"
              style={{ marginTop: "3px", fontSize: "12px" }}
            >
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="donNotAddSections"
              name="addSections"
              value="no"
              checked={!showCustomRowAndZones}
              onChange={() => {
                setShowCustomRowAndZones(false);
              }}
            />
            <label
              htmlFor="donNotAddSections"
              className="form-check-label ms-1"
              style={{ marginTop: "3px", fontSize: "12px" }}
            >
              No
            </label>
          </div>
        </FormStyledContentSection>
      </div>
      <div className="col-12 mb-6">
        <FormStyledContentSection>
          <span className="question">
            How many sections/rows you want to add to this zone?
          </span>
        </FormStyledContentSection>
      </div>
    </>
  );
};

export default AddRowAndZones;
