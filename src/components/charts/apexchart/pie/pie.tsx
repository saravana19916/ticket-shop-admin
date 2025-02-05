import  { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { SimplePieChart, UpdateDonut } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface PieProps {}

const Pie: FC<PieProps> = () => (
  <div className=''>
    <PageHeader titles="Pie Chart" active="Pie Chart" items={['Charts']} /> 
    <Row>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Simple Pie Chart</Card.Title>
          </Card.Header>
          <Card.Body className='mx-auto'>
            <SimplePieChart/>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Donut Chart with update buttons</Card.Title>
          </Card.Header>
          <Card.Body className='mx-auto donutchart'>
           
            <UpdateDonut />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Pie;
