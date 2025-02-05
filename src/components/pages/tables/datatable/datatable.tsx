import  { FC } from 'react';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicDataTable, ResponsiveDataTable, Datatable } from '../../../../commondata/tabledata';

interface DataTableProps { }

const DataTable: FC<DataTableProps> = () => (
  <div className=''>
    <PageHeader titles="Data Table" active="Data Table" items={['Tables']} />
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Datatable</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicDataTable />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Responsive DataTable</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <ResponsiveDataTable />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'> DataTable</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive table-page">
              <Datatable/>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default DataTable;
