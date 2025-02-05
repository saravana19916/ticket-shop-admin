import { PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

interface IProps {
  setRulesData: any;
  rulesData: string[];
}
const AdditionalRules = ({ rulesData, setRulesData }: IProps) => {
  // const [rulesList, setRulesList] = useState<string[]>([
  //   "No smoking in common areas",
  //   "Do not wear shoes in the house",
  //   "No cooking in the bedroom",
  // ]);

  const handleAddRule = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newRule = event.currentTarget.elements.namedItem(
      "newRule"
    ) as HTMLInputElement;
    if (newRule?.value.trim()) {
      setRulesData([...rulesData, newRule.value.trim()]);
      newRule.value = ""; // Clear the input after adding
    }
  };

  const handleRemoveRule = (rule: string) => {
    setRulesData(rulesData.filter((r) => r !== rule));
  };

  return (
    <>
      <div className="col-12 mb-5">
        <Form.Group className="border-dark mb-3">
          <Form.Label className="fs-5 fw-500 mb-3 text-primary-1">
            Additional Rules
          </Form.Label>
        </Form.Group>
      </div>
      <div className="col-lg-11 col-12 mb-5">
        <Form onSubmit={handleAddRule}>
          <div className="row">
            <div className="col-lg-7 col-9">
              <Form.Group>
                <FormControl
                  name="newRule"
                  placeholder="Enter a new rule"
                  className="bg-white d-flex justify-content-between ps-5 border-form-input border-end-rounded border-start-rounded px-9px fs-14px"
                />
              </Form.Group>
            </div>
            <div className="col-lg-5 col-3">
              <button
                type="submit"
                className="btn rounded-pill px-5 fw-600 bg-primary-1 text-white px-9px"
              >
                <PlusIcon className="h-5 w-5 me-3" />
                Add
              </button>
            </div>
          </div>
        </Form>
      </div>
      <div className="col-lg-11 col-12 mb-5">
        <div className="row mx-3">
          {rulesData?.map((l: string, index: number) => (
            <div
              key={index}
              className="col-lg-7 col-9 px-0 d-flex justify-content-between align-items-center py-3 border-bottom"
            >
              <span>{l}</span>
              <XCircleIcon
                className="h-5 w-5 text-gray cursor-pointer"
                onClick={() => handleRemoveRule(l)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdditionalRules;
