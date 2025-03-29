import React, { Fragment, useState } from "react";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
import { Button, Card } from "react-bootstrap";
import Buttons from "../../bootstrap/buttons/buttons";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";
const index = () => {
  return (
    <>
      {/* <Buttons /> */}
      <div className="row mb-4">
        <BackBreadCrumb />
        <div className="col-12 mb-3 mt-3">
          <span className="fw-600 fs-2">Invoice Details</span>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-9">
          <Card>
            <Card.Header>
              <div className="d-flex align-items-center gap-3 w-100">
                <Card.Title as="h3">
                  SHOPPING INVOICE:{" "}
                  <span className="text-primary">#8140-2099</span>
                </Card.Title>
                <ButtonPrimary
                  type="submit"
                  className="btn ms-auto"
                  style={{ minWidth: "118px" }}
                >
                  Print <i className="fe fe-printer"></i>
                </ButtonPrimary>
                <ButtonSecondary
                  type="submit"
                  className="btn"
                  style={{ minWidth: "118px" }}
                >
                  Save As PDF <i className="bi bi-file-pdf"></i>
                </ButtonSecondary>
                {/* <Button className="btn btn-primary ms-auto">
                  Print <i className="fe fe-printer"></i>
                </Button> */}
                {/* <Button variant="info" className="btn">
                  Save As PDF <i className="bi bi-file-pdf"></i>
                </Button> */}
              </div>
            </Card.Header>
            <Card.Body>
              <div className="row gy-3">
                <div className="col-xl-12 mb-6">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <p className="text-muted mb-2"> Billing From: </p>
                      <p className="fw-bold mb-1"> SPRUKO TECHNOLOGIES </p>
                      <p className="mb-1 text-muted">Mig-1-11, Manroe street</p>
                      <p className="mb-1 text-muted">
                        Georgetown, Washington D.C, USA, 200071
                      </p>
                      <p className="mb-1 text-muted">
                        sprukotrust.sash@gmail.com
                      </p>
                      <p className="mb-1 text-muted"> (555) 555-1234 </p>
                      <p className="text-muted">
                        For more information check for
                        <a href="#" className="text-primary fw-semibold">
                          <u>GSTIN</u>
                        </a>
                        Details.
                      </p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ms-auto mt-sm-0 mt-3">
                      <p className="text-muted mb-2"> Billing To: </p>
                      <p className="fw-bold mb-1"> Json Taylor </p>
                      <p className="text-muted mb-1">
                        Lig-22-1, 20 Covington Place
                      </p>
                      <p className="text-muted mb-1">
                        New Castle, de, United States, 19320
                      </p>
                      <p className="text-muted mb-1">
                        jsontaylor2134@gmail.com
                      </p>
                      <p className="text-muted">+1 202-918-2132 </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <p className="fw-semibold text-muted mb-1">Invoice ID:</p>
                  <p className="fs-15 mb-1">#SPK120219890</p>
                </div>
                <div className="col-xl-3">
                  <p className="fw-semibold text-muted mb-1">Date Issued:</p>
                  <p className="fs-15 mb-1">
                    29, Nov 2022 -
                    <span className="text-muted fs-12"> 12:42PM</span>
                  </p>
                </div>
                <div className="col-xl-3">
                  <p className="fw-semibold text-muted mb-1">Due Date:</p>
                  <p className="fs-15 mb-1">29, Dec 2022</p>
                </div>
                <div className="col-xl-3">
                  <p className="fw-semibold text-muted mb-1">Due Amount:</p>
                  <p className="fs-16 mb-1 fw-semibold">$2,570.42</p>
                </div>
                <div className="col-xl-12 mt-6">
                  <div className="table-responsive">
                    <table className="table nowrap text-nowrap border mt-4">
                      <thead>
                        <tr>
                          <th>BRAND NAME</th>
                          <th>DESCRIPTION</th>
                          <th>QUANTITY</th>
                          <th>PRICE PER UNIT</th>
                          <th>TOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-start">
                            <div className="fw-semibold">
                              Dapzem &amp; Co (Sweatshirt)
                            </div>
                          </td>
                          <td className="text-start">
                            <div className="text-muted">
                              Branded hoodie ethnic style
                            </div>
                          </td>
                          <td className="product-quantity-container text-start">
                            2
                          </td>
                          <td className="text-start"> $60 </td>
                          <td className="text-start"> $120 </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            <div className="fw-semibold">
                              Denim Winjo (Jacket)
                            </div>
                          </td>
                          <td className="text-start">
                            <div className="text-muted">
                              Vintage pure leather Jacket
                            </div>
                          </td>
                          <td className="product-quantity-container text-start">
                            1
                          </td>
                          <td className="text-start"> $249 </td>
                          <td className="text-start"> $249 </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            <div className="fw-semibold">
                              Jimmy Lolfiger (Winter Coat)
                            </div>
                          </td>
                          <td className="text-start">
                            <div className="text-muted">
                              Unisex jacket for men &amp; women
                            </div>
                          </td>
                          <td className="product-quantity-container text-start">
                            1
                          </td>
                          <td className="text-start"> $499 </td>
                          <td className="text-start"> $499 </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            <div className="fw-semibold">
                              Blueberry &amp; Co
                            </div>
                          </td>
                          <td className="text-start">
                            <div className="text-muted">
                              Light colored sweater form blueberry
                            </div>
                          </td>
                          <td className="product-quantity-container text-start">
                            3
                          </td>
                          <td className="text-start"> $299 </td>
                          <td className="text-start"> $897 </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            <div className="fw-semibold">Denim Corporation</div>
                          </td>
                          <td className="text-start">
                            <div className="text-muted">
                              Flap pockets denim jackets for men
                            </div>
                          </td>
                          <td className="product-quantity-container text-start">
                            1
                          </td>
                          <td className="text-start"> $599 </td>
                          <td className="text-start"> $599 </td>
                        </tr>
                        <tr>
                          <td colSpan={3}></td>
                          <td colSpan={2}>
                            <table className="table table-sm text-nowrap mb-0 table-borderless bg-transparent">
                              <tbody>
                                <tr>
                                  <th className="text-start" scope="row">
                                    <p className="mb-0">Sub Total :</p>
                                  </th>
                                  <td className="text-start">
                                    <p className="mb-0 fw-semibold fs-15">
                                      $2,364
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <th className="text-start" scope="row">
                                    <p className="mb-0">Avail Discount :</p>
                                  </th>
                                  <td className="text-start">
                                    <p className="mb-0 fw-semibold fs-15">
                                      $29.98
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <th className="text-start" scope="row">
                                    <p className="mb-0">
                                      Coupon Discount
                                      <span className="text-success">
                                        (10%)
                                      </span>
                                      :
                                    </p>
                                  </th>
                                  <td className="text-start">
                                    <p className="mb-0 fw-semibold fs-15">
                                      $236.40
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <th className="text-start" scope="row">
                                    <p className="mb-0">
                                      Vat
                                      <span className="text-danger">(20%)</span>
                                      :
                                    </p>
                                  </th>
                                  <td className="text-start">
                                    <p className="mb-0 fw-semibold fs-15">
                                      $472.80
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <th className="text-start" scope="row">
                                    <p className="mb-0">Due Till Date :</p>
                                  </th>
                                  <td className="text-start">
                                    <p className="mb-0 fw-semibold fs-15">$0</p>
                                  </td>
                                </tr>
                                <tr>
                                  <th className="text-start" scope="row">
                                    <p className="mb-0 fs-14">Total :</p>
                                  </th>
                                  <td className="text-start">
                                    <p className="mb-0 fw-semibold fs-16 text-success">
                                      $2,570.42
                                    </p>
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
                      Note:{" "}
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
            </Card.Body>
            <Card.Footer className="text-end">
              <ButtonPrimary
                type="submit"
                className="btn"
                style={{ minWidth: "118px" }}
              >
                Download
                <i className="ri-download-2-line ms-1 align-middle"></i>
              </ButtonPrimary>
              {/* <Button variant="success">
                Download
                <i className="ri-download-2-line ms-1 align-middle"></i>
              </Button> */}
            </Card.Footer>
          </Card>
        </div>
        <div className="col-xl-3">
          <Card>
            <Card.Header
              style={{
                padding: "1.8rem",
              }}
            >
              <div className="d-flex align-items-center gap-3 w-100">
                <Card.Title as="h3">Mode Of Payment</Card.Title>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="row gy-3">
                <div className="col-xl-12">
                  <p className="fs-14 fw-semibold"> Credit/Debit Card </p>
                  <p>
                    <span className="fw-semibold text-muted fs-12">
                      Name On Card:{" "}
                    </span>
                    Json Taylor
                  </p>
                  <p>
                    <span className="fw-semibold text-muted fs-12">
                      Card Number:{" "}
                    </span>
                    1234 5678 9087 XXXX
                  </p>
                  <p>
                    <span className="fw-semibold text-muted fs-12">
                      Total Amount:{" "}
                    </span>
                    <span className="text-success fw-semibold fs-14">
                      $2570.42
                    </span>
                  </p>
                  <p>
                    <span className="fw-semibold text-muted fs-12">
                      Due Date:{" "}
                    </span>
                    29,Dec 2022 -
                    <span className="text-danger fs-12 fw-semibold">
                      30 days due
                    </span>
                  </p>
                  <p>
                    <span className="fw-semibold text-muted fs-12 d-flex align-items-center">
                      Invoice Status:&nbsp;
                      <span className="badge bg-warning-transparent text-dark">
                        Pending
                      </span>
                    </span>
                  </p>
                  <div className="alert alert-success" role="alert">
                    Please Make sure to pay the invoice bill within 30 days.
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default index;
