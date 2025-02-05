import { FC, Fragment } from 'react';
import { Badge, Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Badgecolorlistgroups, Badgelistgroups, Colorlistgroups, Contextuallistgroups, activelistgroups, disablelistgroups, listgroups } from '../../../commondata/commondata';

interface ListGroupsProps { }

const ListGroups: FC<ListGroupsProps> = () => (
  <Fragment>
    <PageHeader titles="List Group" active="List Group" items={['Componets']} /> 
    <Row>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Basic List Group</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup>
                {listgroups.map((listgroup) =>(
                <ListGroupItem key={Math.random()}>{listgroup.heading}</ListGroupItem>
                ))}
              </ListGroup>

            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Active List item</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup>
              {activelistgroups.map((activelistgroup) =>(
                <ListGroupItem className= {activelistgroup.active} key={Math.random()}>{activelistgroup.heading}</ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Order list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup as="ol" numbered>
              {listgroups.map((listgroup) =>(
                <ListGroupItem as="li" key={Math.random()}>{listgroup.heading}</ListGroupItem>
                ))}
              </ListGroup>

            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup as="ul">
              {listgroups.map((listgroup) =>(
                <ListGroupItem className='listunorder' as="li" key={Math.random()}>{listgroup.heading}</ListGroupItem>
                ))}
              </ListGroup>
            </div>  
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Order list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup as="ul" className='list-group-orderlist'>
              {listgroups.map((listgroup) =>(
                <li className='listorder1'  key={Math.random()}>{listgroup.heading}</li>
                ))}
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup as="ul">
              {listgroups.map((listgroup) =>(
                <ListGroupItem className='listunorder1' as="li" key={Math.random()}>{listgroup.heading}</ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Disabled List item</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup as="ol" >
              {disablelistgroups.map((disablelistgroup) =>(
                <ListGroupItem as="li" className= {disablelistgroup.disable} key={Math.random()}>{disablelistgroup.heading}</ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Contextual classes with List Group</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup as="ul">
                {Contextuallistgroups.map((Contextuallistgroup)=>(
                <ListGroup.Item key={Math.random()} variant={Contextuallistgroup.color}>{Contextuallistgroup.heading}</ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>List Group with icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup as="ol">
              {listgroups.map((listgroup) =>(
                <ListGroupItem as="li" key={Math.random()}><i className="fa fa-check text-muted me-2"></i>{listgroup.heading}</ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>List Group with colored icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup as="ol">
                {Colorlistgroups.map((Colorlistgroup)=>(
                <ListGroup.Item key={Math.random()} as="li"><i className={`fa fa-cog text-${Colorlistgroup.color} me-2`}></i>{Colorlistgroup.heading}</ListGroup.Item>
                ))}
              </ListGroup>

            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>List Group With defalut badges</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">

              <ListGroup as="ol">
                {Badgelistgroups.map((Badgelistgroup)=>(
                <ListGroup.Item key={Math.random()} as="li" className="d-flex justify-content-between align-items-start">{Badgelistgroup.heading}<Badge bg="default" className="rounded-pill">{Badgelistgroup.badge}</Badge></ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>List Group With color badges</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup as="ol">
                {Badgecolorlistgroups.map((Badgecolorlistgroup)=>(
                <ListGroup.Item as="li" key={Math.random()} className="d-flex justify-content-between align-items-start">{Badgecolorlistgroup.heading}<Badge bg={Badgecolorlistgroup.color}className="rounded-pill">{Badgecolorlistgroup.badge}</Badge></ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>List Group With Custom content</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start active">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>List Group With Disabled Custom content</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="">
              <ListGroup>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start disabled">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style-1">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style2</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style2">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style3</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style3">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style4</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style4">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style5</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style5">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Unorder List Style6</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ul className="list-style6">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Order list</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ol className="order-list">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ol className="order-list">
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ol>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ol>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Order With unorder</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <ol className="order-list">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul className="list-style4 ps-5">
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ol>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Paragraph with Order List</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
              the like).</p>
            <ol className="order-list">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
            </ol>
            <p>Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the
              like).
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Paragraph with Unorder List</Card.Title>
          </Card.Header>
          <Card.Body className="px-5">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
              the like).</p>
            <ul className="list-style-1 mb-3">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
            </ul>
            <p>Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the
              like).
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);
export default ListGroups;
