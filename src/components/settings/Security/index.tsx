import { TabPanel } from "@headlessui/react";
import React, { FC, Fragment, useEffect, useState } from "react";
import { ButtonPrimary } from "../../styledComponents/styledButton";
import { Button, Form, ListGroup } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
  StyledInputDiv,
} from "../../styledComponents/styledForm";
import Password from "../../shared/password";
import CustomTooltip from "../../shared/CustomTooltip";
import styled from "styled-components";

const ListItem = styled(ListGroup.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .device-info {
    display: flex;
    flex-direction: column;
  }

  .logout-btn {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;

    &:hover {
      background-color: #c82333;
    }
  }
`;
interface ISecurityProps {}

const recentLogins = [
  { device: "MacBook Pro", lastUsed: "March 20, 2025 - 10:45 AM" },
  { device: "iPhone 13", lastUsed: "March 19, 2025 - 9:30 PM" },
  { device: "Windows PC", lastUsed: "March 18, 2025 - 4:15 PM" },
];

const index: FC<ISecurityProps> = ({}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <TabPanel>
        <div className="row" id="Security">
          <div className="col-lg-9 col-12 mb-7">
            <Form.Group>
              <FormLabelStyled>Username</FormLabelStyled>
              <FormInputStyled
                type="text"
                className="form-control"
                placeholder="Enter Username"
                value=""
              />
            </Form.Group>
          </div>
          <div className="col-lg-9 col-12 mb-7">
            <Form.Group>
              <FormLabelStyled>Password</FormLabelStyled>
              <div className="position-relative">
                <FormInputStyled
                  type={isPasswordVisible ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter Username"
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`position-absolute top-50 translate-middle-y align-middle fs-6 cursor-pointer ${
                    isPasswordVisible ? "ri-eye-line" : "ri-eye-off-line"
                  }`}
                  style={{ right: "20px " }}
                ></i>
              </div>
            </Form.Group>
          </div>
          <div className="col-lg-9 col-12 mb-7">
            <Form.Group>
              <StyledInputDiv className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Authentication"
                  name="Authentication"
                  value="Authentication"
                />
                <label
                  htmlFor="Authentication"
                  className="form-check-label ms-3"
                >
                  Enable Two Factor Authentication
                  <CustomTooltip
                    iconMarginBottom="1px"
                    title="Two Factor Authentication with Email or Phone OTP"
                  />
                </label>
              </StyledInputDiv>
            </Form.Group>
          </div>
          <div className="col-lg-9 col-12 mb-7">
            <h5>Recent Login Activity</h5>
            <ListGroup>
              {recentLogins.map((login, index) => (
                <ListItem key={index}>
                  <div className="device-info">
                    <strong>{login.device}</strong>
                    <small>{login.lastUsed}</small>
                  </div>
                  <Button variant="outline-primary">Log Out</Button>
                </ListItem>
              ))}
            </ListGroup>
          </div>
          <div className="col-lg-9 col-12 mb-7 pe-0">
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
      </TabPanel>
    </>
  );
};

export default index;
