import  { FC, Fragment } from 'react';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';
import { Row, Form, Card, Button, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import 'draft-js/dist/Draft.css';
import SunEditor from 'suneditor-react';
import { Professionals, posts } from '../../../../commondata/commondata';
interface BlogPostProps { }

const Tech = [
  { value: "Technology", label: "Technology" },
  { value: "Travel", label: "Travel" },
  { value: "Food", label: "Food" },
  { value: "Fashion", label: "Fashion" },
];

const BlogPost: FC<BlogPostProps> = () => {

  return (

  <Fragment>
    <PageHeader titles="Blog Post" active="Blog Post" items={['Pages']} />
    <Row>
      <Col xl={8}>
        <Card>
          <Card.Header>
            <Card.Title>Add New Post</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row className="mb-4">
              <Form.Label className="col-md-3">Post Title :</Form.Label>
              <div className="">
                <Form.Control type="text" defaultValue="Typing....." />
              </div>
            </Row>
            <Row className="mb-4">
              <Form.Label className="col-md-3">Categories :</Form.Label>
              <div className="">
               
              <Select classNamePrefix="Select" options={Tech} placeholder='Technology'/>
              </div>
            </Row>
            <Row>
              <Form.Label className="col-md-3 mb-4">Post Description :</Form.Label>
              <div className="border mb-4">
              <SunEditor />
              </div>
            </Row>
            <Form.Group className="mb-0">
              <Form.Label className="col-md-3 mb-4">File Upload :</Form.Label>
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Button variant='primary' >Post</Button>
            <Button variant='default' className="float-end">Discard</Button>
          </Card.Footer>
        </Card>
      </Col>
      <Col xl={4}>
        <Card>
          <Card.Header>
            <Card.Title>Recent Posts</Card.Title>
          </Card.Header>
          <Card.Body>
            {posts.map((post)=>(
            <div className="" key={Math.random()}>
              <div className={`d-sm-flex overflow-visible ${post.class}`}>
                <img className="card-aside-column mb-2 mb-sm-0 br-5 cover-image" alt="media19" src={post.src1} />
                <div className="ps-sm-3 flex-column">
                  <Badge bg={post.color} className="me-1 mb-1 mt-1">{post.data}</Badge>
                  <h4><Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails/`}>{post.heading}</Link></h4>
                  <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                </div>
              </div>
            </div>
            ))}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Professional Blog Writers</Card.Title>
          </Card.Header>
          <Card.Body>
            {Professionals.map((Professional)=>(
            <div className="" key={Math.random()}>
              <div className={`d-flex overflow-visible ${Professional.class}`}>
                <img className="avatar bradius avatar-xl me-3" src={Professional.src1} alt="avatar-img" />
                <div className="media-body valign-middle">
                  <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="fw-semibold text-dark">{Professional.heading}</Link>
                  <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                </div>
              </div>
            </div>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
); };
export default BlogPost;
