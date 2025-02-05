import  { useState } from 'react';
import { Pagination, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { connect } from "react-redux";
import { AddToCart, ProductReduxData } from '../../../redux/action';
import { ItemData } from '../../../commondata/redux';

const Wishlist = ({ AddToCart, }:any) => {
  //search function
  const [allData, setAllData] = useState(ItemData)
  function handleRemove(id: string) {
    const newList = allData.filter((idx) => idx.id !== id);
    setAllData(newList);
  }

  let allElement2: any = [];
  let myfunction = (InputData: string) => {
    let allElement
    for (allElement of allData) {
      if (allElement.heading[0] == " ") {
        allElement.heading = allElement.heading.trim()
      }
      if (allElement.heading.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.heading.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement);
        }
      }

    }
    setAllData(allElement2);
  };

  return (
    <div className=''>
      <PageHeader titles="Wishlist" active="Wishlist" items={['E-Commerce']} />
      <Row className="row-cards">
        <Col xl={12} lg={12}>
          <Row>
            <Col xl={12}>
              <Card className="p-0">
                <Card.Body className="p-4">
                  <Row>
                    <Col xl={5} lg={6} md={5} sm={6}>
                      <InputGroup className="d-flex w-100 float-start my-1">
                        <Form.Control type="text" className="" onChange={(ele) => { myfunction(ele.target.value) }} placeholder="Search ..." />
                        <Button className="btn input-group-text bg-transparent text-muted" variant=''>
                          <i className="fa fa-search fs-16" aria-hidden="true"></i>
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col xl={7} lg={6} md={7} sm={6}>
                      <div className="float-sm-end float-none my-1">
                        <Link to={`${import.meta.env.BASE_URL}ecommerce/shoppingcart/`} className="btn btn-primary me-2">Add All to Cart</Link>
                        <Link onClick={()=>{setAllData}} to="#" className="btn btn-primary">Clear All</Link>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="tab-content">
            <div className="tab-pane active" id="tab-11">
              <Row>
                {allData ? allData.map((idx) => (
                  <Col sm={6} md={6} xl={3} className="alert" key={Math.random()}>
                    <Card>
                      <div className="product-grid6">
                        <div className="product-image6 p-5">
                          <ul className="icons-wishlist">
                            <li><Link to='#' onClick={() => handleRemove(idx.id)} className="btn btn-danger"><i className="fe fe-heart"></i></Link></li>
                          </ul>
                          <Link to={`${import.meta.env.BASE_URL}ecommerce/shoppingcart/`} className="bg-light">
                            <img className="img-fluid br-7 w-100" src={idx.preview} alt="img" />
                          </Link>
                        </div>
                        <Card.Body className="pt-0">
                          <div className="product-content text-center">
                            <h1 className="title fw-bold fs-20"><Link to={`${import.meta.env.BASE_URL}ecommerce/shoppingcart/`}>{idx.heading}</Link></h1>
                            <div className="mb-2 text-warning me-1">
                              <i className="fa fa-star text-warning me-1"></i>
                              <i className="fa fa-star text-warning me-1"></i>
                              <i className="fa fa-star text-warning me-1"></i>
                              <i className="fa fa-star-half-o text-warning me-1"></i>
                              <i className="fa fa-star-o text-warning me-1"></i>
                            </div>
                            <div className="price mb-2">{idx.price1}<span className="ms-4">{idx.price2}</span></div>
                            <span className={`text-${idx.bg} fs-18 fw-semibold`}>{idx.status}</span>
                          </div>
                        </Card.Body>
                        <Card.Footer className="text-center">
                          <Link to={`${import.meta.env.BASE_URL}ecommerce/shoppingcart/`} onClick={() => { AddToCart(idx.id) }} className="btn btn-primary ms-2 mb-1"><i className="fe fe-shopping-cart me-2"></i>Add to cart</Link>
                          <Link to="#" className="btn btn-light ms-2 mb-1"><i className="fe fe-share-2 me-2 text-dark"></i>Share</Link>
                        </Card.Footer>
                      </div>
                    </Card>
                  </Col>
                )) : ""}
              </Row>

              <div className="mb-5">
                <div className="float-end">

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
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state
})
export default connect(mapStateToProps, { AddToCart, ProductReduxData })(Wishlist);
