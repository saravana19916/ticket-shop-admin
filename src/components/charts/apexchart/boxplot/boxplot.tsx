import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BoxplotScatterChart, HorizontalBoxPlot } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface BoxplotProps {}

const Boxplot: FC<BoxplotProps> = () => (
  <div className=''>
    <PageHeader titles="Boxplot Chart" active="Boxplot Chart" items={['Charts']} /> 
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Box & Whisker Charts </Card.Title>
          </Card.Header>
          <Card.Body>
            
            <BoxplotScatterChart/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Horizontal BoxPlot</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <HorizontalBoxPlot />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Boxplot;
