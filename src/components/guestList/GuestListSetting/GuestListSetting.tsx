import { Switch } from "@mui/material";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
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
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

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
        <Modal.Header className="d-flex align-items-center justify-content-between">
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
              marginTop: '-10px'
            }}
            onClick={onClose}
          >
            <i className="fe fe-x"></i>
          </span>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-4 bg-light-gray rounded-pill px-1 py-2">
              <SwitchReact checked={checked} onChange={handleChange} />
              <label className="m-0">
                Guest list to be used from the total capacity
              </label>
            </div>
            <div className="d-flex align-items-center gap-4 bg-light-gray rounded-pill px-1 py-2">
              <SwitchReact checked={checked} onChange={handleChange} />
              <label className="m-0">
                If guest does not confirm attendance by 24 hours before event,
                cancell invitation.
              </label>
            </div>
            <div className="d-flex align-items-center gap-4 bg-light-gray rounded-pill px-1 py-2">
              <SwitchReact checked={checked} onChange={handleChange} />
              <label className="m-0">
                Guest to additionally receive tickets as SMS and Whatsapp .
              </label>
            </div>
            <div className="d-flex align-items-center gap-4 bg-light-gray rounded-pill px-1 py-2">
              <SwitchReact checked={checked} onChange={handleChange} />
              <label className="m-0">Guest to receive digital ticket</label>
            </div>
            <div className="d-flex align-items-center gap-4 bg-light-gray rounded-pill px-1 py-2">
              <SwitchReact checked={checked} onChange={handleChange} />
              <label className="m-0">
                Guest to be able to transfer its ticket to someone else.
              </label>
            </div>
            <div className="d-flex align-items-center gap-4 bg-light-gray rounded-pill px-1 py-2">
              <SwitchReact checked={checked} onChange={handleChange} />
              <label className="m-0">
                Guest to pay the ticket transfer charges.
              </label>
            </div>
            <div className="d-flex align-items-center gap-4 bg-light-gray rounded-pill px-1 py-2">
              <SwitchReact checked={checked} onChange={handleChange} />
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
          >
            <span className="d-none d-md-block">Close</span>
          </ButtonSecondary>
          <ButtonPrimary
            type="button"
            className="btn"
          >
            <i
              className="fa fa-arrow-right d-block d-md-none"
              aria-hidden="true"
            ></i>{" "}
            <span>Save</span>
          </ButtonPrimary>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GuestListSetting;
