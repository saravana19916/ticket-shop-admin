import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import { Col, Row } from 'react-bootstrap';
import { Imagesdata } from './commonimages';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import  "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import media1 from '../assets/images/media/1.jpg';
import media2 from '../assets/images/media/2.jpg';
import media3 from '../assets/images/media/3.jpg';
import media4 from '../assets/images/media/4.jpg';
import media5 from '../assets/images/media/5.jpg';
import media6 from '../assets/images/media/6.jpg';
import media7 from '../assets/images/media/7.jpg';
import media8 from '../assets/images/media/8.jpg';
import media9 from '../assets/images/media/9.jpg';
import media10 from '../assets/images/media/10.jpg';
import media11 from '../assets/images/media/11.jpg';
import files01 from '../assets/images/media/files/01.jpg';
import files02 from '../assets/images/media/files/02.jpg';
import files03 from '../assets/images/media/files/03.jpg';
import files04 from '../assets/images/media/files/04.jpg';
import files05 from '../assets/images/media/files/05.jpg';
import files06 from '../assets/images/media/files/06.jpg';

   //*** SEARCH DATA ***//
export const LightboxGallery = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Row className="masonry">
        <Col xs={6} sm={4} md={3} className="brick mt-5 col-12">
          <img src={Imagesdata('media1')} alt='media1' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={3} className="brick mt-5 col-12">
          <img src={Imagesdata('media2')} alt='media2' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={3} className="brick mt-5 col-12">
          <img src={Imagesdata('media3')} alt='media3' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={3} className="brick mt-5 col-12">
          <img src={Imagesdata('media4')} alt='media4' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={3} className="brick mt-5 col-12">
          <img src={Imagesdata('media5')} alt='media5' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={3} className="brick mt-5 col-12">
          <img src={Imagesdata('media6')} alt='media6' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={3} className="brick mt-5 col-12">
          <img src={Imagesdata('media7')} alt='media7' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={3} className="brick mt-5 col-12">
          <img src={Imagesdata('media8')} alt='media8' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={3} className="brick mt-5 col-12">
          <img src={Imagesdata('media9')} alt='media9' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={3} className="brick mt-5 col-12">
          <img src={Imagesdata('media10')}  alt='media10' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={3} className="brick mt-5 col-12">
          <img src={Imagesdata('media11')}  alt='media11' onClick={() => setOpen(true)} />
        </Col>
      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      zoom={{
        maxZoomPixelRatio: 10,
        scrollToZoom: true
    }}
        slides={[{ src: media1 }, { src: media2 }, { src: media3 }, { src: media4 }, { src: media5 }, { src: media6 }, { src: media7 }, { src: media8 }, { src: media9 }, { src: media10 }, { src: media11 }]} />
    </div>
  )
};

//*** WIDGETS DATA ***//
export const LightboxGalleryWidgets = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Row className="masonry">
        <Col xl={4} lg={4} sm={6} className="brick mt-5 col-12">
          <img src={Imagesdata('media1')} alt='media1' onClick={() => setOpen(true)} />
        </Col>
        <Col xl={4} lg={4} sm={6} className="brick mt-5 col-12">
          <img src={Imagesdata('media2')} alt='media2' onClick={() => setOpen(true)} />
        </Col>
        <Col xl={4} lg={4} sm={6} className="brick mt-5 col-12">
          <img src={Imagesdata('media3')} alt='media3' onClick={() => setOpen(true)} />
        </Col>
        <Col xl={4} lg={4} sm={6} className="brick mt-5 col-12">
          <img src={Imagesdata('media4')} alt='media4' onClick={() => setOpen(true)} />
        </Col>
        <Col xl={4} lg={4} sm={6} className="brick mt-5 col-12">
          <img src={Imagesdata('media5')} alt='media5' onClick={() => setOpen(true)} />
        </Col>
        <Col xl={4} lg={4} sm={6} className="brick mt-5 col-12">
          <img src={Imagesdata('media6')} alt='media6' onClick={() => setOpen(true)} />
        </Col>
      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      zoom={{
        maxZoomPixelRatio: 10,
        scrollToZoom: true
    }}
        slides={[{ src: media1 }, { src: media2 }, { src: media3 }, { src: media4 }, { src: media5 }, { src: media6 }]} />
    </div>
  )
};

//*** CHAT DATA ***//

export const LightboxGalleryChat = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Row className="masonry">
        <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 mt-5 col-12">
          <img className='img-responsive br-5' src={Imagesdata('files01')} alt='files01' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 mt-5 col-12">
          <img className='img-responsive br-5' src={Imagesdata('files02')} alt='files02' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 mt-5 col-12">
          <img className='img-responsive br-5' src={Imagesdata('files03')} alt='files03' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 my-5 col-12">
          <img className='img-responsive br-5' src={Imagesdata('files04')} alt='files04' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 my-5 col-12">
          <img className='img-responsive br-5' src={Imagesdata('files05')} alt='files05' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 my-5 col-12">
          <img className='img-responsive br-5' src={Imagesdata('files06')} alt='files06' onClick={() => setOpen(true)} />
        </Col>

      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      zoom={{
        maxZoomPixelRatio: 10,
        scrollToZoom: true
    }}
        slides={[{ src: files01 }, { src: files02 }, { src: files03 }, { src: files04 }, { src: files05 }, { src: files06 }]} />
    </div>
  )
};
  //*** Galery Data ***//
  export const LightboxGallery1 = () => {

    const [open, setOpen] = useState(false);
  
    return (
      <div>
        <Row className="masonry">
          <Col xs={6} sm={4} md={4} xl={3} className="brick mt-1 col-12">
            <img src={Imagesdata('media1')} alt='media1' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={4} xl={3} className="brick mt-1 col-12">
            <img src={Imagesdata('media2')} alt='media2' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={4} xl={3} className="brick mt-1 col-12">
            <img src={Imagesdata('media3')} alt='media3' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={4} xl={3} className="brick mt-1 col-12">
            <img src={Imagesdata('media4')} alt='media4' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={4} className="brick mt-1 col-12">
            <img src={Imagesdata('media5')} alt='media5' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={4} className="brick mt-1 col-12">
            <img src={Imagesdata('media6')} alt='media6' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={4} className="brick mt-1 col-12">
            <img src={Imagesdata('media7')} alt='media7' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={3} className="brick mt-1 col-12">
            <img src={Imagesdata('media8')} alt='media8' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={3} className="brick mt-1 col-12">
            <img src={Imagesdata('media9')} alt='media9' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={3} className="brick mt-1 col-12">
            <img src={Imagesdata('media10')}  alt='media10' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={3} className="brick mt-1 col-12">
            <img src={Imagesdata('media11')}  alt='media11' onClick={() => setOpen(true)} />
          </Col>
        </Row>
  
        <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
      }}
          slides={[{ src: media1 }, { src: media2 }, { src: media3 }, { src: media4 }, { src: media5 }, { src: media6 }, { src: media7 }, { src: media8 }, { src: media9 }, { src: media10 }, { src: media11 }]} />
      </div>
    )
  };
