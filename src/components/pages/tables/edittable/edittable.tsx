import { FC } from 'react';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';
import { Col, Row, Card } from 'react-bootstrap';
import { BasicEditTable, Savetable } from '../../../../commondata/tabledata';

interface EditTableProps { }

const EditTable: FC<EditTableProps> = () => (
  <div className=''>
    <PageHeader titles="Editor-Table" active="Editor-Table" items={['Tables']} />
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Edit Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <BasicEditTable />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <div className="row">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Add New Row with Edit Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <Savetable />
          </Card.Body>
        </Card>
      </Col>
    </div>
  </div>
);

export default EditTable;
