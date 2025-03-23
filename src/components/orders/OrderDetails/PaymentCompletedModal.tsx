import React, { FC } from "react";
import { Modal } from "react-bootstrap";
import { FaDollarSign, FaInfoCircle } from "react-icons/fa";
import { IOrderDetailsModalType } from ".";
interface IProps {
  handleClose: () => void;
  activeModal: IOrderDetailsModalType | null;
}
const PaymentCompletedModal: FC<IProps> = ({ handleClose, activeModal }) => {
  return (
    <>
      <Modal
        show={
          activeModal === "paymentCompleted" || activeModal === "paymentStarted"
        }
        onHide={handleClose}
        centered
        size="lg"
      >
        <Modal.Header className="d-flex justify-content-end ">
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
                  <span className="text-muted small">
                    February 7, 2023 - 10:18 AM
                  </span>
                </div>
              </div>
            </div>
          </Modal.Title>
          <span
            className="d-flex align-items-center justify-content-center cursor-pointer"
            onClick={handleClose}
            style={{ width: "40px", height: "40px" }} // Optional: Adjust size for better UI
          >
            <i className="fe fe-x fs-4"></i>
          </span>
        </Modal.Header>
        <Modal.Body className="my-5">
          <div className="p-3">
            <div className="row mb-7">
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
    </>
  );
};

export default PaymentCompletedModal;
