import React, { FC, useEffect, useRef, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import SubmitAndPreviewButtons from "../../../shared/SubmitAndPreviewButtons";
import "react-toastify/dist/ReactToastify.css";
import AddMainCard from "./AddMainCard";
import AddBillBoard from "./AddBillBoard";
import AddGallery from "./AddGallery";
import AddFloorPlan from "./AddFloorPlan";
import AddCreditLogo from "./AddCreditLogo";
interface IListingArtWork {}
type IFileTypes =
  | "mainCard"
  | "billBoard"
  | "gallery"
  | "floorPlan"
  | "creditLogos";
interface IFileNameType {
  mainCard: undefined | string;
  billBoard: undefined | string;
  gallery: undefined | string;
  floorPlan: undefined | string;
  creditLogos: undefined | string;
}
const ListingArtwork: FC<IListingArtWork> = ({}) => {
  const mainCardFileRef = useRef<HTMLInputElement | null>(null);
  const billBoardFileRef = useRef<HTMLInputElement | null>(null);
  const galleryFileRef = useRef<HTMLInputElement | null>(null);
  const creditLogoRef = useRef<HTMLInputElement | null>(null);
  const floorPlanRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileNames] = useState<IFileNameType>({
    mainCard: undefined,
    billBoard: undefined,
    gallery: undefined,
    floorPlan: undefined,
    creditLogos: undefined,
  });
  const handleFileInputClick = (type: IFileTypes) => {
    switch (type) {
      case "mainCard":
        mainCardFileRef?.current?.click();
        return;
      case "billBoard":
        billBoardFileRef?.current?.click();
        return;
      case "gallery":
        galleryFileRef?.current?.click();
        return;
      case "floorPlan":
        floorPlanRef?.current?.click();
        return;
      case "creditLogos":
        creditLogoRef?.current?.click();
        return;
      default:
        return;
    }
  };
  const handleFileChange = (
    type: IFileTypes,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const fileName = event?.target?.files?.[0].name;
      setFileNames((prev) => {
        return {
          ...prev,
          [type]: fileName,
        };
      });
    }
  };
  useEffect(() => {
    console.log(fileName);
  }, [fileName]);
  return (
    <>
      <div className="col-12 mb-5">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black">
            Listing Artwork
          </Form.Label>
        </Form.Group>
      </div>
      <div className="col-12 mb-6">
        <AddMainCard />
      </div>
      <div className="col-12 mb-6">
        <AddBillBoard />
      </div>
      <div className="col-12 mb-6">
        <AddGallery />
      </div>
      <div className="col-12 mb-6">
        <AddFloorPlan />
      </div>
      <div className="col-12 mb-6">
        <AddCreditLogo />
      </div>
    </>
  );
};

export default ListingArtwork;
