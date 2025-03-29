import React, { FC } from "react";
import { Modal } from "react-bootstrap";
import { FaDollarSign, FaInfoCircle, FaPencilAlt} from "react-icons/fa";
import { IOrderDetailsModalType } from ".";
interface IProps {
  handleClose: () => void;
  activeModal: IOrderDetailsModalType | null;
}
const ContactModal: FC<IProps> = ({ handleClose, activeModal }) => {
  return (
    <>
      <Modal
        show={activeModal === "contact"}
        onHide={handleClose}
        centered
        size="lg"
      >
        <Modal.Header className="d-flex justify-content-end ">
          <Modal.Title className="d-flex align-items-center justify-content-between gap-2 my-4 w-100">
            <div className="d-flex flex-column gap-1">
              <div className="d-flex align-items-center gap-2">Contact</div>
            </div>
          </Modal.Title>
          <span
            className="d-flex align-items-center justify-content-center cursor-pointer"
            onClick={handleClose}
            style={{ width: "40px", height: "40px" }}
          >
            <i className="fe fe-x fs-4"></i>
          </span>
        </Modal.Header>
        <Modal.Body className="my-5">
        <div className="row">
            <div className="col-9">
                <span className="text-danger mb-0">
                    To personalize tickets in this order, please download the order and personalize the tickets in the PDF
                </span>
            </div>
            <div className="col-3">
            <FaPencilAlt /><span className="ms-2">Edit</span>
            </div>
        </div>
          <div className="p-3">
            <div className="row mb-7">
              <div className="col-md-6">
                <strong>First name</strong>
                <p>Youssef</p>
              </div>
              <div className="col-md-6">
                <strong>Last name</strong>
                <p>Ibrahim</p>
              </div>
            </div>
            <div className="row mb-7">
              <div className="col-md-6">
                <strong>Email</strong>
                <p>ib.youssef@outlook.com</p>
              </div>
              <div className="col-md-6">
                <strong>Mobile number</strong>
                <p>+97455439646</p>
              </div>
            </div>
            <div className="row mb-7">
              <div className="col-md-6">
                <strong>Street</strong>
                <p>-</p>
              </div>
              <div className="col-md-6">
                <strong>House number</strong>
                <p>-</p>
              </div>
            </div>
            <div className="row mb-7">
              <div className="col-md-6">
                <strong>Country</strong>
                <p>Qatar</p>
              </div>
              <div className="col-md-6">
                <strong>City</strong>
                <p>-</p>
              </div>
            </div>
            <div className="row mb-7">
              <div className="col-md-6">
                <strong>Zipcode</strong>
                <p>-</p>
              </div>
              <div className="col-md-6">
                <strong>Gender</strong>
                <p>M</p>
              </div>
            </div>
            <div className="row mb-7">
              <div className="col-md-6">
                <strong>Date of Birth</strong>
                <p>-</p>
              </div>
              <div className="col-md-6">
                <strong>custom_field</strong>
                <p>-</p>
              </div>
            </div>
            <div className="row mb-7">
              <div className="col-md-6">
                <strong>custom_field</strong>
                <p>-</p>
              </div>
              <div className="col-md-6">
                <strong>custom_field</strong>
                <p>-</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactModal;
