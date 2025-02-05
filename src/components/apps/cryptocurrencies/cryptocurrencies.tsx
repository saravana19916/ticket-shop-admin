import { FC, Fragment } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Crypto } from '../../../commondata/commondata';

interface CryptoCurrenciesProps { }

const CryptoCurrencies: FC<CryptoCurrenciesProps> = () => (
  <Fragment>
    <PageHeader titles="Crypto-currencies" active="Crypto-currencies" items={['Apps']} />
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title as="h3">Crypto Currencies</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
            <Crypto/>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);
export default CryptoCurrencies;

