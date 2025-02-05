import  { Component, Fragment } from 'react';
import { Card } from 'react-bootstrap';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import PageHeader from '../../../layouts/layoutcomponents/pageheader';

class DefaultCalender extends Component {
  render() {
    return (
      <Fragment>
        <PageHeader titles="Default Calender" active="Default Calender" items={['Apps']} />
        <div className="">
          <Card>
            <Card.Body>
              <div >
                <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} headerToolbar={{   left: "prev",   center: "title",   right: "next", }} initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true}/>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    );
  }
}
export default DefaultCalender;
