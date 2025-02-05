import {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {
    FormControl,
    Nav,
    Modal,
    Row,
    Col,
    Dropdown,
    Badge,
    Navbar,
    InputGroup
} from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import {MENUITEMS} from "../../commondata/sidemenu";
import {Imagesdata} from "../../commondata/commonimages";
import * as SwitcherData from "../../commondata/switcherdata";
import AuthenticationService from "../../service/authentication.service";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";
const SideMenuIcon: any = () => { // leftsidemenu
    document.querySelector(".app") ?. classList.toggle("sidenav-toggled");
};

export interface AccountSwitchProps {
  show?: boolean;
  handleClose?: (e: Event) => void;
}

const AccountsSwitch: FC<AccountSwitchProps> = ({
  show = true,
  handleClose
}) => {
    //const [show, setShow] = useState(showModal);
    //const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (<Modal className="modal fade"
        show={show}
        // onHide={handleClose}
        centered>
        <Modal.Header>
            <Modal.Title as="h6">Choose Account</Modal.Title>
            {/*<span className="d-flex ms-auto"
                onClick={handleClose}>
                <i className="fe fe-x ms-auto"></i>
            </span>*/}
        </Modal.Header>
        <Modal.Body>
            <Row as="ul" className="p-3">
                <Col lg={12}
                    as="li"
                    className="mb-2">
                    <Link to="#" className="btn btn-country btn-lg btn-block active" onClick={handleClose}>
                        <span className="country-selector">
                            <img alt=""
                                src={
                                    Imagesdata("us")
                                }
                                className="me-3 language"/>
                        </span>
                        Daydream
                    </Link>
                </Col>
                <Col lg={12}
                    as="li"
                    className="mb-2">
                    <Link to="#" className="btn btn-country btn-lg btn-block" onClick={handleClose}>
                        <span className="country-selector">
                            <img alt=""
                                src={
                                    Imagesdata("italy")
                                }
                                className="me-3 language"/>
                        </span>
                        IKEA
                    </Link>
                </Col>
                <Col lg={12}
                    as="li"
                    className="mb-2">
                    <Link to="#" className="btn btn-country btn-lg btn-block" onClick={handleClose}>
                        <span className="country-selector">
                            <img alt=""
                                src={
                                    Imagesdata("spain")
                                }
                                className="me-3 language"/>
                        </span>
                        TixBox FZ LLE
                    </Link>
                </Col>
                <Col lg={12}
                    as="li"
                    className="mb-2">
                    <Link to="#" className="btn btn-country btn-lg btn-block" onClick={handleClose}>
                        <span className="country-selector">
                            <img alt=""
                                src={
                                    Imagesdata("india")
                                }
                                className="me-3 language"/>
                        </span>
                        TODA
                    </Link>
                </Col>
                <Col lg={12}
                    as="li"
                    className="mb-2">
                    <Link to="#" className="btn btn-country btn-lg btn-block" onClick={handleClose}>
                        <span className="country-selector">
                            <img alt=""
                                src={
                                    Imagesdata("french")
                                }
                                className="me-3 language"/>
                        </span>
                        Worldstage
                    </Link>
                </Col>
            </Row>
        </Modal.Body>
    </Modal>
    );
};

export default AccountsSwitch;