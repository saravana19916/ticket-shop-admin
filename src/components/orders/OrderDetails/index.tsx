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
    <div className="d-flex position-relative mb-4">
      <div className="timeline-icon">{icon}</div>
      {!hideLine && <div className="timeline-line"></div>}
      <div className="ms-3 mb-5">
        <h4>
          {title}{" "}
          {isActive && (
            <a href="#" className="text-primary small" onClick={onClick}>
              more
            </a>
          )}
        </h4>
        <p className="text-muted small mb-0">{date}</p>
      </div>
    </div>
  );
};

const OrderDetails = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleShow = (modalType: string) => {
    setActiveModal(modalType);
  };

  const handleClose = () => {
    setActiveModal(null);
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Row>
            <Col md={12}>
              <h4>
                Order <strong>7237614364</strong>{" "}
                <Badge bg="success">Completed</Badge>
              </h4>
              <p>
                Created on Monday 19 December 2022 / Last change: (Tuesday 07
                February 2023)
              </p>
            </Col>
            <Col
              md={12}
              className="d-flex flex-column flex-md-row gap-2 col-md-12"
            >
              <Button
                className="custom-button me-2 rounded-3"
                onClick={() => handleShow("resendEmail")}
              >
                <FaEnvelope className="me-2" /> Resend order
              </Button>

              <Button className="custom-button me-2 rounded-3" disabled>
                <FaFingerprint className="me-2" /> Reset personalisation
              </Button>

              <Dropdown className="custom-button rounded-3 text-center">
                <Dropdown.Toggle className="custom-button rounded-3">
                  ... More options
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#download">
                    <FaDownload className="me-2 my-3" /> Download order
                  </Dropdown.Item>
                  <Dropdown.Item href="#copy">
                    <FaLink className="me-2 my-3" /> Copy link
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#cancel" className="text-danger">
                    <FaBan className="me-2 my-3" /> Cancel order
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Row className="mt-3">
        <Col md={8}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <h3>Contact</h3>
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

          <Card className="mt-3 p-3">
            <Card.Body>
              <h3 className="mb-4">Order of 1 ticket</h3>
              <Row className="align-items-center">
                <Col md={8} xs={12}>
                  <div className="d-flex align-items-center">
                    <FaTicketAlt className="me-2 text-secondary" />
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
                        <Dropdown.Toggle variant="link" className="p-0">
                          <FaEllipsisH className="text-secondary" />
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

              <h3 className="mt-5">Additional details</h3>
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
          <Card className="p-3">
            <h3 className="mt-5 mb-5">History</h3>
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
                <span>
                  {activeModal === "paymentCompleted"
                    ? "Pay One - Payment completed"
                    : "Pay One - Payment started"}
                </span>
              </div>

              <span className="text-muted small ms-4" style={{ marginLeft: "43px" }}>
                February 7, 2023 - 10:18 AM
              </span>
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
    </Container>
  );
};

export default OrderDetails;
