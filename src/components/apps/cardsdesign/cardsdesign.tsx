
import  { Fragment, useState } from 'react';
import { Button, Card, Form, ListGroup, ListGroupItem, Row, Col, Tabs, Tab, Collapse } from "react-bootstrap";
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Imagesdata } from '../../../commondata/commonimages';
import { Link } from 'react-router-dom';
import { cards, titles, cardtitles, seds , FullScreenDialog, CardwithSuccessAlert, CardwithDangerAlert, InitialCollapsedCard,} from '../../../commondata/commondata';
function CardsDesign() {
  // CONTACT CARD 1
  const [contactExpanded, setContactExpanded] = useState(true);
  const BlueHandleExpandClick = () => {
    setContactExpanded(!contactExpanded);
  };
  const [Contactshow, setContactshow] = useState(true);
  // CONTACT CARD 2 
  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = useState(true);
  // CONTACT CARD 3
  const [expanded1, setExpanded1] = useState(true);
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const [show1, setShow1] = useState(true);
  // CONTACT CARD 4

  const [expanded2, setExpanded2] = useState(true);
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const [show2, setShow2] = useState(true);
  //Basic Color Card Header
  const [expanded3, setExpanded3] = useState(true);

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const [show3, setShow3] = useState(true);
  // Basic color card-foote
  const [expanded4, setExpanded4] = useState(true);
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const [show4, setShow4] = useState(true);
  //Basic card
  const [expanded5, setExpanded5] = useState(true);

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  const [show5, setShow5] = useState(true);
  // Card With List
  const [expanded6, setExpanded6] = useState(true);

  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };
  const [show6, setShow6] = useState(true);
  // Sample card
  const [expanded7, setExpanded7] = useState(true);

  const handleExpandClick7 = () => {
    setExpanded7(!expanded7);
  };
  const [show7, setShow7] = useState(true);
  // card-with image
  const [expanded8, setExpanded8] = useState(true);
  const handleExpandClick8 = () => {
    setExpanded8(!expanded8);
  };
  const [show8, setShow8] = useState(true);
  //Crad Blue
  const [expanded9, setExpanded9] = useState(true);

  const handleExpandClick9 = () => {
    setExpanded9(!expanded9);
  };
  const [show9, setShow9] = useState(true);

  // Card status on left side
  const [expanded10, setExpanded10] = useState(true);

  const handleExpandClick10 = () => {
    setExpanded10(!expanded10);
  };
  const [show10, setShow10] = useState(true);

  return (
    <Fragment>
      <PageHeader titles="Cards" active="Cards" items={['Apps']} />
      <Row>
        {cards.map((card) => (
          <Col md={6} xl={4} key={Math.random()}>
            <Card className={`${card.class}-transparent`}>
              <Card.Body>
                <Card.Title as="h5">Primary transparent card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={6} xl={4}>
          <Card>
            <Card.Body>
              <Card.Title className='pb-2'>Card title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
              <Card.Text >Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Link to="#" >Card link</Link>
              <Link to="#" >Another link</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Card-Header</Card.Title>
            </Card.Header>
            <Card.Body >
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card>
            <Card.Body>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
              <Card.Title>Card-footer</Card.Title>
            </Card.Footer>
          </Card>
        </Col>
        {titles.map((title) => (
          <Col md={6} xl={4} key={Math.random()}>
            <Card>
              <Card.Body className={title.class}>
                <Card.Title >Special title treatment</Card.Title>
                <Card.Text >With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="row-cols-4">
        <Col xl={3} sm={6} md={6}>
          {Contactshow ?
            <Card className="border p-0">
              <Card.Header>
                <Card.Title>Contact card</Card.Title>
                <div className="card-options">
                  <Link to="#" onClick={BlueHandleExpandClick}> <i className={`fe ${contactExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                  <Link to="#" onClick={() => setContactshow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                </div>
              </Card.Header>
              <Collapse in={contactExpanded}>
                <Card.Body className="text-center">
                  <img className="avatar-xxl brround cover-image" src={Imagesdata('users15')} />
                  <h4 className="mb-0 mt-3">Mike Rowe-Soft</h4>
                  <Card.Text>Web designer</Card.Text>
                  
                </Card.Body>
              </Collapse>
              <Card.Footer className="text-center">
                    <Row className="user-social-detail">
                      <div className="social-profile me-4 rounded text-center">
                        <Card.Link href=""><i className="fa fa-google"></i></Card.Link>
                      </div>
                      <div className="social-profile me-4 rounded text-center">
                        <Card.Link href=""><i className="fa fa-facebook"></i></Card.Link>
                      </div>
                      <div className="social-profile me-4 rounded text-center">
                        <Card.Link href=""><i className="fa fa-twitter"></i></Card.Link>
                      </div>
                    </Row>
                  </Card.Footer>
            </Card> : null}
        </Col>
        <Col xl={3} sm={6} md={6}>
          {show ? <Card className="border p-0">
            <Card.Header>
              <Card.Title>Contact card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={handleExpandClick}> <i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded}>
              <Card.Body className="text-center">
                <img className="avatar-xxl brround cover-image" src={Imagesdata("users15")} alt="user15" />
                <h4 className="mb-0 mt-3">Laura Norda</h4>
                <Card.Text>Web designer</Card.Text>
                
              </Card.Body>
            </Collapse>
            <Card.Footer className="text-center">
                  <Row className="user-social-detail">
                    <div className="social-profile me-4 rounded text-center">
                      <Card.Link href=""><i className="fa fa-google"></i></Card.Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Card.Link href=""><i className="fa fa-facebook"></i></Card.Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Card.Link href=""><i className="fa fa-twitter"></i></Card.Link>
                    </div>
                  </Row>
            </Card.Footer>
          </Card> : null}
        </Col>
        <Col xl={3} sm={6} md={6}>
          {show1 ? <Card className="border p-0">
            <Card.Header>
              <Card.Title>Contact card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={handleExpandClick1}> <i className={`fe ${expanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setShow1(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded1}>
              <Card.Body className="text-center">
                <img className="avatar-xxl brround cover-image" src={Imagesdata("users15")} alt="user15" />
                <h4 className="mb-0 mt-3">Willie Makit</h4>
                <Card.Text>Web designer</Card.Text>
                
              </Card.Body>
            </Collapse>
            <Card.Footer className="text-center">
                  <Row className="user-social-detail">
                    <div className="social-profile me-4 rounded text-center">
                      <Card.Link href=""><i className="fa fa-google"></i></Card.Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Card.Link href=""><i className="fa fa-facebook"></i></Card.Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Card.Link href=""><i className="fa fa-twitter"></i></Card.Link>
                    </div>
                  </Row>
            </Card.Footer>
          </Card> : null}
        </Col>
        <Col xl={3} sm={6} md={6}>
          {show2 ? <Card className="border p-0">
            <Card.Header>
              <Card.Title>Contact card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={handleExpandClick2}> <i className={`fe ${expanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setShow2(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded2}>
              <Card.Body className="text-center">
                <img className="avatar-xxl brround cover-image" src={Imagesdata('users15')} alt="user15" />
                <h4 className="mb-0 mt-3">Don Messwidme</h4>
                <Card.Text>Web designer</Card.Text>
              </Card.Body>
            </Collapse>
            <Card.Footer className="text-center">
                  <Row className="user-social-detail">
                    <div className="social-profile me-4 rounded text-center">
                      <Card.Link href=""><i className="fa fa-google"></i></Card.Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Card.Link href=""><i className="fa fa-facebook"></i></Card.Link>
                    </div>
                    <div className="social-profile me-4 rounded text-center">
                      <Card.Link href=""><i className="fa fa-twitter"></i></Card.Link>
                    </div>
                  </Row>
            </Card.Footer>
          </Card> : null}
        </Col>
      </Row>
      <Row>
        {cardtitles.map((cardtitle) => (
          <Col md={4} xl={4} key={Math.random()}>
            <Card className={`text-white bg-${cardtitle.class}`}>
              <Card.Body>
                <Card.Title>Primary card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col md={4} xl={4}>
          {show5 ? <Card>
            <Card.Header>
              <Card.Title>Basic card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={handleExpandClick5}> <i className={`fe ${expanded5 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setShow5(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded5}>
              <Card.Body>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet
               
              </Card.Body>
            </Collapse>
            <Card.Footer>
                  This is Basic card footer
            </Card.Footer>
          </Card> : null}
        </Col>
        <Col md={4} xl={4}>
          {show3 ? <Card>
            <Card.Header className="bg-primary br-te-3 br-ts-3">
              <Card.Title className="text-white">Basic color card-header</Card.Title>
              <div className="card-options ">
                <Link to="#" onClick={handleExpandClick3}><i className="fe fe-chevron-up text-white"></i></Link>
                <Link to="#" onClick={() => setShow3(false)} aria-label="close"><i className="fe fe-x text-white"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded3}>
              <Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                
              </Card.Body>
            </Collapse>
            <Card.Footer>
                  This is Basic card footer
            </Card.Footer>
          </Card> : null}
        </Col>
        <Col md={4} xl={4}>
          {show4 ? <Card>
            <Card.Header>
              <Card.Title>Basic color card-footer</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={handleExpandClick4}> <i className={`fe ${expanded4 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setShow4(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded4}>
              <Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                
              </Card.Body>
            </Collapse>
            <Card.Footer className="bg-danger br-be-3 br-bs-3">
                  <div className="text-white">Basic card footer</div>
            </Card.Footer>
          </Card> : null}
        </Col>
        <Col md={6} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Panel with custom buttons</Card.Title>
              <div className="card-options">
                <Card.Link href="#" className="btn btn-primary btn-sm">Action 1</Card.Link>
                <Card.Link href="#" className="btn btn-secondary btn-sm ms-2">Action 2</Card.Link>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Card with search form</Card.Title>
              <div className="card-options">
                <Form>
                  <div className="input-group">
                    <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" />
                    <span className="input-group-btn ms-0">
                      <Button className="btn btn-sm btn-primary" type="submit">
                        <span className="fe fe-search text-white"></span>
                      </Button>
                    </span>
                  </div>
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={6}>
          <CardwithSuccessAlert />
        </Col>
        <Col md={6} xl={6}>
          <CardwithDangerAlert />
        </Col>
        <Col md={4} xl={4}>
          <FullScreenDialog />
        </Col>
        <Col xl={4} md={4}>
          <Card>
            <Card.Header>
              <Card.Title>Card with switch</Card.Title>
              <div className="card-options">
                <Form.Check className='mb-4 form-switch ps-0 pe-5' type="switch" id="custom-switch" defaultChecked />
              </div>
            </Card.Header>
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={4}>
          <InitialCollapsedCard />
        </Col>
      </Row>
      <Row>
        <Col xl={4} md={12}>
          <Card className="overflow-hidden">
            <img src={Imagesdata("media8")} className="card-img-top" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card className="overflow-hidden">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
            </Card.Body>
            <img src={Imagesdata("media9")} className="card-img-bottom" />
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card>
            <img src={Imagesdata("media1")} className="card-img-top" />
            <Card.Body className="border-bottom">
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>An item</ListGroupItem>
              <ListGroupItem>A second item</ListGroupItem>
              <ListGroupItem>A third item</ListGroupItem>
            </ListGroup>
            <Card.Body className="border-top">
              <Link to="#" className="me-2">Card link</Link>
              <Link to="#">Another link</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {seds.map((sed) => (
          <Col xl={4} md={12} key={Math.random()}>
            <Card>
              <Card.Body className={sed.class}>
                <blockquote className="quote">
                  <Card.Text>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                  <small className="text-muted">
                    so awesome this title <cite title="Source Title">-magna aliqua</cite>
                  </small>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col md={12} xl={4}>
          {show6 ? <Card className="m-b-20">
            <Card.Header>
              <Card.Title>Card With List</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={handleExpandClick6}> <i className={`fe ${expanded6 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setShow6(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded6} timeout={3000}>
              <Card.Body>
                <div className="visitor-list">
                  <div className="media m-0 mt-0 border-bottom">
                    <img className="brround avatar-md me-3" alt="avatra-img" src={Imagesdata("users18")} />
                    <div className="media-body">
                      <Card.Link href="" className="text-default fw-semibold">John Paige</Card.Link>
                      <p className="text-muted">Uploaded new invoices for RedBus</p>
                    </div>
                  </div>
                  <div className="media mt-2 border-bottom">
                    <img className="brround avatar-md me-3" alt="avatra-img" src={Imagesdata("users20")} />
                    <div className="media-body">
                      <Card.Link href="" className="text-default fw-semibold">Lillian Quinn</Card.Link>
                      <p className="text-muted">Created new work flow for the current</p>
                    </div>
                  </div>
                  <div className="media mt-2">
                    <img className="brround avatar-md me-3" alt="avatra-img" src={Imagesdata("users18")} />
                    <div className="media-body">
                      <Card.Link href="" className="text-default fw-semibold">Irene Harris</Card.Link>
                      <p className="text-muted mb-0">Submitted the project schedule to the manager</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
        <Col md={12} xl={4}>
          {show7 ? <Card className="m-b-20">
            <Card.Header>
              <Card.Title>Sample card</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={handleExpandClick7}> <i className={`fe ${expanded7 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setShow7(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded7} timeout={3000}>
              <Card.Body>
                <Card.Text>Put toy mouse in food bowl run out of litter box at full speed drool but pee in Put toy mouse Put toy mouse the shoe purr when being pet but chew foot.</Card.Text>
                <Card.Text className="mb-0">Scratch the postman wake up lick paw Duis aute irure dolor in reprehenderit wake up owner meow meow lick plastic bags Scratch the postman wake up lick paw wake Duis aute irure dolor having their mate disturbing sleeping
                  humans.
                </Card.Text>
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
        <Col md={12} xl={4}>
          <Card className="d-flex m-b-20">
            <Card.Header>
              <Card.Title>Card with Toolbar</Card.Title>
              <div className="card-options">
                <Card.Link className="text-gray" href="#">
                  <i className="mdi mdi-refresh"></i>
                </Card.Link>
                <Card.Link className="text-gray" href="#">
                  <i className="mdi mdi-bookmark-outline"></i>
                </Card.Link>
                <Card.Link className="text-gray" href="#">
                  <i className="mdi mdi-dots-vertical"></i>
                </Card.Link>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text>Put toy mouse in food bowl run out of litter box at full speed drool but pee in Put toy mouse Put toy mouse the shoe purr when being pet but chew foot.</Card.Text>
              <Card.Text className="mb-0">Duis aute irure dolor in reprehenderit in voluptate velit Scratch the postman wake up lick paw wake up owner meow meow lick plastic bags Scratch the postman wake up lick paw wake having their mate disturbing sleeping
                humans.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12} xl={4}>
          <Card className="card-blog-overlay1 overflow-hidden">
            <Card.Body className="text-white">
              <Card.Title className="text-white">card-with image</Card.Title>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Body>
            <Card.Footer className="text-white z-index2 border-transparent">
              This is Basic card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card className="card-blog-overlay2  overflow-hidden">
            <Card.Body className="text-white">
              <Card.Title className="text-white">card-with image</Card.Title>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Body>
            <Card.Footer className="text-white z-index2 border-transparent">
              This is Basic card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          {show8 ? <Card className="card-blog-overlay  overflow-hidden">
            <Card.Header className="z-index2  border-transparent">
              <Card.Title className="text-white ">card-with image</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={handleExpandClick8}><i className="fe fe-chevron-up text-white"></i></Link>
                <Link to="#" onClick={() => setShow8(false)} aria-label="close"><i className="fe fe-x text-white"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded8} timeout={3000}>
              <Card.Body className="text-white">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
      </Row>
      <Row>
        <Col md={12} xl={6}>
          {show9 ? <Card>
            <div className="card-status bg-blue br-te-7 br-ts-7"></div>
            <Card.Header>
              <Card.Title>Card blue</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={handleExpandClick9}> <i className={`fe ${expanded9 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setShow9(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded9} timeout={1000}>
              <Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
        <Col md={12} xl={6}>
          {show10 ? <Card>
            <div className="card-status card-status-left bg-red br-bs-7 br-ts-7"></div>
            <Card.Header>
              <Card.Title>Card status on left side</Card.Title>
              <div className="card-options">
                <Link to="#" onClick={handleExpandClick10}> <i className={`fe ${expanded10 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                <Link to="#" onClick={() => setShow10(false)} aria-label="close"><i className="fe fe-x"></i></Link>
              </div>
            </Card.Header>
            <Collapse in={expanded10} timeout={3000}>
              <Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Card.Body>
            </Collapse>
          </Card> : null}
        </Col>
      </Row>
      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Row className="g-0">
              <Col md={4}>
                <img src={Imagesdata("media22")} className="card-img-left h-100" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text className="card-text"><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Row className="g-0">
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                </Card.Body>
              </Col>
              <Col md={4}>
                <img src={Imagesdata("media22")} className="card-img-right h-100" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={12} md={12}>
          <div className="mb-5 card-group overflow-hidden">
            <Card className="shadow-none border-end">
              <img src={Imagesdata("media22")} className="card-img-top" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-none border-style border-end">
              <img src={Imagesdata("media18")} className="card-img-top" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-none">
              <img src={Imagesdata("media6")} className="card-img-top" />
              <div className="card-body">
                <Card.Title>Card title</Card.Title>
                <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
                <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
              </div>
            </Card>
          </div>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Body>
              <div className="panel panel-primary">

                <Tabs defaultActiveKey="active">
                  <Tab eventKey="active" title="Active" className='mb-0'>
                    <h5 className='mt-3'><b>Special title treatment 01</b></h5>
                    <p className='mt-3'>With supporting text below as a natural lead-in to additional content.</p>
                    <Button variant='primary'>Go somewhere</Button>
                  </Tab>
                  <Tab eventKey="link" title="Link" className='mb-3'>
                    <h5 className='mt-3'><b>Special title treatment 02</b></h5>
                    <p className='mt-3'>With supporting text below as a natural lead-in to additional content.</p>
                    <Button variant="primary">Go somewhere</Button>
                  </Tab>
                  <Tab eventKey="disable" title="disabled">

                  </Tab>
                </Tabs>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Body className='panel pb-0'>
              <Tabs defaultActiveKey="active">
                <Tab eventKey="active" title="Active" className='mb-3'>
                  <h5 className='mt-5'><b>Special title treatment 01</b></h5>
                  <p className='mt-5'>With supporting text below as a natural lead-in to additional content.</p>
                  <Button variant='primary'>Go somewhere</Button>
                </Tab>
                <Tab eventKey="link" title="Link" className='mb-3'>
                  <h5 className='mt-5'><b>Special title treatment 02</b></h5>
                  <p className='mt-5'>With supporting text below as a natural lead-in to additional content.</p>
                  <Button variant="primary">Go somewhere</Button>
                </Tab>
                <Tab eventKey="disable" title="disabled" disabled>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>

  );
}
export default CardsDesign;
