import { PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";

const LocationGallery = () => {
  const [imagesList, setImagesList] = useState([
    "Image 1",
    "Image 2",
    "Image 3",
  ]);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [locationGalleryPictureName, setLocationGalleryPictureName] = useState<
    string | undefined
  >(undefined);
  const handleFileInputClick = () => {
    fileRef.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const fileName = event?.target?.files?.[0].name;
      setLocationGalleryPictureName(fileName);
    }
  };
  const _handleAdd = () => {
    setImagesList((prev) => {
      if (locationGalleryPictureName) {
        const newData = [...prev, locationGalleryPictureName];
        setLocationGalleryPictureName(undefined);
        toast.success("Image added successfully!");
        return newData;
      } else {
        toast.error("Please select image!");
        return prev;
      }
    });
  };
  const _handleRemove = (value: string) => {
    setImagesList((prev) => {
      const prevValues = [...prev];
      console.log(prev);
      console.log(value);

      const newData = prevValues.filter((l: string) => l != value);
      toast.success("Image removed successfully!");
      return newData || [];
    });
  };
  return (
    <>
      <div className="col-12 mb-5">
        <Form.Group className="border-dark">
          <Form.Label
            className="fs-5 fw-500 mb-3 text-black"
            style={{ color: "#ed003b" }}
          >
            Location Gallery
          </Form.Label>
          <span className="text-gray" style={{ fontSize: "14px" }}>
            Add photos of the venue and location in this section
          </span>
        </Form.Group>
      </div>
      <div className="col-12  col-lg-11  mb-5">
        <div className="row g-2">
          <div className="col-12 col-md-9 col-lg-7 ">
            <Form.Group>
              <InputGroup.Text
                style={{
                  borderColor: "#c0c0c0",
                  color: `${locationGalleryPictureName ? "#000" : "#969696"}`,
                  fontSize: `${locationGalleryPictureName ? "14px" : "12px"}`,
                  backgroundColor: "#fff",
                }}
                onClick={handleFileInputClick}
                className="p-3 fw-normal fs-6 ps-4 pe-6 rounded-pill"
              >
                {locationGalleryPictureName ||
                  "drag & drop images or choose from your folder"}
              </InputGroup.Text>
              <input
                type="file"
                ref={fileRef}
                accept="image/png, image/jpeg, image/jpg"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Form.Group>
          </div>
          <div className="col-lg-5 col-3">
            <button
              type="button"
              className="btn rounded-pill px-5 fw-600"
              style={{
                backgroundColor: "#ed003b",
                color: "#fff",
                paddingTop: ".62rem",
                paddingBottom: ".62rem",
              }}
              onClick={_handleAdd}
            >
              <PlusIcon className="h-5 w-5 me-3" />
              Add
            </button>
          </div>
          <span
            className="text-gray d-inline-block ms-3 mt-1"
            style={{ fontSize: "14px" }}
          >
            maximum size of 150kb . Image formats to be jpg or png .
          </span>
        </div>
      </div>
      <div className="col-lg-11 col-12 mb-5">
        <div className="row mx-3">
          {imagesList?.map((l: string) => (
            <>
              <div className="col-lg-7 col-9 px-0 d-flex justify-content-between align-items-center py-3 border-bottom">
                <span>{l}</span>
                <XCircleIcon
                  className="h-5 w-5 text-gray"
                  onClick={() => _handleRemove(l)}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocationGallery;
