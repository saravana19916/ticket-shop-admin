import { FC, Fragment } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Imagesdata } from '../../../commondata/commonimages';
import { basicthumnails, contentthumnails } from '../../../commondata/commondata';

interface ThumbnailsProps { }

const Thumbnails: FC<ThumbnailsProps> = () => (
  <Fragment>
    <PageHeader titles="Thumbnails" active="Thumbnails" items={['Componets']} /> 
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Custom content Thumbnails</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <Row>
                {contentthumnails.map((contentthumnail)=>(
                <Col md={12} xl={4} key={Math.random()}>
                  <div className="thumbnail">
                    <Link to="#">
                      <img src={contentthumnail.src1} alt="thumb1" className="thumbimg" />
                    </Link>
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>
                        <Link to="#" className="btn btn-primary me-2 mt-2" role="button">Button</Link>
                        <Link to="#" className="btn btn-secondary me-2 mt-2" role="button">Button</Link>
                      </p>
                    </div>
                  </div>
                </Col>
                ))}
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Basic Thumbnails</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <Row>
                {basicthumnails.map((basicthumnail)=>(
                <Col md={6} xl={3} key={Math.random()}>
                  <Link to="#" className="thumbnail ">
                    <img src={basicthumnail.src1} alt="thumb1" className="thumbimg" />
                  </Link>
                </Col>
                ))}
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Custom content Thumbnails</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <Row>
                <Col md={12} lg={6} xl={3}>
                  <div className="thumbnail">
                    <Link to="#">
                      <img src={Imagesdata("media22")} alt="thumb1" className="thumbimg" />
                    </Link>
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                  </div>
                </Col>
                <Col md={12} lg={6} xl={3}>
                  <div className="thumbnail">
                    <Link to="#">
                      <img src={Imagesdata("media23")} alt="thumb1" className="thumbimg" />
                    </Link>
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                  </div>
                </Col>
                <Col md={12} lg={6} xl={3}>
                  <div className="thumbnail">
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <Link to="#">
                      <img src={Imagesdata("media24")} alt="thumb1" className="thumbimg" />
                    </Link>
                  </div>
                </Col>
                <Col md={12} lg={6} xl={3}>
                  <div className="thumbnail">
                    <div className="caption">
                      <h4><strong>Thumbnail label</strong></h4>
                      <p>sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <Link to="#">
                      <img src={Imagesdata("media25")} alt="thumb1" className="thumbimg" />
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);
export default Thumbnails;
