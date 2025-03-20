import { TabPanel } from "@headlessui/react";
import { FC, useState } from "react";
import { Form } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import { ButtonSecondary } from "../../styledComponents/styledButton";

const Index: FC = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({ email: "", mobile: "" });

  const validateEmail = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value) ? "" : "Invalid email format";
  };

  const validateMobile = (value: string) => {
    const mobileRegex = /^[0-9]{10,15}$/;
    return mobileRegex.test(value) ? "" : "Invalid mobile number";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }));
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(e.target.value);
    setErrors((prev) => ({ ...prev, mobile: validateMobile(e.target.value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const mobileError = validateMobile(mobile);

    if (emailError || mobileError) {
      setErrors({ email: emailError, mobile: mobileError });
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <TabPanel>
      <div className="row" id="myProfile">
        <Form onSubmit={handleSubmit}>
          <div className="col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Upload a Photo</FormLabelStyled>
              <FormInputStyled type="file" className="form-control" />
            </Form.Group>
          </div>

          <div className="col-lg-6 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>First Name</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" />
            </Form.Group>
          </div>

          <div className="col-lg-6 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Last Name</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" />
            </Form.Group>
          </div>

          <div className="col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Username</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" />
            </Form.Group>
          </div>

          <div className="col-lg-6 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Date of Birth</FormLabelStyled>
              <FormInputStyled type="date" className="form-control" />
            </Form.Group>
          </div>

          <div className="col-lg-6 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Nationality</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" />
            </Form.Group>
          </div>

          <div className="col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Occupation</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" />
            </Form.Group>
          </div>

          <div className="col-lg-6 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Country of Residence</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" />
            </Form.Group>
          </div>

          <div className="col-lg-6 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>City of Residence</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" />
            </Form.Group>
          </div>

          <div className="col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>PO Box</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" />
            </Form.Group>
          </div>

          <div className="row">
            {/* Email Address */}
            <div className="col-lg-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Email Address (Verify)</FormLabelStyled>
                <FormInputStyled
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </Form.Group>
            </div>

            {/* Mobile Number */}
            <div className="col-lg-6 col-12 mb-6">
              <Form.Group>
                <FormLabelStyled>Mobile Number (Verify)</FormLabelStyled>
                <FormInputStyled
                  type="tel"
                  className="form-control"
                  value={mobile}
                  onChange={handleMobileChange}
                />
                {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
              </Form.Group>
            </div>
          </div>

          {/* Save Button */}
          <div className="col-12 text-end">
            <ButtonSecondary type="submit" className="btn btn-lg py-2 px-4">
              <i className="fa fa-floppy-o d-block d-md-none me-2" aria-hidden="true"></i>
              Save
            </ButtonSecondary>
          </div>
        </Form>
      </div>
    </TabPanel>
  );
};

export default Index;
