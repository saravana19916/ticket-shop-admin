import  { FC } from 'react';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Link } from 'react-router-dom';
import { Row, Col, Card, ListGroup, Badge, OverlayTrigger, Tooltip, Button, Dropdown } from 'react-bootstrap';
import { Imagesdata } from '../../../commondata/commonimages';

interface MailReadProps { }

const MailRead: FC<MailReadProps> = () => (
  <div className=''>
    <PageHeader titles="Email-Read" active="Email-Read" items={['Pages']} />
    <Row>
      <Col xl={3}>
        <Card>
          <ListGroup className="list-group-transparent mb-0 mail-inbox pb-3" defaultActiveKey='#link'>
            <div className="mt-4 mb-4 mx-4 text-center">
              <Link to={`${import.meta.env.BASE_URL}pages/mailcompose/`} className="btn btn-primary btn-lg d-grid">Compose</Link>
            </div>
            <Link to={`${import.meta.env.BASE_URL}pages/mailinbox/`} className=""><ListGroup.Item eventKey='#link' className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-mail-line"></i></span> Inbox <Badge bg='secondary' className="ms-auto bradius">14</Badge>
            </ListGroup.Item></Link>
            <Link to="#"><ListGroup.Item className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-mail-open-line"></i></span> Drafts
            </ListGroup.Item></Link>
            <Link to="#"><ListGroup.Item className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-star-line"></i></span> Starred <Badge bg='success' className="ms-auto bradius">03</Badge>
            </ListGroup.Item></Link>
            <Link to="#"><ListGroup.Item className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-price-tag-3-line"></i></span> Tags
            </ListGroup.Item></Link>
            <Link to="#"><ListGroup.Item className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-mail-send-line"></i></span> Sent Mail
            </ListGroup.Item></Link>
            <Link to="#"><ListGroup.Item className="d-flex align-items-center mx-4">
              <span className="icons"><i className="ri-delete-bin-line"></i></span> Trash
            </ListGroup.Item></Link>
          </ListGroup>
          <Card.Body className="border-top p-0 py-3">
            <ListGroup className="list-group-transparent mb-0 mail-inbox mx-4">
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-primary me-2"></span> Friends
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-secondary me-2"></span> Family
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-success me-2"></span> Social
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-info me-2"></span> Office
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-warning me-2"></span> Work
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-action d-flex align-items-center py-2">
                <span className="w-3 h-3 brround bg-danger me-2"></span> Settings
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={9}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Mail Read</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="email-media">
              <div className="mt-0 d-sm-flex">
                <img className="me-2 rounded-circle avatar avatar-lg" src={Imagesdata("users6")} alt="avatar" />
                <div className="media-body pt-0 overflow-visible">
                  <div className="float-end d-none d-md-flex fs-15">
                    <small className="me-3 mt-3 text-muted">Sep 13 , 2021 12:45 pm</small>
                    <OverlayTrigger placement="top" overlay={<Tooltip >Rated</Tooltip>}><Button as='a' variant='' className="text-success email-icon bg-success-transparent me-1"><i className="fe fe-star text-success"></i></Button></OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip >Reply</Tooltip>}><Button as='a' variant='' className="text-info email-icon bg-info-transparent me-1"><i className="fa fa-reply text-info"></i></Button></OverlayTrigger>
                    <Dropdown className="me-1">
                      <Dropdown.Toggle className="text-danger email-icon bg-danger-transparent no-caret" as='a'><i className="fe fe-more-horizontal"></i></Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end">
                        <Dropdown.Item href="#"><i className="fe fe-share me-2"></i> Reply</Dropdown.Item>
                        <Dropdown.Item href="#"><i className="fe fe-alert-circle me-2"></i>Report Spam</Dropdown.Item>
                        <Dropdown.Item href="#"><i className="fe fe-trash me-2"></i>Delete</Dropdown.Item>
                        <Dropdown.Item href="#"><i className="fe fe-printer me-2"></i>Print</Dropdown.Item>
                        <Dropdown.Item href="#"><i className="fe fe-filter me-2"></i>Filter</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="media-title text-dark font-weight-semibold mt-1">Cherry Blossom <span className="text-muted font-weight-semibold">( cherryblosso@gmail.com )</span></div>
                  <small className="mb-0">to Percy Kewshun ( percykewshun@gmail.com ) </small>
                  <small className="me-2 d-md-none">June 15 , 2021 10:30 AM</small>
                </div>
              </div>
            </div>
            <div className="eamil-body mt-5">
              <h6>Hi Sir/Madam</h6><br /><br />
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
              <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
              <p> Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To
                take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
              <br /><br />
              <p className="mb-0">Thanking you Sir/Madam</p>
              <hr />
              <div className="email-attch">
                <h6 className="font-weight-semibold">3 Attachments <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`}>View</Link></h6>
              </div>
              <Row className="attachments-doc">
                <Col xl={3} lg={3} md={4} sm={4} className="mb-2 mb-sm-0">
                  <div className="border overflow-hidden p-0 br-7">
                    <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`}><img src={Imagesdata("media8")} className="card-img-top" alt="img" /></Link>
                    <div className="p-3 text-center">
                      <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`} className="fw-semibold fs-15 text-dark">Image.jpg</Link>
                      <p className="text-muted.ms-2 mb-0 fs-11">(223 KB)</p>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={3} md={4} sm={4} className="mb-2 mb-sm-0">
                  <div className="border overflow-hidden p-0 br-7">
                    <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`}><img src={Imagesdata("media22")} className="card-img-top" alt="img" /></Link>
                    <div className="p-3 text-center">
                      <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`} className="fw-semibold fs-15 text-dark">Image2.jpg</Link>
                      <p className="text-muted.ms-2 mb-0 fs-11">(122 KB)</p>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={3} md={4} sm={4} className="mb-2 mb-sm-0">
                  <div className="border overflow-hidden p-0 br-7">
                    <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`}><img src={Imagesdata("media6")} className="card-img-top" alt="img" /></Link>
                    <div className="p-3 text-center">
                      <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`} className="fw-semibold fs-15 text-dark">Image3.jpg</Link>
                      <p className="text-muted.ms-2 mb-0 fs-11">(345 KB)</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
          <Card.Footer>
            <Link className="btn btn-primary mt-1 mb-1 me-2" to="#"><i className="fa fa-reply"></i> Reply</Link>
            <Link className="btn btn-secondary mt-1 mb-1 me-2" to="#"><i className="fa fa-share"></i> Forward</Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </div>
);

export default MailRead;
