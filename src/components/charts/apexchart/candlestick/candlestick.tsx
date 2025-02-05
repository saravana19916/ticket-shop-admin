import  { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicCandlestickChart, CustomisedCombo } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface CandleStickProps {}

const CandleStick: FC<CandleStickProps> = () => (
  <div className=''>
    <PageHeader titles="CandleStick Chart" active="CandleStick Chart" items={['Charts']} /> 
    
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line and Column Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            
            <BasicCandlestickChart/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Multiple series – Group row</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <CustomisedCombo />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default CandleStick;
