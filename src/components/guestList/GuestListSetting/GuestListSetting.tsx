import { Switch } from "@mui/material";
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import SwitchReact from "../../shared/SwitchReact";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";
type GuestListSettingProps = {
  show: boolean;
  onClose: () => void;
};

const GuestListSetting: React.FC<GuestListSettingProps> = ({
  show,
  onClose,
}) => {
  const [isGuestListEnabled, setIsGuestListEnabled] = useState(false);
  const [isCancellationEnabled, setIsCancellationEnabled] = useState(false);
  const [isGuestReceiveTicket, setIsGuestReceiveTicket] = useState(false);
  const [isGuestTransferTicket, setIsGuestTransferTicket] = useState(false);
  const [isGuestReceiveDigitalTicket, setIsGuestReceiveDigitalTicket] =
    useState(false);
  const [isGuestTicketCharges, setIsGuestTicketCharges] = useState(false);
  const [isOrganizerTicketCharges, setIsOrganizerTicketCharges] =
    useState(false);

  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
        centered={true}
        size="lg"
      >
        <Modal.Header className="d-flex align-items-center justify-content-left">
          <Modal.Title>
            <h6 className="fw-600 fs-5 p-3 modal-title">Guest List Setting</h6>
          </Modal.Title>
          <span
            className="d-flex align-items-center justify-content-center ms-auto"
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-10px",
            }}
            onClick={onClose}
          >
            <i className="fe fe-x fs-4"></i>
          </span>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex flex-column gap-4">
            <div
              className="d-flex align-items-center justify-content-left rounded-pill px-3 py-3"
              style={{ backgroundColor: "#F4F5F5" }}
            >
              {/* <SwitchReact checked={checked} onChange={handleChange} /> */}
              <Form.Group className="d-flex align-items-center gap-3">
                <label className="custom-switch form-switch me-5 ">
                  <input
                    type="checkbox"
                    name="custom-switch-radio1"
                    className="custom-switch-input"
                    checked={isGuestListEnabled}
                    style={{
                      borderColor: "#ff003e33",
                    }}
                    onClick={() => setIsGuestListEnabled((prev) => !prev)}
                  />
                  <span
                    className="custom-switch-indicator custom-switch-indicator-md cursor-pointer"
                    style={{
                      borderColor: "#ff003e33",
                    }}
                  ></span>
                </label>
              </Form.Group>
              <label className="m-0">
                Guest list to be used from the total capacity
              </label>
            </div>
            <div
              className="d-flex align-items-center justify-content-left rounded-pill px-3 py-3"
              style={{ backgroundColor: "#F4F5F5" }}
            >
              <Form.Group className="d-flex align-items-center gap-3">
                <label className="custom-switch form-switch me-5">
                  <input
                    type="checkbox"
                    name="custom-switch-radio1"
                    className="custom-switch-input"
                    checked={isCancellationEnabled}
                    style={{
                      borderColor: "#ff003e33",
                    }}
                    onClick={() => setIsCancellationEnabled((prev) => !prev)}
                  />
                  <span
                    className="custom-switch-indicator custom-switch-indicator-md cursor-pointer"
                    style={{
                      borderColor: "#ff003e33",
                    }}
                  ></span>
                </label>
              </Form.Group>
              <label className="m-0">
                If guest does not confirm attendance by 24 hours before event,
                cancel invitation.
              </label>
            </div>

            <div
              className="d-flex align-items-center justify-content-left rounded-pill px-3 py-3"
              style={{ backgroundColor: "#F4F5F5" }}
            >
              {/* <SwitchReact checked={checked} onChange={handleChange} /> */}
              <Form.Group className="d-flex align-items-center gap-3">
                <label className="custom-switch form-switch me-5 ">
                  <input
                    type="checkbox"
                    name="custom-switch-radio1"
                    className="custom-switch-input"
                    checked={isGuestReceiveTicket}
                    style={{
                      borderColor: "#ff003e33",
                    }}
                    onClick={() => setIsGuestReceiveTicket((prev) => !prev)}
                  />
                  <span
                    className="custom-switch-indicator custom-switch-indicator-md cursor-pointer"
                    style={{
                      borderColor: "#ff003e33",
                    }}
                  ></span>
                </label>
              </Form.Group>
              <label className="m-0">
                Guest to additionally receive tickets as SMS and Whatsapp .
              </label>
            </div>
            <div
              className="d-flex align-items-center justify-content-left rounded-pill px-3 py-3"
              style={{ backgroundColor: "#F4F5F5" }}
            >
              {/* <SwitchReact checked={checked} onChange={handleChange} /> */}
              <Form.Group className="d-flex align-items-center gap-3">
                <label className="custom-switch form-switch me-5 ">
                  <input
                    type="checkbox"
                    name="custom-switch-radio1"
                    className="custom-switch-input"
                    checked={isGuestReceiveDigitalTicket}
                    style={{
                      borderColor: "#ff003e33",
                    }}
                    onClick={() =>
                      setIsGuestReceiveDigitalTicket((prev) => !prev)
                    }
                  />
                  <span
                    className="custom-switch-indicator custom-switch-indicator-md cursor-pointer"
                    style={{
                      borderColor: "#ff003e33",
                    }}
                  ></span>
                </label>
              </Form.Group>
              <label className="m-0">Guest to receive digital ticket</label>
            </div>
            <div
              className="d-flex align-items-center justify-content-left rounded-pill px-3 py-3"
              style={{ backgroundColor: "#F4F5F5" }}
            >
              {/* <SwitchReact checked={checked} onChange={handleChange} /> */}
              <Form.Group className="d-flex align-items-center gap-3">
                <label className="custom-switch form-switch me-5 ">
                  <input
                    type="checkbox"
                    name="custom-switch-radio1"
                    className="custom-switch-input"
                    checked={isGuestTransferTicket}
                    style={{
                      borderColor: "#ff003e33",
                    }}
                    onClick={() => setIsGuestTransferTicket((prev) => !prev)}
                  />
                  <span
                    className="custom-switch-indicator custom-switch-indicator-md cursor-pointer"
                    style={{
                      borderColor: "#ff003e33",
                    }}
                  ></span>
                </label>
              </Form.Group>
              <label className="m-0">
                Guest to be able to transfer its ticket to someone else.
              </label>
            </div>
            <div
              className="d-flex align-items-center justify-content-left rounded-pill px-3 py-3"
              style={{ backgroundColor: "#F4F5F5" }}
            >
              {/* <SwitchReact checked={checked} onChange={handleChange} /> */}
              <Form.Group className="d-flex align-items-center gap-3">
                <label className="custom-switch form-switch me-5 ">
                  <input
                    type="checkbox"
                    name="custom-switch-radio1"
                    className="custom-switch-input"
                    checked={isGuestTicketCharges}
                    style={{
                      borderColor: "#ff003e33",
                    }}
                    onClick={() => setIsGuestTicketCharges((prev) => !prev)}
                  />
                  <span
                    className="custom-switch-indicator custom-switch-indicator-md cursor-pointer"
                    style={{
                      borderColor: "#ff003e33",
                    }}
                  ></span>
                </label>
              </Form.Group>
              <label className="m-0">
                Guest to pay the ticket transfer charges.
              </label>
            </div>
            <div
              className="d-flex align-items-center justify-content-left rounded-pill px-3 py-3"
              style={{ backgroundColor: "#F4F5F5" }}
            >
              {/* <SwitchReact checked={checked} onChange={handleChange} /> */}
              <Form.Group className="d-flex align-items-center gap-3">
                <label className="custom-switch form-switch me-5 ">
                  <input
                    type="checkbox"
                    name="custom-switch-radio1"
                    className="custom-switch-input"
                    checked={isOrganizerTicketCharges}
                    style={{
                      borderColor: "#ff003e33",
                    }}
                    onClick={() => setIsOrganizerTicketCharges((prev) => !prev)}
                  />
                  <span
                    className="custom-switch-indicator custom-switch-indicator-md cursor-pointer"
                    style={{
                      borderColor: "#ff003e33",
                    }}
                  ></span>
                </label>
              </Form.Group>
              <label className="m-0">
                Organizer to pay the ticket transfer charges.
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonSecondary
            type="button"
            className="btn "
            onClick={onClose}
            style={{ minWidth: "118px" }}
          >
            <span className="d-none d-md-block">Close</span>
          </ButtonSecondary>
          <ButtonPrimary
            type="button"
            className="btn"
            style={{ minWidth: "118px" }}
          >
            <i
              className="fa fa-arrow-right d-block d-md-none"
              aria-hidden="true"
            ></i>
            <span>Save</span>
          </ButtonPrimary>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GuestListSetting;
