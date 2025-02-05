import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row, Form, Collapse } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Link } from 'react-router-dom';
import Rodal from "rodal";
import "rodal/lib/rodal.css";
interface ModalSProps { }
const ModalS: FC<ModalSProps> = () => {
//small modal
  const [show, setShow] = useState(false);
  const smallmodalClose = () => setShow(false);
  const smallmodalShow = () => setShow(true);
//large modal
  const [show1, setShow1] = useState(false);
  const largemodalClose = () => setShow1(false);
  const largemodalShow = () => setShow1(true);
//extra large modal
  const [show2, setShow2] = useState(false);
  const xtralargemodalClose = () => setShow2(false);
  const xtralargemodalShow = () => setShow2(true);
  // showCode

  const [Annimation, setAnnimation] = useState(false);
  const [Size, setSize] = useState(false);
  const [Select2, setSelect2] = useState(false);
  const [mdo, setMdo] = useState(false);
  const [basic, setbasic] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [Warning, setWarning] = useState(false);

//Modal Zoom
const [visible, setVisible] = useState(false);

const shows = () => {
    setVisible(true);
};

const hide = () => {
    setVisible(false);
};
//Fade
const [visible1, setVisible1] = useState(false);

const shows1 = () => {
    setVisible1(true);
};

const hide1 = () => {
    setVisible1(false);
};
//Modal Flip
const [visible2, setVisible2] = useState(false);
const shows2 = () => {
    setVisible2(true);
};
const hide2 = () => {
    setVisible2(false);
};
//Door
const [visible3, setVisible3] = useState(false);
const shows3 = () => {
    setVisible3(true);
};
const hide3 = () => {
    setVisible3(false);
};
//Rotate
const [visible4, setVisible4] = useState(false);
const shows4 = () => {
    setVisible4(true);
};
const hide4 = () => {
    setVisible4(false);
};
//Slideup
const [visible5, setVisible5] = useState(false);
const shows5 = () => {
    setVisible5(true);
};
const hide5 = () => {
    setVisible5(false);
};
//SlideDown
const [visible6, setVisible6] = useState(false);
const shows6 = () => {
    setVisible6(true);
};
const hide6 = () => {
    setVisible6(false);
};
//SlideLeft
const [visible7, setVisible7] = useState(false);
const shows7 = () => {
    setVisible7(true);
};
const hide7 = () => {
    setVisible7(false);
};
//SlideRight
const [visible8, setVisible8] = useState(false);
const shows8 = () => {
    setVisible8(true);
};
const hide8 = () => {
    setVisible8(false);
};
// Select2 Inside Modals
  const [shows9, setShows9] = useState(false);
  const handleClose = () => setShows9(false);
  const handleShow = () => setShows9(true);
  //Input Modal
    const [shows10, setShows10] = useState(false);
    const handleClose1 = () => setShows10(false);
    const handleShow1 = () => setShows10(true);
    // Basic Modal OPEN
  const [shows11, setShows11] = useState(false);
  const viewDemoClose = () => setShows11(false);
  const viewDemoShow = () => setShows11(true);
// SUCCESS ALERT Modal START
  const [shows12, setShows12] = useState(false);
  const viewDemoClose1 = () => setShows12(false);
  const viewDemoShow1 = () => setShows12(true);
//  Warning Alert Messages START
  const [shows13, setShows13] = useState(false);
  const viewDemoClose2 = () => setShows13(false);
  const viewDemoShow2 = () => setShows13(true);
  //Full Screen Modal
  let [fullScreen, setFullscreen] = useState("true");
const [shows14, setShows14] = useState(false);
  const fullscreenmodalClose = () => setShows14(false);
  function handleShow3(breakpoint: any) {
      setFullscreen(breakpoint);
      setShows14(true);
  }
  //Scroll Modal
  const [shows15, setShows15] = useState(false);
  const handleClose4 = () => setShows15(false);
  const handleShow4 = () => setShows15(true);
  return (
    <Fragment>
      <PageHeader titles="Modal" active="Modal" items={['Advanced Elements']} />
      <Card id="modal5">
        <Card.Header className="border-bottom-0">
          <Card.Title>
            Modal Animation Effects
          </Card.Title>
          <Form className="ms-auto">
            <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setAnnimation(!Annimation)} className="showcode d-flex ms-auto mx-2" />
          </Form>
        </Card.Header>
        <Collapse in={Annimation} className="mt-2">
          <pre>
            <code>
              {`
 export function ModalZoom() {

 const [visible, setVisible] = useState(false);

 const show = () => {
      setVisible(true);
  };

  const hide = () => {
      setVisible(false);
  };

  return (
      <div>
          <Link to="#" className="modal-effect btn btn-primary-light d-grid mb-3" onClick={show}>Zoom</Link>
          <Rodal visible={visible} onClose={hide} animation='Zoom' height={280}>
              <div>Mesage Preview</div>
              <hr />
              <p> Why We Use Electoral College, Not Popular Vote It is a long
                  established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using
                  Lorem Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here', making it
                  look like readable English.</p>
              <hr />
              <Button className="me-2" variant="primary" onClick={hide}>Save Changes</Button>
              <Button variant="default" onClick={hide}>Close</Button>
          </Rodal>
      </div>
  );
}

`}
            </code>
          </pre>
        </Collapse>
        <Card.Body>
          <Row>
            <Col sm={6} md={6} xl={3}>
            <div>
            <Link to="#" className="modal-effect btn btn-primary-light d-grid mb-3" onClick={shows}>Zoom</Link>
            <Rodal visible={visible} onClose={hide} animation='Zoom' height={280}>
                <div>Mesage Preview</div>
                <hr />
                <p> Why We Use Electoral College, Not Popular Vote It is a long
                    established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it
                    look like readable English.</p>
                <hr />
                <Button className="me-2" variant="primary" onClick={hide}>Save Changes</Button>
                <Button variant="default" onClick={hide}>Close</Button>
            </Rodal>
        </div>
            </Col>
            <Col sm={6} md={6} xl={3}>
            <div>
            <Link to="#" className="modal-effect btn btn-secondary-light d-grid mb-3" onClick={shows1}>Fade</Link>
            <Rodal visible={visible1} onClose={hide1} animation='fade' height={280}>
                <div>Mesage Preview</div>
                <hr />
                <p> Why We Use Electoral College, Not Popular Vote It is a long
                    established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it
                    look like readable English.</p>
                <hr />
                <Button className="me-2" variant="primary" onClick={hide}>Save Changes</Button>
                <Button variant="default" onClick={hide1}>Close</Button>
            </Rodal>
        </div>
            </Col>
            <Col sm={6} md={6} xl={3}>
            <div>
            <Link to="#" className="modal-effect btn btn-danger-light d-grid mb-3" onClick={shows2}>Flip</Link>
            <Rodal visible={visible2} onClose={hide2} animation='flip' height={280}>
                <div>Mesage Preview</div>
                <hr />
                <p> Why We Use Electoral College, Not Popular Vote It is a long
                    established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it
                    look like readable English.</p>
                <hr />
                <Button className="me-2" variant="primary" onClick={hide2}>Save Changes</Button>
                <Button variant="default" onClick={hide2}>Close</Button>
            </Rodal>
        </div>
            </Col>
            <Col sm={6} md={6} xl={3}>
            <div>
            <Link to="#" className="modal-effect btn btn-warning-light d-grid mb-3" onClick={shows3}>Door</Link>
            <Rodal visible={visible3} onClose={hide3} animation='door' height={280}>
                <div>Mesage Preview</div>
                <hr />
                <p> Why We Use Electoral College, Not Popular Vote It is a long
                    established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it
                    look like readable English.</p>
                <hr />
                <Button className="me-2" variant="primary" onClick={hide3}>Save Changes</Button>
                <Button variant="default" onClick={hide3}>Close</Button>
            </Rodal>
        </div>
            </Col>
            <Col sm={6} md={6} xl={3}>
            <div>
            <Link to="#" className="modal-effect btn btn-success-light d-grid mb-3" onClick={shows4}>Rotate</Link>
            <Rodal visible={visible4} onClose={hide4} animation='rotate' height={280}>
                <div>Mesage Preview</div>
                <hr />
                <p> Why We Use Electoral College, Not Popular Vote It is a long
                    established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it
                    look like readable English.</p>
                <hr />
                <Button className="me-2" variant="primary" onClick={hide4}>Save Changes</Button>
                <Button variant="default" onClick={hide4}>Close</Button>
            </Rodal>
        </div>
            </Col>
            <Col sm={6} md={6} xl={3}>
            <div>
            <Link to="#" className="modal-effect btn btn-info-light d-grid mb-3" onClick={shows5}>Slide-Up</Link>
            <Rodal visible={visible5} onClose={hide5} animation='slideUp' height={280}>
                <div>Mesage Preview</div>
                <hr />
                <p> Why We Use Electoral College, Not Popular Vote It is a long
                    established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it
                    look like readable English.</p>
                <hr />
                <Button className="me-2" variant="primary" onClick={hide5}>Save Changes</Button>
                <Button variant="default" onClick={hide5}>Close</Button>
            </Rodal>
        </div>
            </Col>
            <Col sm={6} md={6} xl={3}>
            <div>
            <Link to="#" className="modal-effect btn btn-primary-light d-grid mb-3" onClick={shows6}>slide-Down</Link>
            <Rodal visible={visible6} onClose={hide6} animation='slideDown' height={280}>
                <div>Mesage Preview</div>
                <hr />
                <p> Why We Use Electoral College, Not Popular Vote It is a long
                    established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it
                    look like readable English.</p>
                <hr />
                <Button className="me-2" variant="primary" onClick={hide6}>Save Changes</Button>
                <Button variant="default" onClick={hide6}>Close</Button>
            </Rodal>
        </div>
            </Col>
            <Col sm={6} md={6} xl={3}>
            <div>
            <Link to="#" className="modal-effect btn btn-secondary-light d-grid mb-3" onClick={shows7}>slide-Left</Link>
            <Rodal visible={visible7} onClose={hide7} animation='slideLeft' height={280}>
                <div>Mesage Preview</div>
                <hr />
                <p> Why We Use Electoral College, Not Popular Vote It is a long
                    established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it
                    look like readable English.</p>
                <hr />
                <Button className="me-2" variant="primary" onClick={hide7}>Save Changes</Button>
                <Button variant="default" onClick={hide7}>Close</Button>
            </Rodal>
        </div>
            </Col>
            <Col sm={6} md={6} xl={3}>
            <div>
            <Link to="#" className="modal-effect btn btn-danger-light d-grid mb-3" onClick={shows8}>slide-Right</Link>
            <Rodal visible={visible8} onClose={hide8} animation='slideRight' height={280}>
                <div>Mesage Preview</div>
                <hr />
                <p> Why We Use Electoral College, Not Popular Vote It is a long
                    established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it
                    look like readable English.</p>
                <hr />
                <Button className="me-2" variant="primary" onClick={hide8}>Save Changes</Button>
                <Button variant="default" onClick={hide8}>Close</Button>
            </Rodal>
        </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row>
        <Col sm={12} md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <Card.Title>Modal Sizes & Types</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSize(!Size)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="text-center">
              <p>Add <code className="highlighter-rouge">.modal-sm </code> or <code className="highlighter-rouge">.modal-lg </code> or <code className="highlighter-rouge">.modal-xl </code> to modal-dialog to increase and decrease the modal box
                sizes.
              </p>

              <Button variant="primary" className="bg-primary-gradient mt-3 me-1" onClick={smallmodalShow}>
                Small Modal
              </Button>

              <Modal size="sm" show={show} onHide={smallmodalClose}>
                <ModalHeader>
                  <ModalTitle as="h5">Modal Titel</ModalTitle>
                  <span className="d-flex ms-auto" onClick={smallmodalClose}><i className='fe fe-x ms-auto' ></i></span>
                </ModalHeader>
                <ModalBody>Modal body text goes here..!</ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={smallmodalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={smallmodalClose}>
                    Save Changes
                  </Button>
                </ModalFooter>
              </Modal>

              <Button variant="success" className=" bg-success-gradient mt-3 me-1" onClick={largemodalShow}>
                large Modal
              </Button>

              <Modal size="lg" show={show1} onHide={largemodalClose}>
                <ModalHeader>
                  <ModalTitle as="h5">Modal Titel</ModalTitle>
                  <span className="d-flex ms-auto" onClick={largemodalClose}><i className='fe fe-x ms-auto' ></i></span>
                </ModalHeader>
                <ModalBody>Modal body text goes here..!</ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={largemodalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={largemodalClose}>
                    Save Changes
                  </Button>
                </ModalFooter>
              </Modal>

              <Button variant="success" className=" bg-success-gradient mt-3 me-1" onClick={xtralargemodalShow}>
                Extralarge Modal
              </Button>

              <Modal size="xl" show={show2} onHide={xtralargemodalClose}>
                <ModalHeader>
                  <ModalTitle as="h5">Modal Titel</ModalTitle>
                  <span className="d-flex ms-auto" onClick={xtralargemodalClose}><i className='fe fe-x ms-auto' ></i></span>
                </ModalHeader>
                <ModalBody>Modal body text goes here..!</ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={xtralargemodalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={xtralargemodalClose}>
                    Save Changes
                  </Button>
                </ModalFooter>
              </Modal>

              <Button variant="danger" className="bg-danger-gradient mt-3 me-1" onClick={handleShow4}>
                Scrolling Modal
            </Button>

            <Modal
                show={shows15}
                onHide={handleClose4}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title as="h5">Modal title</Modal.Title>
                    <span className="d-flex ms-auto" onClick={handleClose4}><i className='fe fe-x ms-auto' ></i></span>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..<br /> <br />But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?<br /> <br /> But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose4}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>

              <Button variant="warning" className="bg-warning-gradient mt-3 mb-3 mb-md-0 me-1" onClick={() => handleShow3(true)}>
                Full screen

            </Button>

            <Modal show={shows14} fullscreen={fullScreen} onHide={() => setShows14(false)}>
                <Modal.Header>
                    <Modal.Title as="h5">Modal</Modal.Title>
                    <span className="d-flex ms-auto" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
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
              <Collapse in={Size} className="mt-2">
                <pre>
                  <code>
                    {`
export function Fullscreen() {

  let [fullScreen, setFullscreen] = useState("true");
  const [show, setShow] = useState(false);

  const fullscreenmodalClose = () => setShow(false);

  function handleShow(breakpoint: any) {
      setFullscreen(breakpoint);
      setShow(true);
  }

  return (
      <>

  <Button variant="warning" className="bg-warning-gradient mt-3 mb-3 mb-md-0 me-1" onClick={() => handleShow(true)}>
      Full screen

  </Button>

  <Modal show={show} fullscreen={fullScreen} onHide={() => setShow(false)}>
      <Modal.Header>
  <Modal.Title>Modal</Modal.Title>
  <span className="d-flex ms-auto" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
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
      </>
  )
};
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col sm={6} md={6} lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <div className='d-flex'>
                <h6 className="main-content-label mb-3">Select2 Inside Modals</h6>
                <Form className="ms-auto">
                  <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSelect2(!Select2)} className="showcode d-flex ms-auto mx-2" />
                </Form>
                </div>
              </div>
            <Button className="me-3 mt-2" variant="pink" onClick={handleShow}>Select2 Modal</Button>
            <Modal show={shows9} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title as="h5">Select2 Modal</Modal.Title>
                    <span className="ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto' ></i></span>
                </Modal.Header>
                <Modal.Body>
                    <h6>Modal Body</h6>
                    <Form.Select>
                        <option>Choose one</option>
                        <option value="1">Firefox</option>
                        <option value="2">Chrome</option>
                        <option value="3">Safari</option>
                        <option value="4">Opera</option>
                        <option value="5">Internet Explore</option>
                    </Form.Select>
                    <p className='mt-2'>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Save Changes
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
              <Collapse in={Select2} className="mt-2">
                <pre>
                  <code>
                    {`
export function SelectInsideModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <Button className="me-3 mt-2" variant="pink" onClick={handleShow}>Select2 Modal</Button>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                  <Modal.Title>Select2 Modal</Modal.Title>
                  <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>
                  <h6>Modal Body</h6>
                  <Form.Select>
                      <option>Choose one</option>
                      <option value="1">Firefox</option>
                      <option value="2">Chrome</option>
                      <option value="3">Safari</option>
                      <option value="4">Opera</option>
                      <option value="5">Internet Explore</option>
                  </Form.Select>
                  <p className='mt-2'>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="success" onClick={handleClose}>
                      Save Changes
                  </Button>
                  <Button variant="danger" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="main-content-label mb-3">Input Modal</h6>
                <Form className="ms-auto">
                  <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setMdo(!mdo)} className="showcode d-flex ms-auto mx-2" />
                </Form>
                </div>
              </div>
              <Button className="me-3 mt-2" variant="green" onClick={handleShow1}>Open modal for @mdo</Button>
            <Modal show={shows10} onHide={handleClose1}>
                <Modal.Header>
                    <Modal.Title as="h5">New Message to @mdo</Modal.Title>
                    <span className="d-flex ms-auto" onClick={handleClose1}><i className='fe fe-x ms-auto' ></i></span>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Recipient:</Form.Label>
                            <Form.Control type="text" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose1}>
                        Save Changes
                    </Button>
                    <Button variant="danger" onClick={handleClose1}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
              <Collapse in={mdo} className="mt-2">
                <pre>
                  <code>
                    {`
export function InputModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <Button className="me-3 mt-2" variant="green" onClick={handleShow}>Open modal for @mdo</Button>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                  <Modal.Title>New Message to @mdo</Modal.Title>
                  <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Recipient:</Form.Label>
                          <Form.Control type="text" autoFocus />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Message:</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="success" onClick={handleClose}>
                      Save Changes
                  </Button>
                  <Button variant="danger" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  );
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card id="modal">
            <Card.Header className="border-bottom-0">
              <Card.Title>
                Basic Modal
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setbasic(!basic)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="modal d-block pos-static">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content modal-content-demo">
                      <div className="modal-header">
                        <h6 className="modal-title">Message Preview</h6>
                        <button aria-label="Close" className="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div className="modal-body">
                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                          of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                      </div>
                      <div className="modal-footer">
                        <button className="btn btn-primary">Save changes</button> <button className="btn btn-light">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-4 bg-light border">
              <Button variant="primary" onClick={viewDemoShow}>
                View Live Demo
            </Button>

            <Modal
                show={shows11}
                onHide={viewDemoClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>Message Preview</Modal.Title>
                    <span className="d-flex ms-auto" onClick={viewDemoClose}><i className='fe fe-x ms-auto' ></i></span>
                </Modal.Header>
                <Modal.Body>
                    Why We Use Electoral College, Not Popular Vote<br /><br />It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Save Changes</Button>
                    <Button variant="light" onClick={viewDemoClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
              </div>
              <Collapse in={basic} className="mt-2">
                <pre>
                  <code>
                    {`
export function BasicModal() {
  const [show, setShow] = useState(false);

  const viewDemoClose = () => setShow(false);
  const viewDemoShow = () => setShow(true);

  return (
      <>
          <Button variant="primary" onClick={viewDemoShow}>
              View Live Demo
          </Button>

          <Modal
              show={show}
              onHide={viewDemoClose}
              backdrop="static"
              keyboard={false}
          >
              <Modal.Header >
                  <Modal.Title>Message Preview</Modal.Title>
                  <span className="d-flex ms-auto" onClick={viewDemoClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>
                  Why We Use Electoral College, Not Popular Vote<br /><br />It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="primary">Save Changes</Button>
                  <Button variant="light" onClick={viewDemoClose}>
                      Close
                  </Button>

              </Modal.Footer>
          </Modal>
      </>
  );
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card id="modal3">
            <Card.Header className="border-bottom-0">
              <Card.Title>
                Success Alert Messages
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSuccess(!Success)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="modal d-block pos-static">
                  <div className="modal-dialog  modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-body text-center p-4 pb-5">
                        <button aria-label="Close" className="btn-close position-absolute" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                        <i className="icon icon-check fs-70 text-success lh-1 my-4 d-inline-block"></i>
                        <h4 className="text-success mb-4">Congratulations!</h4>
                        <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p><button className="btn btn-success pd-x-25">Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-4 bg-light border">
              <Button variant="primary" onClick={viewDemoShow1}>
                View Live Demo
            </Button>

            <Modal
                show={shows12}
                onHide={viewDemoClose}
                backdrop="static"
            >
                <Modal.Header>
                <span className="d-flex ms-auto" onClick={viewDemoClose1}><i className='fe fe-x ms-auto' ></i></span>
                </Modal.Header>
                <Modal.Body className="text-center p-4 pb-5" >
                    <i className="icon icon-check fs-70 text-success lh-1 my-4 d-inline-block"></i>
                    <h4 className="text-success mb-4">Congratulations!</h4>
                    <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    <Button variant="success" onClick={viewDemoClose1}>
                        Continue
                    </Button>
                </Modal.Body>

            </Modal>
              </div>
              <Collapse in={Success} className="mt-2">
                <pre>
                  <code>
                    {`
export function SuccessAlert() {
  const [show, setShow] = useState(false);

  const viewDemoClose = () => setShow(false);
  const viewDemoShow = () => setShow(true);

  return (
      <>
          <Button variant="primary" onClick={viewDemoShow}>
              View Live Demo
          </Button>

          <Modal
              show={show}
              onHide={viewDemoClose}
              backdrop="static"
          >
              <Modal.Header>
              <span className="d-flex ms-auto" onClick={viewDemoClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body className="text-center p-4 pb-5" >
                  <i className="icon icon-check fs-70 text-success lh-1 my-4 d-inline-block"></i>
                  <h4 className="text-success mb-4">Congratulations!</h4>
                  <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  <Button variant="success" onClick={viewDemoClose}>
                      Continue
                  </Button>
              </Modal.Body>

          </Modal>
      </>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card id="modal4">
            <Card.Header className="border-bottom-0">
              <Card.Title>
                Warning Alert Messages
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setWarning(!Warning)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0 mg-t-20">
                <div className="modal d-block pos-static">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-body text-center p-4 pb-5">
                        <button aria-label="Close" className="btn-close position-absolute" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                        <i className="icon icon-close fs-70 text-danger lh-1 my-4 d-inline-block"></i>
                        <h4 className="text-danger mb-20">Error: Cannot process your entry!</h4>
                        <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p><button aria-label="Close" className="btn btn-danger pd-x-25">Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-4 bg-light border">
              <Button variant="primary" onClick={viewDemoShow2}>
                View Live Demo
            </Button>

            <Modal 
                show={shows13}
                onHide={viewDemoClose2}
                backdrop="static" className='warning-alert-message'

            >
                <Modal.Header >
                <span className="d-flex ms-auto" onClick={viewDemoClose2}><i className='fe fe-x ms-auto' ></i></span>
                </Modal.Header>
                <Modal.Body className="text-center p-4 pb-5" >
                    <i className="icon icon-close fs-70 text-danger lh-1 my-4 d-inline-block"></i>
                    <h4 className="text-danger mb-20">Error: Cannot process your entry!</h4>
                    <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    <Button variant="danger" onClick={viewDemoClose2}>
                        Continue
                    </Button>
                </Modal.Body>

            </Modal>
              </div>
              <Collapse in={Warning} className="mt-2">
                <pre>
                  <code>
                    {`
export function WarningAlert() {
  const [show, setShow] = useState(false);

  const viewDemoClose = () => setShow(false);
  const viewDemoShow = () => setShow(true);

  return (
      <>
          <Button variant="primary" onClick={viewDemoShow}>
              View Live Demo
          </Button>

          <Modal
              show={show}
              onHide={viewDemoClose}
              backdrop="static"

          >
              <Modal.Header >
              <span className="d-flex ms-auto" onClick={viewDemoClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body className="text-center p-4 pb-5" >
                  <i className="icon icon-close fs-70 text-danger lh-1 my-4 d-inline-block"></i>
                  <h4 className="text-danger mb-20">Error: Cannot process your entry!</h4>
                  <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  <Button variant="danger" onClick={viewDemoClose}>
                      Continue
                  </Button>
              </Modal.Body>

          </Modal>
      </>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>

  )
};

export default ModalS;
