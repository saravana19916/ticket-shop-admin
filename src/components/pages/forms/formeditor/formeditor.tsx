import React, { FC, useState } from 'react';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import SunEditor from 'suneditor-react';

interface FormEditorProps { }

const FormEditor: FC<FormEditorProps> = () => {
  // Form Editor in Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Form inline editor
  const htmlWithTableImages = `<center>  </center>`;
    // replace with initial value with different html variables to reproduce bugs
    const [value, setValue] = React.useState(htmlWithTableImages);
  return(

  <div className=''>
    <PageHeader titles="Form Editor" active="Form Editor" items={['Forms']} />
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Sun Form Editor</Card.Title>
          </Card.Header>
          <Card.Body>
          <SunEditor />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>
              Form Editor in Modal
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-center p-4 bg-light border">
            <Button variant="primary" onClick={handleShow}>
        View live demo
      </Button>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <SunEditor />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>
              From Inline-Edit Editor
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="wd-xl-100p ht-350">
            <div className="App">
      <SunEditor
        setContents={value}
        onChange={setValue}
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize"],
            ['paragraphStyle', 'blockquote'],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript"
            ],
            ["fontColor", "hiliteColor"],
            ["align", "list", "lineHeight"],
            ["outdent", "indent"],
            ["table", "horizontalRule", "link", "image", "video"],
            ["preview", "print"],
            ["removeFormat"]
          ], 
          defaultTag: "div",
          minHeight: "300px",
          showPathLabel: false,
          attributesWhitelist: {
            all: "style",
            table: "cellpadding|width|cellspacing|height|style",
            tr: "valign|style",
            td: "styleinsert|height|style",
            img: "title|alt|src|style"
          }
        }}
      />
      <hr />
      <h2>Example given value output:</h2>
      <textarea className='text-editor'
        disabled
        value={JSON.stringify(value, null, 2)}
        style={{ width: "100%", resize: "none", height: "600px" }}
      />
    </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
)
  };

export default FormEditor;
