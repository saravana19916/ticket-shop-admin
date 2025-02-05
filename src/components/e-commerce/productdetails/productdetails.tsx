
import  { useEffect, useState } from 'react';
import { Card, Col, Row, Form, Badge, Tabs, Tab, InputGroup, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { connect } from "react-redux";
import { AddToCart } from "../../../redux/action";

// photos
import shirt1 from '../../../assets/images/png/7.png';
import shirt2 from '../../../assets/images/png/8.png';
import shirt3 from '../../../assets/images/png/6.png';
import shirt4 from '../../../assets/images/png/5.png';
import { ItemData } from '../../../commondata/redux';
import { Imagesdata } from '../../../commondata/commonimages';
import { relatedproductData } from '../../../commondata/commondata';

const ProductDetails = ({ AddToCart }:any) => {

  const [allData, setAllData] = useState(relatedproductData)
  let { id } = useParams();

  const [defaultData, setdefaultData] = useState<any>();

  useEffect(() => {
    if (id !== undefined) {
      let data = ItemData.filter((ele) => {
        return ele.id === id;
      });
      setdefaultData(data[0]);
    } else {
      setdefaultData({
        id: Math.random(),
        preview: shirt1,
        imges:[
          { img: shirt1 },
          { img: shirt2 },
          { img: shirt3 },
          { img: shirt4 },
        ],
        heading: "Trending Half Hands Tshirt (Best Fabric Premium made T-shirt for Casual wear.)",
        price2: "$599",
        price1: "$299 USD/",
        status: 'In Stock',
        bg: 'success'
      }); 
    }
  }, [id]);


  //Quantity items

  const [num, setNumber] = useState(0);

  const Increment = () => {
      setNumber(num + 1);
  };

  const Decrement = () => {
      if (num === 0) {
          return false;
      }
      setNumber(num - 1);
  };

//remove function
  function handleRemove(id: any) {
    const newList = allData.filter((idx: any) => idx.id !== id);
    setAllData(newList);
  }

  return (
    <div className=''>
      <PageHeader titles="Product Details" active="Product Details" items={['E-Commerce']} />
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Body>
              <Row className="row-sm">
                <Col xl={5} lg={12} md={12}>
                  <Row>
                    <Col xl={12}>

                      <div className="preview-pic tab-content text-center ">
                        <div className="tab-pane active" id="pic-1">
                          <img src={defaultData && defaultData.preview} alt="img" className={defaultData && defaultData.preview !== shirt1 ? "img-fluid mx-auto d-block" : ""} />
                        </div>
                    </div>
                      <ul className="preview-thumbnail nav nav-tabs product-detail-items">
                        {defaultData &&
                          defaultData.imges.map((ele: any) => {
                            return (
                              <li key={Math.random() + ele} className="active"><Link to ='#' onClick={() => { setdefaultData({ ...defaultData, preview: ele.img, }); }}><img src={ele.img} alt="img" /></Link></li>
                            );
                          })}
                      </ul>
                  
                    </Col>
                  </Row>
                </Col>
                <Col xl={7} lg={12} md={12} className="details mt-4 mt-xl-0">
                  <div className="mt-2 mb-4">
                    <h3 className="mb-3 fw-semibold">{defaultData && defaultData.heading}</h3>
                    <p className="text-muted float-start me-3">
                      <span className="fa fa-star text-warning"></span>
                      <span className="fa fa-star text-warning"></span>
                      <span className="fa fa-star text-warning"></span>
                      <span className="fa fa-star-half-o text-warning"></span>
                      <span className="fa fa-star-o text-warning"></span>
                    </p>
                    <p className="text-muted mb-4">( 40 Customers Reviews) </p>
                    <h4 className="mt-4"><b> Description</b></h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                      similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized .</p>
                    <h3 className="mb-4"><span className="me-2 fw-bold fs-25">{defaultData && defaultData.price1}</span><span><del className="fs-18 text-muted">{defaultData && defaultData.price2}</del></span></h3>
                    <div className=" mt-4 mb-5"><span className="fw-bold me-2">Offer : </span><span className="fw-bold text-primary">15% Cashback </span>by using icici bank credit card.<small className="text-muted">Terms and Conditions Applies</small></div>
                    <div className=" mt-4 mb-5"><span className="fw-bold me-2">Availability :</span><span className={`fw-bold text-${defaultData && defaultData.bg}`}>{defaultData && defaultData.status}</span></div>
                    <div className="colors d-flex me-3 mt-4 mb-5">
                      <span className="mt-2 fw-bold">Colors:</span>
                      <Row className="gutters-xs ms-4">
                        <div className="col-3">
                          <label className="colorinput">
                            <input name="color" type="radio" defaultValue="azure" className="colorinput-input" />
                            <span className="colorinput-color bg-danger rounded-10"></span>
                          </label>
                        </div>
                        <div className="col-3">
                          <label className="colorinput">
                            <input name="color" type="radio" defaultValue="indigo" className="colorinput-input" />
                            <span className="colorinput-color bg-dark rounded-10"></span>
                          </label>
                        </div>
                        <div className="col-3">
                          <label className="colorinput">
                            <input name="color" type="radio" defaultValue="purple" className="colorinput-input" />
                            <span className="colorinput-color bg-info rounded-10"></span>
                          </label>
                        </div>
                        <div className="col-3">
                          <label className="colorinput">
                            <input name="color" type="radio" defaultValue="pink" className="colorinput-input" />
                            <span className="colorinput-color bg-success rounded-10"></span>
                          </label>
                        </div>
                      </Row>
                    </div>
                    <Row className="row-sm">
            <Col>
                <div className="mb-2 me-2 sizes">
                    <span className="fw-bold me-4">Quantity:</span>
                    <InputGroup className="input-indec input-indec1 w-sm-30 w-20 mt-3">
                        <span className="input-group-btn">
                            <Button variant='default' onClick={() => Decrement()} className="minus btn btn-white btn-number btn-icon br-7 br-te-0 br-be-0" > - </Button>
                        </span>
                        <span className="form-control text-center qty border br-0" >{num}</span>
                        <span className="input-group-btn">
                            <Button variant='default' onClick={() => Increment()} className="quantity-right-plus btn btn-white btn-number btn-icon br-7 add br-ts-0 br-bs-0"> +</Button>
                        </span>
                    </InputGroup>
                </div>
            </Col>
        </Row>
                    <hr />
                    <div className="btn-list mt-4">
                      <Link to={`${import.meta.env.BASE_URL}ecommerce/shoppingcart/`}  onClick={() => { AddToCart(id) }} className="btn ripple btn-primary me-2"><i className="fe fe-shopping-cart"> </i> Add to cart</Link>
                      <Link to={`${import.meta.env.BASE_URL}ecommerce/checkout/`} onClick={() => { AddToCart(id) }}  className="btn ripple btn-secondary"><i className="fe fe-credit-card"> </i> Buy Now</Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={12} md={12}>
          <Card className="productdesc">
            <Card.Body>
              <div className="panel panel-primary">
                <div className="panel-body tabs-menu-body description">
                  <div className="tab-content">

                    <Tabs defaultActiveKey="Specifications" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="Specifications" title="Specifications" >

                        <h4 className="mb-5 mt-3 fw-bold">Description :</h4>
                        <p className="mb-3 fs-15">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        <p className="mb-3 fs-15">odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.
                        </p>
                        <h4 className="mb-5 mt-3 fw-bold">Specifications :</h4>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                                <td className="fw-bold">Package Dimensions</td>
                                <td> 33 x 22 x 3 cm; 450 Grams</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Manufacturer</td>
                                <td>Chokka Production</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Item part number </td>
                                <td>BNVRDMRHENFULL-Z14</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Best Sellers Rank</td>
                                <td> #141 in Clothing & Accessories (See Top 100 in Clothing & Accessories)</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Customer Reviews</td>
                                <td>
                                  <p className="text-muted float-start">
                                    <span className="fa fa-star text-warning me-1"></span>
                                    <span className="fa fa-star text-warning me-1"></span>
                                    <span className="fa fa-star text-warning me-1"></span>
                                    <span className="fa fa-star-half-o text-warning me-1"></span>
                                    <span className="fa fa-star-o text-warning me-3"></span>
                                    <span className="text-success fw-semibold ">(2,076 ratings)</span>
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </Tab>
                      <Tab className='tab-pane pt-5' eventKey="Dimensions" title="Dimensions">

                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                                <td className="fw-bold">Width</td>
                                <td> 6.1 inch</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Height</td>
                                <td>24 inch</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Depth</td>
                                <td>6.1 inch</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Other Dimensions</td>
                                <td>15.5*15.5*24CM</td>
                              </tr></tbody>
                          </table>
                        </div>

                      </Tab>
                      <Tab eventKey="Features" title="Features">

                        <ul className="p-5">
                          <li><i className="fa fa-check me-3 text-success mb-5"></i>Asthetic Product - more lively movies and music</li>
                          <li><i className="fa fa-check me-3 text-success mb-5"></i>Long lasting 7,040 mAH battery with fast adaptive charging</li>
                          <li><i className="fa fa-check me-3 text-success mb-5"></i>8 MP Primary Camera, 5 MP Front Facing Camera</li>
                          <li><i className="fa fa-check me-3 text-success mb-5"></i>Seamless apps and gaming experience with Qualcomm Snapdragon 662 import.metaor (4BASEHz+4X1.8 GHz)</li>
                          <li><i className="fa fa-check me-3 text-success mb-5"></i>1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories</li>
                          <li><i className="fa fa-check me-3 text-success"></i>Customer care :1234 567 678</li>
                        </ul>

                      </Tab>
                    </Tabs>

                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Customer Services</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xl={4}>
                  <div className="customer-services mb-2">
                    <div className="icon-content">
                      <span><i className="bi bi-truck"></i></span>
                      <h4>Delivery Info</h4>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                  </div>
                </Col>
                <Col xl={4}>
                  <div className="customer-services mb-2">
                    <div className="icon-content">
                      <span><i className="bi bi-arrow-repeat"></i></span>
                      <h4>30 days returns</h4>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                  </div>
                </Col>
                <Col xl={4}>
                  <div className="customer-services">
                    <div className="icon-content">
                      <span><i className="bi bi-credit-card-2-front"></i></span>
                      <h4>15 years Warranty</h4>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Reviews</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="media mb-5">
                <div className="me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={Imagesdata("users5")} /> </Link>
                </div>
                <div className="media-body">
                  <h5 className="mt-0 mb-0">Gavin Murray</h5>
                  <div className="text-warning mb-0">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <p className="font-13 text-muted">Good Looking.........</p>
                  <Link className="like" to="#">
                    <Badge bg="danger-light" className="btn-danger-light rounded-pill py-2 px-3 me-2">
                      <i className="fe fe-heart me-1"></i>56</Badge>
                  </Link>
                  <span className="reply" id="6">
                    <Link to="#"><Badge bg="btn-primary-light" className="btn-primary-light rounded-pill py-2 px-3"><i className="fe fe-corner-up-left me-1"></i>Reply</Badge></Link>
                  </span>
                </div>
              </div>
              <div className="media mb-5">
                <div className=" me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={Imagesdata("users15")} /> </Link>
                </div>
                <div className="media-body">
                  <h5 className="mt-0 mb-0">Paul Smith</h5>
                  <div className="text-warning mb-0">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <p className="font-13 text-muted">Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the </p>
                  <Link className="like" to="#">
                    <Badge bg="btn-danger-light" className="btn-danger-light rounded-pill py-2 px-3 me-2">
                      <i className="fe fe-heart me-1"></i>56</Badge>
                  </Link>
                  <span className="reply" id="6">
                    <Link to="#"><Badge bg="btn-primary-light" className="btn-primary-light rounded-pill py-2 px-3"><i className="fe fe-corner-up-left me-1"></i>Reply</Badge></Link>
                  </span>
                </div>
              </div>
              <div className="media mb-0">
                <div className=" me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={Imagesdata("users5")} /> </Link>
                </div>
                <div className="media-body">
                  <h5 className="mt-0 mb-0">Mozelle Belt</h5>
                  <div className="text-warning mb-0">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Add Review</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form className="form-horizontal  m-t-20">
                <Form.Group className='mb-3'>
                  <Col xs={12}>
                    <Form.Control type="text" required placeholder="Username*" />
                  </Col>
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Col xs={12}>
                    <Form.Control type="email" required placeholder="Email*" />
                  </Col>
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Col xs={12}>
                    <textarea className="form-control" rows={5} defaultValue="Your Review*"></textarea>
                  </Col>
                </Form.Group>
                <div className="ms-3">
                  <Link to="#" className="btn btn-primary btn-rounded waves-effect waves-light">Submit</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <h3 className="p-3 mb-5">Related Products</h3>

        {allData.map((idx : any) => (
          <Col md={6} xl={3} key={Math.random()}>
            <Card>
              <div className="product-grid6">
                <div className="product-image6 p-5">
                  <ul className="icons">
                    <li>
                      <Link to={`${import.meta.env.BASE_URL}ecommerce/shoppingcart/`} className="btn bg-primary text-white border-primary border"> <i className="fe fe-eye ">  </i> </Link>
                    </li>
                    <li><Link to={`${import.meta.env.BASE_URL}ecommerce/addproduct/`} className="btn bg-success text-white border-success border"><i className="fe fe-edit"></i></Link></li>
                    <li><Link to="#" className="btn bg-danger text-white border-danger border" onClick={() => handleRemove(idx.id)}><i className="fe fe-x"></i></Link></li>
                  </ul>
                  <Link to={`${import.meta.env.BASE_URL}ecommerce/productdetails/${idx.id}`} className="bg-light">
                    <img className="img-fluid br-7 w-100" src={idx.pic} alt="img" />
                  </Link>
                </div>
                <Card.Body className="pt-0">
                  <div className="product-content text-center">
                    <h1 className="title fw-bold fs-20"><Link to={`${import.meta.env.BASE_URL}ecommerce/productdetails/${idx.id}`}>{idx.heading}</Link></h1>
                    <div className="mb-2 text-warning">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star-half-o text-warning"></i>
                      <i className="fa fa-star-o text-warning"></i>
                    </div>
                    <div className="price">{idx.price1}<span className="ms-4">{idx.price2}</span>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Link to={`${import.meta.env.BASE_URL}ecommerce/shoppingcart/`} onClick={() => { AddToCart(idx.id) }}><button type="button" className="btn btn-primary mb-1 ms-3"><i className="fe fe-shopping-cart me-2"></i>Add to cart</button></Link>
                  <Link to={`${import.meta.env.BASE_URL}ecommerce/wishlist/`}><button type="button" className="btn btn-outline-primary mb-1 ms-3"><i className="fe fe-heart me-2"></i>Add to wishlist</button></Link>
                </Card.Footer>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
};

const mapStateToProps = (state : any) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps, { AddToCart })(ProductDetails);



