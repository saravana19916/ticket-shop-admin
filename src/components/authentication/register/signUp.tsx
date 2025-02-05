import React, { FC } from "react";
import { ToastContainer } from "react-toastify";
import Input from "../../shared/input";
import InputGroup from "../../shared/InputGroup";
import CheckBoxGroup from "../../shared/CheckBoxGroup";
import Button from "../../shared/Button";
import { useNavigate } from "react-router-dom";
import CustomToastContainer from "../../shared/CustomToastContainer";
interface ISignupProps {}
interface ICheckBoxFieldProps {
  checkBoxId: string;
  checkBoxClassName: string;
  checkBoxValue: boolean;
  checkBoxLabel: string;
  labelClassName: string;
}
const SignUp: FC<ISignupProps> = () => {
  const checkBoxFields: ICheckBoxFieldProps[] = [
    {
      checkBoxId: "organizer",
      checkBoxClassName: "",
      checkBoxValue: false,
      checkBoxLabel: "Organizer",
      labelClassName: "fw-semibold",
    },
    {
      checkBoxId: "destination",
      checkBoxClassName: "",
      checkBoxValue: false,
      labelClassName: "fw-semibold",
      checkBoxLabel: "Destination",
    },
    {
      checkBoxId: "producer",
      checkBoxClassName: "",
      checkBoxValue: false,
      labelClassName: "fw-semibold",
      checkBoxLabel: "Producer",
    },
    {
      checkBoxId: "contentOwner",
      checkBoxClassName: "",
      checkBoxValue: false,
      labelClassName: "fw-semibold",
      checkBoxLabel: "Content Owner",
    },
    {
      checkBoxId: "performer",
      checkBoxClassName: "",
      checkBoxValue: false,
      labelClassName: "fw-semibold",
      checkBoxLabel: "Performer",
    },
    {
      checkBoxId: "agency",
      labelClassName: "fw-semibold",
      checkBoxClassName: "",
      checkBoxValue: false,
      checkBoxLabel: "Agency",
    },
  ];
  const navigate = useNavigate();
  const _handleOnSubmit = (e: any) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <>
      <CustomToastContainer />
      <div className="row">
        <div className="col-lg-4 col-md-3 col-12"></div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="p-2 p-md-4">
            <div className="login100-form">
              <div className="row">
                <div className="col-12 mb-3">
                  <span className="fw-bold fs-4 pb-5 login-inputs">
                    Sign Up
                  </span>
                </div>
                <div className="col-12 mb-3">
                  <Input
                    name="promoter[identifier]"
                    type="text"
                    placeholder="Organization Name"
                    bgColorClass="bg-light"
                  />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <Input
                    name="promoter[country_id]"
                    type="text"
                    placeholder="Country"
                    bgColorClass="bg-light"
                  />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <Input
                    name="promoter[city_id]"
                    type="text"
                    placeholder="City"
                    bgColorClass="bg-light"
                  />
                </div>
                <div className="col-12 mb-3">
                  <Input
                    name="promoter[commercial_register_number]"
                    type="text"
                    placeholder="Commercial Registration Number"
                    bgColorClass="bg-light"
                  />
                </div>
                <div className="col-12 mb-3">
                  <Input
                    name="promoter[tax_id]"
                    type="text"
                    placeholder="Tax ID/ TIN / VAT"
                    bgColorClass="bg-light"
                  />
                </div>
                <div className="col-12 mb-3">
                  <InputGroup
                    inputName="promoter[email]"
                    inputClassName="p-4"
                    inputStyle=""
                    inputType="email"
                    inputPlaceholder="Email Address"
                    inputGroupId="emailVerify"
                    buttonClassName="bg-primary text-white  p-3 px-5"
                    buttonType="submit"
                    buttonTitle="Verify"
                    handleAction={() => {}}
                  />
                </div>
                <div className="col-12 mb-3">
                  <InputGroup
                    inputName="promoter[phone_1]"
                    inputClassName="p-4"
                    inputStyle=""
                    inputType="text"
                    inputPlaceholder="Mobile number with country code"
                    inputGroupId="mobileVerify"
                    buttonClassName="bg-primary text-white p-3 px-5"
                    buttonType="submit"
                    buttonTitle="Verify"
                    handleAction={() => {}}
                  />
                </div>
                <div className="col-12 mb-3">
                  <div className="row">
                    {checkBoxFields?.map((l: ICheckBoxFieldProps) => (
                      <>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <CheckBoxGroup
                            checkBoxName="promoter[type]"
                            checkBoxId={l.checkBoxId}
                            checkBoxClassName={l.checkBoxClassName}
                            checkBoxValue={false}
                            checkBoxLabel={l.checkBoxLabel}
                            handleCheckboxChange={() => {}}
                            labelClassName={l.labelClassName}
                          />
                        </div>
                      </>
                    ))}
                    {/* <div className="col-lg-4 col-md-6 col-12 mb-3">
                      <CheckBoxGroup
                        checkBoxId=""
                        checkBoxClassName="mb-1"
                        checkBoxValue={false}
                        checkBoxLabel="Organizer"
                        handleCheckboxChange={() => {}}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3"></div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3"></div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3"></div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3"></div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3"></div> */}
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <CheckBoxGroup
                    checkBoxId="promotionsAndDiscounts"
                    checkBoxClassName={""}
                    checkBoxValue={false}
                    checkBoxLabel="I want to informed about special promotions & discounts"
                    labelClassName="text-dark"
                    handleCheckboxChange={() => {}}
                  />
                </div>
                <div className="col-12 mb-3">
                  <CheckBoxGroup
                    checkBoxId="termsAndConditions"
                    checkBoxClassName={""}
                    checkBoxValue={false}
                    checkBoxLabel="By signing up I agree to the "
                    checkBoxLabelLink="Terms and Conditions"
                    labelClassName="text-dark"
                    handleCheckboxChange={() => {}}
                  />
                </div>
                <div className="col-12 mb-3">
                  <Button
                    title="Sign Up"
                    className="bg-primary text-white w-100 text-center fs-6 p-3"
                    style=""
                    type="submit"
                    onClick={(e: any) => _handleOnSubmit(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 col-12"></div>
      </div>
    </>
  );
};

export default SignUp;
