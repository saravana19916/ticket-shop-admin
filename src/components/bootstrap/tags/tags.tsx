import  { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { alltags, avatars, colortags } from '../../../commondata/commondata';

interface TagsProps { }

const Tags: FC<TagsProps> = () => (
  <Fragment>
    <PageHeader titles="Tags" active="Tags" items={['Componets']} /> 
    <Row>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Default tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag">First tag</span>
                  <span className="tag">Second tag</span>
                  <span className="tag">Third tag</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Link tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <Link to="#" className="tag">First tag</Link>
                  <Link to="#" className="tag">Second tag</Link>
                  <Link to="#" className="tag">Third tag</Link>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Rounded tag Style</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag tag-radius tag-round tag-primary">First tag</span>
                  <span className="tag tag-radius tag-round tag-orange">Second tag</span>
                  <span className="tag tag-radius tag-round tag-teal">Third tag</span>
                  <span className="tag tag-radius tag-round tag-pink">Third tag</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Rounded tag Style</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag tag-radius tag-round tag-outline-primary">First tag</span>
                  <span className="tag tag-radius tag-round tag-outline-secondary">Second tag</span>
                  <span className="tag tag-radius tag-round tag-outline-danger">Third tag</span>
                  <span className="tag tag-radius tag-round tag-outline-warning">Third tag</span>
                  <span className="tag tag-radius tag-round tag-outline-success">Third tag</span>
                  <span className="tag tag-radius tag-round tag-outline-info">Third tag</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Rounded tag with icon</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag tag-rounded tag-icon tag-red"><i className="fe fe-map-pin"></i>First tag <Link to="#" className="tag-addon tag-addon-cross tag-red"><i className="fe fe-x text-white m-1"></i></Link></span>
                  <span className="tag tag-rounded tag-icon tag-green"><i className="fe fe-calendar"></i>Second tag <Link to="#" className="tag-addon tag-addon-cross tag-green"><i className="fe fe-x text-white m-1"></i></Link></span>
                  <span className="tag tag-rounded tag-icon tag-orange"><i className="fe fe-bell"></i>Third tag <Link to="#" className="tag-addon tag-addon-cross tag-orange"><i className="fe fe-x text-white m-1"></i></Link></span>
                  <span className="tag tag-rounded tag-icon tag-pink"><i className="fe fe-filter"></i>Third tag <Link to="#" className="tag-addon tag-addon-cross tag-pink"><i className="fe fe-x text-white m-1"></i></Link></span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Default tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag tag-border">First tag</span>
                  <span className="tag tag-border">Second tag</span>
                  <span className="tag tag-border">Third tag</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xl={12}>
        <Card>
          <Card.Header>
            <Card.Title>Rounded tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag tag-rounded">First tag</span>
                  <span className="tag tag-rounded">Second tag</span>
                  <span className="tag tag-rounded">Third tag</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={12}>
        <Card>
          <Card.Header>
            <Card.Title>Color tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  {colortags.map((colortag)=>(
                  <span className={`tag tag-${colortag.color}`} key={Math.random()}>{colortag.class}</span>
                  ))}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={12}>
        <Card>
          <Card.Header>
            <Card.Title>Avatar tag</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  {avatars.map((avatar)=>(
                  <span className="tag" key={Math.random()}>
                    <img className="tag-avatar avatar cover-image" alt='user11' src={avatar.src1} />{avatar.class}
                  </span>
                  ))}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={12}>
        <Card>
          <Card.Header>
            <Card.Title>List of tags</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>You can create a list of tags with the <code className="highlighter-rouge">.tags</code> container.</p>
              <div className="example">
                <div className="tags">
                  <span className="tag">First tag</span>
                  <span className="tag">Second tag</span>
                  <span className="tag">Third tag</span>
                </div>
              </div>
              <p className="mt-4">If the list is very long, it will automatically wrap on multiple lines, while keeping all tags evenly spaced.</p>
              <div className="example">
                <div className="tags">
                  {alltags.map((alltag)=>(
                  <span className="tag" key={Math.random()}>{alltag.class}</span>
                  ))}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Tag remove</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <span className="tag">
                    One
                    <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                  </span>
                  <span className="tag">
                    Two
                    <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                  </span>
                  <span className="tag">
                    Three
                    <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                  </span>
                  <span className="tag">
                    Four
                    <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                  </span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Tag addons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="tags">
                  <div className="tag">
                    npm
                    <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                  </div>
                  <div className="tag tag-danger">
                    npm
                    <span className="tag-addon"><i className="fe fe-activity"></i></span>
                  </div>
                  <div className="tag">
                    bundle
                    <span className="tag-addon tag-success">passing</span>
                  </div>
                  <span className="tag tag-dark">
                    CSS gzip size
                    <span className="tag-addon tag-warning">20.9 kB</span>
                  </span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);
export default Tags;
