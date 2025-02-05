import  { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicRadialChart, MultipleRadialbar, CustomAngleCircle, StrokedGauge } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface RadialbarProps {}

const Radialbar: FC<RadialbarProps> = () => (
  <div className=''>
    <PageHeader titles="Radialbar Chart" active="Radialbar Chart" items={['Charts']} /> 
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Radial Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicRadialChart/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Multiple Radialbars</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <MultipleRadialbar />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Custom Angle Circle Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <CustomAngleCircle/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Stroked Gauge</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <StrokedGauge />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Radialbar;
