import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicTreeChart } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface TreesProps {}

const Trees: FC<TreesProps> = () => (
  <div className=''>
    <PageHeader titles="Tree Chart" active="Tree Chart" items={['Charts']} /> 
    <Row>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line chart</Card.Title>
          </Card.Header>
          <Card.Body>
            
            <BasicTreeChart/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);
export default Trees;
