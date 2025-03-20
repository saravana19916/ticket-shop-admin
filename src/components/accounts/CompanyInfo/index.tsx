import { TabPanel } from "@headlessui/react";
import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Index: FC = () => {
  // Define Type for formData
  interface FormDataType {
    logo: string;
    name: string;
    dateOfEstablishment: string;
    country: string;
    tin: string;
    vat: string;
    registration: string;
    sector: boolean;
    address: string;
    poBox: string;
    website: string;
    shortDescription: string;
    longDescription: string;
  }

  // Initialize state with empty values
  const [formData, setFormData] = useState<FormDataType>({
    logo: "",
    name: "",
    dateOfEstablishment: "",
    country: "",
    tin: "",
    vat: "",
    registration: "",
    sector: false,
    address: "",
    poBox: "",
    website: "",
    shortDescription: "",
    longDescription: "",
  });

  const [errors, setErrors] = useState<Partial<FormDataType>>({});

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validation Function
  const validate = () => {
    let tempErrors: Partial<FormDataType> = {};
    if (!formData.name) tempErrors.name = "Organization Name is required";
    if (!formData.dateOfEstablishment) tempErrors.dateOfEstablishment = "Date is required";
    if (!formData.country) tempErrors.country = "Country is required";
    if (!/^\d+$/.test(formData.tin)) tempErrors.tin = "TIN must be a number";
    if (!/^\d+$/.test(formData.vat)) tempErrors.vat = "VAT must be a number";
    if (!/^\d+$/.test(formData.registration)) tempErrors.registration = "Registration must be a number";
    if (formData.shortDescription.length > 150) tempErrors.shortDescription = "Max 150 characters";
    if (formData.longDescription.length > 500) tempErrors.longDescription = "Max 500 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
    }
  };

  return (
    <TabPanel>
      <div className="row" id="myProfile">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Organization Logo</Form.Label>
            <Form.Control type="file" name="logo" onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Organization Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Date of Establishment</Form.Label>
            <Form.Control
              type="date"
              name="dateOfEstablishment"
              value={formData.dateOfEstablishment}
              onChange={handleChange}
              isInvalid={!!errors.dateOfEstablishment}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dateOfEstablishment}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Country of Establishment</Form.Label>
            <Form.Control
              as="select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              isInvalid={!!errors.country}
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.country}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>TIN Number</Form.Label>
            <Form.Control
              type="text"
              name="tin"
              value={formData.tin}
              onChange={handleChange}
              isInvalid={!!errors.tin}
            />
            <Form.Control.Feedback type="invalid">
              {errors.tin}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>VAT Number</Form.Label>
            <Form.Control
              type="text"
              name="vat"
              value={formData.vat}
              onChange={handleChange}
              isInvalid={!!errors.vat}
            />
            <Form.Control.Feedback type="invalid">
              {errors.vat}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Commercial Registration</Form.Label>
            <Form.Control
              type="text"
              name="registration"
              value={formData.registration}
              onChange={handleChange}
              isInvalid={!!errors.registration}
            />
            <Form.Control.Feedback type="invalid">
              {errors.registration}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Sector/Role"
              name="sector"
              checked={formData.sector}
              onChange={handleChange}
              className="my-4"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Short Description (150 characters max)</Form.Label>
            <Form.Control
              as="textarea"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              maxLength={150}
              isInvalid={!!errors.shortDescription}
            />
            <Form.Control.Feedback type="invalid">
              {errors.shortDescription}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Long Description (500 characters max)</Form.Label>
            <Form.Control
              as="textarea"
              name="longDescription"
              value={formData.longDescription}
              onChange={handleChange}
              maxLength={500}
              isInvalid={!!errors.longDescription}
            />
            <Form.Control.Feedback type="invalid">
              {errors.longDescription}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4">
            Submit
          </Button>
        </Form>
      </div>
    </TabPanel>
  );
};

export default Index;
