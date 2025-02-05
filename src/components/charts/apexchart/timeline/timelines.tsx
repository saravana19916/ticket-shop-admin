import  { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { MultiSeries, GroupSeries } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface TimelinesProps {}

const Timelines: FC<TimelinesProps> = () => (
  <div className=''>
    <PageHeader titles="Timeline Chart" active="Timeline Chart" items={['Charts']} /> 
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line and Column Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            
            <MultiSeries/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Multiple series – Group row</Card.Title>
          </Card.Header>
          <Card.Body>
           
            <GroupSeries />
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </div>
);

export default Timelines;
