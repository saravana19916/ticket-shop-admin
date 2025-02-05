import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Form, FormControl } from "react-bootstrap";

interface IProps {
  setPolicyName: (name: string) => void;
  policyName: string;
  setUpdateDate: any;
}

const Policies = ({ setPolicyName, policyName, setUpdateDate }: IProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPolicyName(e.target.value);
  };

  const handleAddClick = () => {
    // Perform any additional actions here when adding the policy
    setUpdateDate(policyName);
  };

  return (
    <>
      <div className="col-12 mb-5">
        <Form.Group className="border-dark mb-3">
          <Form.Label className="fs-5 fw-500 mb-3 text-primary-1">
            Policies
          </Form.Label>
        </Form.Group>
      </div>
      <div className="col-lg-11 col-12 mb-5">
        <div className="row">
          <div className="col-lg-6 col-9">
            <Form.Group>
              <FormControl
                className="bg-white d-flex justify-content-between ps-5 border-full-rounded px-9px border-form-input"
                placeholder="Enter policy name"
                value={policyName}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
          <div className="col-lg-6 col-3">
            <div className="d-flex align-items-center justify-content-start gap-3">
              <button
                type="button"
                className="btn rounded-pill bg-light text-dark border px-5 fw-600 px-9px"
              >
                Add text
              </button>
              <button
                type="button"
                className="btn rounded-pill px-5 fw-600 bg-primary-1 text-white px-9px"
                onClick={handleAddClick}
              >
                <span className="me-3">
                  <PlusIcon className="h-5 w-5" />
                </span>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policies;
