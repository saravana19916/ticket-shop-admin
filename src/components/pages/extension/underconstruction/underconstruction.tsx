import  { FC, Fragment } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { DayCounter } from '../../../../commondata/commondata';

interface UnderConstructionProps { }

const UnderConstruction: FC<UnderConstructionProps> = () => {
    
const SwitcherIcons = () => {

    //leftsidemenu
    document.querySelector(".demo_changer")?.classList.add("active");
    const Rightside: any = document.querySelector(".demo_changer");
    Rightside.style.insetInlineEnd = "0px";
};

const RemoveSwitcherIcon: any = () => {

    //leftsidemenu
    document.querySelector(".demo_changer")?.classList.remove("active");
    const Rightside: any = document.querySelector(".demo_changer");
    Rightside.style.insetInlineEnd = "-270px";
};
    return(

    <Fragment>
        <div className='login-img'>
            <div className="page" onClick={() => RemoveSwitcherIcon()}>
                <div className='container'>
                    <Row className="text-center mx-auto">
                        <Col lg={11} sm={12} className="center-block construction">
                            <div className="text-white">
                                <Card.Body className="p-0">
                                    <h1 className="display-2 mb-0 fw-semibold my-5">Coming Soon</h1>
                                    <div >
                                        <DayCounter />
                                    </div>
                                    <p className='mt-5'>we apologize for your in-convenience....any quaries contact me </p>
                                    <h4 className='mt-5'><strong>Contact:</strong> sash@demo.com</h4>
                                    <div className="mt-5">
                                        <Button className="btn btn-icon" type="button">
                                            <span className="btn-inner--icon"><i className="fa fa-facebook-f"></i></span>
                                        </Button>
                                        <Button className="btn btn-icon" type="button">
                                            <span className="btn-inner--icon"><i className="fa fa-google"></i></span>
                                        </Button>
                                        <Button className="btn btn-icon" type="button">
                                            <span className="btn-inner--icon"><i className="fa fa-twitter"></i></span>
                                        </Button>
                                        <Button className="btn btn-icon" type="button">
                                            <span className="btn-inner--icon"><i className="fa fa-pinterest-p"></i></span>
                                        </Button>
                                    </div>
                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="dropdown float-end custom-layout" onClick={() => SwitcherIcons()}>
    <div className="demo-icon nav-link icon mt-4">
        <i className="fe fe-settings fa-spin text_primary" ></i>
    </div>
</div>
        </div>
    </Fragment>
);
    };

export default UnderConstruction;
