import { FC, Fragment } from 'react';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { services1, services2 } from '../../../../commondata/commondata';

interface ServicesProps { }

const Services: FC<ServicesProps> = () => (
  <Fragment>
    <PageHeader titles="Services" active="Services" items={['Pages']} />
    <Row>
      {services1.map((service1)=>(
      <Col sm={12} md={6} lg={6} xl={3} key={Math.random()}>
        <Card className="service">
          <Card.Body>
            <div className="item-box text-center">
              <div className={`text-center  mb-4 text-${service1.color}`}><i className={service1.icon}></i></div>
              <div className="item-box-wrap">
                <h5 className="mb-2">{service1.heading}</h5>
                <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>
    <Row>
      {services2.map((service2)=>(
      <Col sm={12} md={6} lg={6} xl={6} key={Math.random()}>
        <Card>
          <Card.Body>
            <Row>
              <Col xl={2} lg={3} className="feature">
                <div className={`fa-stack fa-lg fa-1x border btn-${service2.color} mb-3`}>
                  <i className={`fa ${service2.icon} fa-stack-1x text-white`}></i>
                </div>
              </Col>
              <Col xl={10} lg={9} >
                <div className="mt-1">
                  <h4 className="fw-semibold">{service2.heading}</h4>
                  <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Our services</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
              <Row className="mt-3">
                <Col md={6}>
                  <label>Web Design</label>
                  
                  <ProgressBar variant="purple" className="mb-3" now={50} label={`${50}%`} />
                </Col>
                <Col md={6}>
                  <label>Web Development</label>
                  
                  <ProgressBar variant="danger" className="mb-3" now={70} label={`${70}%`} />
                </Col>
                <Col md={6}>
                  <label>Wordpress</label>
                  
                  <ProgressBar variant="warning" className="mb-3" now={80} label={`${80}%`} />
                </Col>
                <Col md={6}>
                  <label>Photography</label>
                  
                  <ProgressBar variant="primary" className="mb-3" now={75} label={`${75}%`} />
                </Col>
                <Col md={6}>
                  <label>Development</label>
                  
                  <ProgressBar variant="pink" className="mb-3" now={65} label={`${65}%`} />
                </Col>
                <Col md={6}>
                  <label>Android</label>
                
                  <ProgressBar variant="success" className="mb-3" now={70} label={`${70}%`} />
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);

export default Services;
