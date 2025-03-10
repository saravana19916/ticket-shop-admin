import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Table,
  Dropdown,
} from "react-bootstrap";
import { FaDownload, FaLink, FaBan } from "react-icons/fa";
import {
  FaTicketAlt,
  FaEllipsisH,
  FaEnvelope,
  FaCheckCircle,
  FaClock,
  FaStar,
  FaDollarSign,
  FaFingerprint
} from "react-icons/fa";
import "./OrderDetails.css";

interface TimelineItemProps {
  icon: React.ReactNode; // ✅ Define the correct type for the icon
  title: string;
  date: string;
  isActive?: boolean;
  hideLine?: boolean;
}


const TimelineItem: React.FC<TimelineItemProps> = ({ icon, title, date, isActive, hideLine }) => {
  return (
    <div className="d-flex position-relative mb-4">
      <div className={`timeline-icon`}>{icon}</div>
      {!hideLine && <div className="timeline-line"></div>}
      <div className="ms-3 mb-5">
        <h4>{title} {isActive && <a href="#" className="text-primary">more</a>}</h4>
        <p className="text-muted small mb-0">{date}</p>
      </div>
    </div>
  );
};
const OrderDetails = () => {
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
            <Col md={12} className="d-flex align-items-center">
              <Button className="custom-button me-2">
                <FaEnvelope className="me-2" /> Resend order
              </Button>

              <Button className="custom-button me-2" disabled>
                <FaFingerprint className="me-2" /> Reset personalisation
              </Button>

              <Dropdown>
                <Dropdown.Toggle className="custom-button">
                  ... More options
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#download">
                    <FaDownload className="me-2" /> Download order
                  </Dropdown.Item>
                  <Dropdown.Item href="#copy">
                    <FaLink className="me-2" /> Copy link
                  </Dropdown.Item>
                  <Dropdown.Item href="#cancel" className="text-danger">
                    <FaBan className="me-2" /> Cancel order
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
                <h5>Contact</h5>
                <a href="#more" className="text-blue fw-semibold">
                  more
                </a>
              </div>
              <Row className="mt-2">
                <Col md={6}>
                  <p className="mb-1">
                    <small className="text-muted">Email</small>
                  </p>
                  <p className="fw-semibold">chidchanok_14844@hotmail.com</p>
                  <p className="mb-1">
                    <small className="text-muted">First name</small>
                  </p>
                  <p className="fw-semibold">Chidchanok</p>
                </Col>
                <Col md={6}>
                  <p className="mb-1">
                    <small className="text-muted">Mobile number</small>
                  </p>
                  <p className="fw-semibold">+97433650253</p>
                  <p className="mb-1">
                    <small className="text-muted">Last name</small>
                  </p>
                  <p className="fw-semibold">Jindamaneephan</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mt-3 p-3">
            <Card.Body>
              <h3 className="mb-4">Order of 1 ticket</h3>
              <Row className="align-items-center">
                <Col xs={8}>
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
                <Col xs={4}>
                  <Row>
                    <Col md={8}>
                      <p className="mb-0 fw-bold">$5.00</p>
                      <p
                        className="text-muted"
                        style={{ fontSize: "0.875rem" }}
                      >
                        $0.00 + $5.00 fees
                      </p>
                    </Col>
                    <Col md={4}>
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

              <h4 className="mt-5">Additional details</h4>
              <Table borderless>
                <tbody>
                  <tr>
                    <td className="text-start">💲 Discount</td>
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
    </Container>
  );
};

export default OrderDetails;
