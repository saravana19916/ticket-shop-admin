import  { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicAreaChart, StackedChart, NagetiveArea, DateTime } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface AreaProps { }

const Area: FC<AreaProps> = () => (
  <div className=''>
    <PageHeader titles="Area Chart" active="Area Chart" items={['Charts']} />

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Area chart</Card.Title>
          </Card.Header>
          <Card.Body>

            <BasicAreaChart />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Stacked Area Chart</Card.Title>
          </Card.Header>
          <Card.Body>

            <StackedChart />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Area with Negative Values</Card.Title>
          </Card.Header>
          <Card.Body>
            <NagetiveArea />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Datetime X-Axis</Card.Title>
          </Card.Header>
          <Card.Body>

            <DateTime />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Area;
