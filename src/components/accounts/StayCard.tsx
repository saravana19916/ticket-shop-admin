import React, { FC } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { DEMO_STAY_LISTINGS } from "../../data/listings";
import { StayDataType } from "../../data/types";
import StartRating from "./StartRating";
import BtnLikeIcon from "./BtnLikeIcon";
import GallerySlider from "./GallerySlider";
import { Imagesdata } from "../../commondata/commonimages";
import { Link } from "react-router-dom";

export interface StayCardProps {
  className?: string;
  data?: StayDataType;
  size?: "default" | "small";
}

const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const StayCard: FC<StayCardProps> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
}) => {
  const {
    galleryImgs,
    listingCategory,
    address,
    title,
    bedrooms,
    href,
    like,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount,
    id,
  } = data;

  return (
    <Card className={`stay-card ${size} ${className}`} w-35>
      <div className="position-relative">
        <GallerySlider
          uniqueID={`StayCard_${id}`}
          galleryImgs={galleryImgs.map((img) =>
            typeof img === "string" ? img : img.src
          )}
          href={href}
        />
        <BtnLikeIcon
          isLiked={like}
          className="position-absolute top-0 end-0 m-3"
        />
        {saleOff && (
          <Badge bg="danger" className="position-absolute top-0 start-0 m-3">
            Sale
          </Badge>
        )}
      </div>
      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          {isAds && (
            <Badge bg="success" className="me-2">
              ADS
            </Badge>
          )}
          <Card.Title className="mb-0">
            <Link to={href} className="text-decoration-none text-dark">
              {title}
            </Link>
          </Card.Title>
        </div>
        <Card.Text className="text-muted">
          {listingCategory.name} · {bedrooms} beds
        </Card.Text>
        <Card.Text className="text-muted small">
          <i className="bi bi-geo-alt"></i> {address}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">
            {price} <span className="text-muted">/night</span>
          </span>
          {!!reviewStart && (
            <StartRating reviewCount={reviewCount} point={reviewStart} />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StayCard;
