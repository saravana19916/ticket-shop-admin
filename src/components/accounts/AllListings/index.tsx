import { TabPanel } from "@headlessui/react";
import moment from "moment";
import React, { FC, useState, useEffect } from "react";
import { Card, Dropdown } from "react-bootstrap";
import { IListDetailsProps } from "..";
import ResponsiveTile from "../../styledComponents/tiles";
import { toast } from "react-toastify";
import { SaleOffBadge, SuccessBadge } from "../../styledComponents/badge";
import BtnLikeIcon from "../BtnLikeIcon";
import StartRating from "../StartRating";
import { Link } from "react-router-dom";
interface IAllListingProps {
  listDetailsData: IListDetailsProps[];
}

const index: FC<IAllListingProps> = ({ listDetailsData }) => {
  const _handleEdit = (shopData: IAllListingProps) => {
    sessionStorage.setItem("editShop", JSON.stringify(shopData));
  };

  const [cardWidth, setCardWidth] = useState("100%");

  useEffect(() => {
    const updateWidth = () => {
      setCardWidth(window.innerWidth >= 1400 ? "100%" : "100%");
    };
  
    updateWidth();
    window.addEventListener("resize", updateWidth);
    
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      <TabPanel>
        <div className="row" id="myListings">
          {listDetailsData?.map((l: IListDetailsProps, index: number) => (
            <div key={index} className="col-12 col-xl-6 col-xxl-3 mb-4 d-flex">
                <Card
                  className="overflow-hidden position-relative"
                  style={{
                    width: cardWidth,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="position-absolute d-flex justify-content-between mx-4 my-4">
                    <SaleOffBadge className="badge p-1">{l.type}</SaleOffBadge>
                  </div>

                  <div className="position-absolute end-0 d-flex justify-content-between mx-4 my-4">
                    <BtnLikeIcon isLiked={l.isLiked}></BtnLikeIcon>
                  </div>

                  <img
                    src={l.img}
                    className="card-img-top"
                    alt="..."
                    height={252}
                  ></img>
                  <Card.Body className="p-3 py-5">
                    <Card.Text className="text-muted">
                      {l.categoryName} · {l.bedCount} beds
                    </Card.Text>
                    <div className="d-flex align-items-center mb-2">
                      {l.isAds && (
                        <SuccessBadge className="me-2 py-0" style={{ fontSize: "10px" }}>
                          ADS
                        </SuccessBadge>
                      )}
                      <Card.Title className="mb-0">
                        <Link className="text-decoration-none fw-bold">
                          {l.title}
                        </Link>
                      </Card.Title>
                    </div>
                    <Card.Text className="text-muted small">
                      <i className="bi bi-geo-alt"></i> {l.address}
                    </Card.Text>

                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        <span className="fw-bold">${l.price}</span> <span className="text-muted">/night</span>
                      </span>
                      {!!l.reviewPoint && (
                        <StartRating reviewCount={l.reviewCount} point={l.reviewPoint} />
                      )}
                    </div>
                  </Card.Body>
                </Card>
            </div>
          ))}
        </div>
      </TabPanel>
    </>
  );
};

export default index;
