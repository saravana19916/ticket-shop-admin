import  { FC } from 'react';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';
import { Row, Col, Card } from 'react-bootstrap';
import BasicFormWizard, {BasicContent, BasicContentFormWizard, ValidationForm, VerticalOrientationWizard } from '../../../../commondata/commondata';

interface FormWizardProps { }

const FormWizard: FC<FormWizardProps> = () => (
  <div className=''>
    <PageHeader titles="Form-Wizard" active="Form-Wizard" items={['Forms']} />
    <Row>
      <Col>
        <Card>
          <Card.Header className="border-bottom-0">
            <Card.Title as='h3'>Form Wizard</Card.Title>
          </Card.Header>
          <Card.Body>
          <BasicContent />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header className="border-bottom-0">
            <Card.Title as='h3'>Accordion-Wizard-Form</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicFormWizard />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header className="border-bottom-0">
            <Card.Title>
              Basic Content Wizard
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicContentFormWizard />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header className="border-bottom-0">
            <Card.Title>
              Basic Wizard With Validation
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <ValidationForm />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header className="border-bottom-0">
            <Card.Title>
              Vertical Orientation Wizard
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <VerticalOrientationWizard />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
  
);

export default FormWizard;
