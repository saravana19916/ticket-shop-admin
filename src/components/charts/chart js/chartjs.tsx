import  { FC } from 'react';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { LineChart, BarChart, MultiBarChart, AreaChart, DonutChart, PieChart, RadarChart, PolarChart } from '../../../commondata/chartdata';
import { Card, Col, Row } from 'react-bootstrap';

interface ChartjsProps { }

const Chartjs: FC<ChartjsProps> = () => (
  <div className=''>
    <PageHeader titles="ChartJs" active="ChartJs" items={['Charts']} /> 
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container h-360">
              <LineChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Bar Chart1</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container">
              <BarChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Bar Chart2</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container">
              <MultiBarChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Area Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container">
              <AreaChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Donut Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container Chart">
              <DonutChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Pie Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container Chart">
              <PieChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Radar Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container Chart">
              <RadarChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Polar Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chart-container Chart">
              <PolarChart/>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Chartjs;
