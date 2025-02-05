import  { FC, Fragment } from 'react';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Imagesdata } from '../../../../commondata/commonimages';
import { Leaderships, companys, services } from '../../../../commondata/commondata';

interface AboutCompanyProps { }

const AboutCompany: FC<AboutCompanyProps> = () => (
  <Fragment>
    <div className='container'>
      <PageHeader titles="About" active="About" items={['Pages']} />
      <Row>
        <Col lg={12}>
          <Row className="py-5">
            <div className="text-center">
              <h4 className="display-5 fw-semibold">Our mission is to make Work Meaningful.</h4>
              <p className="">If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over repeat Various versions have evolved over.</p>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <img src={Imagesdata("media34")} alt="team" className="br-5" />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card className="mt-7">
            <Card.Body className="p-5 text-dark">
              <div className="statistics-info p-4">
                <Row>
                  <Col xl={6}>
                    <div className="">
                      <h2 className="fw-bold">We Help to <span className="text-primary">Build</span> Your Dream Project.</h2>
                      <h4 className="leading-normal">majority have suffered alteration in some form, by injected humour</h4>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable.</p>
                      <p>All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                      <p> If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className="text-center">
                      <img src={Imagesdata("media36")} alt="team-s" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {companys.map((company)=>(
        <Col xl={6} key={Math.random()}>
          <Card className="mt-5">
            <Card.Body className="about-con pabout">
              <h1 className="mb-4 fw-semibold">{company.heading}</h1>
              <h4 className="leading-normal">majority have suffered alteration in some form, by injected humour</h4>
              <p className="leading-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage
                of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                and the like).</p>
              <Button variant='primary' className="mt-2">View More</Button>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <div className="text-center">
          <h2 className="fw-semibold mb-2">Meet our creative minds</h2>
          <h5>Our Leadership</h5>
        </div>
        {Leaderships.map((Leadership)=>(
        <Col xl={3} md={6} lg={6} className="mt-3" key={Math.random()}>
          <Card>
            <Card.Body className="text-center">
              <img className="avatar avatar-xxl bradius cover-image" alt="user 2" src={Leadership.src1} />
              <h4 className="h4 mb-0 mt-3">Mike Rowe-Soft</h4>
              <Card.Text>Web designer</Card.Text>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
              <Row className="user-social-detail text-center">
                <div className="social-profile me-2 rounded text-center bg-secondary-transparent">
                  <Link to=""><i className="fa fa-google text-secondary"></i></Link>
                </div>
                <div className="social-profile me-2 rounded text-center bg-danger-transparent">
                  <Link to=""><i className="fa fa-facebook text-danger"></i></Link>
                </div>
                <div className="social-profile me-2 rounded text-center bg-success-transparent">
                  <Link to=""><i className="fa fa-twitter text-success"></i></Link>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <h2 className="text-center fw-semibold">Our Services</h2>
        <Col lg={12}>
          <div className="mt-3">
            <div className="text-dark">
              <div className="services-statistics">
                <Row className="text-center">
                  {services.map((service)=>(
                  <Col xl={3} md={6} lg={6} key={Math.random()}>
                    <Card>
                      <Card.Body>
                        <div className="counter-status">
                          <div className={`counter-icon bg-${service.color} box-shadow-primary`}>
                            <i className={`${service.icon} text-white`}></i>
                          </div>
                          <h4 className="mb-2 fw-semibold">{service.heading}</h4>
                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </Fragment>
);
export default AboutCompany;
