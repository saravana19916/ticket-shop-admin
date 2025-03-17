import React, { FC } from "react";
import { Modal } from "react-bootstrap";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";
import { Upload } from "react-feather";
interface IProps {
  show: boolean;
  onClose: () => void;
}
const ExportScanningDataModal: FC<IProps> = ({ show, onClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header className="p-6">
          <Modal.Title className="w-100 m-0">
            <span className="fw-600 fs-4">Export Scanning Data</span>
          </Modal.Title>
          <span
            className="d-flex ms-auto fs-4 cursor-pointer"
            onClick={onClose}
          >
            <i className="fe fe-x ms-auto"></i>
          </span>
        </Modal.Header>
        <Modal.Body className="py-7 p-6">
          <div className="d-flex align-items-center gap-2 mb-6">
            <label className="colorinput">
              <input
                name="color"
                type="radio"
                defaultValue="azure"
                className="colorinput-input"
                checked
              />
              <span className="colorinput-color bg-danger rounded-10"></span>
            </label>
            <span className="text-black fw-semibold mb-1 d-inline-block">
              Formatted Data
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <ButtonSecondary type="button" className="btn" onClick={onClose}>
              <i
                className="fa fa-floppy-o d-block d-md-none"
                aria-hidden="true"
              ></i>
              <span className="d-none d-md-block">Cancel</span>
            </ButtonSecondary>
            <ButtonPrimary type="button" className="btn">
              <span>
                <Upload className="w-5 h-5 me-2 mb-1" />
                Export
              </span>
            </ButtonPrimary>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ExportScanningDataModal;
