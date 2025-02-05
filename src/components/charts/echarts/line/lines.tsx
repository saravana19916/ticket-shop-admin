import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicChart, StackedAreaChart, LargeScaleAreaChart, StepLineChart } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface LinesProps { }

const Lines: FC<LinesProps> = () => (
  <div className=''>
    <PageHeader titles="Lines Chart" active="Lines Chart" items={['Charts']} />

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Line Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicChart />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Stacked Area Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <StackedAreaChart />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Large scale area chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <LargeScaleAreaChart />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Step Line Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <StepLineChart />
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </div>
);
export default Lines;
