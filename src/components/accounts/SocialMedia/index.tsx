import { TabPanel } from "@headlessui/react";
import { FC, useState } from "react";
import { Form } from "react-bootstrap"; // Correct import for Form
import { ButtonPrimary } from "../../styledComponents/styledButton";

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
          {Object.keys(formData).map((key) => (
            <Form.Group key={key} className="mb-3">
              <Form.Label>
                {key.charAt(0).toUpperCase() + key.slice(1)} Channel
              </Form.Label>
              <input
                type="text"
                name={key}
                value={formData[key as keyof SocialMediaFormData]}
                onChange={handleChange}
                className={`form-control ${
                  errors[key as keyof SocialMediaFormData] ? "is-invalid" : ""
                }`}
              />
              {errors[key as keyof SocialMediaFormData] && (
                <div className="invalid-feedback">
                  {errors[key as keyof SocialMediaFormData]}
                </div>
              )}
            </Form.Group>
          ))}

          <ButtonPrimary type="submit" className="btn">
            <i className="fa fa-arrow-right d-block d-md-none" aria-hidden="true"></i>{" "}
            <span>Save</span>
          </ButtonPrimary>
        </Form>
      </div>
    </TabPanel>
  );
};

export default Index;
