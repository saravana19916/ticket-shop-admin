import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import {
  Alert,
  Button,
  Card,
  Col,
  Collapse,
  Form,
  InputGroup,
  ListGroup,
  Modal,
  Offcanvas,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Imagesdata } from "./commonimages";
import DualListBox from "react-dual-listbox";
import { Children, Component, Fragment, useState } from "react";
import { options } from "./selectdata";
import { Compact } from "@uiw/react-color";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { ChromePicker, SketchPicker } from "react-color";
import "react-dual-listbox/lib/react-dual-listbox.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import validator from "validator";
import Slider from "@mui/material/Slider";

//  BOOTSTRAP

// AvatarData
interface simpleavatar {
  id: number;
  src1: string;
}
export const Simpleavatar: simpleavatar[] = [
  { id: 1, src1: Imagesdata("users1") },
  { id: 2, src1: Imagesdata("users2") },
  { id: 3, src1: Imagesdata("users1") },
  { id: 4, src1: Imagesdata("users2") },
  { id: 5, src1: Imagesdata("users3") },
];
//Avatar with badge
interface badge {
  id: number;
  src1: string;
  color: string;
  data: string;
}
export const Badges: badge[] = [
  { id: 1, src1: Imagesdata("users21"), color: "primary", data: "3" },
  { id: 2, src1: Imagesdata("users5"), color: "secondary", data: "1" },
  { id: 3, src1: Imagesdata("users9"), color: "danger", data: "4" },
  { id: 4, src1: Imagesdata("users6"), color: "success", data: "6" },
  { id: 5, src1: Imagesdata("users7"), color: "warning", data: "4" },
];
//Radiusavatar
interface radius {
  id: number;
  src1: string;
  icon: string;
  color: string;
}
export const radiuses: radius[] = [
  { id: 1, src1: Imagesdata("users21"), icon: "fe fe-edit", color: "primary" },
  {
    id: 2,
    src1: Imagesdata("users5"),
    icon: "fe fe-arrow-down",
    color: "secondary",
  },
  { id: 3, src1: Imagesdata("users9"), icon: "fe fe-lock", color: "danger" },
  { id: 4, src1: Imagesdata("users6"), icon: "fe fe-camera", color: "success" },
  { id: 5, src1: Imagesdata("users7"), icon: "fe fe-bell", color: "warning" },
];
//Radius avatar initial color
interface avatarinitial {
  id: number;
  class: string;
  color: string;
  className: string;
}
export const avatarinitials: avatarinitial[] = [
  { id: 1, class: "A", color: "success", className: "avatar-sm" },
  { id: 2, class: "B", color: "warning", className: "bradius" },
  { id: 3, class: "C", color: "danger", className: "avatar-md" },
  { id: 4, class: "D", color: "info", className: "avatar-lg" },
  { id: 5, class: "GE", color: "primary", className: "avatar-xl" },
  { id: 6, class: "A.N", color: "secondary", className: "avatar-xxl" },
];
//Avatar list
interface avatarlist {
  id: number;
  src1: string;
}
export const Avatarlist: avatarlist[] = [
  { id: 1, src1: Imagesdata("users21") },
  { id: 2, src1: Imagesdata("users21") },
  { id: 3, src1: Imagesdata("users9") },
  { id: 4, src1: Imagesdata("users21") },
  { id: 5, src1: Imagesdata("users11") },
];
//Avatar size
interface avatarsize {
  id: number;
  src1: string;
  class: string;
}
export const avatarsizes: avatarsize[] = [
  { id: 1, src1: Imagesdata("users4"), class: "avatar-sm" },
  { id: 2, src1: Imagesdata("users3"), class: "" },
  { id: 3, src1: Imagesdata("users5"), class: "avatar-md" },
  { id: 4, src1: Imagesdata("users6"), class: "avatar-lg" },
  { id: 5, src1: Imagesdata("users4"), class: "avatar-xl" },
  { id: 6, src1: Imagesdata("users7"), class: "avatar-xxl" },
];

//Avatar Rounded
// AvatarData1
interface simpleavatar1 {
  id: number;
  src1: string;
}
export const Simpleavatar1: simpleavatar1[] = [
  { id: 1, src1: Imagesdata("users12") },
  { id: 2, src1: Imagesdata("users13") },
  { id: 3, src1: Imagesdata("users11") },
  { id: 4, src1: Imagesdata("users12") },
  { id: 5, src1: Imagesdata("users14") },
];
//Avatar list1
interface avatarlist1 {
  id: number;
  src1: string;
}
export const Avatarlist1: avatarlist1[] = [
  { id: 1, src1: Imagesdata("users12") },
  { id: 2, src1: Imagesdata("users1") },
  { id: 3, src1: Imagesdata("users19") },
  { id: 4, src1: Imagesdata("users2") },
  { id: 5, src1: Imagesdata("users14") },
];
//Avatar size
interface avatarsize1 {
  id: number;
  src1: string;
  class: string;
}
export const avatarsizes1: avatarsize1[] = [
  { id: 1, src1: Imagesdata("users15"), class: "avatar-sm" },
  { id: 2, src1: Imagesdata("users13"), class: "" },
  { id: 3, src1: Imagesdata("users16"), class: "avatar-md" },
  { id: 4, src1: Imagesdata("users17"), class: "avatar-lg" },
  { id: 5, src1: Imagesdata("users14"), class: "avatar-xl" },
  { id: 6, src1: Imagesdata("users18"), class: "avatar-xxl" },
];
//Avatar with badge1
interface badge1 {
  id: number;
  src1: string;
  color: string;
  data: string;
}
export const Badges1: badge1[] = [
  { id: 1, src1: Imagesdata("users19"), color: "primary", data: "3" },
  { id: 2, src1: Imagesdata("users15"), color: "secondary", data: "1" },
  { id: 3, src1: Imagesdata("users20"), color: "danger", data: "4" },
  { id: 4, src1: Imagesdata("users11"), color: "success", data: "6" },
  { id: 5, src1: Imagesdata("users17"), color: "warning", data: "4" },
];
//Badge pills
//Badges
interface badge2 {
  id: number;
  color: string;
}
export const badges2: badge2[] = [
  { id: 1, color: "default" },
  { id: 2, color: "primary" },
  { id: 3, color: "success" },
  { id: 4, color: "danger" },
  { id: 5, color: "info" },
];
//Pill Badges
interface badgepill {
  id: number;
  color: string;
}
export const badgepills: badgepill[] = [
  { id: 1, color: "default" },
  { id: 2, color: "primary" },
  { id: 3, color: "success" },
  { id: 4, color: "danger" },
  { id: 5, color: "info" },
  { id: 6, color: "warning" },
];
//Pill Badges
interface Buttonbadge {
  id: number;
  color: string;
}
export const Buttonbadges: Buttonbadge[] = [
  { id: 1, color: "primary" },
  { id: 2, color: "secondary" },
  { id: 3, color: "success" },
  { id: 4, color: "info" },
  { id: 5, color: "warning" },
  { id: 6, color: "danger" },
];
//Buttons Data
//default buttons
interface defaultbutton {
  id: number;
  color: string;
  class: string;
}
export const defaultbuttons: defaultbutton[] = [
  { id: 1, color: "default", class: "Default" },
  { id: 2, color: "primary", class: "Primary" },
  { id: 3, color: "secondary", class: "Secondary" },
  { id: 4, color: "success", class: "Success" },
  { id: 5, color: "info", class: "Info" },
  { id: 6, color: "warning", class: "Warning" },
  { id: 7, color: "danger", class: "Danger" },
];
// buttons with icon
interface Buttonicon {
  id: number;
  color: string;
  class: string;
  icon: string;
}
export const Buttonicons: Buttonicon[] = [
  { id: 1, color: "dark", class: "Upload", icon: "fe fe-upload" },
  { id: 2, color: "warning", class: "I like", icon: "fe fe-heart" },
  { id: 3, color: "success", class: "I agree", icon: "fe fe-check" },
  { id: 4, color: "primary", class: "More", icon: "fe fe-plus" },
  { id: 5, color: "danger", class: "Link", icon: "fe fe-link" },
  { id: 6, color: "info", class: "Comment", icon: "fe fe-message-circle" },
];
//icon buttons
interface iconButton {
  id: number;
  color: string;
  icon: string;
}
export const iconButtons: iconButton[] = [
  { id: 1, color: "primary", icon: "fe fe-activity" },
  { id: 2, color: "dark", icon: "fe fe-github" },
  { id: 3, color: "success", icon: "fe fe-bell" },
  { id: 4, color: "warning", icon: "fe fe-star" },
  { id: 5, color: "purple", icon: "fe fe-trash" },
  { id: 6, color: "secondary", icon: "fe fe-git-merge" },
];
//social buttons
interface socialbutton {
  id: number;
  color: string;
  icon: string;
}
export const socialbuttons: socialbutton[] = [
  { id: 1, color: "facebook", icon: "fa fa-facebook" },
  { id: 2, color: "twitter", icon: "fa fa-twitter" },
  { id: 3, color: "google", icon: "fa fa-google" },
  { id: 4, color: "youtube", icon: "fa fa-youtube" },
  { id: 5, color: "vimeo", icon: "fa fa-vimeo" },
  { id: 6, color: "dribbble", icon: "fa fa-dribbble" },
  { id: 7, color: "github", icon: "fa fa-github" },
  { id: 8, color: "instagram", icon: "fa fa-instagram" },
  { id: 9, color: "pinterest", icon: "fa fa-pinterest" },
];
//social buttons
interface socialbutton1 {
  id: number;
  color: string;
  class: string;
}
export const socialbuttons1: socialbutton1[] = [
  { id: 1, color: "blue", class: "Blue" },
  { id: 2, color: "azure", class: "Azure" },
  { id: 3, color: "indigo", class: "Indigo" },
  { id: 4, color: "purple", class: "Purple" },
  { id: 5, color: "pink", class: "Pink" },
  { id: 6, color: "red", class: "Red" },
  { id: 7, color: "orange", class: "Orange" },
  { id: 8, color: "yellow", class: "Yellow" },
  { id: 9, color: "lime", class: "Lime" },
  { id: 10, color: "green", class: "Green" },
  { id: 11, color: "teal", class: "Teal" },
  { id: 12, color: "cyan", class: "Cyan" },
  { id: 13, color: "gray", class: "Gray" },
  { id: 14, color: "gray-dark", class: "dark gray" },
];
//social buttons
interface socialbutton2 {
  id: number;
  color: string;
  icon: string;
}
export const socialbuttons2: socialbutton2[] = [
  { id: 1, color: "facebook", icon: "fa fa-facebook" },
  { id: 2, color: "twitter", icon: "fa fa-twitter" },
  { id: 3, color: "google", icon: "fa fa-google" },
  { id: 4, color: "youtube", icon: "fa fa-youtube" },
  { id: 5, color: "vimeo", icon: "fa fa-vimeo" },
  { id: 6, color: "dribbble", icon: "fa fa-dribbble" },
  { id: 7, color: "github", icon: "fa fa-github" },
  { id: 8, color: "instagram", icon: "fa fa-instagram" },
  { id: 9, color: "pinterest", icon: "fa fa-pinterest" },
  { id: 10, color: "vk", icon: "fa fa-vk" },
  { id: 11, color: "rss", icon: "fa fa-rss" },
  { id: 12, color: "flickr", icon: "fa fa-flickr" },
];
//COLORS
//contexual colors
interface color {
  id: number;
  data: string;
  text: string;
  color: string;
}
export const colors: color[] = [
  { id: 1, color: "primary", data: ".bg-primary", text: "#6c5ffc" },
  { id: 2, color: "info", data: ".bg-info", text: "#1170e4" },
  { id: 3, color: "secondary", data: ".bg-secondary", text: "#05c3fb" },
  { id: 4, color: "warning", data: ".bg-warning", text: "#f7b731" },
  { id: 5, color: "danger", data: ".bg-danger", text: "#e82646" },
  { id: 6, color: "success", data: ".bg-success", text: "#09ad95" },
];
//transperant colors
interface transcolor {
  id: number;
  data: string;
  text: string;
  color: string;
}
export const transcolors: transcolor[] = [
  {
    id: 1,
    color: "primary",
    data: ".bg-primary-transparent",
    text: "rgba(108, 95, 252, 0.1)",
  },
  {
    id: 2,
    color: "secondary",
    data: ".bg-secondary-transparent",
    text: "rgba(5, 195, 251, 0.1)",
  },
  {
    id: 3,
    color: "success",
    data: ".bg-success-transparent",
    text: "rgba(0, 230, 130, 0.1)",
  },
  {
    id: 4,
    color: "warning",
    data: ".bg-warning-transparent",
    text: "rgba(255, 162, 43, 0.1)",
  },
  {
    id: 5,
    color: "danger",
    data: ".bg-danger-transparent",
    text: "rgba(255, 56, 43, 0.1)",
  },
  { id: 6, color: "info", data: ".bg-info-transparent", text: "#09ad95" },
];
//gradient colors
interface gradientcolor {
  id: number;
  data: string;
  color: string;
}
export const gradientcolors: gradientcolor[] = [
  { id: 1, color: "primary", data: ".bg-primary-gradient" },
  { id: 2, color: "secondary", data: ".bg-secondary-gradient" },
  { id: 3, color: "success", data: ".bg-success-gradient" },
  { id: 4, color: "warning", data: ".bg-warning-gradient" },
  { id: 5, color: "danger", data: ".bg-danger-gradient" },
  { id: 6, color: "info", data: ".bg-info-gradient" },
];
//other colors
interface othercolor {
  id: number;
  data: string;
  color: string;
  class: string;
  text: string;
}
export const othercolors: othercolor[] = [
  { id: 1, color: "blue", data: ".bg-blue", text: "#3223f1", class: "Blue" },
  { id: 2, color: "teal", data: ".bg-teal", text: "#1caf9f", class: "Teal" },
  { id: 3, color: "azure", data: ".bg-azure", text: "#45aaf2", class: "Azure" },
  {
    id: 4,
    color: "orange",
    data: ".bg-orange",
    text: "#fc7303",
    class: "Orange",
  },
  { id: 5, color: "cyan", data: ".bg-cyan", text: "#007ea7", class: "Cyan" },
  {
    id: 6,
    color: "yellow",
    data: ".bg-yellow",
    text: "#FBB034",
    class: "Yellow",
  },
  { id: 7, color: "gray", data: ".bg-gray", text: "#5a6970", class: "Gray" },
  {
    id: 8,
    color: "purple",
    data: ".bg-purple",
    text: "#8927ec",
    class: "Purple",
  },
  { id: 9, color: "lime", data: ".bg-lime", text: "#7bd235", class: "Lime" },
  {
    id: 10,
    color: "gray-dark",
    data: ".bg-gray-dark",
    text: "#343a40",
    class: "Gray-dark",
  },
  {
    id: 11,
    color: "green",
    data: ".bg-green",
    text: "#4ecc48",
    class: "Green",
  },
  { id: 12, color: "pink", data: ".bg-pink", text: "#fc5296", class: "Pink" },
  {
    id: 13,
    color: "secondary",
    data: ".bg-secondary",
    text: "#05c3fb",
    class: "Secondary",
  },
  { id: 14, color: "red", data: ".bg-red", text: "#e73827", class: "Red" },
  {
    id: 15,
    color: "indigo",
    data: ".bg-indigo",
    text: "#6574cd",
    class: "Indigo",
  },
];

//Dropdowns Data
//single button dropdown
interface dropdown {
  id: number;
  color: string;
}
export const dropdowns: dropdown[] = [
  { id: 1, color: "default" },
  { id: 2, color: "primary" },
  { id: 3, color: "secondary" },
  { id: 4, color: "info" },
  { id: 5, color: "warning" },
  { id: 6, color: "danger" },
];
//split button dropdown
interface dropdown1 {
  id: number;
  color: string;
}
export const dropdowns1: dropdown1[] = [
  { id: 1, color: "default" },
  { id: 2, color: "primary-pils" },
  { id: 3, color: "secondary" },
  { id: 4, color: "info" },
  { id: 5, color: "warning" },
  { id: 6, color: "danger" },
];
//**CARD DESIGN DATA **//
//Transoperant color
interface card {
  class: string;
}
export const cards: card[] = [
  { class: "text-primary bg-primary" },
  { class: "text-secondary bg-secondary" },
  { class: "text-success bg-success" },
  { class: "text-danger bg-danger" },
  { class: "text-info bg-info" },
  { class: "text-warning bg-warning" },
];
//Special Title
interface title {
  id: number;
  class: string;
}
export const titles: title[] = [
  { id: 1, class: "" },
  { id: 2, class: "text-end" },
  { id: 3, class: "text-center" },
];
//Card Title
interface cardtitle {
  id: number;
  class: string;
}
export const cardtitles: cardtitle[] = [
  { id: 1, class: "primary" },
  { id: 2, class: "secondary" },
  { id: 3, class: "success" },
  { id: 4, class: "danger" },
  { id: 5, class: "info" },
  { id: 6, class: "warning" },
];
interface sed {
  id: number;
  class: string;
}
export const seds: sed[] = [
  { id: 1, class: "text-start" },
  { id: 2, class: "text-center" },
  { id: 3, class: "text-end" },
];
// fullscreen button

export function FullScreenDialog() {
  const [expanded, setExpanded] = useState(true);
  const [fullScreen, setFullscreen] = useState("true");
  const [show, setShow] = useState(false);

  const fullscreenmodalClose = () => setShow(false);

  function handleShow(breakpoint: any) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [shows, setShows] = useState(true);

  return (
    <div>
      {shows ? (
        <Card>
          <Card.Header>
            <Card.Title>Fullscreen button</Card.Title>
            <div className="card-options">
              <Link to="#" onClick={handleExpandClick}>
                {" "}
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => handleShow(true)}>
                <i className="fe fe-maximize"></i>
              </Link>

              <Link to="#" onClick={() => setShows(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
              <Modal
                show={show}
                fullscreen={fullScreen}
                onHide={() => setShow(false)}
              >
                <Modal.Header>
                  <Modal.Title>Modal</Modal.Title>
                  <span
                    className="d-flex ms-auto pe-4"
                    onClick={fullscreenmodalClose}
                  >
                    <i className="fe fe-x ms-auto"></i>
                  </span>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={fullscreenmodalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={fullscreenmodalClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Card.Header>
          <Collapse in={expanded}>
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
}
// Card with success alert

export function CardwithSuccessAlert() {
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card>
          <Card.Header>
            <Card.Title>Card with alert</Card.Title>
            <div className="card-options">
              <Link to="#" onClick={handleExpandClick}>
                {" "}
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout={3000}>
            <div>
              <Alert variant="success" className="mb-0 br-0">
                Adding action was successful
              </Alert>

              <Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </Card.Body>
            </div>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
}

// Card with danger alert

export function CardwithDangerAlert() {
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card>
          <Card.Header>
            <Card.Title>Card with alert</Card.Title>
            <div className="card-options">
              <Link to="#" onClick={handleExpandClick}>
                {" "}
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout={3000}>
            <div>
              <Alert variant="danger" className="mb-0 br-0">
                Adding action failed
              </Alert>
              <Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </Card.Body>
            </div>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
}

// Initial collapsed card

export function InitialCollapsedCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card>
          <Card.Header>
            <Card.Title>Initial collapsed card</Card.Title>
            <div className="card-options">
              <Link to="#" onClick={handleExpandClick}>
                {" "}
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout={3000}>
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
}
//*** CRYPTOCURRENCIES ***//

export const COLUMNS: any = [
  {
    Header: "NAME",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "ICON",
    accessor: "ICON",
    className: "text-center ",
  },
  {
    Header: "PRICE",
    accessor: "PRICE",
    className: "text-center ",
  },
  {
    Header: "% 24H",
    accessor: "H",
    className: "text-center ",
  },
  {
    Header: "MARKET CAP",
    accessor: "MARKETCAP",
    className: "text-center ",
  },
  {
    Header: "CIRCULATING SUPPLY",
    accessor: "CIRCULATINGSUPPLY",
    className: "text-center ",
  },
  {
    Header: "VOLUME 24H",
    accessor: "VOLUME",
    className: "text-center ",
  },
  {
    Header: "CMGR/MONTH",
    accessor: "CMGR",
    className: "text-center ",
  },
  {
    Header: "INFLATION",
    accessor: "INFLATION",
    className: "text-center ",
  },
];

export const DATATABLE: any = [
  {
    NAME: "Bitcoin",
    ICON: <img src={Imagesdata("bitcoin")} className="w-4 h-4" alt="" />,
    PRICE: "$10513.00",
    H: "-7%",
    MARKETCAP: "$179,470,305,923",
    CIRCULATINGSUPPLY: "16,819,612 BTC",
    VOLUME: "$9,578,830,000",
    CMGR: "8.11% / 57",
    INFLATION: "0.36%",
  },
  {
    NAME: "Ethereum",
    ICON: <img src={Imagesdata("ethereum")} className="w-4 h-4" alt="" />,
    PRICE: "$966.61",
    H: "-6%",
    MARKETCAP: "$95,270,125,036",
    CIRCULATINGSUPPLY: "97,145,024 ETH",
    VOLUME: "$3,466,060,000",
    CMGR: "22.62% / 29",
    INFLATION: "0.64%",
  },
  {
    NAME: "BRipple",
    ICON: <img src={Imagesdata("ripple")} className="w-4 h-4" alt="" />,
    PRICE: "$1.2029",
    H: "-11%",
    MARKETCAP: "$47,649,145,657",
    CIRCULATINGSUPPLY: "38,739,144,704 XRP",
    VOLUME: "$2,081,450,000",
    CMGR: "10.85% / 53",
    INFLATION: "0.06%",
  },
  {
    NAME: "Bitcoin Cash",
    ICON: <img src={Imagesdata("bitcoincash")} className="w-4 h-4" alt="" />,
    PRICE: "$1547.00",
    H: "-11%",
    MARKETCAP: "$26,720,210,956",
    CIRCULATINGSUPPLY: "16,925,988 BCH",
    VOLUME: "$598,337,000",
    CMGR: "21.30% / 6",
    INFLATION: "0.32%",
  },
  {
    NAME: "Cardano",
    ICON: <img src={Imagesdata("cardano")} className="w-4 h-4" alt="" />,
    PRICE: "$0.550768",
    H: "-9%",
    MARKETCAP: "$14,279,800,786",
    CIRCULATINGSUPPLY: "25,927,069,696 ADA",
    VOLUME: "$466,381,000",
    CMGR: "205.35% / 3",
    INFLATION: "0.00%",
  },
  {
    NAME: "Litecoin",
    ICON: <img src={Imagesdata("litecoin")} className="w-4 h-4" alt="" />,
    PRICE: "$173.86",
    H: "-7%",
    MARKETCAP: "$9,670,920,267",
    CIRCULATINGSUPPLY: "54,873,584 LTC",
    VOLUME: "$430,524,000",
    CMGR: "6.87% / 57",
    INFLATION: "0.80%",
  },
  {
    NAME: "EOS",
    ICON: <img src={Imagesdata("eos")} className="w-4 h-4" alt="" />,
    PRICE: "$13.394",
    H: "5%",
    MARKETCAP: "$8,420,143,033",
    CIRCULATINGSUPPLY: "621,412,800 EOS",
    VOLUME: "$2,864,780,000",
    CMGR: "53.25% / 6",
    INFLATION: "11.56%",
  },
  {
    NAME: "NEM",
    ICON: <img src={Imagesdata("nem")} className="w-4 h-4" alt="" />,
    PRICE: "$0.935049",
    H: "-11%",
    MARKETCAP: "$8,415,440,999",
    CIRCULATINGSUPPLY: "8,999,999,488 XEM",
    VOLUME: "$66,061,000",
    CMGR: "26.99% / 33",
    INFLATION: "0.24%",
  },
  {
    NAME: "Stellar",
    ICON: <img src={Imagesdata("stellar")} className="w-4 h-4" alt="" />,
    PRICE: "$0.467813",
    H: "2%",
    MARKETCAP: "$8,358,735,080",
    CIRCULATINGSUPPLY: "17,867,683,840 XLM",
    VOLUME: "$370,297,000",
    CMGR: "13.12% / 41",
    INFLATION: "0.19%",
  },
  {
    NAME: "NEO",
    ICON: <img src={Imagesdata("neo")} className="w-4 h-4" alt="" />,
    PRICE: "$118.61",
    H: "-9%",
    MARKETCAP: "$7,693,400,000",
    CIRCULATINGSUPPLY: "65,000,000 NEO",
    VOLUME: "$318,308,000",
    CMGR: "62.68% / 15",
    INFLATION: "0.00%",
  },
  {
    NAME: "IOTA",
    ICON: <img src={Imagesdata("iota")} className="w-4 h-4" alt="" />,
    PRICE: "$2.34",
    H: "-14%",
    MARKETCAP: "$6,504,100,862",
    CIRCULATINGSUPPLY: "2,779,530,240 MIOTA",
    VOLUME: "$103,132,000",
    CMGR: "23.27% / 7",
    INFLATION: "-0.02%",
  },
  {
    NAME: "Dash",
    ICON: <img src={Imagesdata("dash")} className="w-4 h-4" alt="" />,
    PRICE: "$747.222",
    H: "-8%",
    MARKETCAP: "$5,881,413,815",
    CIRCULATINGSUPPLY: "7,833,738 DASH",
    VOLUME: "$96,147,900",
    CMGR: "19.19% / 47",
    INFLATION: "0.81%",
  },
  {
    NAME: "Monero",
    ICON: <img src={Imagesdata("monero")} className="w-4 h-4" alt="" />,
    PRICE: "$305.16",
    H: "-11%",
    MARKETCAP: "$4,778,157,533",
    CIRCULATINGSUPPLY: "15,633,286 XMR",
    VOLUME: "	$100,788,000",
    CMGR: "11.88% / 44",
    INFLATION: "0.78%",
  },
  {
    NAME: "TRON",
    ICON: <img src={Imagesdata("tron")} className="w-4 h-4" alt="" />,
    PRICE: "$0.067691",
    H: "-5%",
    MARKETCAP: "$4,450,560,896",
    CIRCULATINGSUPPLY: "65,748,193,280 TRX",
    VOLUME: "$581,651,000",
    CMGR: "142.69% / 4",
    INFLATION: "0.00%",
  },
  {
    NAME: "Bitcoin Gold",
    ICON: <img src={Imagesdata("bitcoingold")} className="w-4 h-4" alt="" />,
    PRICE: "$181.39",
    H: "-7%",
    MARKETCAP: "$3,084,108,676",
    CIRCULATINGSUPPLY: "16,779,700 BTG",
    VOLUME: "$199,652,000",
    CMGR: "-25.44% / 3",
    INFLATION: "0.34%",
  },
];
export const Crypto = () => {
  const tableInstance: any = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="e-table px-5 pb-5">
        <div className="table-responsive table-lg">
          <div className="d-flex">
            <select
              className="mb-5 table-border me-1"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
          <table
            {...getTableProps()}
            className="table table-bordered text-nowrap mb-0"
          >
            <thead>
              {headerGroups.map((headerGroup: any) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={column.className}
                    >
                      <span className="tabletitle">
                        {column.render("Header")}
                      </span>
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i className="fa fa-angle-down"></i>
                          ) : (
                            <i className="fa fa-angle-up"></i>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row: any) => {
                prepareRow(row);
                return (
                  <tr className="text-center" {...row.getRowProps()}>
                    {row.cells.map((cell: any) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="d-md-flex mt-4 align-items-center">
            <span className="">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <span className="ms-auto ">
              <Button
                variant=""
                className="btn-default tablebutton me-2 my-2"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {" Previous "}
              </Button>
              <Button
                variant=""
                className="btn-default tablebutton me-2 my-2"
                onClick={() => {
                  previousPage();
                }}
                disabled={!canPreviousPage}
              >
                {" << "}
              </Button>
              <Button
                variant=""
                className="btn-default tablebutton me-2 my-2"
                onClick={() => {
                  previousPage();
                }}
                disabled={!canPreviousPage}
              >
                {" < "}
              </Button>
              <Button
                variant=""
                className="btn-default tablebutton me-2 my-2"
                onClick={() => {
                  nextPage();
                }}
                disabled={!canNextPage}
              >
                {" > "}
              </Button>
              <Button
                variant=""
                className="btn-default tablebutton me-2 my-2"
                onClick={() => {
                  nextPage();
                }}
                disabled={!canNextPage}
              >
                {" >> "}
              </Button>
              <Button
                variant=""
                className="btn-default tablebutton me-2 my-2"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {" Next "}
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
const GlobalFilter = ({ filter, setFilter }: any) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-5"
        placeholder="Search..."
      />
    </span>
  );
};
//*** END CRYPTOCURRENCIES ***//

//*** WIDGETS DATA ****//

interface widget {
  id: number;
  className: string;
  data: string;
  icon: string;
  color: string;
}
export const widgets: widget[] = [
  {
    id: 1,
    className: "Total Followers",
    data: "7,865",
    icon: "fa fa-user-o",
    color: "primary",
  },
  {
    id: 2,
    className: "Total Likes",
    data: "86,964",
    icon: "fa fa-heart-o",
    color: "secondary",
  },
  {
    id: 3,
    className: "Total Comments",
    data: "98",
    icon: "fa fa-comment-o",
    color: "success",
  },
  {
    id: 4,
    className: "Total Posts",
    data: "893",
    icon: "fa fa-envelope-o",
    color: "info",
  },
];
//Orders
interface weekorder {
  id: number;
  class: string;
  data: string;
  icon: string;
  color: string;
  text: string;
}
export const weekorders: weekorder[] = [
  {
    id: 1,
    class: "This Week Orders",
    data: "$7,543",
    text: "60%",
    color: "danger",
    icon: "fa fa-cart-plus",
  },
  {
    id: 2,
    class: "This Week Views",
    data: "5,578",
    text: "35%",
    color: "warning",
    icon: "mdi mdi-eye",
  },
  {
    id: 3,
    class: "This Week Earnings",
    data: "$2,987",
    text: "74%",
    color: "primary",
    icon: "mdi mdi-currency-usd",
  },
  {
    id: 4,
    class: "This Week Comments",
    data: "9743",
    text: "789",
    color: "success",
    icon: "mdi mdi-comment-account-outline",
  },
];
//Requests
interface request {
  id: number;
  class: string;
  data: string;
  color: string;
}
export const requests: request[] = [
  { id: 1, class: "Total Requests", data: "9,678", color: "primary" },
  { id: 2, class: "Total Revenue", data: "10,257", color: "secondary" },
  { id: 3, class: "Total Profit", data: "$67,953", color: "success" },
  { id: 4, class: "Total sales", data: "7,632", color: "danger" },
];
//Visits
interface visit {
  id: number;
  class: string;
  data: string;
  icon: string;
  color: string;
}
export const visits: visit[] = [
  {
    id: 1,
    class: "Total Visit",
    data: "834",
    color: "primary",
    icon: "fa fa-firefox",
  },
  {
    id: 2,
    class: "Cost Per Click",
    data: "$34,516",
    color: "secondary",
    icon: "fa fa-dollar",
  },
  {
    id: 3,
    class: "Investment",
    data: "80%",
    color: "success",
    icon: "fa fa-comment-o",
  },
  {
    id: 4,
    class: "Revenue",
    data: "70k",
    color: "info",
    icon: "fa fa-pie-chart",
  },
];
//*** CHAT DATA ***//

//Onlineusers
interface onlineuser {
  id: number;
  src1: string;
  heading: string;
  color: string;
}
export const onlineusers: onlineuser[] = [
  { id: 1, src1: Imagesdata("users5"), heading: "Ariana", color: "secondary" },
  { id: 2, src1: Imagesdata("users9"), heading: "Monino", color: "danger" },
  { id: 3, src1: Imagesdata("users6"), heading: "Reynante", color: "success" },
  { id: 4, src1: Imagesdata("users7"), heading: "Labares", color: "warning" },
  { id: 5, src1: Imagesdata("users5"), heading: "Rolando", color: "secondary" },
  { id: 6, src1: Imagesdata("users9"), heading: "Paloso", color: "danger" },
  { id: 7, src1: Imagesdata("users6"), heading: "Maricel", color: "success" },
  { id: 8, src1: Imagesdata("users5"), heading: "Villalon", color: "warning" },
];
//*** TABLES ***//
//Deafult Table Data
interface table {
  id: string;
  name: string;
  position: string;
  salary: string;
}
export const tables: table[] = [
  {
    id: "1",
    name: "Joan Powell",
    position: "Associate Developer",
    salary: "$450,870",
  },
  {
    id: "2",
    name: "Gavin Gibson",
    position: "Account manager",
    salary: "$230,540",
  },
  {
    id: "3",
    name: "	Julian Kerr",
    position: "Senior Javascript Developer",
    salary: "$55,300",
  },
  { id: "4", name: "Cedric Kelly", position: "Accountant", salary: "$234,100" },
  {
    id: "5",
    name: "Samantha May",
    position: "Junior Technical Author",
    salary: "$43,198",
  },
];
//Contextual Table
interface Contextualtable {
  id: string;
  name: string;
  position: string;
  salary: string;
  color: string;
}
export const Contextualtables: Contextualtable[] = [
  {
    id: "1",
    name: "Joan Powell",
    position: "Associate Developer",
    salary: "$450,870",
    color: "table-default",
  },
  {
    id: "2",
    name: "Gavin Gibson",
    position: "Account manager",
    salary: "$230,540",
    color: "table-primary",
  },
  {
    id: "3",
    name: "Gavin Gibson",
    position: "Account manager",
    salary: "$230,540",
    color: "table-secondary",
  },
  {
    id: "4",
    name: "	Julian Kerr",
    position: "Senior Javascript Developer",
    salary: "$55,300",
    color: "table-success",
  },
  {
    id: "5",
    name: "Cedric Kelly",
    position: "Accountant",
    salary: "$234,100",
    color: "table-danger",
  },
  {
    id: "6",
    name: "Cedric Kelly",
    position: "Accountant",
    salary: "$234,100",
    color: "table-warning",
  },
  {
    id: "7",
    name: "Cedric Kelly",
    position: "Accountant",
    salary: "$234,100",
    color: "table-info",
  },
  {
    id: "8",
    name: "Cedric Kelly",
    position: "Accountant",
    salary: "$234,100",
    color: "table-light",
  },
  {
    id: "9",
    name: "Cedric Kelly",
    position: "Accountant",
    salary: "$234,100",
    color: "table-dark",
  },
];
//head Table Data
interface table1 {
  id: string;
  name: string;
  position: string;
  salary: string;
}
export const tables1: table1[] = [
  {
    id: "1",
    name: "Joan Powell",
    position: "Associate Developer",
    salary: "$450,870",
  },
  {
    id: "2",
    name: "Gavin Gibson",
    position: "Account manager",
    salary: "$230,540",
  },
  {
    id: "3",
    name: "	Julian Kerr",
    position: "Senior Javascript Developer",
    salary: "$55,300",
  },
  { id: "4", name: "Cedric Kelly", position: "Accountant", salary: "$234,100" },
];
//*** List Group Data ***//
//Basic listgroup
interface listgroup {
  id: number;
  heading: string;
}
export const listgroups: listgroup[] = [
  { id: 1, heading: "Cras justo odio" },
  { id: 2, heading: "Dapibus ac facilisis in" },
  { id: 3, heading: "Morbi leo risus" },
  { id: 4, heading: "Porta ac consectetur ac" },
  { id: 5, heading: "Vestibulum at eros" },
];
//Active listgroup
interface activelistgroup {
  id: number;
  heading: string;
  active: string;
}
export const activelistgroups: activelistgroup[] = [
  { id: 1, heading: "Cras justo odio", active: "active" },
  { id: 2, heading: "Dapibus ac facilisis in", active: "" },
  { id: 3, heading: "Morbi leo risus", active: "" },
  { id: 4, heading: "Porta ac consectetur ac", active: "" },
  { id: 5, heading: "Vestibulum at eros", active: "" },
];
//Disable listgroup
interface disablelistgroup {
  id: number;
  heading: string;
  disable: string;
}
export const disablelistgroups: disablelistgroup[] = [
  { id: 1, heading: "Cras justo odio", disable: "disabled" },
  { id: 2, heading: "Dapibus ac facilisis in", disable: "" },
  { id: 3, heading: "Morbi leo risus", disable: "" },
  { id: 4, heading: "Porta ac consectetur ac", disable: "" },
  { id: 5, heading: "Vestibulum at eros", disable: "" },
];
//Contextual  listgroup
interface Contextuallistgroup {
  id: number;
  heading: string;
  color: string;
}
export const Contextuallistgroups: Contextuallistgroup[] = [
  { id: 1, heading: "Dapibus ac facilisis in", color: "default" },
  { id: 2, heading: "Dapibus ac facilisis in", color: "success" },
  { id: 3, heading: "Cras sit amet nibh libero", color: "info" },
  { id: 4, heading: "Porta ac consectetur ac", color: "warning" },
  { id: 5, heading: "Vestibulum at eros", color: "danger" },
];
//Colored icons  listgroup
interface Colorlistgroup {
  id: number;
  heading: string;
  color: string;
}
export const Colorlistgroups: Colorlistgroup[] = [
  { id: 1, heading: "Cras justo odio", color: "primary" },
  { id: 2, heading: "Dapibus ac facilisis in", color: "danger" },
  { id: 3, heading: "Morbi leo risus", color: "success" },
  { id: 4, heading: "Porta ac consectetur ac", color: "warning" },
  { id: 5, heading: "Vestibulum at eros", color: "info" },
];
//Badge icons  listgroup
interface Badgelistgroup {
  id: number;
  heading: string;
  badge: string;
}
export const Badgelistgroups: Badgelistgroup[] = [
  { id: 1, heading: "Cras justo odio", badge: "20" },
  { id: 2, heading: "Dapibus ac facilisis in", badge: "15" },
  { id: 3, heading: "Morbi leo risus", badge: "10" },
  { id: 4, heading: "Porta ac consectetur ac", badge: "8" },
  { id: 5, heading: "Vestibulum at eros", badge: "1" },
];
//Badge color  listgroup
interface Badgecolorlistgroup {
  id: number;
  heading: string;
  badge: string;
  color: string;
}
export const Badgecolorlistgroups: Badgecolorlistgroup[] = [
  { id: 1, heading: "Cras justo odio", badge: "20", color: "primary" },
  { id: 2, heading: "Dapibus ac facilisis in", badge: "15", color: "danger" },
  { id: 3, heading: "Morbi leo risus", badge: "10", color: "success" },
  { id: 4, heading: "Porta ac consectetur ac", badge: "8", color: "warning" },
  { id: 5, heading: "Vestibulum at eros", badge: "1", color: "info" },
];
//*** Advanced Form data ***//
// Multiple coustom Style
export const option8: any = [
  {
    label: "Fruits",
    options: [
      {
        value: "01",
        label: "Apple",
      },
      {
        value: "02",
        label: "Mangoo",
        color: "#f7b731",
      },
      {
        value: "03",
        label: "Banana",
      },
      {
        value: "04",
        label: "Jackfruit",
        color: "#849e52",
      },
    ],
  },
  {
    label: "Cars",
    options: [
      {
        value: "001",
        label: "BMW",
      },
      {
        value: "002",
        label: "Mercedes-benz",
      },
      {
        value: "003",
        label: "Jaguar",
      },
      {
        value: "004",
        label: "Renault",
      },
      {
        value: "005",
        label: "Audi",
      },
      {
        value: "006",
        label: "Tesla",
        color: "#9fcfc1",
      },
      {
        value: "007",
        label: "Porsche",
      },
    ],
  },
];

// Multiple Select Styles END

// Dual List Box START

const optionss = [
  {
    label: "Java Script",
    options: [
      { value: "Jquery", label: "Jquery" },
      { value: "Angular JS", label: "Angular JS" },
      { value: "React JS", label: "React JS" },
      { value: "Vue JS", label: "Vue JS" },
    ],
  },
  {
    label: "Popular",
    options: [
      { value: "Java Script", label: "Java Script" },
      { value: "Java", label: "Java" },
      { value: "Python", label: "Python" },
      { value: "TypeScript", label: "TypeScript" },
      { value: "PHP", label: "PHP" },
      { value: "Ruby on Rails", label: "Ruby on Rails" },
    ],
  },
];

export class DualList extends Component<any> {
  state: any = {
    selected: [options[0]],
  };

  onChange = (selected: any) => {
    console.log(selected);
    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;

    return (
      <DualListBox
        options={optionss}
        selected={selected}
        allowDuplicates
        simpleValue={false}
        onChange={this.onChange}
      />
    );
  }
}

// Dual List Box END

// Select Box START

// Box 1

export function SelectBox() {
  let [value, setValue] = useState([""]);
  function handleChange(selected: any) {
    setValue(selected);
    console.log(selected);
  }
  const options = [
    { value: "HTML5", label: "HTML5" },
    { value: "CSS 3", label: "CSS 3" },
    { value: "PHP", label: "PHP" },
    { value: "J-Query", label: "J-Query" },
    { value: ".Net", label: ".Net" },
    { value: "Java", label: "Java" },
    { value: "Android", label: "Android" },
    { value: "React JS", label: "React JS" },
    { value: "Angular JS", label: "Angular JS" },
    { value: "PhotoShop", label: "PhotoShop" },
    { value: "Python", label: "Python" },
    { value: "Sql", label: "Sql" },
    { value: "JavaScript", label: "JavaScript" },
  ];

  return (
    <DualListBox
      canFilter
      selected={value}
      options={options}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        console.log(option);
        // return containsWord(option.label, filterInput);
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          console.log(word);
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={handleChange}
    />
  );
}
// Box 2

export function SelectBoxwithLabel() {
  let [value, setValue] = useState([""]);
  function handleChange(selected: any) {
    setValue(selected);
    console.log(selected);
  }
  const options = [
    {
      label: "Software Side",
      options: [
        { value: "Web designer", label: "Web designer" },
        {
          value: "Web Developer",
          label: "Web Developer",
        },
        {
          value: "Application Developer",
          label: "Application Developer",
        },
        {
          value: "App Designer",
          label: "App Designer",
        },
      ],
    },
    {
      label: "Voice Side",
      options: [
        { value: "Tell Caller", label: "Tell Caller" },
        {
          value: "Recruiter",
          label: "Recruiter",
        },
        {
          value: "HR",
          label: "HR",
        },
        {
          value: "Data Entry",
          label: "Data Entry",
        },
        {
          value: "Mapping",
          label: "Mapping",
        },
        {
          value: "US Recruiter",
          label: "US Recruiter",
        },
      ],
    },
  ];

  return (
    <DualListBox
      canFilter
      selected={value}
      options={options}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        console.log(option);
        // return containsWord(option.label, filterInput);
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          console.log(word);
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={handleChange}
    />
  );
}

// Select Box END
// Color Picker START

// Basic

export function BasicStyle() {
  const [color, setColor] = useState("#6c5ffc");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleChangeComplete = (color: any) => {
    console.log(color);
  };

  return (
    <div>
      <p className=" mb-1">Same way you select color in Adobe Photoshop.</p>
      <Button
        className="btn-pill"
        size="sm"
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? "Close Color Picker" : "Pick a Color"}
      </Button>
      {showColorPicker && (
        <ChromePicker
          className="mt-3"
          disableAlpha={true}
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
          onChangeComplete={handleChangeComplete}
        />
      )}
    </div>
  );
}

// SketchExample style

export class SketchExample extends Component {
  state: any = {
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1",
    },
  };
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color: any) => {
    this.setState({ color: color.rgb });
  };
  render() {
    return (
      <div>
        <p className="mt-4 mb-1">
          Show Adove photoshop with Alphaline and pallete.{" "}
        </p>
        <Button
          className="btn-pill"
          variant="primary"
          size="sm"
          onClick={this.handleClick}
        >
          <ColorLensIcon />
        </Button>
        {this.state.displayColorPicker ? (
          <div>
            <div onClick={this.handleClose} />
            <SketchPicker
              className="mt-3"
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
// Palettes Style

export function PalettesStyle() {
  const [hex, setHex] = useState("#fff");
  return (
    <div>
      <p className="mt-4 mb-1">
        Show pallete only. If you'd like, spectrum can show the palettes you
        specify, and nothing else.
      </p>
      <Compact
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
    </div>
  );
}

// Color Picker END

//*** FormWizard Data ***//
function MyButton({ visible, ...props }: any) {
  return (
    <button className={visible ? "btn btn-primary " : "invisible"} {...props} />
  );
}
const Wizard: any = ({ step: currentIndex, ...props }: any) => {
  const steps: any = Children.toArray(props.children);
  const prevStep: any = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep: any =
    currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

  return (
    <div>
      <nav className="btn-group steps basicsteps d-sm-block d-none">
        {steps.map((step: any, index: any) => (
          <button
            key={step.props.number}
            onClick={() => props.onChange(index)}
            className={getClsNavBtn(index === currentIndex)}
          >
            <span className="number me-2 ">{step.props.number}</span>
            <i>{step.props.title}</i>
          </button>
        ))}
      </nav>

      {steps[currentIndex]}

      <div className=" p-3 d-flex justify-content-between  ">
        <MyButton
          visible={prevStep}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Back
        </MyButton>
        <MyButton
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Next
        </MyButton>
      </div>
    </div>
  );
};
const Stepps: any = ({ children }: any) => children;

function getClsNavBtn(active: any) {
  return "btn" + (active ? " active" : "");
}
export class BasicContent extends Component {
  state = { step: 0 };

  handleStep = (step: any) => {
    this.setState({ step });
  };

  render() {
    return (
      <Wizard step={this.state.step} onChange={this.handleStep}>
        <Stepps title="LogIn" number="1">
          <section className="card-body Basicwizard ">
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  id="exampleInputEmail6"
                  placeholder="Enter email address"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  className="form-control"
                  id="exampleInputPassword7"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-3 justify-content-end">
                <Form.Check label="Check me Out" />
              </Form.Group>
            </Form>
          </section>
        </Stepps>
        <Stepps title="NewUser" number="2">
          <section className="card-body Basicwizard">
            <Form>
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="inputtext"
                  placeholder="Enter User Name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="form-control"
                  id="exampleInputEmail8"
                  placeholder="Enter email address"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  className="form-control"
                  id="exampleInputPassword9"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-3 justify-content-end">
                <Form.Check label="Check me Out" />
              </Form.Group>
            </Form>
          </section>
        </Stepps>
        <Stepps title="End" number="3">
          <section className="card-body Basicwizard ">
            <Row>
              <Form>
                <Form.Group className="mt-4 mb-3 d-flex">
                  <Form.Check label="I agree terms and Conditions" />
                </Form.Group>
              </Form>
            </Row>
          </section>
        </Stepps>
      </Wizard>
    );
  }
}
// Basic Content Wizard

export const BasicContentFormWizard = () => {
  const [goSteps, setGoSteps] = useState(0);

  return (
    <div>
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} />
        <Step onClick={() => setGoSteps(1)} />
        <Step onClick={() => setGoSteps(2)} />
      </Stepper>
      {goSteps === 0 && (
        <div>
          <span className="Stepperh3">Personal Information</span>
          <section>
            <div className="control-group form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control required"
                placeholder="Name"
              />
            </div>
            <div className="control-group form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control required"
                placeholder="Email Address"
              />
            </div>
            <div className="control-group form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control required"
                placeholder="Number"
              />
            </div>
            <div className="control-group form-group mb-0">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control required"
                placeholder="Address"
              />
            </div>
          </section>
          <button
            className="btn btn-primary mt-2 float-end mt-4"
            onClick={() => setGoSteps(1)}
          >
            Next
          </button>
          <button
            className="btn btn-primary mt-2 float-start mt-4"
            onClick={() => setGoSteps(0)}
            disabled
          >
            Previous
          </button>
        </div>
      )}
      {goSteps === 1 && (
        <div>
          <span className="Stepperh3">Billing Information</span>
          <section>
            <div className="table-responsive mg-t-20">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td className="text-end">$792.00</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Totals</span>
                    </td>
                    <td className="text-end text-muted">
                      <span>$792.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Order Total</span>
                    </td>
                    <td>
                      <h2 className="price text-end mb-0">$792.00</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <div>
            <button
              className="btn btn-primary float-end mt-4"
              onClick={() => setGoSteps(2)}
            >
              Next
            </button>
            <button
              className="btn btn-primary float-start mt-4"
              onClick={() => setGoSteps(0)}
            >
              Previous
            </button>
          </div>
        </div>
      )}
      {goSteps === 2 && (
        <div className="Paymentdetails">
          <span className="Stepperh3">Payment Details</span>
          <section>
            <Form.Group>
              <label className="form-label">CardHolder Name</label>
              <input
                type="text"
                className="form-control"
                id="name1"
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group>
              <label className="form-label">Card number</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-text btn btn-info shadow-none mb-0">
                  <i className="fa fa-cc-visa"></i> &nbsp;{" "}
                  <i className="fa fa-cc-amex"></i> &nbsp;
                  <i className="fa fa-cc-mastercard"></i>
                </span>
              </div>
            </Form.Group>
            <Row>
              <Col sm={8}>
                <Form.Group className="mb-sm-0">
                  <label className="form-label">Expiration</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="MM"
                      name="expiremonth"
                    />
                    <input
                      type="number"
                      className="form-control"
                      placeholder="YY"
                      name="expireyear"
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className="mb-0">
                  <label className="form-label">
                    CVV <i className="fa fa-question-circle"></i>
                  </label>
                  <input type="number" className="form-control" required />
                </Form.Group>
              </Col>
            </Row>
          </section>
          <button
            className="btn btn-primary float-end mt-4"
            onClick={() => setGoSteps(0)}
          >
            Submit
          </button>
          <button
            className="btn btn-primary wizer float-start mt-4"
            onClick={() => setGoSteps(1)}
          >
            Previous
          </button>
        </div>
      )}
    </div>
  );
};

// Basic Wizard With Validation

function PersonalInformation({ nextStep, handleFormData, values }: any) {
  const [error, setError] = useState(false);
  const submitFormData = (e: any) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <span className="Stepperh3">Personal Information</span>
      <Form onSubmit={submitFormData}>
        <Row>
          <Col md={5} lg={4}>
            <Form.Group className="">
              <Form.Label className=" form-control-label-rounded-start">
                Firstname: <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #dc3545" : "" }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleFormData("firstName")}
              />
              {error ? (
                <Form.Text style={{ color: "#dc3545" }}>
                  {" "}
                  This value is required..
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
          </Col>
          <Col md={5} lg={4} className="mg-t-20 mg-md-t-0">
            <Form.Group className="">
              <Form.Label className=" form-control-label-rounded-start">
                Lastname: <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #dc3545" : "" }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleFormData("lastName")}
              />
              {error ? (
                <Form.Text style={{ color: "#dc3545" }}>
                  {" "}
                  This value is required..{" "}
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
          </Col>
        </Row>
        <Button className="mt-4" type="submit">
          {" "}
          Continue
        </Button>
      </Form>
    </div>
  );
}

function BillingInformation({
  nextStep,
  handleFormData,
  prevStep,
  values,
}: any) {
  const [error, setError] = useState(false);

  const submitFormData = (e: any) => {
    e.preventDefault();

    if (validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <span className="Stepperh3">Billing Information</span>
      <span>Wonderful transition effects.</span>
      <Form onSubmit={submitFormData}>
        <Form.Group className="wd-xs-300">
          <Form.Label>
            Email:<span className="text-danger">*</span>{" "}
          </Form.Label>

          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="email"
            placeholder="email"
            onChange={handleFormData("email")}
          />
          {error ? (
            <Form.Text style={{ color: "red" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <div>
          <Button className="float-start mt-4" onClick={prevStep}>
            {" "}
            Previous{" "}
          </Button>
          <Button className="float-end mt-4" type="submit">
            Submit{" "}
          </Button>
        </div>
      </Form>
    </div>
  );
}

function PaymentDetails({ nextStep, prevStep, values }: any) {
  const setError = useState;

  const submitFormData = (e: any) => {
    e.preventDefault();

    if (validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };

  const submitForm = () => {
    alert("form submitted sucessfully !!");
  };
  return (
    <div>
      <span className="Stepperh3">Payment Details</span>

      <Form onSubmit={submitFormData}>
        <Form.Group>
          <Form.Label>CardHolder Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Card number</Form.Label>
          <InputGroup>
            <Form.Control type="number" placeholder="Search for..." />
            <span className="input-group-text btn btn-info shadow-none mb-0">
              {" "}
              <i className="fa fa-cc-visa"></i> &nbsp;{" "}
              <i className="fa fa-cc-amex"></i> &nbsp;
              <i className="fa fa-cc-mastercard"></i>
            </span>
          </InputGroup>
        </Form.Group>
        <Row>
          <Col sm={8}>
            <Form.Group className="mb-sm-0">
              <Form.Label>Expiration</Form.Label>
              <InputGroup>
                {" "}
                <Form.Control
                  type="number"
                  placeholder="MM"
                  name="expiremonth"
                  required
                />
                <Form.Control
                  type="number"
                  placeholder="YY"
                  name="expireyear"
                  required
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-0">
              <Form.Label>
                CVV <i className="fa fa-question-circle"></i>
              </Form.Label>
              <Form.Control type="number" required />
            </Form.Group>
          </Col>
        </Row>

        <div>
          <Button className="float-start mt-4" onClick={prevStep}>
            {" "}
            Previous{" "}
          </Button>
          <Button className="float-end mt-4" type="submit" onClick={submitForm}>
            Finish
          </Button>
        </div>
      </Form>
    </div>
  );
}

export function ValidationForm() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });

  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };
  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input: any) => (e: any) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
  switch (step) {
    case 1:
      return (
        <div className="custom-margin">
          {" "}
          <PersonalInformation
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 2:
      return (
        <div className="custom-margin">
          <BillingInformation
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 3:
      return (
        <div className="custom-margin">
          {" "}
          <PaymentDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />{" "}
        </div>
      );
  }
}
// Vertical Orientation Wizard
export const VerticalOrientationWizard = () => {
  const [goSteps, setGoSteps] = useState(0);

  const handleClick = () => {
    alert("form submitted sucessfully !!");
  };

  return (
    <div className="">
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} />
        <Step onClick={() => setGoSteps(1)} />
        <Step onClick={() => setGoSteps(2)} />
      </Stepper>
      {goSteps === 0 && (
        <>
          <div className="row borders">
            <div className="col-xl-4 border-right">
              <span className="Stepperh3 d-flex p-4">
                <span className="number step3 me-2">1</span>
                <span className="title " onClick={() => setGoSteps(0)}>
                  Personal Information
                </span>
              </span>
              <span className="Stepperh3 d-flex p-4">
                <span className="number step2 me-2">2</span>
                <span className="title Step1" onClick={() => setGoSteps(1)}>
                  Billing Information
                </span>
              </span>
              <span className="Stepperh3 d-flex p-4">
                <span className="number step2 me-2">3</span>
                <span className="title Step1" onClick={() => setGoSteps(2)}>
                  Payment Details
                </span>
              </span>
            </div>
            <div className="col-xl-8 p-4">
              <section>
                <div className="control-group form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Name"
                  />
                </div>
                <div className="control-group form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control required"
                    placeholder="Email Address"
                  />
                </div>
                <div className="control-group form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="number"
                    className="form-control required"
                    placeholder="Number"
                  />
                </div>
                <div className="control-group form-group mb-0">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Address"
                  />
                </div>
                <div className="control-group form-group mb-0">
                  <label className="form-label">Dropify Single Upload</label>
                  <Form.Control type="file" />
                </div>
                <div className="control-group form-group mb-0">
                  <label className="form-label">Multiple Fancy Upload</label>
                  <Form.Control type="file" multiple />
                </div>
              </section>
            </div>
            <div className="col-xl-4 border-right"></div>
            <div className="col-xl-8 p-4">
              <button
                className="btn btn-primary mt-2 float-end mt-4"
                onClick={() => setGoSteps(1)}
              >
                Next
              </button>
              <button
                className="btn btn-primary mt-2 float-start mt-4"
                onClick={() => setGoSteps(0)}
                disabled
              >
                Previous
              </button>
            </div>
          </div>
        </>
      )}
      {goSteps === 1 && (
        <div>
          <div className="row borders">
            <div className="col-sm-4 border-right">
              <span className="Stepperh3 d-flex p-4">
                <span className="number step2 me-2">1</span>
                <span className="title Step1" onClick={() => setGoSteps(0)}>
                  Personal Information
                </span>
              </span>
              <span className="Stepperh3 d-flex p-4">
                <span className="number step3 me-2">2</span>
                <span className="title" onClick={() => setGoSteps(1)}>
                  Billing Information{" "}
                </span>
              </span>
              <span className="Stepperh3 d-flex p-4">
                <span className="number step2 me-2">3</span>
                <span className="title Step1" onClick={() => setGoSteps(2)}>
                  Payment Details
                </span>
              </span>
            </div>
            <div className="col-sm-8 p-4">
              <section>
                <div className="table-responsive mg-t-20">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td className="text-end">$792.00</td>
                      </tr>
                      <tr>
                        <td>
                          <span>Totals</span>
                        </td>
                        <td className="text-end text-muted">
                          <span>$792.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>Order Total</span>
                        </td>
                        <td>
                          <h2 className="price text-end mb-0">$792.00</h2>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            <div className="col-sm-4 border-right"></div>
            <div className="col-sm-8 p-4">
              <button
                className="btn btn-primary float-end mt-4"
                onClick={() => setGoSteps(2)}
              >
                Next
              </button>
              <button
                className="btn btn-primary float-start mt-4"
                onClick={() => setGoSteps(0)}
              >
                Previous
              </button>
            </div>
          </div>
        </div>
      )}
      {goSteps === 2 && (
        <>
          <div className="row borders">
            <div className="col-sm-4 border-right">
              <span className="Stepperh3 d-flex p-4">
                <span className="number step2 me-2">1</span>
                <span className="title Step1" onClick={() => setGoSteps(0)}>
                  Personal Information
                </span>
              </span>
              <span className="Stepperh3 d-flex p-4">
                <span className="number step2 me-2">2</span>
                <span className="title Step1" onClick={() => setGoSteps(1)}>
                  Billing Information{" "}
                </span>
              </span>
              <span className="Stepperh3 d-flex p-4">
                <span className="number step3 me-2">3</span>
                <span className="title" onClick={() => setGoSteps(2)}>
                  Payment Details
                </span>
              </span>
            </div>
            <div className="col-sm-8 p-4">
              <section>
                <Form.Group>
                  <label className="form-label">CardHolder Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name1"
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group>
                  <label className="form-label">Card number</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-text btn btn-info shadow-none mb-0">
                      <i className="fa fa-cc-visa"></i> &nbsp;{" "}
                      <i className="fa fa-cc-amex"></i> &nbsp;
                      <i className="fa fa-cc-mastercard"></i>
                    </span>
                  </div>
                </Form.Group>
                <Row>
                  <Col sm={8}>
                    <Form.Group className="mb-sm-0">
                      <label className="form-label">Expiration</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="MM"
                          name="expiremonth"
                        />
                        <input
                          type="number"
                          className="form-control"
                          placeholder="YY"
                          name="expireyear"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    <Form.Group className="mb-0">
                      <label className="form-label">
                        CVV <i className="fa fa-question-circle"></i>
                      </label>
                      <input type="number" className="form-control" required />
                    </Form.Group>
                  </Col>
                </Row>
              </section>
            </div>
            <div className="col-sm-4 border-right"></div>
            <div className="col-sm-8 p-4">
              {" "}
              <button
                className="btn btn-primary float-end mt-4"
                onClick={() => {
                  handleClick();
                  setGoSteps(0);
                }}
              >
                Submit
              </button>
              <button
                className="btn btn-primary wizer float-start mt-4"
                onClick={() => setGoSteps(1)}
              >
                Previous
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
const steps = [
  {
    label: "Name & Email",
    description: (
      <>
        <ListGroup>
          <ListGroup.Item>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" name="email" />
            </Form.Group>
          </ListGroup.Item>
        </ListGroup>
      </>
    ),
  },
  {
    label: "Contact",
    description: (
      <>
        <ListGroup>
          <ListGroup.Item>
            <Form.Group>
              <Form.Label>Telephone:</Form.Label>
              <Form.Control
                type="text"
                name="telephone"
                className="form-control"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mobile:</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                className="form-control"
              />
            </Form.Group>
          </ListGroup.Item>
        </ListGroup>
      </>
    ),
  },
  {
    label: "Payment",
    description: (
      <>
        <ListGroup>
          <ListGroup.Item>
            <Form.Group>
              <Form.Label>Credit card:</Form.Label>
              <Form.Control type="text" name="card" />
            </Form.Group>
            <Form.Group className="form-row">
              <Col sm={4}>
                <Form.Label>Expiry:</Form.Label>
                <Form.Control type="text" name="expiry" />
              </Col>
              <Col sm={4}>
                <Form.Label>CVV:</Form.Label>
                <Form.Control type="text" name="cvv" />
              </Col>
            </Form.Group>
          </ListGroup.Item>
        </ListGroup>
      </>
    ),
  },
];

export default function BasicFormWizard() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const isStepOptional = (step: number) => {
    return step === 1;
  };
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          // const labelProps: { optional?: React.ReactNode } = {}
          if (isStepOptional(index)) {
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label.label} {...stepProps}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption"></Typography>
                  ) : null
                }
              >
                {label.label}
              </StepLabel>
              <StepContent>
                {label.description}
                <Fragment>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </Fragment>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Fragment>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="primary"
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{ marginRight: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {isStepOptional(activeStep) && (
            <Button
              color="inherit"
              onClick={handleSkip}
              style={{ marginRight: 1 }}
            >
              Skip
            </Button>
          )}
          <Button className="ms-auto" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "SUBMIT" : "Next"}
          </Button>
        </Box>
      </Fragment>
    </Box>
  );
}

//*** Navigation Data ***//
interface navigation {
  id: number;
  color: string;
}
export const navigations: navigation[] = [
  { id: 1, color: "primary" },
  { id: 2, color: "info" },
  { id: 3, color: "success" },
  { id: 4, color: "danger" },
  { id: 5, color: "secondary" },
  { id: 6, color: "warning" },
];

//*** Offcanvas Data ***//

const bacdrop = [
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
  {
    name: "Enable backdrop (default)",
    scroll: false,
    backdrop: true,
  },
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample({ name, ...props }: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2 text-wrap">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <b>Colored with scrolling</b>
          </Offcanvas.Title>
          <span className="d-flex ms-auto" onClick={handleClose}>
            <i className="fe fe-x ms-auto"></i>
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Try scrolling the rest of the page to see this option in action.
          <br />
          <br />
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function Backdrop() {
  return (
    <>
      {bacdrop.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

// Placement Offcanvas OPEN

function OffCanvasplacement({ name, ...props }: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <span className="d-flex ms-auto" onClick={handleClose}>
            <i className="fe fe-x ms-auto"></i>
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function Placementbutton() {
  return (
    <>
      {["top", "end", "bottom"].map((placement, idx) => (
        <OffCanvasplacement
          key={idx}
          placement={placement}
          name={`Toggle ${placement} Offcanvas `}
        />
      ))}
    </>
  );
}
//*** Ribbons Data ***//

interface ribbon {
  id: number;
  color: string;
  class: string;
}
export const ribbons: ribbon[] = [
  { id: 1, color: "warning", class: "top-left" },
  { id: 2, color: "primary", class: "bottom-left" },
  { id: 3, color: "danger", class: "top-right" },
  { id: 4, color: "success", class: "bottom-right" },
];

interface ribbon1 {
  id: number;
  color: string;
  class: string;
  class1: string;
}
export const ribbons1: ribbon1[] = [
  { id: 1, color: "primary", class: "top-left", class1: "text-end" },
  { id: 2, color: "danger", class: "top-right", class1: "" },
  { id: 3, color: "success", class: "top-left", class1: "text-end" },
  { id: 4, color: "warning", class: "top-right", class1: "" },
];
interface ribbon2 {
  id: number;
  color: string;
  class: string;
  class1: string;
}
export const ribbons2: ribbon2[] = [
  { id: 1, color: "secondary", class: "left", class1: "text-end" },
  { id: 2, color: "info", class: "right", class1: "" },
  { id: 3, color: "warning", class: "left", class1: "text-end" },
  { id: 4, color: "teal", class: "right", class1: "" },
];
interface ribbon3 {
  id: number;
  color: string;
  class1: string;
}
export const ribbons3: ribbon3[] = [
  { id: 1, color: "success-left", class1: "text-end" },
  { id: 2, color: "warning-right", class1: "" },
  { id: 3, color: "info-left", class1: "text-end" },
  { id: 4, color: "danger-right", class1: "" },
];
interface ribbon4 {
  id: number;
  color: string;
  class1: string;
  class: string;
  data: string;
}
export const ribbons4: ribbon4[] = [
  {
    id: 1,
    color: "danger-left",
    class1: "text-end",
    class: "July",
    data: "bookmark-ribbone",
  },
  {
    id: 2,
    color: "secondary-right",
    class1: "",
    class: "Aug",
    data: "bookmark-ribbone",
  },
  {
    id: 3,
    color: "success-left",
    class1: "text-end",
    class: "Sep",
    data: "bookmark-sideleft-ribbone",
  },
  {
    id: 4,
    color: "primary-right",
    class1: "",
    class: "Oct",
    data: "bookmark-sideright-ribbone",
  },
];
interface ribbon5 {
  id: number;
  color: string;
}
export const ribbons5: ribbon5[] = [
  { id: 1, color: "secondary-ribbons" },
  { id: 2, color: "primary-ribbons" },
  { id: 3, color: "arrow-warning-ribbons" },
  { id: 4, color: "arrow-danger-ribbons-right" },
];
//*** Tags ***//
//color tags
interface colortag {
  id: number;
  color: string;
  class: string;
}
export const colortags: colortag[] = [
  { id: 1, color: "blue", class: "Blue tag" },
  { id: 2, color: "azure", class: "Azure tag" },
  { id: 3, color: "indigo", class: "Indigo tag" },
  { id: 4, color: "purple", class: "Purple tag" },
  { id: 5, color: "pink", class: "Pink tag" },
  { id: 6, color: "red", class: "Red tag" },
  { id: 7, color: "orange", class: "Orange tag" },
  { id: 8, color: "yellow", class: "Yellow tag" },
  { id: 9, color: "lime", class: "Lime tag" },
  { id: 10, color: "green", class: "Green tag" },
  { id: 11, color: "teal", class: "Teal tag" },
  { id: 12, color: "cyan", class: "Cyan tag" },
  { id: 13, color: "gray", class: "Gray tag" },
  { id: 14, color: "gray-dark", class: "Dark gray tag" },
];
//Avathar tags
interface avatar {
  id: number;
  src1: string;
  class: string;
}
export const avatars: avatar[] = [
  { id: 1, src1: Imagesdata("users11"), class: "Victoria" },
  { id: 2, src1: Imagesdata("users4"), class: " Nathan" },
  { id: 3, src1: Imagesdata("users1"), class: "Alice" },
  { id: 4, src1: Imagesdata("users18"), class: "Rose" },
  { id: 5, src1: Imagesdata("users16"), class: "Peter" },
  { id: 6, src1: Imagesdata("users6"), class: "Wayne" },
  { id: 7, src1: Imagesdata("users7"), class: "Michelle" },
  { id: 8, src1: Imagesdata("users17"), class: "Debra" },
];
interface alltag {
  id: number;
  class: string;
}
export const alltags: alltag[] = [
  { id: 1, class: "One" },
  { id: 2, class: "Two" },
  { id: 3, class: "Three" },
  { id: 4, class: "Four" },
  { id: 5, class: "Five" },
  { id: 6, class: "Six" },
  { id: 7, class: "Seven" },
  { id: 8, class: "Eight" },
  { id: 9, class: "Nine" },
  { id: 10, class: "Ten" },
  { id: 11, class: "Eleven" },
  { id: 12, class: "Twelve" },
  { id: 13, class: "Thirteen" },
  { id: 14, class: "Fourteen" },
  { id: 15, class: "Fifteen" },
  { id: 16, class: "Sixteen" },
  { id: 17, class: "Seventeen" },
  { id: 18, class: "Eighteen" },
  { id: 19, class: "Nineteen" },
  { id: 20, class: "Twenty" },
];

//*** Thumnails Data ***//
interface contentthumnail {
  id: number;
  src1: string;
}
export const contentthumnails: contentthumnail[] = [
  { id: 1, src1: Imagesdata("media19") },
  { id: 2, src1: Imagesdata("media20") },
  { id: 3, src1: Imagesdata("media21") },
];
//Basic Thumnails
interface basicthumnail {
  id: number;
  src1: string;
}
export const basicthumnails: basicthumnail[] = [
  { id: 1, src1: Imagesdata("media1") },
  { id: 2, src1: Imagesdata("media2") },
  { id: 3, src1: Imagesdata("media3") },
  { id: 4, src1: Imagesdata("media5") },
];
//*** Typography ***//
//Simple badges
interface header {
  id: number;
  heading: string;
  class: string;
  class1: string;
  class2: string;
  class3: string;
  class4: string;
  class5: string;
  color: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
}
export const headers: header[] = [
  {
    id: 1,
    heading: "DEFAULT HEADING TEXT",
    class: "h1.Heading",
    class5: "h1.Heading",
    class1: "h1.Heading",
    class2: "h1.Heading",
    class3: "h1.Heading",
    class4: "h1.Heading",
    color: "",
    color1: "",
    color2: "",
    color3: "",
    color4: "",
    color5: "",
  },
  {
    id: 2,
    heading: "HEADING WITH COLOR TEXT",
    class: "h1.Heading",
    class5: "h1.Heading",
    class1: "h1.Heading",
    class2: "h1.Heading",
    class3: "h1.Heading",
    class4: "h1.Heading",
    color: "text-primary",
    color1: "text-info",
    color2: "text-success",
    color3: "text-danger",
    color4: "text-secondary",
    color5: "text-warning",
  },
];
interface display {
  id: number;
  class: string;
  class1: string;
}
export const displays: display[] = [
  { id: 1, class: "Display 1", class1: "display-1" },
  { id: 2, class: "Display 2", class1: "display-2" },
  { id: 3, class: "Display 3", class1: "display-3" },
  { id: 4, class: "Display 4", class1: "display-4" },
  { id: 5, class: "Display 5", class1: "display-5" },
  { id: 6, class: "Display 6", class1: "display-6" },
  { id: 7, class: "Display 7", class1: "display-7" },
  { id: 8, class: "Display 8", class1: "display-8" },
];
//color diplays
interface colordisplay {
  id: number;
  class: string;
  class1: string;
  color: string;
}
export const colordisplays: colordisplay[] = [
  { id: 1, class: "Display 1", class1: "display-1", color: "primary" },
  { id: 2, class: "Display 2", class1: "display-2", color: "secondary" },
  { id: 3, class: "Display 3", class1: "display-3", color: "success" },
  { id: 4, class: "Display 4", class1: "display-4", color: "danger" },
  { id: 5, class: "Display 5", class1: "display-5", color: "info" },
  { id: 6, class: "Display 6", class1: "display-6", color: "warning" },
  { id: 7, class: "Display 7", class1: "display-7", color: "pink" },
  { id: 8, class: "Display 8", class1: "display-8", color: "lime" },
];

//*** FileDetails Data ***//
interface files {
  id: number;
  src1: string;
  class: string;
  heading: string;
}
export const file: files[] = [
  { id: 1, src1: Imagesdata("files03"), class: "66 KB", heading: "image2.jpg" },
  { id: 2, src1: Imagesdata("pdf"), class: "32 KB", heading: "file.pdf" },
  { id: 3, src1: Imagesdata("files07"), class: "76 KB", heading: "image1.jpg" },
  { id: 4, src1: Imagesdata("excel"), class: "34 KB", heading: "excel.xls" },
  { id: 5, src1: Imagesdata("files06"), class: "66 KB", heading: "nature.jpg" },
  { id: 6, src1: Imagesdata("ppt1"), class: "67 KB", heading: "demo.ppt" },
  { id: 7, src1: Imagesdata("files02"), class: "76 KB", heading: "image1.jpg" },
];

//*** Dashboard Data ***//

interface activity {
  id: number;
  color: string;
  data: string;
  data1: string;
  text: string;
  text1: string;
}
export const activitys: activity[] = [
  {
    id: 1,
    color: "primary",
    data: "Task Finished",
    data1: "09 July 2021",
    text: "Adam Berry finished task on",
    text1: "Project Management",
  },
  {
    id: 2,
    color: "secondary",
    data: "New Comment",
    data1: "05 July 2021",
    text: "Victoria commented on Project",
    text1: "Angular JS Template",
  },
  {
    id: 3,
    color: "success",
    data: "New Comment",
    data1: "25 June 2021",
    text: "Victoria commented on Project ",
    text1: "Angular JS Template",
  },
  {
    id: 4,
    color: "warning",
    data: "Task Overdue",
    data1: "14 June 2021",
    text: "Petey Cruiser finished task",
    text1: "Integrated Management",
  },
  {
    id: 5,
    color: "danger",
    data: "Task Overdue",
    data1: "29 June 2021",
    text: "Petey Cruiser finished task ",
    text1: "Integrated Management",
  },
  {
    id: 6,
    color: "info",
    data: "Task Finished",
    data1: "09 July 2021",
    text: "Adam Berry finished task on ",
    text1: "Project Management",
  },
];
//*** File Manager ***//
interface folder {
  id: number;
  class: string;
  color: string;
}
export const folders: folder[] = [
  { id: 1, class: "Remote Control", color: "primary" },
  { id: 2, class: "Google Drive", color: "secondary" },
  { id: 3, class: "FTP Files", color: "danger" },
  { id: 4, class: "Transfer Files", color: "warning" },
  { id: 5, class: "Deep Clean", color: "success" },
  { id: 6, class: "Favourities", color: "info" },
  { id: 7, class: "Settings", color: "pink" },
];
//Folders
const icon = (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#645acf"
      d="M9.3 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H10L12 6H20C21.1 6 22 6.9 22 8V14.6C20.6 13.6 18.9 13 17 13C13.5 13 10.4 15.1 9.1 18.3L8.8 19L9.1 19.7C9.2 19.8 9.2 19.9 9.3 20M23 19C22.1 21.3 19.7 23 17 23S11.9 21.3 11 19C11.9 16.7 14.3 15 17 15S22.1 16.7 23 19M19.5 19C19.5 17.6 18.4 16.5 17 16.5S14.5 17.6 14.5 19 15.6 21.5 17 21.5 19.5 20.4 19.5 19M17 18C16.4 18 16 18.4 16 19S16.4 20 17 20 18 19.6 18 19 17.6 18 17 18"
    />
  </svg>
);
const icon1 = (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#e82646"
      d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z"
    />
  </svg>
);
const icon2 = (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#09ad95"
      d="M10 4L12 6H20C21.1 6 22 6.89 22 8V18C22 19.1 21.1 20 20 20H4C2.89 20 2 19.1 2 18L2 6C2 4.89 2.89 4 4 4H10M19 9H15.5V13.06L15 13C13.9 13 13 13.9 13 15C13 16.11 13.9 17 15 17C16.11 17 17 16.11 17 15V11H19V9Z"
    />
  </svg>
);
const icon3 = (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#fc5296"
      d="M10,4L12,6H20A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10M12.46,10.88L14.59,13L12.46,15.12L13.88,16.54L16,14.41L18.12,16.54L19.54,15.12L17.41,13L19.54,10.88L18.12,9.46L16,11.59L13.88,9.46L12.46,10.88Z"
    />
  </svg>
);
const icon4 = (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#f7b731"
      d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z"
    />
  </svg>
);
const icon5 = (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#05c3fb"
      d="M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M15,16H6V14H15V16M18,12H6V10H18V12Z"
    />
  </svg>
);
const icon6 = (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#fc7303"
      d="M5,17L9.5,11L13,15.5L15.5,12.5L19,17M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6Z"
    />
  </svg>
);
const icon7 = (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#1170e4"
      d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6M18 12H16V14H18V16H16V18H14V16H16V14H14V12H16V10H14V8H16V10H18V12Z"
    />
  </svg>
);
interface folders {
  id: number;
  icon: any;
  class: string;
  text: string;
  data: string;
  color: string;
}
export const folder: folders[] = [
  {
    id: 1,
    icon: icon,
    class: "Videos",
    text: "35Files",
    data: "23MB",
    color: "primary",
  },
  {
    id: 2,
    icon: icon1,
    class: "PPt",
    text: "25Files",
    data: "15MB",
    color: "danger",
  },
  {
    id: 3,
    icon: icon2,
    class: "Music",
    text: "35Files",
    data: "23MB",
    color: "success",
  },
  {
    id: 4,
    icon: icon3,
    class: "XLS",
    text: "35Files",
    data: "23MB",
    color: "pink",
  },
  {
    id: 5,
    icon: icon4,
    class: "PDF",
    text: "35Files",
    data: "23MB",
    color: "warning",
  },
  {
    id: 6,
    icon: icon5,
    class: "TXT",
    text: "35Files",
    data: "23MB",
    color: "secondary",
  },
  {
    id: 7,
    icon: icon6,
    class: "Images",
    text: "21Files",
    data: "19MB",
    color: "danger",
  },
  {
    id: 8,
    icon: icon7,
    class: "ZIP",
    text: "22Files",
    data: "10MB",
    color: "info",
  },
];
//files
interface filemanager {
  id: number;
  class: string;
  src1: string;
  data: string;
  data1: string;
}
export const filemanagers: filemanager[] = [
  {
    id: 1,
    class: "image1.jpg",
    src1: Imagesdata("document6"),
    data: "76 KB",
    data1: "mx-auto",
  },
  {
    id: 2,
    class: "file.pdf",
    src1: Imagesdata("file7"),
    data: "32 KB",
    data1: "",
  },
  {
    id: 3,
    class: "excel.xls",
    src1: Imagesdata("document2"),
    data: "34 KB",
    data1: "mx-auto",
  },
  {
    id: 4,
    class: "nature.jpg",
    src1: Imagesdata("file6"),
    data: "66 KB",
    data1: "",
  },
  {
    id: 5,
    class: "demo.ppt",
    src1: Imagesdata("document7"),
    data: "67 KB",
    data1: "mx-auto",
  },
  {
    id: 6,
    class: "video.mp4",
    src1: Imagesdata("document10"),
    data: "320 KB",
    data1: "mx-auto",
  },
  {
    id: 7,
    class: "word.doc",
    src1: Imagesdata("document8"),
    data: "320 KB",
    data1: "mx-auto",
  },
  {
    id: 8,
    class: "mountain.jpg",
    src1: Imagesdata("file1"),
    data: "320 KB",
    data1: "",
  },
  {
    id: 9,
    class: "file.pdf",
    src1: Imagesdata("document6"),
    data: "32 KB",
    data1: "mx-auto",
  },
  {
    id: 10,
    class: "excel.xls",
    src1: Imagesdata("document2"),
    data: "34 KB",
    data1: "mx-auto",
  },
  {
    id: 11,
    class: "image1.jpg",
    src1: Imagesdata("file2"),
    data: "76 KB",
    data1: "",
  },
  {
    id: 12,
    class: "profile.ppt",
    src1: Imagesdata("document7"),
    data: "67 KB",
    data1: "mx-auto",
  },
  {
    id: 13,
    class: "image2.jpg",
    src1: Imagesdata("file4"),
    data: "66 KB",
    data1: "",
  },
  {
    id: 14,
    class: "nature.jpg",
    src1: Imagesdata("file5"),
    data: "66 KB",
    data1: "",
  },
  {
    id: 15,
    class: "exe.zip",
    src1: Imagesdata("document9"),
    data: "320 KB",
    data1: "mx-auto",
  },
];
//*** FileAttachment Data ***//
interface squarefile {
  id: number;
  color: string;
  class: string;
}
export const squarefiles: squarefile[] = [
  { id: 1, color: "primary", class: "Image_file.jpg" },
  { id: 2, color: "secondary", class: "Word_file.doc" },
  { id: 3, color: "success", class: "Excel_file.xls" },
  { id: 4, color: "warning", class: "pdf_file.pdf" },
  { id: 5, color: "danger", class: "Video_file.mp4" },
  { id: 6, color: "info", class: "Audio_file.mp3" },
];
//image file
interface imgfile {
  id: number;
  src1: string;
  class: string;
}
export const imgfiles: imgfile[] = [
  { id: 1, src1: Imagesdata("product4"), class: "Image01.jpg" },
  { id: 2, src1: Imagesdata("file11"), class: "Image02.jpg" },
  { id: 3, src1: Imagesdata("file12"), class: "Image03.jpg" },
  { id: 4, src1: Imagesdata("file13"), class: "Image04.jpg" },
  { id: 5, src1: Imagesdata("file14"), class: "Image05.jpg" },
  { id: 6, src1: Imagesdata("file10"), class: "Image06.jpg" },
];
//image file
interface imgfile1 {
  id: number;
  src1: string;
  class: string;
}
export const imgfiles1: imgfile1[] = [
  { id: 1, src1: Imagesdata("product4"), class: "Image01.jpg" },
  { id: 2, src1: Imagesdata("document1"), class: "Word.doc" },
  { id: 3, src1: Imagesdata("document4"), class: "Excel.xls" },
  { id: 4, src1: Imagesdata("document3"), class: "Document.pdf" },
  { id: 5, src1: Imagesdata("document5"), class: "Image02.jpg" },
];
//File Details
interface relatedfile {
  id: number;
  src1: string;
  class: string;
  class1: string;
}
export const relatedfiles: relatedfile[] = [
  { id: 1, src1: Imagesdata("files03"), class: "image2.jpg", class1: "66 KB" },
  { id: 2, src1: Imagesdata("document6"), class: "file.pdf", class1: "32 KB" },
  { id: 3, src1: Imagesdata("files07"), class: "image1.jpg", class1: "76 KB" },
  { id: 4, src1: Imagesdata("document2"), class: "excel.xls", class1: "34 KB" },
  { id: 5, src1: Imagesdata("files06"), class: "nature.jpg", class1: "66 KB" },
  { id: 6, src1: Imagesdata("document7"), class: "demo.ppt", class1: "67 KB" },
  { id: 7, src1: Imagesdata("files02"), class: "image1.jpg", class1: "76 KB" },
];
//*** Landing Data ***//
interface data {
  id: number;
  heading: string;
  url: string;
  class: string;
}
export const data1: data[] = [
  { id: 1, heading: "Home", url: "#home", class: "active" },
  { id: 2, heading: "Features", url: "#Features", class: "" },
  { id: 3, heading: "About", url: "#About", class: "" },
  { id: 4, heading: "Faqs", url: "#Faqs", class: "" },
  { id: 5, heading: "Blog", url: "#Blog", class: "" },
  { id: 6, heading: "Clients", url: "#Clients", class: "" },
  { id: 7, heading: "Contact", url: "#Contact", class: "" },
];
//*** Range Slider ***//
// Range Slider Tooltip value label

interface Props {
  children: React.ReactElement;
  value: string;
}

const Markee: any = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 250,
    label: "$250",
  },
  {
    value: 500,
    label: "$500",
  },
  {
    value: 750,
    label: "$750",
  },
  {
    value: 1000,
    label: "$1000",
  },
];

function valuetext4(value: number) {
  return `${value}°C`;
}
function ValueLabelComponent2(props: Props) {
  const { children, value } = props;

  return (
    <Tooltip placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
export function ValueLabel() {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        valueLabelDisplay="auto"
        components={{
          ValueLabel: ValueLabelComponent2,
        }}
        step={250}
        // getAriaLabel="custom thumb label"
        defaultValue={[200, 800]}
        marks={Markee}
        getAriaValueText={valuetext4}
        min={0}
        max={1000}
      />
    </Box>
  );
}
//*** Under Construction ***//
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import React from "react";

const AfterComplete = () => <span>You are good to go!</span>;
// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <Fragment>
        <Row className="count-down justify-content-center mt-5">
          <Col lg={2} sm={3} className="countdown me-0 me-sm-3 mt-2">
            <div className="countdown bg-primary p-3 mb-1 br-5 row shadow-lg border-white2">
              <span className="days text-white col-12 p-0">{days}</span>
              <span className="text-white col-12">Days</span>
            </div>
          </Col>
          <Col lg={2} sm={3} className="countdown me-0 me-sm-3 mt-2">
            <div className="countdown bg-primary p-3 mb-1 br-5 row shadow-lg border-white2">
              <span className="hours text-white col-12">{hours}</span>
              <span className="text-white col-12">Hours</span>
            </div>
          </Col>

          <Col lg={2} sm={3} className="countdown me-0 me-sm-3 mt-2">
            <div className="countdown bg-primary p-3 mb-1 br-5 row shadow-lg border-white2">
              <span className="minutes text-white col-12">{minutes}</span>
              <span className="text-white col-12">Minutes</span>
            </div>
          </Col>
          <Col lg={2} sm={3} className="countdown me-0 me-sm-3 mt-2">
            <div className="countdown bg-primary p-3 mb-1 br-5 row shadow-lg border-white2">
              <span className="seconds text-white col-12">{seconds}</span>
              <span className="text-white col-12">Seconds</span>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
};
export function DayCounter() {
  return <Countdown date={Date.now() + 12999800000} renderer={rendering} />;
}

//*** Ecommerce ***//

export const relatedproductData = [
  {
    id: 4,
    pic: Imagesdata("product4"),
    heading: "Flower Pot For Home Decor",
    price2: "$18,299",
    price1: "$16,599",
  },
  {
    id: 7,
    pic: Imagesdata("product6"),
    heading: "Black Digital Camera",
    price2: "$56,599",
    price1: "$24,999",
  },
  {
    id: 2,
    pic: Imagesdata("product8"),
    heading: "Candy Pure Rose Water",
    price2: "$25,599",
    price1: "$8,099",
  },
  {
    id: 3,
    pic: Imagesdata("product9"),
    heading: "White Tshirt For Men",
    price2: "$18,399",
    price1: "$11,199",
  },
];
//shopping data

export const shopingData: any = [
  {
    id: 4,
    preview: Imagesdata("product3"),
    heading: "Flower Pot for Home Decor",
    price1: "$568",
    price2: "$568",
    quantity: 1,
  },
  {
    id: 1,
    preview: Imagesdata("product7"),
    heading: "Stylish Rockerz 255 Ear Pods",
    price1: "$1,027",
    price2: "$2,054",
    quantity: 2,
  },
  {
    id: 3,
    preview: Imagesdata("product9"),
    heading: "White Tshirt for Men",
    price1: "$1,589",
    price2: "$4,767",
    quantity: 3,
  },
  {
    id: 2,
    preview: Imagesdata("product8"),
    heading: "Candy Pure Rose Water",
    price1: "$1,027",
    price2: "$4,108",
    quantity: 4,
  },
  {
    id: 7,
    preview: Imagesdata("product5"),
    heading: "Black Digital Camera",
    price1: "$1,589",
    price2: "$3,178",
    quantity: 2,
  },
];
//*** Add Products ***//
export const Product = [
  { value: "Electronics", label: "Electronics" },
  { value: "Fashion", label: "Fashion" },
  { value: "Home Decor", label: "Home Decor" },
  { value: "Furniture", label: "Furniture" },
];
//*** EXTENSIONS ***//
//Auto company
interface company {
  id: number;
  heading: string;
}
export const companys: company[] = [
  { id: 1, heading: "Why Sash ?" },
  { id: 2, heading: "What is Our Services?" },
];
interface Leadership {
  id: number;
  src1: string;
}
export const Leaderships: Leadership[] = [
  { id: 1, src1: Imagesdata("users2") },
  { id: 2, src1: Imagesdata("users3") },
  { id: 3, src1: Imagesdata("users7") },
  { id: 4, src1: Imagesdata("users15") },
];
interface service {
  id: number;
  icon: string;
  heading: string;
  color: string;
}
export const services: service[] = [
  {
    id: 1,
    icon: "icon icon-people",
    heading: "Branding",
    color: "primary-gradient",
  },
  {
    id: 2,
    icon: "icon icon-rocket",
    heading: "Development",
    color: "secondary-gradient",
  },
  {
    id: 3,
    icon: "fe fe-instagram",
    heading: "Social Media",
    color: "success-gradient",
  },
  {
    id: 4,
    icon: "fe fe-shopping-cart",
    heading: "E-Commerce",
    color: "danger-gradient",
  },
];
//Blog Details
interface blog {
  id: number;
  heading: string;
  src1: string;
  class: string;
}
export const blogs: blog[] = [
  { id: 1, heading: "Simon Sais", src1: Imagesdata("users1"), class: "" },
  {
    id: 2,
    heading: "Cherry Blossom",
    src1: Imagesdata("users3"),
    class: "mt-5",
  },
  {
    id: 3,
    heading: "Ivan Notheridiya",
    src1: Imagesdata("users5"),
    class: "mt-5",
  },
  { id: 4, heading: "Manny Jah", src1: Imagesdata("users15"), class: "mt-5" },
];
interface blog1 {
  id: number;
  heading: string;
  src1: string;
  class: string;
}
export const blogs1: blog1[] = [
  {
    id: 1,
    heading: "Generator on the Internet..",
    src1: Imagesdata("media19"),
    class: "",
  },
  {
    id: 2,
    heading: "Voluptatem quia voluptas...",
    src1: Imagesdata("media22"),
    class: "mt-5",
  },
  {
    id: 3,
    heading: "Generator on the Internet..",
    src1: Imagesdata("media12"),
    class: "mt-5",
  },
  {
    id: 4,
    heading: "Voluptatem quia voluptas...",
    src1: Imagesdata("media25"),
    class: "mt-5",
  },
];
interface tag {
  id: number;
  heading: string;
}
export const tags: tag[] = [
  { id: 1, heading: "Development" },
  { id: 2, heading: "Design" },
  { id: 3, heading: "Technology" },
  { id: 4, heading: "Popular" },
  { id: 5, heading: "Codiegniter" },
  { id: 6, heading: "JavaScript" },
  { id: 7, heading: "Bootstrap" },
  { id: 8, heading: "PHP" },
];
//Blog post
interface post {
  id: number;
  heading: string;
  src1: string;
  data: string;
  color: string;
  class: string;
}
export const posts: post[] = [
  {
    id: 1,
    heading: "Generator on the Internet..",
    src1: Imagesdata("media19"),
    data: "Lifestyle",
    color: "danger",
    class: "",
  },
  {
    id: 2,
    heading: "Voluptatem quia voluptas...",
    src1: Imagesdata("media22"),
    data: "Business",
    color: "primary",
    class: "mt-5",
  },
  {
    id: 3,
    heading: "Generator on the Internet..",
    src1: Imagesdata("media12"),
    data: "Travel",
    color: "secondary",
    class: "mt-5",
  },
  {
    id: 4,
    heading: "Voluptatem quia voluptas...",
    src1: Imagesdata("media25"),
    data: "Meeting",
    color: "success",
    class: "mt-5",
  },
];
interface Professional {
  id: number;
  heading: string;
  src1: string;
  class: string;
}
export const Professionals: Professional[] = [
  { id: 1, heading: "John Paige", src1: Imagesdata("users12"), class: "" },
  { id: 2, heading: "Peter Hill", src1: Imagesdata("users2"), class: "mt-5" },
  { id: 3, heading: "Irene Harris", src1: Imagesdata("users9"), class: "mt-5" },
  { id: 4, heading: "Harry Fisher", src1: Imagesdata("users4"), class: "mt-5" },
];
//blog
interface post1 {
  id: number;
  heading: string;
  src1: string;
  data: string;
  color: string;
  class: string;
}
export const posts1: post1[] = [
  {
    id: 1,
    heading: "Generator on the Internet..",
    src1: Imagesdata("media22"),
    data: "Lifestyle",
    color: "danger",
    class: "",
  },
  {
    id: 2,
    heading: "Voluptatem quia voluptas...",
    src1: Imagesdata("media12"),
    data: "Business",
    color: "primary",
    class: "mt-5",
  },
  {
    id: 3,
    heading: "Generator on the Internet..",
    src1: Imagesdata("media28"),
    data: "Travel",
    color: "secondary",
    class: "mt-5",
  },
  {
    id: 4,
    heading: "Voluptatem quia voluptas...",
    src1: Imagesdata("media25"),
    data: "Meeting",
    color: "success",
    class: "mt-5",
  },
];
//Services
interface service1 {
  id: number;
  icon: string;
  heading: string;
  color: string;
}
export const services1: service1[] = [
  {
    id: 1,
    icon: "icon icon-people",
    heading: "Creative solutions",
    color: "primary",
  },
  {
    id: 2,
    icon: "icon icon-clock",
    heading: "Trace your time",
    color: "danger-gradient",
  },
  {
    id: 3,
    icon: "fa fa-building-o",
    heading: "Business FrameWork",
    color: "success",
  },
  {
    id: 4,
    icon: "icon icon-action-redo",
    heading: "Shares",
    color: "warning-gradient",
  },
];
interface service2 {
  id: number;
  icon: string;
  heading: string;
  color: string;
}
export const services2: service2[] = [
  { id: 1, icon: "fa-globe", heading: "Web design", color: "primary" },
  {
    id: 2,
    icon: "fa-building-o",
    heading: "Web Development",
    color: "warning",
  },
  { id: 3, icon: "fa-file-word-o", heading: "Wordpress", color: "pink" },
  { id: 4, icon: "fa-camera", heading: "Photography", color: "danger" },
  {
    id: 5,
    icon: "fa-pencil-square-o",
    heading: "Development",
    color: "purple",
  },
  { id: 6, icon: "fa-eercast", heading: "Android", color: "success" },
];
//settings
interface setting {
  id: number;
  color: string;
  heading: string;
  data: string;
  icon: string;
}
export const settings: setting[] = [
  {
    id: 1,
    heading: "General",
    data: "General settings such as, site title, logo, other general and advanced settings.",
    icon: "fe-settings",
    color: "primary",
  },
  {
    id: 2,
    heading: "Dashboard",
    data: "In this settings we can change sidemenu and main page can be Controlled.",
    icon: "fe-home",
    color: "secondary",
  },
  {
    id: 3,
    heading: "Notifications",
    data: "Notifications settings we can control the notifications privacy and security.",
    icon: "fe-bell",
    color: "danger",
  },
  {
    id: 4,
    heading: "Webapps",
    data: "Web apps settings such as Apps,Elements & Mail related to web apps can be Controlled.",
    icon: "fe-grid",
    color: "warning",
  },
  {
    id: 5,
    heading: "Region & language",
    data: "Region & language settings we can Add, Delete and edit your Region & language.",
    icon: "fe-flag",
    color: "success",
  },
  {
    id: 6,
    heading: "Blog",
    data: "Blog settings such as, enable blog, max mosts in page and more can be controlled.",
    icon: "fe-cast",
    color: "pink",
  },
  {
    id: 7,
    heading: "SEO",
    data: "Search Engine Optimization settings such as, meta tags and social media can be controlled..",
    icon: "fe-search",
    color: "info",
  },
  {
    id: 8,
    heading: "SMTP",
    data: "Email SMTP settings such as, contact us and others related to email can be controlled.",
    icon: "fe-mail",
    color: "orange",
  },
];
//Pricing
interface price {
  id: number;
  heading: string;
  text: string;
  data: string;
  data1: string;
  data2: string;
  color: string;
}
export const prices: price[] = [
  {
    id: 1,
    heading: "Team",
    text: "25",
    data: "3",
    data1: "4",
    data2: " 2",
    color: "secondary",
  },
  {
    id: 2,
    heading: "Personal",
    text: "15",
    data: "2",
    data1: "3",
    data2: " 1",
    color: "primary",
  },
  {
    id: 3,
    heading: "Corporate",
    text: "35",
    data: "4",
    data1: "6",
    data2: " 2",
    color: "danger",
  },
  {
    id: 4,
    heading: "Business",
    text: "99",
    data: " 5",
    data1: "8",
    data2: "2",
    color: "success",
  },
];
//dashboard data
import { faker } from "@faker-js/faker";

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): any => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number(40),
    visits: faker.datatype.number(1000),
    progress: faker.datatype.number(100),
    status: faker.helpers.shuffle<any["status"]>([
      "relationship",
      "complicated",
      "single",
    ])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): any[] => {
    const len = lens[depth]!;
    return range(len).map(() => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
