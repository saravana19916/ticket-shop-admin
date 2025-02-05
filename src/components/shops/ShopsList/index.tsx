import React, { FC, useState } from "react";
import { TabPanel } from "@headlessui/react";
import { Card } from "react-bootstrap";
import moment from "moment";
import { IShopDetailsProps } from "../../../commondata/Shops/shopsList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IAddListingShopProps } from "../../listing/AddListing/AddShop/type";
import { LandingPageCardHeader } from "../../styledComponents/LandingPage";
import { Link } from "react-router-dom";
import ResponsiveTile from "../../styledComponents/tiles";

interface IShopsListProps {
  shopsListData: IAddListingShopProps[];
}
const index: FC<IShopsListProps> = ({ shopsListData }) => {
  const _handleCopyLink = (id: string | number, link: string) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopiedLink(id);
        toast.success("Link copied successfully!");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        toast.error("Failed to copy link!");
      });
  };
  const _handleEdit = (shopData: IAddListingShopProps) => {
    sessionStorage.setItem("editShop", JSON.stringify(shopData));
  };
  const [copiedLink, setCopiedLink] = useState<undefined | number | string>(
    undefined
  );
  const _getAddress = (value: any[]) => {
    return value.filter((l) => l !== undefined).join(", ");
  };
  return (
    <>
      <TabPanel>
        <div className="row" id="myShopLandingList">
          {shopsListData?.map((l: IAddListingShopProps, index) => (
            <>
              <ResponsiveTile key={(index + 1) * Math.random()}>
                <Card
                  className="overflow-hidden position-relative"
                  style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
                >
                  <div className="position-absolute d-flex justify-content-between mx-4 my-4">
                    <span className="badge dark d-block p-2 px-3 rounded-pill bg-white text-black">
                      {l.shopInformation?.shopType}
                    </span>
                  </div>
                  {l.shopInformation?.shopType == "Digital" ||
                  l.shopInformation?.shopType == "Live" ? (
                    <>
                      <div className="position-absolute end-0 d-flex justify-content-between mx-4 my-4">
                        {copiedLink == l.id ? (
                          <>
                            <i
                              className="bi bi-check-circle-fill cursor-pointer fs-5 text-success"
                              onClick={() =>
                                _handleCopyLink(
                                  l.id,
                                  "https://ticketshop.tixbox.com/home"
                                )
                              }
                            ></i>
                            {/* <span className="badge badge-success-light p-1 border rounded-5 cursor-pointer d-flex align-items-center justify-content-center">
                              <i className="bi bi-check fs-6"></i>
                            </span> */}
                          </>
                        ) : (
                          <>
                            <span
                              className="badge text-bg-light p-1 border rounded-5 cursor-pointer d-flex align-items-center justify-content-center"
                              onClick={() =>
                                _handleCopyLink(
                                  l.id,
                                  "https://ticketshop.tixbox.com/home"
                                )
                              }
                            >
                              <i className="bi bi-link-45deg fs-6"></i>
                            </span>
                          </>
                        )}
                      </div>
                    </>
                  ) : null}

                  <img
                    src={l.img}
                    className="card-img-top"
                    alt="..."
                    height={252}
                  ></img>
                  <Card.Body className="p-3 py-5">
                    <div className="d-flex justify-content-between">
                      <div className="col-9">
                        <span className="fw-semibold d-line-block fs-10px">
                          {l.shopInformation?.shopCode}
                        </span>
                        <LandingPageCardHeader>
                          {l.shopInformation?.shopName}
                        </LandingPageCardHeader>
                        <span className="fs-10px">
                          {_getAddress([
                            l.shopInformation?.city,
                            l.shopInformation?.country,
                          ])}
                        </span>
                      </div>
                      <div className="col-3 d-flex flex-column gap-2 mt-2">
                        <button
                          type="button"
                          className={`btn rounded-pill p-1 text-capitalize fs-9px fw-600 ${
                            l.shopInformation?.status === "Offline"
                              ? "badge-red"
                              : l.shopInformation?.status === "Draft"
                              ? "badge-light-gray"
                              : "badge-light-green"
                          }`}
                        >
                          {l.shopInformation?.status}
                        </button>
                        <Link
                          to={`/edit-shop/${l.id}`}
                          onClick={() => _handleEdit(l)}
                          className="btn text-white rounded-pill p-1 fs-9px fw-600"
                          style={{ backgroundColor: "#000" }}
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </ResponsiveTile>
            </>
          ))}
        </div>
      </TabPanel>
    </>
  );
};

export default index;
