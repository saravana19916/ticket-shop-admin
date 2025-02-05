import React, { FC, useRef, useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import SubmitAndPreviewButtons from "../../../shared/SubmitAndPreviewButtons";
import AddCoverImage from "./AddCoverImages";
import AddVideoLink from "./AddVideoLink";
interface IPromoVideos {}
const PromoVideos: FC<IPromoVideos> = ({}) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [coverPictureName, setCoverPictureName] = useState<string | undefined>(
    undefined
  );
  const handleFileInputClick = () => {
    fileRef.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const fileName = event?.target?.files?.[0].name;
      setCoverPictureName(fileName);
    }
  };
  return (
    <>
      <div className="col-12 mb-3">
        <Form.Group>
          <Form.Label className="fs-5 fw-500 text-black">
            Promo Videos
          </Form.Label>
        </Form.Group>
      </div>
      <div className="col-12 mb-6">
        <AddVideoLink />
      </div>
      <div className="col-12 mb-6">
        <AddCoverImage />
      </div>
    </>
  );
};

export default PromoVideos;
