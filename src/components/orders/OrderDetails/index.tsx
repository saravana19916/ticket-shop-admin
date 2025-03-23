import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Table,
  Dropdown,
  Modal,
} from "react-bootstrap";
import { FaDownload, FaLink, FaBan, FaInfoCircle } from "react-icons/fa";
import {
  FaEnvelope,
  FaCheckCircle,
  FaStar,
  FaDollarSign,
  FaFingerprint,
  FaEllipsisH,
} from "react-icons/fa";
import "./OrderDetails.css";
import { ButtonPrimaryLight } from "../../styledComponents/styledButton";
import { SuccessBadge } from "../../styledComponents/badge";
import { useNavigate } from "react-router-dom";
import ResendOrderModal from "../ResendOrderModal";
import { ChevronLeft } from "react-feather";
import CustomDropdownMenu from "../../shared/CustomDropdownMenu";
import PaymentCompletedModal from "./PaymentCompletedModal";
export type IOrderDetailsModalType =
  | "resendEmail"
  | "paymentCompleted"
  | "paymentStarted";
interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  isActive?: boolean;
  hideLine?: boolean;
  onClick?: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  title,
  date,
  isActive,
  hideLine,
  onClick,
}) => {
  return (
    <div className="d-flex position-relative mb-6">
      <div className="timeline-icon">{icon}</div>
      {!hideLine && <div className="timeline-line"></div>}
      <div className="ms-4 mb-5">
        <span className="fs-6">
          {title}{" "}
          {isActive && (
            <span
              className="text-primary fs-12px custom-more-text cursor-pointer d-inline-block ms-1"
              onClick={onClick}
            >
              more
            </span>
          )}
        </span>
        <p className="text-muted fs-12px mb-0">{date}</p>
      </div>
    </div>
  );
};

const OrderDetails = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<IOrderDetailsModalType | null>(
    null
  );

  const handleShow = (modalType: IOrderDetailsModalType) => {
    setActiveModal(modalType);
  };

  const handleClose = () => {
    setActiveModal(null);
  };

  const handleBack = () => {
    navigate(`${import.meta.env.BASE_URL}orders`);
  };

  return (
    <>
      <Row className="mt-8 mb-7">
        <Col md={1} className="mt-1">
          <ButtonPrimaryLight className="btn p-4" onClick={handleBack}>
            <ChevronLeft />
          </ButtonPrimaryLight>
        </Col>
        <Col md={11}>
          <div className="mb-5 d-flex align-items-center">
            <span className="fs-20px">Order</span>
            <span className="fw-600 fs-20px d-inline-block ms-2">
              7237614364
            </span>
            <SuccessBadge className="ms-3 mb-1">Completed</SuccessBadge>
          </div>
          <div className="mb-5">
            <span>
              Created on Monday 19 December 2022 / Last change: (Tuesday 07
              February 2023)
            </span>
          </div>
          <div className="d-flex flex-column flex-md-row gap-3">
            <ButtonPrimaryLight
              className="btn"
              onClick={() => handleShow("resendEmail")}
            >
              Resend order
            </ButtonPrimaryLight>

            <ButtonPrimaryLight className="btn" disabled>
              <FaFingerprint className="me-2" /> Reset personalization
            </ButtonPrimaryLight>
            <CustomDropdownMenu
              dropDownType="ButtonPrimaryLight"
              menuItems={[
                {
                  onClick: () => {},
                  icon: <FaDownload className="me-2 my-1" />,
                  itemName: "Download order",
                },
                {
                  onClick: () => {},
                  icon: <FaLink className="me-2 my-1" />,
                  itemName: "Copy link",
                },
                {
                  onClick: () => {},
                  icon: <FaBan className="me-2 my-1" />,
                  itemName: "Cancel order",
                },
              ]}
              dropdownName={
                <>
                  <span>More Options</span>
                </>
              }
            />
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={8}>
          <Card className="mt-3 p-5 border border-gray-300 shadow-md">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <h3 className="fs-16px fw-600 mb-5">Contact</h3>
                <span className="text-primary fw-semibold cursor-pointer">
                  more
                </span>
              </div>
              <Row className="mt-2 ms-2 g-3">
                <Col md={6}>
                  <p className="mb-1">Email</p>
                  <p className="fw-semibold">chidchanok_14844@hotmail.com</p>
                </Col>
                <Col md={6}>
                  <p className="mb-1">Mobile number</p>
                  <p className="fw-semibold">+97433650253</p>
                </Col>
                <Col md={6}>
                  <p className="mb-1">First name</p>
                  <p className="fw-semibold">Chidchanok</p>
                </Col>
                <Col md={6}>
                  <p className="mb-1">Last name</p>
                  <p className="fw-semibold">Jindamaneephan</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mt-3 p-5 border border-gray-300 shadow-md">
            <Card.Body>
              <h3 className="fs-16px fw-600 mb-5">Order of 1 ticket</h3>
              <Row className="align-items-center">
                <Col md={8} xs={12}>
                  <div className="d-flex align-items-center">
                    <i
                      className="bi bi-ticket-perforated me-4"
                      style={{ fontSize: "36px" }}
                    ></i>
                    <div>
                      <strong>Standard Ticket +21</strong>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "0.875rem" }}
                      >
                        5PK8B1Q6HL - Chidchanok
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4} xs={12}>
                  <Row>
                    <Col md={8} xs={8}>
                      <p className="mb-0 fw-bold">$5.00</p>
                      <p
                        className="text-muted"
                        style={{ fontSize: "0.875rem" }}
                      >
                        $0.00 + $5.00 fees
                      </p>
                    </Col>
                    <Col md={4} xs={4}>
                      <CustomDropdownMenu
                        dropDownType="ButtonPrimaryLight"
                        menuItems={[
                          {
                            onClick: () => {},
                            itemName: "Download Ticket",
                          },
                          {
                            onClick: () => {},
                            itemName: "Request Refund",
                          },
                        ]}
                        dropdownName={
                          <>
                            <FaEllipsisH />
                          </>
                        }
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <h3 className="mt-5 fs-6 fw-600">Additional details</h3>
              <Table>
                <tbody>
                  <tr>
                    <td className="text-start">$ Discount</td>
                    <td className="text-center text-danger">-$49.00</td>
                  </tr>
                  <tr>
                    <td className="text-start border-0">
                      <strong>Total</strong>
                    </td>
                    <td className="text-center border-0">
                      <strong>$5.00</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="mt-3 border border-gray-300 shadow-md"
            style={{ fontSize: "12px", padding: "42px" }}
          >
            <h3 className="fs-16px fw-600 mb-6">History</h3>
            <TimelineItem
              icon={<FaEnvelope />}
              title="E-mail sent"
              date="February 7, 2023 - 12:18:17 (AST)"
              isActive={false}
              hideLine={false}
            />
            <TimelineItem
              icon={<FaDollarSign />}
              title="Payment completed"
              date="February 7, 2023 - 12:18:16 (AST)"
              isActive={true}
              hideLine={false}
              onClick={() => handleShow("paymentCompleted")}
            />
            <TimelineItem
              icon={<FaCheckCircle />}
              title="Order completed"
              date="February 7, 2023 - 12:18:16 (AST)"
              isActive={false}
              hideLine={false}
            />
            <TimelineItem
              icon={<FaDollarSign />}
              title="Payment started"
              date="December 19, 2022 - 22:21:43 (AST)"
              isActive={true}
              hideLine={false}
              onClick={() => handleShow("paymentStarted")}
            />
            <TimelineItem
              icon={<FaStar />}
              title="Order started"
              date="December 19, 2022 - 22:18:42 (AST)"
              isActive={false}
              hideLine={true}
            />
          </Card>
        </Col>
      </Row>
      {/* Resend Email Modal */}
      <ResendOrderModal
        handleClose={handleClose}
        show={activeModal === "resendEmail"}
      />
      <PaymentCompletedModal
        handleClose={handleClose}
        activeModal={activeModal}
      />
      {/* Payment Completed Modal */}
    </>
  );
};

export default OrderDetails;
