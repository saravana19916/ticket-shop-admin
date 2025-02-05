import  { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Row, Spinner } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Link } from 'react-router-dom';

interface LoadersProps { }

const Loaders: FC<LoadersProps> = () => {

  // Loader with double-bounce
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
      setExpanded(!expanded);
  };
  const [show, setShow] = useState(true);

  // Loader with cube

  const [expanded1, setExpanded1] = useState(true);

  const handleExpandClick1 = () => {
      setExpanded1(!expanded1);
  };
  const [show1, setShow1] = useState(true);
// Loader with Spinner

  const [expanded3, setExpanded3] = useState(true);

  const handleExpandClick3 = () => {
      setExpanded3(!expanded3);
  };
  const [show3, setShow3] = useState(true);
// Loader with lds-ring

  const [expanded4, setExpanded4] = useState(true);

  const handleExpandClick4 = () => {
      setExpanded4(!expanded4);
  };
  const [show4, setShow4] = useState(true);
// Loader with lds-hourglass

  const [expanded5, setExpanded5] = useState(true);

  const handleExpandClick5 = () => {
      setExpanded5(!expanded5);
  };
  const [show5, setShow5] = useState(true);
// Loader with lds-heart
  const [expanded6, setExpanded6] = useState(true);

  const handleExpandClick6 = () => {
      setExpanded6(!expanded6);
  };
  const [show6, setShow6] = useState(true);
  return(
  <Fragment>
    <PageHeader titles="Loaders" active="Loaders" items={['Apps']} />
    <Row>
      <Col lg={3} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Border & Growing Spinners</Card.Title>
          </Card.Header>
          <Card.Body>
            <Spinner animation="border" className='me-2' />
            <Spinner animation="grow" className='me-2' />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Border & Growing Colors Spinners</Card.Title>
          </Card.Header>
          <Card.Body>

            <Spinner animation="border" variant="primary" className='me-3' />
            <Spinner animation="border" variant="secondary" className='me-3' />
            <Spinner animation="border" variant="success" className='me-3' />
            <Spinner animation="border" variant="danger" className='me-3' />
            <Spinner animation="border" variant="warning" className='me-3' />
            <Spinner animation="border" variant="info" className='me-3' />
            <Spinner animation="border" variant="light" className='me-3' />
            <Spinner animation="border" variant="dark" className='me-3' />

            <Spinner animation="grow" variant="primary" className='me-3' />
            <Spinner animation="grow" variant="secondary" className='me-3' />
            <Spinner animation="grow" variant="success" className='me-3' />
            <Spinner animation="grow" variant="danger" className='me-3' />
            <Spinner animation="grow" variant="warning" className='me-3' />
            <Spinner animation="grow" variant="info" className='me-3' />
            <Spinner animation="grow" variant="light" className='me-3' />
            <Spinner animation="grow" variant="dark" className='me-3' />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Size Spinners</Card.Title>
          </Card.Header>
          <Card.Body>
            <Spinner animation="grow" size="sm" variant="danger" className='me-2' />
            <Spinner animation="border" size="sm" variant="danger" className='me-2' />
            <Spinner animation="grow" variant="secondary" className='me-2' />
            <Spinner animation="border" variant="secondary" className='me-2' />
            <Spinner animation="grow" variant="primary" className='me-2 h-7 w-7' />
            <Spinner animation="border" variant="primary" className='me-2 h-7 w-7' />

          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Buttons Spinners</Card.Title>
          </Card.Header>
          <Card.Body>
            <Button variant="primary" className='m-1'><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /></Button>
            <Button variant="primary" className='m-1'><Spinner className='me-1' as="span" animation="border" size="sm" role="status" aria-hidden="true" />Loading...</Button>
            <Button variant="primary" className='m-1'><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /></Button>
            <Button variant="primary" className='m-1'><Spinner className='me-1' as="span" animation="grow" size="sm" role="status" aria-hidden="true" />Loading...</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12} lg={6} xl={4}>
      {show ? <Card>
              <Card.Header>
                  <Card.Title>loaders</Card.Title>
                  <div className="card-options">
                      <Link to="#" onClick={handleExpandClick}><i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                  </div>
              </Card.Header>
              <Collapse in={expanded} timeout={3000}>
                  <Card.Body>
                      <div className="dimmer active">
                          <div className="spinner1">
                              <div className="double-bounce1"></div>
                              <div className="double-bounce2"></div>
                          </div>
                      </div>
                  </Card.Body>
              </Collapse>
          </Card> : null}
      </Col>
      <Col md={12} lg={6} xl={4}>
      {show1 ? <Card>
              <Card.Header>
                  <Card.Title>loaders</Card.Title>
                  <div className="card-options">
                      <Link to="#" onClick={handleExpandClick1}><i className={`fe ${expanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow1(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                  </div>
              </Card.Header>
              <Collapse in={expanded1} timeout={3000}>
                  <Card.Body>
                      <div className="dimmer active">
                          <div className="spinner2">
                              <div className="cube1"></div>
                              <div className="cube2"></div>
                          </div>
                      </div>
                  </Card.Body>
              </Collapse>
          </Card> : null}
      </Col>
      <Col md={12} lg={6} xl={4}>
    {show3 ? <Card>
              <Card.Header>
                  <Card.Title>loaders</Card.Title>
                  <div className="card-options">
                      <Link to="#" onClick={handleExpandClick3}><i className={`fe ${expanded3 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow3(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                  </div>
              </Card.Header>
              <Collapse in={expanded3} timeout={3000}>
                  <Card.Body>
                      <div className="dimmer active">
                          <div className="spinner"></div>
                      </div>
                  </Card.Body>
              </Collapse>
          </Card> : null}
      </Col>
      <Col md={12} lg={6} xl={4}>
      {show4 ? <Card>
              <Card.Header>
                  <Card.Title>loaders</Card.Title>
                  <div className="card-options">
                      <Link to="#" onClick={handleExpandClick4}><i className={`fe ${expanded4 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow4(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                  </div>
              </Card.Header>
              <Collapse in={expanded4} timeout={3000}>
                  <Card.Body>
                      <div className="dimmer active">
                          <div className="lds-ring">
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                          </div>
                      </div>
                  </Card.Body>
              </Collapse>
          </Card> : null}
      </Col>
      <Col md={12} lg={6} xl={4}>
      {show5 ? <Card>
              <Card.Header>
                  <Card.Title>loaders</Card.Title>
                  <div className="card-options">
                      <Link to="#" onClick={handleExpandClick5}><i className={`fe ${expanded5 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow5(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                  </div>
              </Card.Header>
              <Collapse in={expanded5} timeout={3000}>
                  <Card.Body>
                      <div className="dimmer active">
                          <div className="lds-hourglass"></div>
                      </div>
                  </Card.Body>
              </Collapse>
          </Card> : null}
      </Col>
      <Col md={12} lg={6} xl={4}>
      {show6 ? <Card>
              <Card.Header>
                  <Card.Title>loaders</Card.Title>
                  <div className="card-options">
                      <Link to="#" onClick={handleExpandClick6}><i className={`fe ${expanded6 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow6(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                  </div>
              </Card.Header>
              <Collapse in={expanded6} timeout={3000}>
                  <Card.Body>
                      <div className="dimmer active">
                          <div className="lds-heart">
                              <div></div>
                          </div>
                      </div>
                  </Card.Body>
              </Collapse>
          </Card> : null}
      </Col>
    </Row>
  </Fragment>
);
  };
export default Loaders;
