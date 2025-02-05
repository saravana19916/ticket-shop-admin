import { FC, useState } from 'react';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Link } from 'react-router-dom';
import { Row, Col, Card, ListGroup, ProgressBar, Dropdown, Button, Modal } from 'react-bootstrap';
import { Imagesdata } from '../../../commondata/commonimages';
import {  filemanagers, folder, folders } from '../../../commondata/commondata';
import { FilePond } from 'react-filepond';

interface FileManagerProps { }

const FileManager: FC<FileManagerProps> = () => {
    //file upload
	const [files] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
      alert('New file successfully Created !!');
  }

  return(
  <div className=''>
    <PageHeader titles="File Manager" active="File Manager" items={['Componets']} />
    <Row className="row-sm">
      <Col md={5} lg={5} xl={3}>
        <Card>
          <Card.Body className="text-center">
          <div>
            <Button variant="primary" className="btn-block" onClick={handleShow}><i className="fe fe-plus me-1"></i> Create New File</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FilePond
											files={files}
											allowMultiple={true}
											maxFiles={3}
											server="/api"
											name="files"
											labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
										/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClick}>
                        Add
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
          </Card.Body>
          <Card.Body className="pt-4">
            <ListGroup className="list-group-transparent mb-0 file-manager">
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-image fs-18 me-2 text-success p-2"></i>Images</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">20 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='success' now={30} />
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-video fs-18 me-2 text-secondary p-2"></i>Videos</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">32.5 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='secondary' now={40} />
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-file-text fs-18 me-2 text-primary p-2"></i> Docs</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">14.2 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='primary' now={25} />
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-music fs-18 me-2 text-warning p-2"></i> Music</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">13 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='warning' now={30} />
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-download fs-18 me-2 text-info p-2"></i> Downloads</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">19.3 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='info' now={40} />
              <div className="d-flex">
                <div><Link to="#" className="list-group-item  d-flex align-items-center px-0"><i className="fe fe-grid fs-18 me-2 text-danger p-2"></i> More</Link></div>
                <div className="text-end ms-auto mt-3"><span className="fs-11  text-dark">23 MB</span></div>
              </div>
              <ProgressBar className='progress-xs mb-3 ms-2' variant='danger' now={45} />
            </ListGroup>
          </Card.Body>
          <Card.Body>
            <ListGroup className="list-group-transparent mb-0">
              {folders.map((folder)=>(
              <Link key={Math.random()} to="#" className="list-group-item  d-flex align-items-center px-0 py-2"><span className={`text-${folder.color} me-2 fs-12`}><i className="fe fe-circle"></i></span>{folder.class}</Link>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="d-flex">
              <Link to="#" className="file-manager-image"><img src={Imagesdata("document11")} alt="img" /></Link>
              <h3 className="ms-3 mt-5 fw-semibold">467 Files</h3>
              <div className="ms-5 ms-auto">
                <Dropdown>
                  <Dropdown.Toggle as='a' className="text-muted no-caret"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Internal Storage</Dropdown.Item>
                    <Dropdown.Item>External Storage</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <ProgressBar className='progress-xs mb-3' variant='warning' now={60} />
            <div className="">
              <div className="d-flex">
                <div className="d-flex">
                  <div>
                    <h6 className="mt-2"><i className="fe fe-circle text-success fs-12"></i> Total Storage</h6>
                    <span className="text-muted">128 GB</span>
                  </div>
                </div>
                <div className="ms-auto my-auto">
                  <h6 className="mt-2"><i className="fe fe-circle text-danger fs-12"></i> Used</h6>
                  <span className="text-muted">100 GB</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={7} lg={7} xl={9}>
        <Row className="row-sm">
          <div className="text-dark mb-2 ms-1 fs-20 fw-semibold">All Folders</div>
          {folder.map((folders)=>(
          <Col xl={3} md={6} sm={6} key={Math.random()}>
            <Card className="pos-relative">
              <Link to={`${import.meta.env.BASE_URL}filemanager/filemanagerlist/`} className="open-file"></Link>
              <Card.Body className="px-4 pt-4 pb-2">
                <div className="d-flex">
                  <span className={`bg-${folders.color}-transparent border border-${folders.color} brround`}>
                    {folders.icon}
                  </span>
                  <Dropdown className="ms-auto mt-1">
                    <Dropdown.Toggle  variant='' className="text-muted no-caret"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-download me-2"></i> Download</Dropdown.Item>
                      <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
              <Card.Footer className="border-top-0">
                <div className="d-flex">
                  <div>
                    <h5 className={`text-${folders.color}`}>{folders.class}</h5>
                    <p className="text-muted fs-13 mb-0">{folders.text}</p>
                  </div>
                  <div className="ms-auto mt-4">
                    <h6 className="">{folders.data}</h6>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          ))}
        </Row>
        <div className="text-dark mb-2 ms-1 fs-20 fw-semibold">Files</div>
        <Row className="row-sm">
          {filemanagers.map((filemanager)=>(
          <Col xl={4} xxl={3} lg={6} md={6} sm={6} key={Math.random()}>
            <Card className="overflow-hidden">
              <Link to={`${import.meta.env.BASE_URL}filemanager/filedetails/`} className={filemanager.data1}><img src={filemanager.src1} alt="img"  className='w-100 file-manager-list'/></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">{filemanager.class}</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">{filemanager.data}</span>
                  </div>
                </div>
              </Card.Footer>
              
            </Card>
          </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </div>
)
};
export default FileManager;
