import React, { FC } from "react";
import { Form } from "react-bootstrap";
import ListingArtwork from "./ListingArtwork";
import PromoVideos from "./PromoVideos";
import CreativeGuidelines from "./CreativeGuidelines";
import {
  creativeGuideLinesListingArtwork,
  creativeGuideLinesPromoVideos,
} from "../../../../commondata/materialMarketing";
interface IAddMarketingMaterialProps {}
const index: FC<IAddMarketingMaterialProps> = ({}) => {
  const isSeparateUrl =
    window.location?.pathname === "/add-marketing-material" ||
    window.location?.pathname.startsWith("/edit-marketing-material/");
  return (
    <>
      <div
        className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 ${
          isSeparateUrl ? "mt-7" : ""
        }`}
      >
        <div className="card border p-4 rounded-16px">
          <div className="p-0 p-md-5">
            <div className="row">
              <div className="col-12 mb-3">
                <p className="fw-600 fs-26px text-black mb-3">
                  Marketing Material
                </p>
              </div>
              <div className="col-12 mb-3">
                <div className="row">
                  <ListingArtwork />
                </div>
              </div>
              <div className="col-12 mb-5">
                <div className="row">
                  <CreativeGuidelines
                    guideLines={creativeGuideLinesListingArtwork}
                  />
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="row">
                  <PromoVideos />
                </div>
              </div>
              <div className="col-12 mb-7">
                <div className="row">
                  <CreativeGuidelines
                    guideLines={creativeGuideLinesPromoVideos}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
