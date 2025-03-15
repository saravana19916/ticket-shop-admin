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
  FaTicketAlt,
  FaEllipsisH,
  FaEnvelope,
  FaCheckCircle,
  FaClock,
  FaStar,
  FaDollarSign,
  FaFingerprint,
} from "react-icons/fa";
import "./OrderDetails.css";
import { ButtonPrimaryLight } from "../../styledComponents/styledButton";
import { SuccessBadge } from "../../styledComponents/badge";
import { useNavigate } from "react-router-dom";

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
    <div className="d-flex position-relative mb-4" style={{ fontSize: "12px" }}>
      <div className="timeline-icon">{icon}</div>
      {!hideLine && <div className="timeline-line"></div>}
      <div className="ms-3 mb-5">
        <h4 style={{ fontSize: "12px" }}>
          {title}{" "}
          {isActive && (
            <span
              className="text-primary small custom-more-text"
              onClick={onClick}
            >
              more
            </span>
          )}
        </h4>
        <p className="text-muted small mb-0">{date}</p>
      </div>
    </div>
  );
};

const OrderDetails = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleShow = (modalType: string) => {
    setActiveModal(modalType);
  };

  const handleClose = () => {
    setActiveModal(null);
  };

  const handleBack = () => {
    navigate(`${import.meta.env.BASE_URL}orders`);
  };

  return (
    <Row className="mt-5">
      <Row className="mt-5" style={{ fontSize: "12px" }}>
        <Col md={12}>
          <h4>
            Order <strong style={{ fontSize: "16px", fontWeight: 600 }}>7237614364</strong>{" "}
            <SuccessBadge className="ms-3">Completed</SuccessBadge>
          </h4>
          <p>
            Created on Monday 19 December 2022 / Last change: (Tuesday 07
            February 2023)
          </p>
        </Col>
        <Col md={12} className="d-flex flex-column flex-md-row gap-2 col-md-12">
          <ButtonPrimaryLight
            className="btn"
            onClick={() => handleShow("resendEmail")}
          >
            Resend order
          </ButtonPrimaryLight>

          <ButtonPrimaryLight className="btn">
            <FaFingerprint className="me-2" /> Reset personalisation
          </ButtonPrimaryLight>

          <Dropdown>
            <Dropdown.Toggle as={ButtonPrimaryLight} className="btn">
              ... More options
            </Dropdown.Toggle>
            <Dropdown.Menu className="shadow">
              <Dropdown.Item href="#download">
                <FaDownload className="me-2 my-1" /> Download order
              </Dropdown.Item>
              <Dropdown.Item href="#copy">
                <FaLink className="me-2 my-1" /> Copy link
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#cancel" className="text-danger">
                <FaBan className="me-2 my-1" /> Cancel order
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <ButtonPrimaryLight className="btn"  onClick={handleBack}>
              Back
          </ButtonPrimaryLight>
        </Col>
      </Row>

      <Row className="mt-5" style={{ fontSize: "12px" }}>
        <Col md={8}>
          <Card className="mt-3 p-5 border border-gray-300 shadow-md">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <h3 style={{ fontSize: "14px", fontWeight: 600 }}>Contact</h3>
                <a href="#more" className="text-primary fw-semibold">
                  more
                </a>
              </div>
              <Row className="mt-2">
                <Col md={6}>
                  <p className="mb-1">Email</p>
                  <p className="fw-semibold">chidchanok_14844@hotmail.com</p>
                  <p className="mb-1">First name</p>
                  <p className="fw-semibold">Chidchanok</p>
                </Col>
                <Col md={6}>
                  <p className="mb-1">Mobile number</p>
                  <p className="fw-semibold">+97433650253</p>
                  <p className="mb-1">Last name</p>
                  <p className="fw-semibold">Jindamaneephan</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mt-3 p-5 border border-gray-300 shadow-md">
            <Card.Body>
              <h3 className="mb-4" style={{ fontSize: "14px", fontWeight: 600 }}>Order of 1 ticket</h3>
              <Row className="align-items-center">
                <Col md={8} xs={12}>
                  <div className="d-flex align-items-center">
                  <FaTicketAlt className="me-2 text-black" size={35} />
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
                      <Dropdown>
                      <Dropdown.Toggle as={ButtonPrimaryLight} className="btn">
                        <FaEllipsisH />
                      </Dropdown.Toggle>
                        <Dropdown.Menu align="end">
                          <Dropdown.Item href="#download">
                            Download Ticket
                          </Dropdown.Item>
                          <Dropdown.Item href="#refund">
                            Request Refund
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <h3 className="mt-5" style={{ fontSize: "12px", fontWeight: 600 }}>Additional details</h3>
              <Table borderless>
                <tbody>
                  <tr>
                    <td className="text-start">$ Discount</td>
                    <td className="text-end text-danger">-$49.00</td>
                  </tr>
                  <tr>
                    <td className="text-end">
                      <strong>Total</strong>
                    </td>
                    <td className="text-end">
                      <strong>$5.00</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mt-3 border border-gray-300 shadow-md" style={{ fontSize: "12px" , padding: '42px'}}>
            <h3 className="mt-5 mb-5"  style={{ fontSize: "14px", fontWeight: 600 }}>History</h3>
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
      <Modal show={activeModal === "resendEmail"} onHide={handleClose} centered>
        <Modal.Body className="text-center p-7">
          <button type="button" className="custom-close" onClick={handleClose}>
            ×
          </button>
          <img
            src="/src/assets/images/resend-image.png"
            alt="Mail Illustration"
            className="mb-3"
          />
          <h2 className="fw-bold">Are you sure?</h2>
          <p className="text-muted">
            This will send an e-mail to the owner of the order.
          </p>
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="link"
              className="text-primary text-decoration-none"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button className="custom-button d-flex align-items-center">
              <FaEnvelope className="me-2" /> Yes, resend
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Payment Completed Modal */}
      <Modal
        show={
          activeModal === "paymentCompleted" || activeModal === "paymentStarted"
        }
        onHide={handleClose}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center justify-content-between gap-2 my-4 w-100">
            <div className="d-flex flex-column gap-1">
              <div className="d-flex align-items-center gap-2">
                <div className="timeline-icon">
                  <FaDollarSign />
                </div>
                <div className="d-flex flex-column">
                  <span>
                    {activeModal === "paymentCompleted"
                      ? "Pay One - Payment completed"
                      : "Pay One - Payment started"}
                  </span>
                  <span className="text-muted small">February 7, 2023 - 10:18 AM</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="custom-close"
              onClick={handleClose}
              style={{ marginTop: "20px" }}
            >
              ×
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-5">
          <div className="p-3">
            <div className="row">
              <div className="col-md-4">
                <strong>Status</strong>
                <p>Success</p>
              </div>
              <div className="col-md-4">
                <strong>Created</strong>
                <p>December 19, 2022 8:21 PM</p>
              </div>
              <div className="col-md-4">
                <strong>Last update</strong>
                <p>February 7, 2023 10:18 AM</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <strong>Balance</strong> <FaInfoCircle className="text-muted" />
                <p>$5.00</p>
              </div>
              <div className="col-md-4">
                <strong>Payment method</strong>
                <p>Pay One</p>
              </div>
              <div className="col-md-4">
                <strong>Payment service provider</strong>
                <p>POQ</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Row>
  );
};

export default OrderDetails;
