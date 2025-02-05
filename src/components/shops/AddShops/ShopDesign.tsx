import React, { FC } from "react";
import AddShopCard from "./AddShopCard";
import AddShopLogo from "./AddShopLogo";
import AddShopBanner from "./AddShopBanner";
import AddBackgroundColor from "./AddBackgroundColor";
import AddPrimaryColor from "./AddPrimaryColor";
import { Form } from "react-bootstrap";

interface IShopDesignProps {}
const ShopDesign: FC<IShopDesignProps> = () => {
  return (
    <>
      <div className="col-12 mb-5">
        <Form.Label className="fs-5 fw-500 text-black">Shop Design</Form.Label>
        <span className="d-block fs-12px fw-300">
          In this section you can add customized artworks and design elements
          for your shop.
        </span>
      </div>
      <div className="col-12 mb-3">
        <AddShopCard />
      </div>
      <div className="col-12 mb-3">
        <AddShopLogo />
      </div>
      <div className="col-12 mb-3">
        <AddShopBanner />
      </div>
      <div className="col-12 mb-3">
        <AddBackgroundColor />
      </div>
      <div className="col-12 mb-3">
        <AddPrimaryColor />
      </div>
    </>
  );
};

export default ShopDesign;
