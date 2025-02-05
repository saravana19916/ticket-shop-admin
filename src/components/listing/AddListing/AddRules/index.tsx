import React, { useState } from "react";
import { PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Form, FormControl } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../../styledComponents/styledForm";
import ButtonCustom from "../../../shared/ButtonCustom";

const index = () => {
  const isAddListingLocation = window.location?.pathname === "/add-listing";
  const [rulesData, setRulesData] = useState<string[]>([]);

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
  const isSeparateUrl =
    window.location?.pathname === "/add-rule" ||
    window.location?.pathname.startsWith("/edit-rule/");
  return (
    <>
      <div
        className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 ${
          isSeparateUrl ? "mt-7" : ""
        }`}
      >
        <div className="card border p-4 rounded-16px">
          <div className="p-0 p-md-5">
            <div className="row">
              <div className="col-12 mb-3">
                <p className="fw-600 fs-26px text-black mb-3">Rules</p>
              </div>
              <div className="col-12 mb-3">
                <div className="col-12 mb-3 p-0">
                  <Form.Group className="border-dark mb-3">
                    <Form.Label className="fs-5 fw-500 mb-3 text-black">
                      Add Rules
                    </Form.Label>
                  </Form.Group>
                </div>
                <div className="col-xl-10 col-lg-11 col-12 mb-5 p-0">
                  <Form onSubmit={handleAddRule}>
                    <div className="row">
                      <div className="col-9">
                        <Form.Group>
                          <FormInputStyled
                            type="text"
                            className="form-control"
                            name="newRule"
                            placeholder="Enter a new rule"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-3">
                        <ButtonCustom
                          title="Add"
                          className="fs-6"
                          paddingClassName="p-3 px-6"
                          icon={
                            <PlusIcon
                              className="w-4 h-4"
                              style={{ marginBottom: "1px" }}
                            />
                          }
                          type="submit"
                        />
                      </div>
                    </div>
                  </Form>
                </div>
                <div className="col-xl-10 col-lg-11 col-12 mb-5 ">
                  <div className="row mx-3">
                    {rulesData?.map((l: string, index: number) => (
                      <div
                        key={index}
                        className="col-lg-9 col-12 px-0 d-flex justify-content-between align-items-center py-3 border-bottom"
                      >
                        <span>
                          {index + 1}. {l}
                        </span>{" "}
                        <XCircleIcon
                          className="h-5 w-5 text-gray cursor-pointer"
                          onClick={() => handleRemoveRule(l)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
