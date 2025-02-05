import  { FC } from 'react';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Col, Row, Pagination } from 'react-bootstrap';
import { LightboxGallery1 } from '../../../commondata/gallerydata';
import { Link } from 'react-router-dom'
interface GalleryProps { }

const Gallery: FC<GalleryProps> = () => (
  <div className=''>
    <PageHeader titles="Gallery" active="Gallery" items={['Pages']} />
    <div className="demo-gallery card">
      <div className="card-header">
        <div className="card-title">Light Gallery</div>
      </div>
      <div className="card-body">
        <Link to='#'>
          <LightboxGallery1 />
        </Link>
      </div>
    </div>
    <Row className="mb-5">
      <Col md={6} className="mt-1 d-none d-md-block">1 - 10 of 234 photos</Col>
      <Col md={6}>
        <div className=" float-end">
          <Pagination>
            <Pagination.Item disabled>Prev</Pagination.Item>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
          </Pagination>

        </div>
      </Col>
    </Row>
  </div>
);

export default Gallery;
