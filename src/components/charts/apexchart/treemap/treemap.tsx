import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicTreeMap, DistributedTreemap } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface TreemapProps {}

const Treemap: FC<TreemapProps> = () => (
  <div className=''>
    <PageHeader titles="TreeMap Chart" active="TreeMap Chart" items={['Charts']} /> 
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Treemap Charts</Card.Title>
          </Card.Header>
          <Card.Body>
            
            <BasicTreeMap/>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Distributed Treemap Charts  </Card.Title>
          </Card.Header>
          <Card.Body>
           
            <DistributedTreemap />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Treemap;
