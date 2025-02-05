import { FC, Fragment, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import Select from 'react-select';
import SunEditor from 'suneditor-react';
import { Product } from '../../../commondata/commondata';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

interface AddProductProps { }

const AddProduct: FC<AddProductProps> = () => {
    //file upload
	const [files] = useState([]);
  
  return (

  <Fragment>
    <PageHeader titles="Add Product" active="Add Product" items={['E-Commerce']} />
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Add New Product</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row className="mb-4">
              <Form.Label className="col-md-3">Product Name :</Form.Label>
              <Col md={9}>
                <Form.Control type="text" placeholder="Product Name" />
              </Col>
            </Row>
            <Row className="mb-4">
              <Form.Label className="col-md-3">Price :</Form.Label>
              <Col md={9}>
                <Form.Control type="number" />
              </Col>
            </Row>
            <Row className="mb-4">
              <Form.Label className="col-md-3">Categories :</Form.Label>
              <Col md={9}>
                <Select classNamePrefix="Select" options={Product} placeholder='Electronics'/>
              </Col>
            </Row>
            <Row>
              <Form.Label className="col-md-3 mb-4">Product Description :</Form.Label>
              <Col md={9} className="mb-4">           
              <SunEditor />
              </Col>
            </Row>
            <Row>
              <Form.Label className="col-md-3 mb-4">Product Upload :</Form.Label>
              <Col md={9}>
            <FilePond files={files} allowMultiple={true} maxFiles={3} server="/api" name="files" />
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col md={3}></Col>
              <Col md={9}>
                <Link to="#" className="btn btn-primary">Add Product</Link>
                <Link to="#" className="btn btn-default float-end">Discard</Link>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Fragment>
); };
export default AddProduct;
