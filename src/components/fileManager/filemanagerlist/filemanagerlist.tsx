import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { filemanagers } from '../../../commondata/commondata';
import { Link } from 'react-router-dom';

interface FileManagerListProps { }

const FileManagerList: FC<FileManagerListProps> = () => (
  <div className=''>
    <PageHeader titles="File Manager List" active="File Manager List" items={['Componets']} /> 
    <Row className="row-sm">
          {filemanagers.map((filemanager)=>(
          <Col xl={3} xxl={2} lg={3} md={4} sm={4} key={Math.random()}>
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
  </div>
);
export default FileManagerList;
