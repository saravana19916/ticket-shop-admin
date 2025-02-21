import React, { FC, useState } from "react";
import { TabPanel } from "@headlessui/react";
import { Card, Dropdown } from "react-bootstrap";
import moment from "moment";
import { IShopDetailsProps } from "../../../commondata/Shops/shopsList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IAddListingShopProps } from "../../listing/AddListing/AddShop/type";
import { LandingPageCardHeader } from "../../styledComponents/LandingPage";
import { Link } from "react-router-dom";
import ResponsiveTile from "../../styledComponents/tiles";
import {
  ActiveBadge,
  NotActiveBadge,
  WhiteBadge,
} from "../../styledComponents/badge";

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
                    <WhiteBadge className="badge p-2">
                      {l.shopInformation?.shopType}
                    </WhiteBadge>
                  </div>

                  <div className="position-absolute end-0 d-flex justify-content-between mx-4 my-4">
                    {l.shopInformation?.status === "Draft" ? (
                      <>
                        <NotActiveBadge className="badge p-2">
                          Not Active
                        </NotActiveBadge>
                      </>
                    ) : (
                      <>
                        <ActiveBadge className="badge p-2">Active</ActiveBadge>
                      </>
                    )}
                  </div>

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
                      <div className="col-3 d-flex flex-column gap-2 mt-2 align-items-end">
                        {/* {(l.shopInformation?.shopType === "Digital" ||
                          l.shopInformation?.shopType === "Live") && ( */}
                        <span className="position-absolute d-flex">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="link"
                              id="dropdown-basic"
                              className="text-black dark:text-white"
                              style={{
                                background: "none",
                                border: "none",
                                fontSize: "24px",
                                textDecoration: "none",
                              }}
                            >
                              ...
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() =>
                                  _handleCopyLink(
                                    l.id,
                                    "https://ticketshop.tixbox.com/home"
                                  )
                                }
                              >
                                {copiedLink === l.id
                                  ? "Link Copied!"
                                  : "Share Link"}
                              </Dropdown.Item>
                              <Dropdown.Item
                                as={Link}
                                to={`/edit-shop/${l.id}`}
                                onClick={() => _handleEdit(l)}
                              >
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item>Generate</Dropdown.Item>
                              <Dropdown.Item>Copy</Dropdown.Item>
                              {l.shopInformation?.status === "Draft" ? (
                                <>
                                  <Dropdown.Item>Activate</Dropdown.Item>
                                </>
                              ) : (
                                <>
                                  <Dropdown.Item>Deactivate</Dropdown.Item>
                                </>
                              )}
                            </Dropdown.Menu>
                          </Dropdown>
                        </span>
                        {/* )} */}
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
