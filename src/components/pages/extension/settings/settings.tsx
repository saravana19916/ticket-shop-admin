import  { FC, Fragment } from 'react';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';
import { Link } from 'react-router-dom';
import { Card, Col, Row, ListGroup } from 'react-bootstrap';
import { settings } from '../../../../commondata/commondata';

interface SettingsProps { }

const Settings: FC<SettingsProps> = () => (
  <Fragment>
    <PageHeader titles="Settings" active="Settings" items={['Pages']} />
    <Row>
      <Col lg={6} xl={3}>
        <Card>
          <Card.Body>
            <ListGroup className="list-group-transparent mb-0 file-manager file-manager-border">
              <h4>General</h4>
              <div>
                <Link to='#'><ListGroup.Item eventKey='#link' className="d-flex align-items-center px-0 border-top">
                  <i className="fe fe-user fs-18 me-2 text-success p-2"></i>Account
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item  className="d-flex align-items-center px-0">
                  <i className="fe fe-bell fs-18 me-2 text-secondary p-2"></i>Notifications
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item  className="d-flex align-items-center px-0">
                  <i className="fe fe-eye fs-18 me-2 text-primary p-2"></i> Appearances
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item  className="d-flex align-items-center px-0">
                  <i className="fe fe-lock fs-18 me-2 text-warning p-2"></i> Privacy & Security
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item  className="d-flex align-items-center px-0">
                  <i className="fe fe-headphones fs-18 me-2 text-info p-2"></i> Help & Support
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item  className="d-flex align-items-center px-0">
                  <i className="fe fe-database fs-18 me-2 text-pink p-2"></i> Data Usage Control
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item  className="d-flex align-items-center px-0">
                  <i className="fe fe-battery-charging fs-18 me-2 text-green p-2"></i> Power Saving Management
                </ListGroup.Item></Link>
              </div>
              <div>
                <Link to='#'><ListGroup.Item  className="d-flex align-items-center px-0">
                  <i className="fe fe-help-circle fs-18 me-2 text-danger p-2"></i> About
                </ListGroup.Item></Link>
              </div>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={9}>
        <Row className="row-sm">
        {settings.map((setting)=>(
          <Col xl={12} xxl={6} key={Math.random()}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xl={2} sm={2} md={12}>
                    <div className="mt-3 mb-5">
                      <span className={`settings-icon bg-${setting.color}-transparent text-${setting.color} border-${setting.color}`}><i className={`fe ${setting.icon}`}></i></span>
                    </div>
                  </Col>
                  <Col xl={10} sm={10} md={12}>
                    <Link to="#">
                      <h4 className="mb-1 text-dark">{setting.heading}</h4>
                    </Link>
                    <p>{setting.data}</p>
                    <Link to="">Change Settings <i className="ion-chevron-right fs-10 ms-1"></i></Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      </Col>
    </Row>
  </Fragment>
);

export default Settings;
