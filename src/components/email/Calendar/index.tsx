import React, { Fragment, useState } from "react";
import { ButtonGroup, Col, Row, Card, Dropdown } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import { Mail } from "react-feather";

const EmailCalender = () => {
  const [calendarEvents, setCalendarEvents] = useState([
    { title: "Untitled", start: new Date("2025-04-04 00:00"), id: "1" },
    {
      title: "The Limitless Mind-Bo...",
      start: new Date("2025-04-04 00:00"),
      id: "2",
    },
    { title: "Untitled", start: new Date("2025-04-05 00:00"), id: "3" },
  ]);

  const eventClick = (eventClick: {
    event: { title: any; start: any; id: string };
  }) => {
    Alert.fire({
      title: eventClick.event.title,
      html: `<div class="table-responsive">
        <table class="table">
          <tbody>
            <tr>
              <td>Title</td>
              <td><strong>${eventClick.event.title}</strong></td>
            </tr>
            <tr>
              <td>Start Time</td>
              <td><strong>${eventClick.event.start}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>`,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.value) {
        setCalendarEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== eventClick.event.id)
        );
        Alert.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };

  function renderEventContent(eventInfo: {
    event: {
      title:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | Iterable<React.ReactNode>
        | null
        | undefined;
    };
  }) {
    return (
      <div className="bg-light w-100 p-1 d-flex align-items-center gap-2">
        <Mail size={15} style={{ color: "#333" }} />
        <span style={{ fontWeight: "bold", color: "#333" }}>
          {eventInfo.event.title}
        </span>
      </div>
    );
  }

  return (
    <Fragment>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">
                <div className="d-flex align-items-center gap-3">
                  <ButtonGroup className="mt-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle
                        className="btn-pill d-flex align-items-center gap-2 fs-11px text-white px-6"
                        variant="primary"
                        id="dropdown-basic"
                      >
                        <span>Audience</span>
                        <b
                          className="fa fa-angle-down fs-5"
                          aria-hidden="true"
                        ></b>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="fs-12px">
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="mt-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-default"
                        className="btn-pill d-flex align-items-center gap-2 fs-11px px-6"
                        id="dropdown-basic"
                      >
                        <span>Type</span>
                        <b
                          className="fa fa-angle-down fs-5"
                          aria-hidden="true"
                        ></b>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="mt-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle
                        className="btn-pill d-flex align-items-center gap-2 fs-11px px-6"
                        variant="outline-default"
                        id="dropdown-basic"
                      >
                        <span>Status</span>
                        <b
                          className="fa fa-angle-down fs-5"
                          aria-hidden="true"
                        ></b>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="mt-2 me-1">
                    <Dropdown>
                      <Dropdown.Toggle
                        className="btn-pill d-flex align-items-center gap-2 fs-11px px-6"
                        variant="outline-default"
                        id="dropdown-basic"
                      >
                        <span>Folder</span>
                        <b
                          className="fa fa-angle-down fs-5"
                          aria-hidden="true"
                        ></b>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xl={12} className="demo-app-calendar">
                  <FullCalendar
                    initialView="dayGridMonth"
                    headerToolbar={{
                      start: "prevYear,prev,next,nextYear today",
                      center: "title",
                      end: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    rerenderDelay={10}
                    editable={true}
                    selectable={true}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    events={calendarEvents}
                    eventContent={renderEventContent}
                    eventClick={eventClick}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

const index = () => {
  return (
    <>
      <EmailCalender />
    </>
  );
};

export default index;
