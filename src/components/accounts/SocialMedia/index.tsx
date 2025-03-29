import { TabPanel } from "@headlessui/react";
import { FC, useState } from "react";
import { Form } from "react-bootstrap"; // Correct import for Form
import { ButtonPrimary } from "../../styledComponents/styledButton";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";

interface SocialMediaFormData {
  facebook: string;
  instagram: string;
  tiktok: string;
  twitter: string;
  linkedin: string;
  threads: string;
  whatsapp: string;
}

const Index: FC = () => {
  const [formData, setFormData] = useState<SocialMediaFormData>({
    facebook: "",
    instagram: "",
    tiktok: "",
    twitter: "",
    linkedin: "",
    threads: "",
    whatsapp: "",
  });

  const [errors, setErrors] = useState<Partial<SocialMediaFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors: Partial<SocialMediaFormData> = {};
    const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([/\w.-]*)*\/?$/; // URL validation regex

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        tempErrors[key as keyof SocialMediaFormData] = `${key.charAt(0).toUpperCase() + key.slice(1)} channel is required`;
      } else if (!urlRegex.test(value)) {
        tempErrors[key as keyof SocialMediaFormData] = "Please enter a valid URL";
      }
    });

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
      console.log(formData);
    }
  };

  return (
    <TabPanel>
      <div className="row" id="myProfile">
        <Form onSubmit={handleSubmit}>
          <div className="col-lg-9 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Facebook Channel</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" placeholder="Enter Facebook channel" />
            </Form.Group>
          </div>

          <div className="col-lg-9 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Instagram Channel</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" placeholder="Enter Instagram channel" />
            </Form.Group>
          </div>

          <div className="col-lg-9 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Tiktok Channel</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" placeholder="Enter Tiktok channel" />
            </Form.Group>
          </div>

          <div className="col-lg-9 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Twitter(X) Channel</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" placeholder="Enter Twitter(X) channel" />
            </Form.Group>
          </div>

          <div className="col-lg-9 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Linkedin Channel</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" placeholder="Enter Linkedin channel" />
            </Form.Group>
          </div>

          <div className="col-lg-9 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Threads</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" placeholder="Enter Threads" />
            </Form.Group>
          </div>

          <div className="col-lg-9 col-12 mb-6">
            <Form.Group>
              <FormLabelStyled>Whatsapp Number</FormLabelStyled>
              <FormInputStyled type="text" className="form-control" placeholder="Enter Whatsapp number" />
            </Form.Group>
          </div>

          <div className="col-lg-9 col-12 mb-6 text-end">  
            <ButtonPrimary
              type="submit"
              className="btn m-3"
              style={{ minWidth: "118px" }}
            >
              Submit
            </ButtonPrimary>
          </div>
        </Form>
      </div>
    </TabPanel>
  );
};

export default Index;
