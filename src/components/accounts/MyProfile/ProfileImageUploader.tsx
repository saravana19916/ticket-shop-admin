import React, { useState } from "react";
import { Image, Form } from "react-bootstrap";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const UploadLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background: #000;
  position: relative;

  &:hover .overlay {
    opacity: 1;
  }
`;

const HiddenInput = styled(Form.Control)`
  display: none;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  transition: opacity 0.3s;

  ${UploadLabel}:hover & {
    opacity: 0.4;
  }
`;

const ProfileImageUploader: React.FC = () => {
  const [image, setImage] = useState<string>(
    "https://d3l9uv26e4tbmt.cloudfront.net/images/users/USER_444529165_506745241848533_2648191288150041624_n_6655254885.jpg"
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileWrapper>
      <UploadLabel htmlFor="upload-image">
        <HiddenInput
          id="upload-image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <Overlay className="overlay">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <small>Change Image</small>
        </Overlay>

        <StyledImage src={image} alt="Profile" />
      </UploadLabel>
    </ProfileWrapper>
  );
};

export default ProfileImageUploader;
