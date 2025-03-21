import  { FC } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';
import { Contextualtables, tables, tables1 } from '../../../../commondata/commondata';

interface DefaultTableProps { }

const DefaultTable: FC<DefaultTableProps> = () => (
  <div className=''>
    <PageHeader titles="Table" active="Table" items={['Tables']} />
    <Row>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Simple Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Using the most basic table markup, here’s how <code className="highlighter-rouge">.table</code> based tables look in Bootstrap.</p>
            <div className="table-responsive">
              <Table className="text-nowrap text-md-nowrap mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {tables.map((table)=>(
                  <tr key={Math.random()}>
                    <td>{table.id}</td>
                    <td>{table.name}</td>
                    <td>{table.position}</td>
                    <td>{table.salary}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>

            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Striped Rows</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Use <code className="highlighter-rouge">.table-striped</code>to add zebra-striping to any table row within the <code className="highlighter-rouge">.tbody</code>.</p>
            <div className="table-responsive">
              <Table className="border text-nowrap text-md-nowrap table-striped mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                {tables.map((table)=>(
                  <tr key={Math.random()}>
                    <td>{table.id}</td>
                    <td>{table.name}</td>
                    <td>{table.position}</td>
                    <td>{table.salary}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Bordered Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Use <code className="highlighter-rouge">.table-bordered</code>to add zebra-striping to any table row within the <code className="highlighter-rouge">.tbody</code>.</p>
            <div className="table-responsive">
              <Table className="border text-nowrap text-md-nowrap table-bordered mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                {tables.map((table)=>(
                  <tr key={Math.random()}>
                    <td>{table.id}</td>
                    <td>{table.name}</td>
                    <td>{table.position}</td>
                    <td>{table.salary}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Hoverable Rows Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Use <code className="highlighter-rouge">.table-hover</code>to add zebra-striping to any table row within the <code className="highlighter-rouge">.tbody</code>.</p>
            <div className="table-responsive">
              <Table className="border text-nowrap text-md-nowrap table-hover mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                {tables.map((table)=>(
                  <tr key={Math.random()}>
                    <td>{table.id}</td>
                    <td>{table.name}</td>
                    <td>{table.position}</td>
                    <td>{table.salary}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Borderless Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Use <code className="highlighter-rouge">.table-borderless</code>to add zebra-striping to any table row within the <code className="highlighter-rouge">.tbody</code>.</p>
            <div className="table-responsive">
              <Table className="border text-nowrap text-md-nowrap table-borderless mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                {tables.map((table)=>(
                  <tr key={Math.random()}>
                    <td>{table.id}</td>
                    <td>{table.name}</td>
                    <td>{table.position}</td>
                    <td>{table.salary}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Small Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Add <code className="highlighter-rouge">.table-sm</code> to make any <code className="highlighter-rouge">.table</code> more compact by cutting all cell <code className="highlighter-rouge">padding</code> in half.</p>
            <div className="table-responsive">
              <Table className="border text-nowrap text-md-nowrap table-sm mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                {tables.map((table)=>(
                  <tr key={Math.random()}>
                    <td>{table.id}</td>
                    <td>{table.name}</td>
                    <td>{table.position}</td>
                    <td>{table.salary}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Nested Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Border styles, active styles, and table variants are not inherited by nested tables.</p>
            <div className="table-responsive">
              <Table className="border text-nowrap text-md-nowrap mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Joan Powell</td>
                    <td>Associate Developer</td>
                    <td>$450,870</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <table className="table border text-nowrap text-md-nowrap  mb-0">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Salary</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Joan Powell</td>
                            <td>Associate Developer</td>
                            <td>$450,870</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Gavin Gibson</td>
                            <td>Account manager</td>
                            <td>$230,540</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Julian Kerr</td>
                            <td>Senior Javascript Developer</td>
                            <td>$55,300</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Cedric Kelly</td>
                            <td>Accountant</td>
                            <td>$234,100</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Julian Kerr</td>
                    <td>Senior Javascript Developer</td>
                    <td>$55,300</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Cedric Kelly</td>
                    <td>Accountant</td>
                    <td>$234,100</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Samantha May</td>
                    <td>Junior Technical Author</td>
                    <td>$43,198</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card className='contextual-table'>
          <Card.Header>
            <Card.Title as='h3'>Contextual Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Use contextual classes to color tables, table rows or individual cells.</p>
            <div className="table-responsive">
              <Table className="border text-nowrap text-md-nowrap mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {Contextualtables.map((Contextualtable)=>(
                  <tr className={Contextualtable.color} key={Math.random()}>
                    <td>{Contextualtable.id}</td>
                    <td>{Contextualtable.name}</td>
                    <td>{Contextualtable.position}</td>
                    <td>{Contextualtable.salary}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Table head</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Similar to tables and dark tables, use the modifier classes <code className="highlighter-rouge">.table-primary</code> or <code className="highlighter-rouge">.table-dark</code> to make <code className="highlighter-rouge">&lt;thead&gt;</code></p>
            <div className="table-responsive">
              <Table className="border text-nowrap text-md-nowrap mb-0">
                <thead className="table-primary">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {tables1.map((table1)=>(
                  <tr key={Math.random()}>
                    <td>{table1.id}</td>
                    <td>{table1.name}</td>
                    <td>{table1.position}</td>
                    <td>{table1.salary}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Table Dark</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Use <code className="highlighter-rouge">.table-dark</code>to add zebra-striping to any table row within the <code className="highlighter-rouge">.tbody</code>.</p>
            <div className="table-responsive">
              <Table className="border text-nowrap text-md-nowrap  table-dark table-striped mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                {tables1.map((table1)=>(
                  <tr key={Math.random()}>
                    <td>{table1.id}</td>
                    <td>{table1.name}</td>
                    <td>{table1.position}</td>
                    <td>{table1.salary}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default DefaultTable;
