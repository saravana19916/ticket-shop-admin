import React, { useState } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import {
  FormInputDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
  StyledInputDiv,
} from "../../styledComponents/styledForm";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";
import CustomTooltip from "../../shared/CustomTooltip";
import RadioButtonGroup from "./RadioButtonGroup";
import DateFlatpickr from "../../shared/DateFlatpickr";

interface IProps {}
interface IActionButtons {
  message?: string;
}

const EmailSettingsAccordion: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.checked ? event.target.id : null);
  };
  return (
    <div className="mt-8">
      <Accordion>
        <ToSection />
        <FromSection />
        <SubjectSection />
        <SendTimeSection />
        <ContentSection />
      </Accordion>
    </div>
  );
};

const ToSection: React.FC = () => (
  <Accordion.Item eventKey="0">
    <Accordion.Header>
      <SectionHeader
        icon="fe fe-check-circle"
        title="To"
        subtitle="Who are you sending this email to?"
      />
    </Accordion.Header>
    <Accordion.Body>
      <Form.Group>
        <FormLabelStyled className="d-flex align-items-center">
          Audience
        </FormLabelStyled>
        <FormInputStyled
          type="text"
          placeholder=""
          className="form-control"
          value=""
        />
      </Form.Group>
      <ActionButtons message="How to organize your audience" />
    </Accordion.Body>
  </Accordion.Item>
);

const FromSection: React.FC = () => (
  <Accordion.Item eventKey="1">
    <Accordion.Header>
      <SectionHeader
        icon="fe fe-check-circle"
        title="From"
        subtitle="Who is sending this email?"
      />
    </Accordion.Header>
    <Accordion.Body>
      <div className="row">
        <div className="col-6">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Name
              <CustomTooltip title="Name" />
            </FormLabelStyled>
            <FormInputStyled
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value=""
            />
          </Form.Group>
        </div>
        <div className="col-6">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Email address
              <CustomTooltip title="Email address" />
            </FormLabelStyled>
            <FormInputStyled
              type="text"
              placeholder="Enter Email address"
              className="form-control"
              value=""
            />
          </Form.Group>
        </div>
        <div className="col-12">
          <FormInputDescriptionStyled>
            We recommend using something subscribers will instantly recognize,
            like your company name.
          </FormInputDescriptionStyled>
        </div>
      </div>
      <ActionButtons message=" How to set default 'from' fields" />
    </Accordion.Body>
  </Accordion.Item>
);

const SubjectSection: React.FC = () => (
  <Accordion.Item eventKey="2">
    <Accordion.Header>
      <SectionHeader
        icon="fe fe-check-circle"
        title="Subject"
        subtitle="What's the subject line for this email?"
      />
    </Accordion.Header>
    <Accordion.Body>
      <div className="row">
        <div className="col-12 mt-3">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Subject
            </FormLabelStyled>
            <FormInputStyled
              type="text"
              placeholder="Enter Subject"
              className="form-control"
              value=""
            />
            <FormInputDescriptionStyled>
              see how your
              <span className="text-primary text-decoration-underline">
                recent subject lines
              </span>
              performed.
              <span className="text-primary text-decoration-underline">
                View our subject line guid
              </span>
            </FormInputDescriptionStyled>
          </Form.Group>
        </div>
        <div className="col-12 mt-3">
          <Form.Group>
            <FormLabelStyled className="d-flex align-items-center">
              Preview Text
            </FormLabelStyled>
            <FormInputStyled
              type="text"
              placeholder="Enter Preview Text"
              className="form-control"
              value=""
            />
            <FormInputDescriptionStyled>
              <span className="text-primary text-decoration-underline">
                Preview Text
              </span>
              appears in the inbox after the subject line.
            </FormInputDescriptionStyled>
          </Form.Group>
        </div>
      </div>
      <ActionButtons />
    </Accordion.Body>
  </Accordion.Item>
);

const SendTimeSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Accordion.Item eventKey="3">
      <Accordion.Header>
        <SectionHeader
          icon="fe fe-check-circle"
          title="Send time"
          subtitle="When should we send this email?"
        />
      </Accordion.Header>
      <Accordion.Body>
        <div className="row">
          <RadioButtonGroup />
          <div className="col-12 mb-3">
            <Form.Group>
              <FormLabelStyled>Delivery date</FormLabelStyled>
              <DateFlatpickr
                type="date"
                placeholder="Enter Delivery date"
                value={null}
                onChange={() => {}}
              />
            </Form.Group>
          </div>
          <div className="col-12 mb-3">
            <FormLabelStyled>Delivery time</FormLabelStyled>
            {[
              {
                id: "standard",
                label: "Send when recipients are most likely to open",
                value: "1",
                desc: "Send time optimization uses audience data to find your best send time, and improves the more you send. For best results, schedule at least 48 hours in advance.",
              },
              {
                id: "premium",
                label: "Send at a specific time",
                value: "2",
                desc: "Send email according to the time zone in your account settings.",
              },
            ].map((option) => (
              <div className=" col-12 g-3 ps-4" key={option.id}>
                <StyledInputDiv className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id={option.value}
                    name={option.value}
                    value={option.value}
                    checked={selectedCategory === option.value}
                    onChange={handleCategoryChange}
                  />
                  <label
                    htmlFor={option.value}
                    className="form-check-label ms-3 d-flex flex-column align-items-lg-start"
                    style={{
                      marginTop: "7px",
                      fontSize: "12px",
                    }}
                  >
                    <span className="fw-bold">{option.label}</span>
                    <span>{option.desc}</span>
                  </label>
                </StyledInputDiv>
              </div>
            ))}
          </div>
        </div>
        <ActionButtons />
      </Accordion.Body>
    </Accordion.Item>
  );
};

const ContentSection: React.FC = () => (
  <Accordion.Item eventKey="4">
    <Accordion.Header>
      <SectionHeader
        icon="fe fe-check-circle"
        title="Content"
        subtitle="Design the content for your email."
      />
    </Accordion.Header>
    <Accordion.Body>
      <ul style={{ listStyle: "disc", marginLeft: "2rem" }}>
        <li>
          With your paid plan, you can now replace the Referral badge with your
          own branding.
        </li>
        <li>
          A plain-text version of this email will be included automatically.{" "}
          <span className="text-primary text-decoration-underline">Edit</span>
        </li>
        <li>To send your email, remove or replace the placeholder content:</li>
        <ul style={{ listStyle: "circle", marginLeft: "2rem" }}>
          <li>"Showcase your products."</li>
          <li>
            "To get started, replace the image above with a striking product
            photo"
          </li>
          <li>
            "Next, use this spot to mention any other products that pair well
            with your main feature"
          </li>
          <li>
            "This is a good place to tell people about any current promotions at
            your store"
          </li>
          <li>1 or more placeholder images</li>
        </ul>
      </ul>
      <span className="text-primary text-decoration-underline fw-semibold">
        Enable Social Cards
      </span>
    </Accordion.Body>
  </Accordion.Item>
);

const SectionHeader: React.FC<{
  icon: string;
  title: string;
  subtitle: string;
}> = ({ icon, title, subtitle }) => (
  <div className="d-flex gap-3">
    <i className={`${icon} fw-bold text-gray fs-18`}></i>
    <div>
      <h4 className="fw-semibold text-black">{title}</h4>
      <span className="text-gray">{subtitle}</span>
    </div>
  </div>
);

const ActionButtons: React.FC<IActionButtons> = ({ message }) => (
  <div className="mt-6">
    <ButtonPrimary
      type="submit"
      className="btn ms-3"
      style={{ minWidth: "118px" }}
    >
      Save
    </ButtonPrimary>
    <ButtonSecondary
      type="submit"
      className="btn ms-3"
      style={{ minWidth: "118px" }}
    >
      Cancel
    </ButtonSecondary>
    {message && (
      <span className="text-primary ms-3">
        <i className="fe fe-help-circle"></i> {message}
      </span>
    )}
  </div>
);

export default EmailSettingsAccordion;
