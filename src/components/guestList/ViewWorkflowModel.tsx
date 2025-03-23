import React from "react";
import { Modal } from "react-bootstrap";
import {
  TimelineContainer,
  TimelineItemStyled,
  TimelineContent,
  TimeLineDot,
} from "../styledComponents/timeLine";

export interface TimelineItem {
  status: string;
  date: string;
  color: string;
}

type ViewWorkflowModelProps = {
  show: boolean;
  onClose: () => void;
  timelineData: TimelineItem[];
};

const ViewWorkflowModel: React.FC<ViewWorkflowModelProps> = ({
  show,
  onClose,
  timelineData,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      size="lg"
    >
      <Modal.Header className="p-5">
        <Modal.Title className="w-100 m-0">
          <span className="fw-600 fs-4">Guest Invitation Status</span>
        </Modal.Title>
        <span
          className="d-flex ms-auto fs-4 cursor-pointer"
          onClick={handleClose}
        >
          <i className="fe fe-x ms-auto"></i>
        </span>
      </Modal.Header>

      <Modal.Body className="p-5">
        <TimelineContainer>
          {timelineData.map((item, index) => (
            <TimelineItemStyled key={index}>
              <TimeLineDot color={item.color} />
              <TimelineContent>
                <span className="status">{item.status}</span>
                <span className="date">{item.date}</span>
              </TimelineContent>
              <div className="d-flex align-items-center gap-3 ms-auto">
                <i className="fe fe-edit fs-5"></i>
                <i className="fe fe-trash-2 fs-5"></i>
              </div>
            </TimelineItemStyled>
          ))}
        </TimelineContainer>
      </Modal.Body>
    </Modal>
  );
};

export default ViewWorkflowModel;
