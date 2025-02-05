import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Imagesdata } from '../../../commondata/commonimages';

interface MediaObjectProps { }

const MediaObject: FC<MediaObjectProps> = () => (
  <Fragment>
    <PageHeader titles="Mediaobject" active="Mediaobject" items={['Advanced Elements']} /> 
    <Row>
      <Col>
        <Card className="Relatedpost nested-media">
          <Card.Header>
            <Card.Title>Default Mediaobject</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="example">
              <div className="media media-lg mt-0">
                <img className="avatar avatar-xl bradius me-3 mb-4 w-100p h-10" src={Imagesdata("media3")} alt="Generic placeholder"/>
                  <div className="media-body">
                    <h4 className="mt-0">Media heading</h4>
                    <p className="text-muted mb-0 fs-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card className="Relatedpost nested-media overflow-hidden">
          <Card.Header>
            <Card.Title>Nesting Mediaobject</Card.Title>
          </Card.Header>
          <Card.Body className="overflow-hidden">
            <div className="example">
              <div className="media media-lg mt-0">
                <img className="avatar avatar-xl bradius me-3 mb-4 w-100p h-10" src={Imagesdata("media5")} alt="Generic placeholder"/>
                  <div className="media-body overflow-hidden">
                    <h4 className="mt-0">Media heading</h4>
                    <p className="text-muted mb-0 fs-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <div className="media media-lg mt-3">
                      <img className="avatar avatar-xl bradius me-3 mb-4 w-100p h-10" src={Imagesdata("media2")} alt="Generic placeholder"/>
                        <div className="media-body overflow-hidden">
                          <h4 className="mt-0">Media heading</h4>
                          <p className="text-muted mb-0 fs-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card className="Relatedpost nested-media">
          <Card.Header>
            <Card.Title>List Mediaobject</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="example">
              <ul className="list-unstyled">
                <li className="media media-lg mt-0 border-bottom-0">
                  <img className="avatar avatar-xl bradius me-3 mb-4 w-100p h-10" src={Imagesdata("media4")} alt="Generic placeholder"/>
                    <div className="media-body">
                      <h4 className="mt-0 mb-1">Media heading 01</h4>
                      <p className="text-muted mb-0 fs-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </li>
                <li className="media media-lg my-4 border-bottom-0">
                  <img className="avatar avatar-xl bradius me-3 mb-4 w-100p h-10" src={Imagesdata("media5")} alt="Generic placeholder"/>
                    <div className="media-body">
                      <h4 className="mt-0 mb-1">Media heading 02</h4>
                      <p className="text-muted mb-0 fs-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </li>
                <li className="media media-lg border-bottom-0">
                  <img className="avatar avatar-xl bradius me-3 mb-4 w-100p h-10" src={Imagesdata("media3")} alt="Generic placeholder"/>
                    <div className="media-body">
                      <h4 className="mt-0 mb-1">Media heading 03</h4>
                      <p className="text-muted mb-0 fs-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card className="Relatedpost nested-media">
          <Card.Header>
            <Card.Title>Alignments Mediaobject</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="example">
              <div className="media media-lg mt-0">
                <img className="align-self-start avatar avatar-xl bradius me-3 mb-4 w-100p h-10" src={Imagesdata("media3")} alt="Generic placeholder"/>
                  <div className="media-body">
                    <h4 className="mt-0">Top-aligned media</h4>
                    <p className="text-muted fs-14">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="text-muted fs-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                      explicabo.
                    </p>
                  </div>
              </div>
              <div className="media media-lg">
                <img className="align-self-center avatar avatar-xl bradius me-3 mb-4 w-100p h-10" src={Imagesdata("media5")} alt="Generic placeholder"/>
                  <div className="media-body">
                    <h4 className="mt-0">Center-aligned media</h4>
                    <p className="text-muted fs-14">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="text-muted fs-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                      explicabo.
                    </p>
                  </div>
              </div>
              <div className="media media-lg">
                <img className="align-self-end avatar avatar-xl bradius me-3 mb-4 w-100p h-10" src={Imagesdata("media4")} alt="Generic placeholder"/>
                  <div className="media-body">
                    <h4 className="mt-0">Bottom-aligned media</h4>
                    <p className="text-muted fs-14">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="text-muted mb-0 fs-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                      explicabo.
                    </p>
                  </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card className="Relatedpost nested-media ">
          <Card.Header>
            <Card.Title>Order Mediaobject</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="example">
              <div className="media media-lg mt-0">
                <div className="media-body mt-0">
                  <h4 className="mt-0 mb-4">Media object</h4>
                  <p className="text-muted mb-0 fs-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <img className="ms-2 mt-3 mb-3 bradius w-100p h-10" src={Imagesdata("media2")} alt="Generic placeholder"/>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);
export default MediaObject;
