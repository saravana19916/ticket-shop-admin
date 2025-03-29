import React, { FC, useState } from "react";
import { Form } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import {
  ButtonPrimary,
  IconButtonPrimary,
} from "../../styledComponents/styledButton";
import CompanyCR from "./CompanyCR";
import CompanyArticlesAssociation from "./CompanyArticlesAssociation";
import ComputerCard from "./ComputerCard";
import IBANCertificate from "./IBANCertificate";
import { PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface IProps {}
const index: FC<IProps> = () => {
  const [authorizedActivitiesData, setAuthorizedActivitiesData] = useState<
    string[]
  >([]);

  const handleAddRule = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newRule = event.currentTarget.elements.namedItem(
      "newRule"
    ) as HTMLInputElement;
    if (newRule?.value.trim()) {
      setAuthorizedActivitiesData([
        ...authorizedActivitiesData,
        newRule.value.trim(),
      ]);
      newRule.value = ""; // Clear the input after adding
    }
  };

  const handleRemoveRule = (rule: string) => {
    setAuthorizedActivitiesData(
      authorizedActivitiesData.filter((r) => r !== rule)
    );
  };

  return (
    <>
      <div className="row mt-3" id="Documentation">
        <div className="col-lg-9 col-12 mb-7">
          <CompanyCR />
        </div>
        <div className="col-lg-9 col-12 mb-7">
          <CompanyArticlesAssociation />
        </div>
        <div className="col-lg-9 col-12 mb-7">
          <ComputerCard />
        </div>
        <div className="col-lg-9 col-12 mb-7">
          <IBANCertificate />
        </div>
        <div className="col-lg-9 col-12 mb-7">
          <Form.Group>
            <FormLabelStyled>Official Address </FormLabelStyled>
            <FormInputStyled
              type="text"
              className="form-control"
              placeholder="Enter Official Address "
              value=""
            />
          </Form.Group>
        </div>
        <div className="col-lg-9 col-12 mb-6">
          <Form.Group>
            <FormLabelStyled>Authorized Activities </FormLabelStyled>
            <Form onSubmit={handleAddRule}>
              <div className="d-flex gap-3 flex-wrap flex-md-nowrap">
                <div className="flex-grow-1">
                  <Form.Group>
                    <FormInputStyled
                      type="text"
                      className="form-control"
                      name="newRule"
                      placeholder="Enter a Authorized Activities"
                    />
                  </Form.Group>
                </div>
                <div>
                  <IconButtonPrimary
                    className="btn px-4"
                    style={{ marginBottom: "7px" }}
                    type="button"
                  >
                    <PlusIcon className="h-5 w-5 fw-bold" />
                  </IconButtonPrimary>
                </div>
              </div>
            </Form>
          </Form.Group>
        </div>
        <div className="col-lg-9 col-12 mb-7 ">
          <div className="row mx-3">
            {authorizedActivitiesData?.map((l: string, index: number) => (
              <div
                key={index}
                className="col-12 px-0 d-flex justify-content-between align-items-center py-3 border-bottom"
              >
                <span className="d-inline-block me-2">
                  {index + 1}. {l}
                </span>{" "}
                <XCircleIcon
                  className="h-5 w-5 text-gray cursor-pointer flex-shrink-0"
                  onClick={() => handleRemoveRule(l)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-9 col-12 mb-7">
          <div className="float-end">
            <ButtonPrimary
              type="submit"
              className="btn"
              style={{ minWidth: "118px" }}
            >
              Submit
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
