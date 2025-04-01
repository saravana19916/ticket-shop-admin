import React, { FC, Fragment, useEffect, useState } from "react";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
import { Imagesdata } from "../../../commondata/commonimages";
import Select from "react-select";
// @ts-ignore
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Form,
  InputGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
interface IProps {}
const index: FC<IProps> = () => {
  const customStyles = {
    singleValue: (provided: any) => ({
      ...provided,
      color: "#4d5875",
      fontWeight: "400",
      // fontSize: "14px",
      fontSize: "0.875rem",
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "#777",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      fontSize: "0.875rem",
      // padding: "3px",
      // paddingLeft: "14px",
      borderRadius: "7px",
      borderColor: state.isFocused ? "#fec9da80" : "#e5e7eb",
      // outline: state.isFocused ? "1px solid #fec9da80" : "none",
      boxShadow: "null",
      // "&:focus": {
      //   borderColor: "#fec9da80",
      //   outline: "1px solid #fec9da80",
      // },
      // "&:focus-within": {
      //   borderColor: "#fec9da80",
      //   outline: "1px solid #fec9da80",
      // },
      "&:hover": {
        border: "1px solid #e9edf4",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: "8px",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      color: "#000",
      fontWeight: "500",
      fontSize: "18px",
      margin: "0px",
      padding: "0px",
      backgroundColor: "",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#ED003B" : "transparent",
      color: state.isSelected ? "#fff" : provided.color,
      cursor: "pointer",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: state.isSelected ? "#ED003B" : "#fec9da80",
      },
    }),
  };

  const options = [
    { value: "Lacoste", label: "BHD - (Bahraini Dinar)" },
    { value: "Spykar", label: "CHF - (Swiss Franc)" },
    { value: "Puma", label: "KWD - (Kuwaiti Dinar)" },
    { value: "Armani", label: "USD - (United States Dollar)" },
  ];

  const [payMode, setPayMode] = useState("upi");
  const handleChangeMode = (pay: string) => {
    setPayMode(pay);
  };
  return (
    <>
      <div className="row mb-4">
        <BackBreadCrumb />
        <div className="col-12 mb-3 mt-3">
          <span className="fw-600 fs-2">Create Invoice</span>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-9">
          <div className="card custom-card">
            <div className="card-header d-md-flex d-block">
              <div className="h5 mb-0 d-sm-flex d-block align-items-center">
                <div>
                  <img className=" w-5 h-5" src={Imagesdata("Favicon")} />
                </div>
                <div className="ms-sm-2 ms-0 mt-sm-0 mt-2">
                  <input
                    type="text"
                    className="form-control form-control-light form-control-sm"
                    placeholder="Invoice Title"
                    value="INV TITLE"
                  />
                </div>
                <div className="mx-2">:</div>
                <div className="mt-sm-0 mt-2">
                  <input
                    type="text"
                    className="form-control form-control-light form-control-sm"
                    placeholder="Invoice ID"
                    value="INV ID"
                  />
                </div>
              </div>
              <div className="ms-auto mt-md-0 mt-2">
                <button className="btn btn-sm btn-primary me-2">
                  Save As PDF
                  <i className="ri-file-pdf-line ms-1 align-middle d-inline-block"></i>
                </button>
                <button className="btn btn-sm btn-icon btn-secondary-light me-2">
                  <i className="bi bi-plus-lg"></i>
                </button>
                <button className="btn btn-sm btn-icon btn-success-light me-2">
                  <i className="bi bi-download"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row gy-3">
                <div className="col-xl-12">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <p className="dw-semibold mb-2"> Billing From : </p>
                      <div className="row gy-2">
                        <div className="col-xl-12">
                          <input
                            type="text"
                            className="form-control form-control-light"
                            id="Company-Name"
                            placeholder="Company Name"
                            value="SPRUKO TECHNOLOGIES"
                          />
                        </div>
                        <div className="col-xl-12">
                          <textarea
                            className="form-control form-control-light"
                            id="company-address"
                            placeholder="Enter Address"
                            rows={3}
                          ></textarea>
                        </div>
                        <div className="col-xl-12">
                          <input
                            type="text"
                            className="form-control form-control-light"
                            id="company-mail"
                            placeholder="Company Email"
                            value=""
                          />
                        </div>
                        <div className="col-xl-12">
                          <input
                            type="text"
                            className="form-control form-control-light"
                            id="company-phone"
                            placeholder="Phone Number"
                            value=""
                          />
                        </div>
                        <div className="col-xl-12">
                          <textarea
                            className="form-control form-control-light"
                            id="invoice-subject"
                            placeholder="Subject"
                            rows={4}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ms-auto mt-sm-0 mt-3">
                      <p className="dw-semibold mb-2"> Billing To : </p>
                      <div className="row gy-2">
                        <div className="col-xl-12">
                          <input
                            type="text"
                            className="form-control form-control-light"
                            id="customer-Name"
                            placeholder="Customer Name"
                            value="Json Taylor"
                          />
                        </div>
                        <div className="col-xl-12">
                          <textarea
                            className="form-control form-control-light"
                            id="customer-address"
                            placeholder="Enter Address"
                            rows={3}
                          ></textarea>
                        </div>
                        <div className="col-xl-12">
                          <input
                            type="text"
                            className="form-control form-control-light"
                            id="customer-mail"
                            placeholder="Customer Email"
                            value=""
                          />
                        </div>
                        <div className="col-xl-12">
                          <input
                            type="text"
                            className="form-control form-control-light"
                            id="customer-phone"
                            placeholder="Phone Number"
                            value=""
                          />
                        </div>
                        <div className="col-xl-12">
                          <input
                            type="text"
                            className="form-control form-control-light"
                            id="zip-code"
                            placeholder="Zip Code"
                            value=""
                          />
                        </div>
                        <div className="col-xl-12 choices-control">
                          <p className="dw-semibold mb-2 mt-2"> Currency : </p>
                          {/* <Select options={options} /> */}
                          <Select
                            options={options}
                            placeholder="Select Currency"
                            classNamePrefix="Select"
                            styles={customStyles}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <label htmlFor="invoice-number" className="form-label">
                    Invoice ID
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-light"
                    id="invoice-number"
                    placeholder="Inv No"
                    value="#SPK120219890"
                  />
                </div>
                <div className="col-xl-3">
                  <label htmlFor="invoice-date-issued" className="form-label">
                    Date Issued
                  </label>
                  <Flatpickr
                    className="form-control form-control-light flatpickr-input"
                    id="invoice-date-issued"
                    placeholder="Choose date"
                  />
                </div>
                <div className="col-xl-3">
                  <label htmlFor="invoice-date-due" className="form-label">
                    Due Date
                  </label>
                  <Flatpickr
                    className="form-control form-control-light flatpickr-input"
                    id="invoice-date-due"
                    placeholder="Choose date"
                  />
                </div>
                <div className="col-xl-3">
                  <label htmlFor="invoice-due-amount" className="form-label">
                    Due Amount
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-light"
                    id="invoice-due-amount"
                    placeholder="Enter Amount"
                    value="$12,983.78"
                  />
                </div>

                <div className="col-xl-12">
                  <div className="table-responsive">
                    <table className="table nowrap text-nowrap border mt-3">
                      <thead>
                        <tr>
                          <th>PRODUCT NAME</th>
                          <th>DESCRIPTION</th>
                          <th>QUANTITY</th>
                          <th>PRICE PER UNIT</th>
                          <th>TOTAL</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-light"
                              placeholder="Enter Product Name"
                            />
                          </td>
                          <td>
                            <textarea
                              rows={1}
                              className="form-control form-control-light"
                              placeholder="Enter Description"
                            ></textarea>
                          </td>
                          <td>
                            <InputGroup size="sm">
                              <Button>
                                <i className="ri-subtract-line"></i>
                              </Button>
                              <Form.Control type="number" />
                              <Button>
                                <i className="ri-add-line"></i>
                              </Button>
                            </InputGroup>
                          </td>
                          <td>
                            <input
                              className="form-control form-control-light"
                              placeholder=""
                              type="text"
                              value="$60.00"
                            />
                          </td>
                          <td>
                            <input
                              className="form-control form-control-light"
                              placeholder=""
                              type="text"
                              value="$120.00"
                            />
                          </td>
                          <td>
                            <button className="btn btn-sm btn-icon btn-danger-light">
                              <i className="ri-delete-bin-5-line"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-light"
                              placeholder="Enter Product Name"
                            />
                          </td>
                          <td>
                            <textarea
                              rows={1}
                              className="form-control form-control-light"
                              placeholder="Enter Description"
                            ></textarea>
                          </td>
                          <td>
                            <InputGroup size="sm">
                              <Button>
                                <i className="ri-subtract-line"></i>
                              </Button>
                              <Form.Control type="number" />
                              <Button>
                                <i className="ri-add-line"></i>
                              </Button>
                            </InputGroup>
                          </td>
                          <td>
                            <input
                              className="form-control form-control-light"
                              placeholder="Enter Amount"
                              type="text"
                            />
                          </td>
                          <td>
                            <input
                              className="form-control form-control-light"
                              placeholder="Enter Amount"
                              type="text"
                            />
                          </td>
                          <td>
                            <button className="btn btn-sm btn-icon btn-danger-light">
                              <i className="ri-delete-bin-5-line"></i>
                            </button>
                          </td>
                        </tr>
                        {/* <tr>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-light"
                              placeholder="Enter Product Name"
                            />
                          </td>
                          <td>
                            <textarea
                              rows={1}
                              className="form-control form-control-light"
                              placeholder="Enter Description"
                            ></textarea>
                          </td>
                          <td className="invoice-quantity-container">
                            <div className="input-group border rounded flex-nowrap">
                              <button className="btn btn-icon btn-primary input-group-text flex-fill product-quantity-minus">
                                <i className="ri-subtract-line"></i>
                              </button>
                              <input
                                type="text"
                                className="form-control form-control-sm border-0 text-center w-100"
                                aria-label="quantity"
                                id="product-quantity4"
                                value="1"
                              />
                              <button className="btn btn-icon btn-primary input-group-text flex-fill product-quantity-plus">
                                <i className="ri-add-line"></i>
                              </button>
                            </div>
                          </td>
                          <td>
                            <input
                              className="form-control form-control-light"
                              placeholder=""
                              type="text"
                              value="$60.00"
                            />
                          </td>
                          <td>
                            <input
                              className="form-control form-control-light"
                              placeholder=""
                              type="text"
                              value="$120.00"
                            />
                          </td>
                          <td>
                            <button className="btn btn-sm btn-icon btn-danger-light">
                              <i className="ri-delete-bin-5-line"></i>
                            </button>
                          </td>
                        </tr> */}
                        {/* <tr>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-light"
                              placeholder="Enter Product Name"
                            />
                          </td>
                          <td>
                            <textarea
                              rows={1}
                              className="form-control form-control-light"
                              placeholder="Enter Description"
                            ></textarea>
                          </td>
                          <td className="invoice-quantity-container">
                            <div className="input-group border rounded flex-nowrap">
                              <button className="btn btn-icon btn-primary input-group-text flex-fill product-quantity-minus">
                                <i className="ri-subtract-line"></i>
                              </button>
                              <input
                                type="text"
                                className="form-control form-control-sm border-0 text-center w-100"
                                aria-label="quantity"
                                id="product-quantity5"
                                value="1"
                              />
                              <button className="btn btn-icon btn-primary input-group-text flex-fill product-quantity-plus">
                                <i className="ri-add-line"></i>
                              </button>
                            </div>
                          </td>
                          <td>
                            <input
                              className="form-control form-control-light"
                              placeholder="Enter Amount"
                              type="text"
                            />
                          </td>
                          <td>
                            <input
                              className="form-control form-control-light"
                              placeholder="Enter Amount"
                              type="text"
                            />
                          </td>
                          <td>
                            <button className="btn btn-sm btn-icon btn-danger-light">
                              <i className="ri-delete-bin-5-line"></i>
                            </button>
                          </td>
                        </tr> */}
                        <tr>
                          <td className="border-bottom-0">
                            <a
                              className="btn btn-light"
                              href="javascript:void(0);"
                            >
                              <i className="bi bi-plus-lg"></i> Add Product
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4}></td>
                          <td colSpan={2}>
                            <table className="table table-sm text-nowrap mb-0 table-borderless text-start">
                              <tbody>
                                <tr>
                                  <th scope="row">
                                    <div className="fw-semibold">
                                      Sub Total :
                                    </div>
                                  </th>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control form-control-light invoice-amount-input"
                                      placeholder="Enter Amount"
                                      value="$1209.89"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    <div className="fw-semibold">
                                      Avail Discount :
                                    </div>
                                  </th>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control form-control-light invoice-amount-input"
                                      placeholder="Enter Amount"
                                      value="$29.98"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    <div className="fw-semibold">
                                      Coupon Discount
                                      <span className="text-success">
                                        (10%)
                                      </span>
                                      :
                                    </div>
                                  </th>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control form-control-light invoice-amount-input"
                                      placeholder="Enter Amount"
                                      value="$129.00"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    <div className="fw-semibold">
                                      Vat
                                      <span className="text-danger">(20%)</span>
                                      :
                                    </div>
                                  </th>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control form-control-light invoice-amount-input"
                                      placeholder="Enter Amount"
                                      value="$258.00"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    <div className="fw-semibold">
                                      Due Till Date :
                                    </div>
                                  </th>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control form-control-light invoice-amount-input"
                                      placeholder="Enter Amount"
                                      value="$0.00"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    <div className="fs-14 fw-semibold">
                                      Total :
                                    </div>
                                  </th>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control form-control-light invoice-amount-input"
                                      placeholder="Enter Amount"
                                      value="$1,071.89"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div>
                    <label htmlFor="invoice-note" className="form-label">
                      Note:
                    </label>
                    <textarea
                      className="form-control form-control-light"
                      id="invoice-note"
                      rows={3}
                    >
                      Once the invoice has been verified by the accounts payable
                      team and recorded, the only task left is to send it for
                      approval before releasing the payment
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer text-end d-sm-flex ">
              <button type="button" className="btn btn-light me-1 mt-3 mt-sm-0">
                <i className="ri-eye-line me-1 align-middle d-inline-block"></i>
                Preview
              </button>
              <button type="button" className="btn btn-primary mt-3 mt-sm-0">
                Send Invoice
                <i className="ri-send-plane-2-line ms-1 align-middle d-inline-block"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title"> Mode Of Payment </div>
            </div>
            <div className="card-body">
              <div className="row gy-3">
                <div className="col-xl-12">
                  <ButtonGroup size="sm">
                    <Button
                      onClick={() => setPayMode("upi")}
                      variant={payMode == "card" ? "light" : "primary"}
                    >
                      UPI
                    </Button>
                    <Button
                      onClick={() => setPayMode("card")}
                      variant={payMode == "upi" ? "light" : "primary"}
                    >
                      Credit/Debit Card
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="col-xl-12">
                  <input
                    type="text"
                    className="form-control form-control-light"
                    placeholder="Card Holder Name"
                  />
                </div>
                <div className="col-xl-12">
                  <input
                    type="text"
                    className="form-control form-control-light"
                    id="invoice-payment-cardname"
                    placeholder="Card Number"
                    value="1234 5678 9087 XXXX"
                  />
                  <label
                    htmlFor="invoice-payment-cardname"
                    className="form-label mb-0"
                  >
                    <a className="text-danger fs-11" href="javascript:void(0);">
                      Enter valid card number*
                    </a>
                  </label>
                </div>
                <div className="col-xl-12">
                  <input
                    type="text"
                    className="form-control form-control-light mb-2"
                    placeholder="Enter OTP"
                  />
                </div>
                <div className="col-xl-12">
                  <div className="alert alert-success" role="alert">
                    Please Make sure to pay the invoice bill within 30 days.
                  </div>
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
