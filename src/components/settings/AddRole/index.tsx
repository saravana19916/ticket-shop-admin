import { FC, useState } from "react";
import { ButtonPrimary } from "../../styledComponents/styledButton";
import { Form, Table } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
  FormStyledContentSection,
  StyledInputDiv,
} from "../../styledComponents/styledForm";
import CustomTooltip from "../../shared/CustomTooltip";
import { IOptionProps } from "../../../commondata/addListingPageOne";

const roleToVisible: IOptionProps[] = [
  {
    id: "view-only",
    label: "View Only",
    value: "viewonly",
  },
  {
    id: "view-edit",
    label: "View & Edit",
    value: "viewedit",
  },
  {
    id: "no-access",
    label: "No Access",
    value: "noaccess",
  },
];

const roleName = [
  {
    id: "1",
    name: "Dashboard",
  },
  {
    id: "2",
    name: "Listings",
  },
  {
    id: "3",
    name: "Shops",
  },
  {
    id: "4",
    name: "Products",
  },
  {
    id: "5",
    name: "Seating Plan",
  },
  {
    id: "6",
    name: "Promotions",
  },
  {
    id: "7",
    name: "Guest List",
  },
  {
    id: "8",
    name: "Scanning",
  },
  {
    id: "9",
    name: "Access Control",
  },
  {
    id: "10",
    name: "Accreditation",
  },
];

const Index: FC = () => {
  return (
    <>
      <div>
        <div className="row" id="AddRole">
          <div className="p-0 p-md-2 p-lg-4 p-xl-4 mt-7 mb-6">
            <div className="my-5">
              <span className="fw-600 fs-26px">Add Role</span>
            </div>
          </div>
          <div className="col-lg-9 col-12 mb-7">
            <Form.Group>
              <FormLabelStyled className="d-flex align-items-center">
                Role Name <CustomTooltip title="Role Name" />
              </FormLabelStyled>
              <FormInputStyled
                type="text"
                placeholder="Enter Role Name"
                className="form-control"
                value=""
              />
            </Form.Group>
          </div>
          {roleName.map((item: any) => {
            return (
              <div key={item.id} className="col-lg-9 col-12 mb-6">
                <p
                  style={{
                    color: "#121826",
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </p>
                <div className="row">
                  {roleToVisible.map((option) => (
                    <div
                      className="col-lg-4 col-md-6 col-12 ps-4"
                      key={option.id}
                    >
                      <StyledInputDiv className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={option.value}
                          name={option.value}
                          value={option.value}
                        />
                        <label
                          htmlFor={option.value}
                          className="form-check-label ms-3"
                          style={{
                            marginTop: "7px",
                            fontSize: "12px",
                          }}
                        >
                          {option.label}
                        </label>
                      </StyledInputDiv>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="col-lg-9 col-12">
            <FormStyledContentSection>
              <span className="question">
                To have access to issue guest list
              </span>
              <StyledInputDiv className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="addSections"
                  value="yes"
                  id="addSections"
                />
                <label
                  htmlFor="addSections"
                  className="form-check-label ms-3"
                  style={{
                    marginTop: "7px",
                    fontSize: "12px",
                  }}
                >
                  Yes
                </label>
              </StyledInputDiv>
              <StyledInputDiv className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="donNotAddSections"
                  name="addSections"
                  value="no"
                />
                <label
                  htmlFor="donNotAddSections"
                  className="form-check-label ms-3"
                  style={{
                    marginTop: "7px",
                    fontSize: "12px",
                  }}
                >
                  No
                </label>
              </StyledInputDiv>
            </FormStyledContentSection>
          </div>
          <div className="col-lg-9 col-12 mb-7">
            <FormStyledContentSection>
              <span className="question">To have access to seller panel</span>
              <StyledInputDiv className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="addSections"
                  value="yes"
                  id="addSections"
                />
                <label
                  htmlFor="addSections"
                  className="form-check-label ms-3"
                  style={{
                    marginTop: "7px",
                    fontSize: "12px",
                  }}
                >
                  Yes
                </label>
              </StyledInputDiv>
              <StyledInputDiv className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="donNotAddSections"
                  name="addSections"
                  value="no"
                />
                <label
                  htmlFor="donNotAddSections"
                  className="form-check-label ms-3"
                  style={{
                    marginTop: "7px",
                    fontSize: "12px",
                  }}
                >
                  No
                </label>
              </StyledInputDiv>
            </FormStyledContentSection>
          </div>
          <div className="col-lg-9 col-12 mb-7 pe-0">
            <div className="float-end">
              <ButtonPrimary
                type="submit"
                className="btn"
                style={{ minWidth: "118px" }}
              >
                Create
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
