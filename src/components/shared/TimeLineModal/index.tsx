import React, { FC } from "react";
import { Modal } from "react-bootstrap";
import {
  TimelineContainer,
  TimelineItemStyled,
  TimeLineDot,
  TimelineContent,
} from "../../styledComponents/timeLine";

interface IProps {
  modalTitle: string;
  show: boolean;
  onClose: () => void;
  timelineData: ITimelineData[];
  otherAction?: ITimeLineOtherActionProps[];
}

export interface ITimeLineOtherActionProps {
  icon: "edit" | "delete";
  onClick: () => void;
}
export interface ITimelineData {
  status: string;
  date: string;
  color: string;
}

const index: FC<IProps> = ({
  show,
  onClose,
  timelineData,
  modalTitle,
  otherAction,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        centered
        size="lg"
      >
        <Modal.Header className="p-5">
          <Modal.Title className="w-100 m-0">
            <span className="fw-600 fs-4">{modalTitle}</span>
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
                {otherAction && otherAction?.length ? (
                  <>
                    <div className="d-flex align-items-center gap-3 ms-auto">
                      {otherAction?.map((action) => {
                        switch (action.icon) {
                          case "edit":
                            return (
                              <>
                                <i
                                  className="fe fe-edit fs-5"
                                  onClick={action.onClick}
                                ></i>
                              </>
                            );
                          case "delete":
                            return (
                              <>
                                <i
                                  className="fe fe-trash-2 fs-5"
                                  onClick={action.onClick}
                                ></i>
                              </>
                            );

                          default:
                            return <></>;
                        }
                      })}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </TimelineItemStyled>
            ))}
          </TimelineContainer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default index;

export enum TimeLineStatus {
    
}
