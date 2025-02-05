import { FC, Fragment } from 'react';
import { Breadcrumb, Row, Col, Card, Pagination, InputGroup, FormControl, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Imagesdata } from '../../../../commondata/commonimages';
import { posts1 } from '../../../../commondata/commondata';

interface BlogsProps { }

const Blogs: FC<BlogsProps> = () => (
  <Fragment>
    <div className="page-header">
      <h1 className="page-title">Blog</h1>
      <div>
        <Breadcrumb>
          <Link to={`${import.meta.env.BASE_URL}pages/extension/blogpost/`} className="btn btn-primary"><i className="fa fa-plus-square me-2"></i>Add Post</Link>
        </Breadcrumb>
      </div>
    </div>
    <Row>
      <Col sm={6} md={12} lg={6} xl={4}>
        <Card>
          <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails/`}><img className="card-img-top" src={Imagesdata("media13")} alt="And this isn't my nose. This is a false one." /></Link>
          <Card.Body className="d-flex flex-column">
            <h3><Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails/`}>Voluptatem quia voluptas.</Link></h3>
            <div className="text-muted">To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it...</div>
            <div className="d-flex align-items-center pt-5 mt-auto">
              <img className="avatar brround avatar-md me-3 cover-image" alt='user 18' src={Imagesdata("users18")} />
              <div>
                <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="text-default">Megan Peters</Link>
                <small className="d-block text-muted">1 days ago</small>
              </div>
              <div className="ms-auto">
                <Link to="#" className="icon d-none d-md-inline-block text-muted me-2"><i className="fe fe-heart me-1 border brround"></i></Link>
                <Link to="#" className="icon d-none d-md-inline-block text-muted"><i className="fa fa-thumbs-o-up border brround"></i></Link>
              </div>
            </div>
          </Card.Body>
          </Card> 
          <Card>
          <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails/`}><img className="card-img-top br-be-0 br-bs-0" src={Imagesdata("media15")} alt="How do you know she is a witch?" /></Link>
          <Card.Body className="d-flex flex-column">
            <h3><Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails/`}> Voluptatem quia voluptas </Link></h3>
            <div className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...</div>
            <div className="d-flex align-items-center pt-5 mt-auto">
              <img className="avatar  brround avatar-md me-3 cover-image" alt='user 6' src={Imagesdata("users6")} />
              <div>
                <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="text-default">Carol Paige</Link>
                <small className="d-block text-muted">2 days ago</small>
              </div>
              <div className="ms-auto">
                <Link to="#" className="icon d-none d-md-inline-block text-muted me-2"><i className="fe fe-heart me-1 border brround"></i></Link>
                <Link to="#" className="icon d-none d-md-inline-block text-muted"><i className="fa fa-thumbs-o-up border brround"></i></Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={12} lg={6} xl={4}>
        <Card>
          <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails/`}><img className="card-img-top" src={Imagesdata("media14")} alt="Well, I didn't vote for you." /></Link>
          <Card.Body className="d-flex flex-column">
            <h3><Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails/`}> Voluptatem quia voluptas </Link></h3>
            <div className="text-muted">Who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces.</div>
            <div className="d-flex align-items-center pt-5 mt-auto">
              <img className="avatar brround avatar-md me-3 cover-image" alt='user 16' src={Imagesdata("users16")} />
              <div>
                <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="text-default">Anna Ogden</Link>
                <small className="d-block text-muted">2 days ago</small>
              </div>
              <div className="ms-auto">
                <Link to="#" className="icon d-none d-md-inline-block text-muted me-2"><i className="fe fe-heart me-1 border brround"></i></Link>
                <Link to="#" className="icon d-none d-md-inline-block text-muted"><i className="fa fa-thumbs-o-up border brround"></i></Link>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails/`}><img className="card-img-top br-be-0 br-bs-0" src={Imagesdata("media16")} alt="Shut up!" /></Link>
          <Card.Body className="d-flex flex-column">
            <h3><Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails/`}> Voluptatem quia voluptas </Link></h3>
            <div className="text-muted">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut ..</div>
            <div className="d-flex align-items-center pt-5 mt-auto">
              <img className="avatar brround avatar-md me-3 cover-image" alt='user 7' src={Imagesdata("users7")} />
              <div>
                <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="text-default">Fiona Hodges</Link>
                <small className="d-block text-muted">5 days ago</small>
              </div>
              <div className="ms-auto">
                <Link to="#" className="icon d-none d-md-inline-block text-muted me-2"><i className="fe fe-heart me-1 border brround"></i></Link>
                <Link to="#" className="icon d-none d-md-inline-block text-muted"><i className="fa fa-thumbs-o-up border brround"></i></Link>
              </div>
            </div>
          </Card.Body>
        </Card>
        <div className="mb-9">
          <div className="float-end">
            <Pagination>
              <Pagination.Item disabled>Prev</Pagination.Item>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>Next</Pagination.Item>
            </Pagination>
          </div>
        </div>
      </Col>
      <Col xl={4}>
        <Card>
          <Card.Body>
            <InputGroup>
              <FormControl type="text" className="border-end-0" placeholder="Search ..." />
              <InputGroup.Text className="bg-transparent border-start-0 text-muted">
                <i className="fe fe-search" aria-hidden="true"></i>
              </InputGroup.Text>
            </InputGroup>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Recent Posts</Card.Title>
          </Card.Header>
          <Card.Body>
            {posts1.map((post1)=>(
            <div className="" key={Math.random()}>
              <div className={`d-block d-sm-flex overflow-visible ${post1.class}`}>
                <img className="card-aside-column br-5 cover-image w-100" alt='media 22' src={post1.src1} />
                <div className="ps-3 flex-column">
                  <Badge bg={post1.color} className="me-1 mb-1 mt-1">{post1.data}</Badge>
                  <h4><Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails/`}>{post1.heading}</Link></h4>
                  <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                </div>
              </div>
            </div>
            ))}
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <h4 className="fw-bold">NEVER MISS A POST !</h4>
            <p>Signup for free to get the latest posts.</p>
            <FormControl placeholder="Enter your name *" type="text" />
            <Button variant='danger' className="mt-5">Subscribe</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);

export default Blogs;
