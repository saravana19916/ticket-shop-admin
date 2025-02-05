import { FC, Fragment, useState } from 'react';
import { Card, Row, Col, Form, Collapse, Carousel } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Imagesdata } from '../../../commondata/commonimages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface CarouselsProps { }

const Carousels: FC<CarouselsProps> = () => {
  const [Default, setDefault] = useState(false);
  const [Indicator, setIndicator] = useState(false);
  const [Arrow, setArrow] = useState(false);
  const [Bootstrap, setBootstrap] = useState(false);
  const [Top, setTop] = useState(false);
  const [TopRight, setTopRight] = useState(false);
  const [TopLeft, setTopLeft] = useState(false);
  const [BottomRight, setBottomRight] = useState(false);
  const [BottomLeft, setBottomLeft] = useState(false);
  const [BG, setBG] = useState(false);
  const [GradientBG, setGradientBG] = useState(false);

  //default carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
};
//Craousel with indicator
const settings1 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear"
}; 
//Carousel with controls
const settings2 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
//carousel with top indicator
const settings3 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
//Carousel with top-right indicator
const settings4 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
//Carousel with top left indicator
const settings5 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
//carousel with bottom right indicator
const settings6 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
//Carousel with bottom left
const settings7 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
  return (
  <Fragment>
    <PageHeader titles="Carousel" active="Carousel" items={['Advanced Elements']} /> 
    <Row>
      <Col lg={6} xl={4}>
        <Card>
          <Card.Header className="flex-wrap">
            <Card.Title as="h3">Default Carousel</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setDefault(!Default)} className="showcode d-flex ms-auto mx-2" />
              </Form>    
          </Card.Header>
          <Card.Body className="h-100">
          <Slider {...settings}>
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media19")}
													data-holder-rendered="true" />
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media20")}
													data-holder-rendered="true" />
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media21")}
													data-holder-rendered="true" />
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media22")}
													data-holder-rendered="true" />
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media23")}
													data-holder-rendered="true" />
        
        </Slider>
                              <Collapse in={Default} className="mt-2">
                <pre>
                  <code>
                    {`
        const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    }
   <Slider {...settings}>
   <img className="d-block w-100 br-5" alt=""
                   src={Imagesdata("media19")}
                   data-holder-rendered="true" />
   <img className="d-block w-100 br-5" alt=""
                   src={Imagesdata("media20")}
                   data-holder-rendered="true" />
   <img className="d-block w-100 br-5" alt=""
                   src={Imagesdata("media21")}
                   data-holder-rendered="true" />
   <img className="d-block w-100 br-5" alt=""
                   src={Imagesdata("media22")}
                   data-holder-rendered="true" />
   <img className="d-block w-100 br-5" alt=""
                   src={Imagesdata("media23")}
                   data-holder-rendered="true" />
 
 </Slider>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
      
        </Card>
      </Col>
      <Col lg={6} xl={4}>
        <Card>
          <Card.Header className="flex-wrap">
            <Card.Title as="h3">Carousel with indicators</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setIndicator(!Indicator)} className="showcode d-flex ms-auto mx-2" />
              </Form>    
          </Card.Header>
          <Card.Body className="h-100">
          <Slider {...settings1}>
         <img className="d-block w-100 br-5" alt="" src={Imagesdata("media24")}/>
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media25")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media1")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media2")}
													data-holder-rendered="true" />
        <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media3")}
													data-holder-rendered="true" />
          </Slider>
            
                          <Collapse in={Indicator} className="mt-2">
                <pre>
                  <code>
                    {`
                    const settings1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
                    }; 
     <Slider {...settings1}>
     <img className="d-block w-100 br-5" alt="" src={Imagesdata("media24")}/>
     <img className="d-block w-100 br-5" alt=""
                      src={Imagesdata("media25")}
                      data-holder-rendered="true" />
     <img className="d-block w-100 br-5" alt=""
                      src={Imagesdata("media1")}
                      data-holder-rendered="true" />
     <img className="d-block w-100 br-5" alt=""
                      src={Imagesdata("media2")}
                      data-holder-rendered="true" />
    <img className="d-block w-100 br-5" alt=""
                      src={Imagesdata("media3")}
                      data-holder-rendered="true" />
      </Slider>
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4}>
        <Card>
          <Card.Header className="flex-wrap">
            <Card.Title as="h3">Carousel with controls</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setArrow(!Arrow)} className="showcode d-flex ms-auto mx-2" />
              </Form>    
          </Card.Header>
          <Card.Body className="h-100">
          <Slider {...settings2}>
         <img className="d-block w-100 br-5" alt="" src={Imagesdata("media4")}/>
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media5")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media6")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media7")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media8")}
													data-holder-rendered="true" />
          </Slider>
                          <Collapse in={Arrow} className="mt-2">
                <pre>
                  <code>
                    {`
const settings2 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
<Slider {...settings2}>
<img className="d-block w-100 br-5" alt="" src={Imagesdata("media4")}/>
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media5")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media6")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media7")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media8")}
                 data-holder-rendered="true" />
 </Slider>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4}>
        <Card>
          <Card.Header className="flex-wrap">
            <Card.Title as="h3">Carousel with captions</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBootstrap(!Bootstrap)} className="showcode d-flex ms-auto mx-2" />
              </Form>    
          </Card.Header>
          <Card.Body className="h-100">
          <Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 br-5 active"
            src={Imagesdata("media9")}
            alt="First slide"
        />
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>Secure other greater pleasures</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 br-5"
            src={Imagesdata("media10")}
            alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>Secure other greater pleasures</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 br-5"
            src={Imagesdata("media11")}
            alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>Secure other greater pleasures</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 br-5"
            src={Imagesdata("media12")}
            alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>Secure other greater pleasures</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 br-5"
            src={Imagesdata("media13")}
            alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>Secure other greater pleasures</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
                          <Collapse in={Bootstrap} className="mt-2">
                <pre>
                  <code>
                    {`
 export function CarouselwithCaption() {

  return (
<Carousel>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 br-5 active"
          src={Imagesdata("../../assets/images/media/9.jpg")}
          alt="First slide"
      />
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>Secure other greater pleasures</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 br-5"
          src={Imagesdata("../../assets/images/media/10.jpg")}
          alt="Second slide"
      />

      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>Secure other greater pleasures</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 br-5"
          src={Imagesdata("../../assets/images/media/11.jpg")}
          alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>Secure other greater pleasures</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 br-5"
          src={Imagesdata("../../assets/images/media/12.jpg")}
          alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>Secure other greater pleasures</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 br-5"
          src={Imagesdata("../../assets/images/media/13.jpg")}
          alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>Secure other greater pleasures</p>
      </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4}>
        <Card>
          <Card.Header className="flex-wrap">
            <Card.Title as="h3">Carousel with top indicators</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setTop(!Top)} className="showcode d-flex ms-auto mx-2" />
              </Form>    
          </Card.Header>
          <Card.Body className="h-100">
            <div id="carousel-indicators1" className="carousel slide" data-bs-ride="carousel">
            <Slider {...settings3}>
         <img className="d-block w-100 br-5" alt="" src={Imagesdata("media14")}/>
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media15")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media16")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media17")}
													data-holder-rendered="true" />
        <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media18")}
													data-holder-rendered="true" />
          </Slider>
            </div>
                          <Collapse in={Top} className="mt-2">
                <pre>
                  <code>
                    {`
const settings3 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
<Slider {...settings3}>
<img className="d-block w-100 br-5" alt="" src={Imagesdata("media14")}/>
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media15")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media16")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media17")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media18")}
                 data-holder-rendered="true" />
 </Slider>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4}>
        <Card>
          <Card.Header className="flex-wrap">
            <Card.Title as="h3">Carousel with top-right indicators</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setTopRight(!TopRight)} className="showcode d-flex ms-auto mx-2" />
              </Form>    
          </Card.Header>
          <Card.Body className="h-100">
            <div id="carousel-indicators2" className="carousel slide" data-bs-ride="carousel">
            <Slider {...settings4}>
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media19")}
													data-holder-rendered="true" />
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media20")}
													data-holder-rendered="true" />
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media21")}
													data-holder-rendered="true" />
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media22")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media23")}
													data-holder-rendered="true" />
          </Slider>
            </div>
                          <Collapse in={TopRight} className="mt-2">
                <pre>
                  <code>
                    {`
const settings4 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
<Slider {...settings4}>
<img className="d-block w-100 br-5" alt=""
                src={Imagesdata("media19")}
                data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                src={Imagesdata("media20")}
                data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                src={Imagesdata("media21")}
                data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                src={Imagesdata("media22")}
                data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                src={Imagesdata("media23")}
                data-holder-rendered="true" />
</Slider>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6} xl={4}>
        <Card>
          <Card.Header className="flex-wrap">
            <Card.Title as="h3">Carousel with top-left indicators</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setTopLeft(!TopLeft)} className="showcode d-flex ms-auto mx-2" />
              </Form>    
          </Card.Header>
          <Card.Body className="h-100">
            <div id="carousel-indicators3" className="carousel slide" data-bs-ride="carousel">
            <Slider {...settings5}>
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media24")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media25")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media1")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media2")}
													data-holder-rendered="true" />
        <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media3")}
													data-holder-rendered="true" />
          </Slider>
            </div>
                          <Collapse in={TopLeft} className="mt-2">
                <pre>
                  <code>
                    {`
const settings5 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
<Slider {...settings5}>
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media24")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media25")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media1")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media2")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media3")}
                 data-holder-rendered="true" />
 </Slider>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4}>
        <Card>
          <Card.Header className="flex-wrap">
            <Card.Title as="h3">Carousel with bottom-right indicators</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBottomRight(!BottomRight)} className="showcode d-flex ms-auto mx-2" />
              </Form>    
          </Card.Header>
          <Card.Body className="h-100">
            <div id="carousel-indicators4" className="carousel slide" data-bs-ride="carousel">
            <Slider {...settings6}>
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media4")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media5")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media6")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media7")}
													data-holder-rendered="true" />
        <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media8")}
													data-holder-rendered="true" />
          </Slider>
            </div>
                          <Collapse in={BottomRight} className="mt-2">
                <pre>
                  <code>
                    {`
const settings6 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
<Slider {...settings6}>
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media4")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media5")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media6")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media7")}
                 data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                 src={Imagesdata("media8")}
                 data-holder-rendered="true" />
 </Slider>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4}>
        <Card>
          <Card.Header className="flex-wrap">
            <Card.Title as="h3">Carousel with bottom-left indicators</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBottomLeft(!BottomLeft)} className="showcode d-flex ms-auto mx-2" />
              </Form>    
          </Card.Header>
          <Card.Body className="h-100">
            <div id="carousel-indicators5" className="carousel slide" data-bs-ride="carousel">
            <Slider {...settings7}>
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media9")}
													data-holder-rendered="true" />
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media10")}
													data-holder-rendered="true" />
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media11")}
													data-holder-rendered="true" />
          <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media12")}
													data-holder-rendered="true" />
         <img className="d-block w-100 br-5" alt=""
													src={Imagesdata("media13")}
													data-holder-rendered="true" />
          </Slider>
            </div>
                          <Collapse in={BottomLeft} className="mt-2">
                <pre>
                  <code>
                    {`
const settings7 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
<Slider {...settings7}>
<img className="d-block w-100 br-5" alt=""
                src={Imagesdata("media9")}
                data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                src={Imagesdata("media10")}
                data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                src={Imagesdata("media11")}
                data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                src={Imagesdata("media12")}
                data-holder-rendered="true" />
<img className="d-block w-100 br-5" alt=""
                src={Imagesdata("media13")}
                data-holder-rendered="true" />
</Slider>

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header className="flex-wrap">
            <Card.Title as="h3">Carousel with Background color captions</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBG(!BG)} className="showcode d-flex ms-auto mx-2" />
              </Form>    
          </Card.Header>
          <Card.Body className="h-100">
          <Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 br-5 active"
            src={Imagesdata("background1")}
            alt="First slide"
        />
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 br-5"
            src={Imagesdata("background2")}
            alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 br-5"
            src={Imagesdata("background3")}
            alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
                          <Collapse in={BG} className="mt-2">
                <pre>
                  <code>
                    {`
export function CarouselwithBackgroundColorCaption() {

  return (
<Carousel>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 br-5 active"
          src={Imagesdata("../../assets/images/media/red.jpg")}
          alt="First slide"
      />
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 br-5"
          src={Imagesdata("../../assets/images/media/blue.jpg")}
          alt="Second slide"
      />

      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 br-5"
          src={Imagesdata("../../assets/images/media/green.jpg")}
          alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header className="flex-wrap">
            <Card.Title as="h3">Carousel with GradientBackground caption</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setGradientBG(!GradientBG)} className="showcode d-flex ms-auto mx-2" />
              </Form>    
          </Card.Header>
          <Card.Body className="h-100">
          <Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 br-5 active"
            src={Imagesdata("background4")}
            alt="First slide"
        />
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 br-5"
            src={Imagesdata("background5")}
            alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 br-5"
            src={Imagesdata("background6")}
            alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
                          <Collapse in={GradientBG} className="mt-2">
                <pre>
                  <code>
                    {`
 export function CarouselwithGradientBackgroundCaption() {

  return (
<Carousel>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 br-5 active"
          src={Imagesdata("../../assets/images/media/gradient1.jpg")}
          alt="First slide"
      />
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 br-5"
          src={Imagesdata("../../assets/images/media/gradient2.jpg")}
          alt="Second slide"
      />

      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 br-5"
          src={Imagesdata("../../assets/images/media/gradient3.jpg")}
          alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </div>
    </Row>
  </Fragment>
)};

export default Carousels;
