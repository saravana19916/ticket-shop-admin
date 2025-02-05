import { FC } from 'react';
import { Card, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { imgfiles, imgfiles1, squarefiles } from '../../../commondata/commondata';

interface FileAttachmentsProps { }

const FileAttachments: FC<FileAttachmentsProps> = () => (
  <div className=''>
    <PageHeader titles="File Attachments" active="File Attachments" items={['Componets']} />
    <Row>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Color Square File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
              {squarefiles.map((squarefile)=>(
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example" key={Math.random()}>
                <Button variant={squarefile.color} className="text-white" type="button"><i className="mdi mdi-file-image me-2"></i> {squarefile.class}</Button>
                <Button variant={squarefile.color} className="text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Color Rounded File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
            {squarefiles.map((squarefile)=>(
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example" key={Math.random()}>
                <Button variant={squarefile.color} className="btn-pill text-white" type="button"><i className="mdi mdi-file-image me-2"></i> {squarefile.class}</Button>
                <Button variant={squarefile.color} className="btn-pill text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Outline Square File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
            {squarefiles.map((squarefile)=>(
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example" key={Math.random()}>
                <Button variant={`outline-${squarefile.color}`} className="" type="button"><i className="mdi mdi-file-image me-2"></i> {squarefile.class}</Button>
                <Button variant={`outline-${squarefile.color}`} className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Outline Rounded File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
            {squarefiles.map((squarefile)=>(
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example" key={Math.random()}>
                <Button variant={`outline-${squarefile.color}`} className="btn-pill" type="button"><i className="mdi mdi-file-image me-2"></i> {squarefile.class}</Button>
                <Button variant={`outline-${squarefile.color}`} className="btn-pill btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Transparent Square File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
            {squarefiles.map((squarefile)=>(
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example" key={Math.random()}>
                <Button variant={`${squarefile.color}-light`} className="" type="button"><i className="mdi mdi-file-image me-2"></i> {squarefile.class}</Button>
                <Button variant={`${squarefile.color}-light`} className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Transparent Rounded File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="tags">
            {squarefiles.map((squarefile)=>(
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example" key={Math.random()}>
                <Button variant={`${squarefile.color}-light`} className="btn-pill" type="button"><i className="mdi mdi-file-image me-2"></i> {squarefile.class}</Button>
                <Button variant={`${squarefile.color}-light`} className="btn-pill btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Square File_Attachment with link</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <p>Square File_Attachment with <code className="highlighter-rouge">&lt;Link&gt;</code> tag.</p>
            <div className="tags">
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-primary text-white"><i className="mdi mdi-file-image mx-2"></i>Image01..._jpg</Link>
                <Link to='#' className="btn btn-close btn-primary text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-outline-secondary"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Link>
                <Link to='#' className="btn btn-close btn-outline-secondary" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-success-light"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Link>
                <Link to='#' className="btn btn-close btn-success-light" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Rounded File_Attachment with link</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <p>Rounded File_Attachment with <code className="highlighter-rouge">&lt;Link&gt;</code> tag.</p>
            <div className="tags">
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-info text-white"><i className="mdi mdi-file-image mx-2"></i>Image01..._jpg</Link>
                <Link to='#' className="btn btn-pill btn-close btn-info text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-outline-warning"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Link>
                <Link to='#' className="btn btn-pill btn-close btn-outline-warning" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-danger-light"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Link>
                <Link to='#' className="btn btn-pill btn-close btn-danger-light" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Square File Attachment Sizes</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <div className="tags">
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Button variant='primary' size='sm' className="text-white"><i className="mdi mdi-file-image mx-2"></i>Image01..._jpg</Button>
                <Button variant='primary' size='sm' className="btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Button variant='secondary' className="text-white"><i className="mdi mdi-file-excel me-2"></i>Document.exl</Button>
                <Button variant='secondary' className="btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Button variant='pink' size='lg' className=""><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</Button>
                <Button variant='pink' size='lg' className="btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Rounded File Attachment Sizes</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <div className="tags">
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Button variant='primary' size='sm' className="btn-pill text-white"><i className="mdi mdi-file-image me-2"></i>Image01..._jpg</Button>
                <Button variant='primary' size='sm' className="btn-pill btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Button variant='secondary' className="btn-pill"><i className="mdi mdi-file-excel me-2"></i>Document.exl</Button>
                <Button variant='secondary' className="btn-pill btn-close text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Button variant='pink' size='lg' className="btn-pill"><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</Button>
                <Button variant='pink' size='lg' className="btn-pill btn-close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Square File Attachment Sizes with link</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <p>Square File_Attachment Sizes with <code className="highlighter-rouge">&lt;Link&gt;</code> tag.</p>
            <div className="tags">
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-sm btn-primary text-white"><i className="mdi mdi-file-image mx-2"></i>Image01..._jpg</Link>
                <Link to='#' className="btn btn-close btn-sm btn-primary text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-secondary text-white"><i className="mdi mdi-file-excel me-2"></i>Document.exl</Link>
                <Link to='#' className="btn btn-close btn-secondary text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-lg btn-pink"><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</Link>
                <Link to='#' className="btn btn-close btn-lg btn-pink" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card className="custom-card">
          <Card.Header className="border-bottom">
            <Card.Title as='h3'>Rounded File Attachment Sizes with link</Card.Title>
          </Card.Header>
          <Card.Body className="p-4 p-sm-5">
            <p>Rounded File_Attachment Sizes with <code className="highlighter-rouge">&lt;Link&gt;</code> tag.</p>
            <div className="tags">
              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-sm btn-primary text-white"><i className="mdi mdi-file-image me-2"></i>Image01..._jpg</Link>
                <Link to='#' className="btn btn-pill btn-close btn-sm btn-primary text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-secondary text-white"><i className="mdi mdi-file-excel me-2"></i>Document.exl</Link>
                <Link to='#' className="btn btn-pill btn-close btn-secondary text-white" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>

              <ButtonGroup className="file-attach m-1" role="group" aria-label="Basic example">
                <Link to='#' className="btn btn-pill btn-lg btn-pink"><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</Link>
                <Link to='#' className="btn btn-pill btn-close btn-lg btn-pink" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </Link>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row >

    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Image File_Attachment</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="">
                <Row>
                  {imgfiles.map((imgfile)=>(
                  <Col xl={2} lg={3} md={4} sm={4} key={Math.random()}>
                    <div className="file-image p-2">
                      <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`}>
                        <img src={imgfile.src1} alt="png-4" className="w-100" />
                      </Link>
                      <ul className="icons">
                        <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                        <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                        <li><Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                      </ul>
                      <Link to="#"><span className="file-name">{imgfile.class}</span></Link>
                    </div>
                  </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Image File_Attachment Small Size</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              {imgfiles1.map((imgfile1)=>(
              <div className="file-image-1" key={Math.random()}>
                <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`}>
                  <img src={imgfile1.src1} className="br-5" alt="pngs-4" />
                </Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">{imgfile1.class}</span>
              </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Image File_Attachment Medium Size</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
            {imgfiles1.map((imgfile1)=>(
              <div className="file-image-1 file-image-md" key={Math.random()}>
                <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`}>
                  <img src={imgfile1.src1} className="br-5" alt="pngs-4" />
                </Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">{imgfile1.class}</span>
              </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Image File_Attachment Large Size</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
            {imgfiles1.map((imgfile1)=>(
              <div className="file-image-1 file-image-lg" key={Math.random()}>
                <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`}>
                  <img src={imgfile1.src1} className="br-5" alt="pngs-4" />
                </Link>
                <ul className="icons">
                  <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></Link></li>
                  <li><Link to="#" className="btn bg-secondary"><i className="fe fe-download"></i></Link></li>
                  <li><Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`} className="btn bg-primary"><i className="fe fe-eye"></i></Link></li>
                </ul>
                <span className="file-name-1">{imgfile1.class}</span>
              </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div >
);
export default FileAttachments;
