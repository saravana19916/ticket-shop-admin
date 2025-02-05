import  { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicPolarChart, PolarMonochrome } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface PolarareaProps {}

const Polararea: FC<PolarareaProps> = () => (
  <div className=''>
    <PageHeader titles="Polar-Area Chart" active="Polar-Area Chart" items={['Charts']} /> 
    <Row>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Polar Area Charts</Card.Title>
          </Card.Header>
          <Card.Body className='mx-auto'>
            <BasicPolarChart/>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Polar Area Monochrome Charts</Card.Title>
          </Card.Header>
          <Card.Body className='mx-auto'>
           
            <PolarMonochrome />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Polararea;
