import  { FC, Fragment } from 'react';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Row, Col, Card } from 'react-bootstrap';
import { ribbons, ribbons1, ribbons2, ribbons3, ribbons4, ribbons5 } from '../../../commondata/commondata';

interface RibbonsProps { }

const Ribbons: FC<RibbonsProps> = () => (
  <Fragment>
    <PageHeader titles="Ribbons" active="Ribbons" items={['Componets']} />
    <div className="main-container container-fluid">
      <Row>
        <h5 className="fw-semibold mb-4">Ribbon Style 1</h5>
        {ribbons.map((ribbon)=>(
        <Col xl={3} md={6} key={Math.random()}>
          <Card className="ribbone-card">
            <div className={`power-ribbone power-ribbone-${ribbon.class} text-${ribbon.color}`}><span
              className={`bg-${ribbon.color}`}><i className="fa fa-bolt"></i></span></div>
            <Card.Body className="p-6">
              <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title. Some
                quick example text to build on the card title</p>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
      <Row>
        <h5 className="fw-semibold mb-4">Ribbon Style 2</h5>
        {ribbons1.map((ribbon1)=>(
        <Col xl={3} md={6} key={Math.random()}>
          <Card className="ribbone-card">
            <div className={`ribbone ribbone-${ribbon1.class} text-${ribbon1.color}`}><span className={`bg-${ribbon1.color}`}>sold
              out</span></div>
            <Card.Body className="p-6">
              <h6 className={`card-subtitle mb-2 text-dark fw-bold ${ribbon1.class1}`}>Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title. Some
                quick example text to build on the card title</p>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
      <Row>
        <h5 className="fw-semibold mb-4">Ribbon Style 3</h5>
        {ribbons2.map((ribbon2)=>(
        <Col xl={3} md={6} key={Math.random()}>
          <Card className="ribbone-card">
            <div className={`arrow-ribbone-${ribbon2.class} bg-${ribbon2.color}`}>Sale</div>
            <Card.Body className="p-6">
              <h6 className={`card-subtitle mb-2 text-dark fw-bold ${ribbon2.class1}`}>Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title. Some
                quick example text to build on the card title</p>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
      <Row>
        <h5 className="fw-semibold mb-4">Ribbon Style 4</h5>
        {ribbons3.map((ribbon3)=>(
        <Col xl={3} md={6} key={Math.random()}>
          <div className="card">
            <span className={`ribbone-${ribbon3.color}`}>
              <span><i className="fe fe-zap"></i></span>
            </span>
            <Card.Body className="p-6">
              <h6 className={`card-subtitle mb-2 text-dark fw-bold ${ribbon3.class1}`}>Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title. Some
                quick example text to build on the card title</p>
            </Card.Body>
          </div>
        </Col>
        ))}
      </Row>
      <Row>
        <h5 className="fw-semibold mb-4">Ribbon Style 5</h5>
        {ribbons4.map((ribbon4)=>(
        <Col xl={3} md={6} key={Math.random()}>
          <div className="card">
            <span className={`${ribbon4.data}-${ribbon4.color}`}>
              <span>{ribbon4.class}</span>
            </span>
            <Card.Body className="p-6">
              <h6 className={`card-subtitle mb-2 text-dark fw-bold ${ribbon4.class1}`}>Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title. Some
                quick example text to build on the card title</p>
            </Card.Body>
          </div>
        </Col>
        ))}
      </Row>
      <Row>
        <h5 className="fw-semibold mb-4">Ribbon Style 6</h5>
        {ribbons5.map((ribbon5)=>(
        <div className="col-xxl-2 col-lg-4 col-md-4 col-sm-10 mx-0 mx-sm-7" key={Math.random()}>
          <div className="card br-0">
            <span className={`fullwidth-${ribbon5.color}`}>

              <div className="bar">
                CSS Ribbon
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </span>
            <Card.Body className="p-6">
              <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title. Some
                quick example text to build on the card title</p>
            </Card.Body>
          </div>
        </div>
        ))}
      </Row>
    </div>
  </Fragment>
);
export default Ribbons;
