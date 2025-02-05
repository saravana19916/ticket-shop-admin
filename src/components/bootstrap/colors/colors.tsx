import  { FC, Fragment } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { colors, gradientcolors, othercolors, transcolors } from '../../../commondata/commondata';

interface ColorsProps { }

const Colors: FC<ColorsProps> = () => (
  <Fragment>
    <PageHeader titles="Colors" active="Colors" items={['Componets']} /> 
    <Row>
      <Card>
        <Card.Header>
          <Card.Title>Contextual Colors</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="text-wrap">
            <div className="example">
              <Row>
                {colors.map((color) => (
                <Col xl={4} md={12} key={Math.random()}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className={`bg-${color.color} text-white`}>
                      <p className="mb-0">{color.text}</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">{color.color}</strong>
                      <p className="mb-0 text-primary">{color.data}</p>
                    </Card.Body>
                  </Card>
                </Col>
                ))}
              </Row>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Transparent Colors</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="text-wrap">
            <div className="example">
              <Row>
                {transcolors.map((transcolor) => (
                <Col xl={4} md={12} key={Math.random()}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className={`bg-${transcolor.color}-transparent text-${transcolor.color}`}>
                      <p className="mb-0">{transcolor.text}</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">{transcolor.color}</strong>
                      <p className={`mb-0 text-${transcolor.color}`}>{transcolor.data}</p>
                    </Card.Body>
                  </Card>
                </Col>
                ))}
              </Row>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Gradient Colors</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="text-wrap">
            <div className="example">
              <Row>
              {gradientcolors.map((gradientcolor) => (
                <Col xl={4} md={12} key={Math.random()}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className={`bg-${gradientcolor.color}-gradient text-white`}>
                      <p className="mb-0">{gradientcolor.data}</p>
                    </Card.Header>
                    <Card.Body className="my-auto">
                      <h5 className={`mb-0 text-${gradientcolor.color} fw-semibold`}>{gradientcolor.color}</h5>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              </Row>
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <Table className="border">
            <thead>
              <tr>
                <th className="wd-40p">Class Reference</th>
                <th className="wd-60p">Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-primary-gradient"</code></td>
                <td>linear-gradient(to bottom right, #6c5ffc 0%, #8e77fa 100%)</td>
              </tr>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-secondary-gradient"</code></td>
                <td>linear-gradient(to bottom right, #82cff2 0%, #28b7f9 100%)</td>
              </tr>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-success-gradient"</code></td>
                <td>linear-gradient(to bottom right, #1ea38f 0%, #5cf9e2 100%)</td>
              </tr>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-warning-gradient"</code></td>
                <td>linear-gradient(to bottom right, #f66b4e 0%, #fbc434 100%)</td>
              </tr>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-danger-gradient"</code></td>
                <td>linear-gradient(to bottom right, #b51b35 0%, #fd4a68 100%)</td>
              </tr>
              <tr>
                <td><code className="pd-0 bg-transparent">className="bg-info-gradient"</code></td>
                <td>linear-gradient(to bottom right, #1e63c3 0%, #00f2fe 100%)</td>
              </tr>
            </tbody>
          </Table>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header>
          <h3 className="card-title">Other Colors</h3>
        </Card.Header>
        <Card.Body>
          <div className="text-wrap">
            <div className="example">
              <Row>
                {othercolors.map((othercolor) => (
                <Col xl={4} md={12} key={Math.random()}>
                  <Card className="card-aside color-card-radius">
                    <Card.Header className={`bg-${othercolor.color} text-white`}>
                      <p className="mb-0">{othercolor.text}</p>
                    </Card.Header>
                    <Card.Body>
                      <strong className="mb-0">{othercolor.class}</strong>
                      <p className="mb-0 text-blue">{othercolor.data}</p>
                    </Card.Body>
                  </Card>
                </Col>
                ))}
              </Row>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Row>
  </Fragment>
);
export default Colors;
