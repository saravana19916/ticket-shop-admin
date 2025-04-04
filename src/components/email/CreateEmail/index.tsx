import React, { FC, Fragment, useState } from "react";
import { Accordion, Badge, Dropdown, Form } from "react-bootstrap";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Imagesdata } from "../../../commondata/commonimages";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";
import EditableInput from "./EditableInput";
import Facebook from "../../../assets/images/facebook.svg";
import Twitter from "../../../assets/images/twitter.svg";
import Instagram from "../../../assets/images/instagram.svg";
import Template from "../../../assets/images/template.jpg";
import EmailLinkEditor from "./EmailLinkEditor";
import SocialPost from "./SocialPost";
import SettingsTracking from "./SettingsTracking";
import {
  FormInputDescriptionStyled,
  FormInputStyled,
  FormLabelStyled,
  StyledInputDiv,
} from "../../styledComponents/styledForm";
import CustomTooltip from "../../shared/CustomTooltip";
import DateFlatpickr from "../../shared/DateFlatpickr";
import RadioButtonGroup from "./RadioButtonGroup";
import EmailSettingsAccordion from "./EmailSettingsAccordion";

interface IProps {}

const socialData = [
  {
    icon: Facebook,
    name: "Facebook",
    connectText: "Connect Facebook",
    link: "#",
  },
  {
    icon: Twitter,
    name: "X (formerly Twitter)",
    connectText: "Connect X (formerly Twitter)",
    link: "#",
  },
  {
    icon: Instagram,
    name: "Instagram",
    connectText: "Connect Instagram",
    link: "#",
  },
];
const initialItems = [
  "You're not using Inbox to manage replies.",
  "Your embedded videos will not auto-convert into linked thumbnail images.",
  "You're tracking opens.",
  "You're tracking clicks.",
  "You're not tracking plain-text clicks.",
  "You're not tracking e-commerce link activity.",
];

const index: FC<IProps> = () => {
  const [isEditName, setIsEditName] = useState<boolean>(false);
  const [emailLink, setEmailLink] = useState<string>(
    "https://mail.com/[xxxxxx]/[xxxxx]"
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSaveLink = (newLink: string) => {
    setEmailLink(newLink);
  };
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.checked ? event.target.id : null);
  };
  return (
    <>
      <div className="mb-6">
        <div className="my-5 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <ChevronLeftIcon className="w-5 h-7" />
            <img className=" w-5 h-5" src={Imagesdata("Favicon")} />
            <span className="fw-600 fs-16px">Let's get started!</span>
            <Badge className="me-2" bg={"default"}>
              Draft
            </Badge>
          </div>
          <div>
            <ButtonSecondary
              type="submit"
              className="btn ms-3"
              style={{ minWidth: "118px" }}
            >
              Finish Later
            </ButtonSecondary>
            <ButtonPrimary
              type="submit"
              className="btn ms-3"
              style={{ minWidth: "118px" }}
            >
              Send
            </ButtonPrimary>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <EditableInput initialValue="Untitled" />
          <EmailSettingsAccordion />
          <EmailLinkEditor initialLink={emailLink} onSave={handleSaveLink} />
          <div className="d-flex flex-column gap-4 mt-8">
            <h2 className="fw-600 fs-16px mb-3">
              Add A Social Post To Your Email
            </h2>
            {socialData.map((social, index) => (
              <SocialPost
                key={index}
                icon={social.icon}
                name={social.name}
                connectText={social.connectText}
                link={social.link}
              />
            ))}
            <p>
              To add an instagram post, connect an Instagram business profile to
              your Facebook page.
              <a href="#" className="text-decoration-underline">
                Learn how to connect Instagram
              </a>
            </p>
          </div>
          <SettingsTracking items={initialItems} />
        </div>
        <div className="col-4">
          <div
            style={{ backgroundColor: "#FFF7F6", borderRadius: "8px" }}
            className="position-relative p-9"
          >
            <img src={Template} alt="temp" className="w-100" />
            <ButtonPrimary
              type="submit"
              className="btn ms-3 position-absolute top-50 start-50 translate-middle"
              style={{ minWidth: "118px" }}
            >
              Design email
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
