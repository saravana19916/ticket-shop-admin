import React, { useEffect, useRef, useState } from "react";
import SwitchReact from "../../shared/SwitchReact";
import { Imagesdata } from "../../../commondata/commonimages";
import { Form } from "react-bootstrap";
import {
  FormDivStyled,
  FormFileInputStyled,
  FormInputStyled,
  FormLabelStyled,
  StyledInputDiv,
} from "../../styledComponents/styledForm";
import CustomTooltip from "../../shared/CustomTooltip";
import SelectDropDown from "../../shared/SelectDropDown";
import { SuccessIcon } from "../../styledComponents/styledIcons";
import ListingImage from "./ListingImage";
import { SketchPicker } from "react-color";
import AdvertisementBanner from "./AdvertisementBanner";
import { ButtonPrimary } from "../../styledComponents/styledButton";
const ticketOptions = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
];
const productTypes = [
  { label: "Ticket", value: "ticket" },
  { label: "Merchandise", value: "merchandise" },
  { label: "Service", value: "service" },
  { label: "Food and Beverage", value: "foodAndBeverage" },
];
const MobileTicket = () => {
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [checkedCustomize, setCheckedCustomize] = useState(true);

  const [color, setColor] = useState("#00D1FF");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  // Handle file change and read the file as a data URL
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setShowModal(true); // Show the modal for cropping
      };
      reader.readAsDataURL(file);
      // setIsFileCropped(false);
      setFileName(file.name);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setShowColorPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const coverImageFileRef = useRef<HTMLInputElement | null>(null);

  const [checked, setChecked] = useState(1);
  const handleFileInputClick = () => coverImageFileRef?.current?.click();
  const handleChange = (id: number) => {
    setChecked(id);
  };
  const handleChangeCustomize = () => {
    setCheckedCustomize((prev) => !prev);
  };
  return (
    <>
      <div className="d-flex flex-column gap-5 align-items-start">
        <div className="d-flex flex-column gap-1">
          <label className="fs-5 fw-500 text-black form-label">
            Choose Template
          </label>
          <p>Choose the template you like to apply to your tickets, </p>
        </div>
        <div className="row">
          {ticketOptions.map(({ id, label }) => (
            <div key={id} className="col-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <SwitchReact
                  checked={checked === id}
                  onChange={() => handleChange(id)}
                />
                <span
                  className={
                    checked === id
                      ? "text-primary fw-semibold"
                      : "text-gray fw-semibold"
                  }
                >
                  {label}
                </span>
              </div>
              <img
                src={Imagesdata("ticketMobile")}
                alt="ticket"
                style={{
                  border:
                    checked !== id ? "5px solid #949ba3" : "5px solid #ef000c",
                  borderRadius: "15px",
                  padding: "12px",
                  filter: checked !== id ? "grayscale(1)" : "none",
                }}
              />
            </div>
          ))}
        </div>
        <div className="d-flex flex-column gap-1">
          <label className="fs-5 fw-500 text-black form-label">
            Template Info
          </label>
          <p>Choose the template you like to apply to your tickets.</p>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <Form.Group>
              <FormLabelStyled className="d-flex align-items-center">
                Template Name
              </FormLabelStyled>
              <FormInputStyled
                type="text"
                placeholder="Give a name to your template"
                className="form-control"
                value=""
              />
            </Form.Group>
          </div>
          <div className="col-12 mb-4">
            <Form.Group>
              <FormLabelStyled className="d-flex align-items-center">
                Link Tickets
              </FormLabelStyled>
              <SelectDropDown
                options={productTypes}
                placeholder="Select Type"
                classNamePrefix="Select"
                className="mt-1"
              />
            </Form.Group>
          </div>
        </div>
        <div className="d-flex flex-column gap-1">
          <div className="d-flex align-items-center gap-3">
            <SwitchReact
              checked={checkedCustomize}
              onChange={handleChangeCustomize}
            />
            <label className="fs-5 fw-500 text-black form-label">
              Customize Template
            </label>
          </div>
          <p>
            In this section you can customize your ticket even future at an
            additional cost.
          </p>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <Form.Group>
              <FormLabelStyled>
                Background Color
                <CustomTooltip title="$ 1.00 per unit" />
              </FormLabelStyled>
              <FormDivStyled
                ref={colorPickerRef}
                className="form-control d-flex align-middle"
                onClick={() => setShowColorPicker(true)}
              >
                <div
                  className=""
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: color,
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <span className="d-inline-block ms-auto pe-3 pt-1">
                  <i className="bi bi-chevron-down"></i>
                </span>
                {showColorPicker && (
                  <div style={{ position: "absolute", zIndex: 100 }}>
                    <SketchPicker
                      color={color}
                      onChange={(updatedColor) => setColor(updatedColor.hex)}
                    />
                  </div>
                )}
              </FormDivStyled>
              <span>
                <strong>Charge : </strong>
                an additional fee of USD 1.00 per each ticket applies.
              </span>
            </Form.Group>
          </div>
          <div>
            <AdvertisementBanner />
            <span>
              <strong>Charge : </strong>
              an additional fee of USD 15.00 per each ticket applies.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <StyledInputDiv className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="addSubtitles"
                value="yes"
                id="addSubtitles"
              />
              <label
                htmlFor="addSubtitles"
                className="form-check-label ms-3"
                style={{
                  marginTop: "7px",
                  fontSize: "12px",
                }}
              >
                I understand all charges and confirm my acceptance of the
                charges related to this section.
              </label>
            </StyledInputDiv>
          </div>
          <div className="col-12 mb-4">
            <StyledInputDiv className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="addSubtitles"
                value="no"
                id="noSubtitles"
              />
              <label
                htmlFor="noSubtitles"
                className="form-check-label ms-3"
                style={{
                  marginTop: "7px",
                  fontSize: "12px",
                }}
              >
                By checking this box i agree to the
                <strong>Terms & Conditions</strong>
              </label>
            </StyledInputDiv>
          </div>
        </div>
        <ButtonPrimary
          type="submit"
          className="btn"
          style={{ minWidth: "118px" }}
        >
          Publish Design
        </ButtonPrimary>
      </div>
    </>
  );
};

export default MobileTicket;
