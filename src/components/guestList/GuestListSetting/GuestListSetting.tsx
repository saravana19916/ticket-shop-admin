import { Switch } from "@mui/material";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SwitchReact from "../../shared/SwitchReact";
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
        <Modal.Header>
          <Modal.Title>
            <span className="fw-600 fs-4">Guest List Setting</span>
          </Modal.Title>
          <span className="d-flex ms-auto" onClick={onClose}>
            <i className="fe fe-x ms-auto"></i>
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
          <Button variant="light" className="btn-pill" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" className="btn-pill">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GuestListSetting;
