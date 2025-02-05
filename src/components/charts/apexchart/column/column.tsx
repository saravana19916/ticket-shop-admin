import  { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicColumn, StackedColumn, ColumnNegativeValue, ColumnMarker } from '../../../../commondata/chartdata';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface ColumnProps { }

const Column: FC<ColumnProps> = () => (
  <div className=''>
    <PageHeader titles="Column Chart" active="Column Chart" items={['Charts']} />
    BasicColumnChart

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Column Chart</Card.Title>
          </Card.Header>
          <Card.Body>

            <BasicColumn />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Stacked Column Chart</Card.Title>
          </Card.Header>
          <Card.Body>

            <StackedColumn />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Column Chart with Negative Values</Card.Title>
          </Card.Header>
          <Card.Body>

            <ColumnNegativeValue />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Column with Markers</Card.Title>
          </Card.Header>
          <Card.Body>

            <ColumnMarker />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Column;
