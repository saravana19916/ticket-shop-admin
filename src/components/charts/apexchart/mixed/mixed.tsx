import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { LineColumn, MultipleSeries, LineandAreaChart, LineColumnArea } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface MixedProps {}

const Mixed: FC<MixedProps> = () => (
  <div className=''>
    <PageHeader titles="Mixed Chart" active="Mixed Chart" items={['Charts']} /> 

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line and Column Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            
            <LineColumn/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Multiple Y-axis Chart</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <MultipleSeries />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line and area Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            
            <LineandAreaChart/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line , Column and area Chart</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <LineColumnArea />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Mixed;
