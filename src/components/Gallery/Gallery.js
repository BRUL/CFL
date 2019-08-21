import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Gallery.scss';

/*
* images
*/
import modelAruba1 from '../../img/modelAruba1.jpg';
import modelAruba2 from '../../img/modelAruba2.jpg';
import modelAruba3 from '../../img/modelAruba3.jpg';
import modelAruba4 from '../../img/modelAruba4.jpg';
import modelLausanne1 from '../../img/modelLausanne1.jpg';
import modelLausanne2 from '../../img/modelLausanne2.jpg';
import modelLissabon1 from '../../img/modelLissabon1.jpg';
import modelLissabon2 from '../../img/modelLissabon2.jpg';
import modelLissabon3 from '../../img/modelLissabon3.jpg';
import modelLissabon4 from '../../img/modelLissabon4.jpg';
import modelLissabon5 from '../../img/modelLissabon5.jpg';
import modelSevilla1 from '../../img/modelSevilla1.jpg';
import modelSevilla2 from '../../img/modelSevilla2.jpg';
import modelSevilla3 from '../../img/modelSevilla3.jpg';
import modelSevilla4 from '../../img/modelSevilla4.jpg';
import modelSevilla5 from '../../img/modelSevilla5.jpg';

class Gallery extends Component {
  render() {
    return (

      <div className="catalogus py-4" id="catalogus">
        <div className="row my-3">

          <div className="col-md-5 offset-md-1">
            <h2>Catalogus</h2>
            <p className="lead">Wij houden de vinger aan de pols met de laatste ontwikkelingen in de industrie. Met trots presenteren we onze bewezen modellen.</p>
          </div>
          <div className="col-md-5">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><a href="#aruba">Aruba</a></li>
              <li className="list-group-item"><a href="#lausanne">Lausanne</a></li>
              <li className="list-group-item"><a href="#lissabon">Lissabon</a></li>
              <li className="list-group-item"><a href="#sevilla">Sevilla</a></li>
            </ul>
          </div>
        </div>
        <div className="row modelRow my-3" id="aruba">
          <div className="col-md-3 offset-md-1">
            <h3>Aruba</h3>
            <p>Eventueel kan hier wat uitleg komen over dit model.</p>
          </div>
          <Carousel indicators={true} interval={60000} className="col-md-7">
            <Carousel.Item><img src={modelAruba1} alt="model Aruba beeld 1" /></Carousel.Item>
            <Carousel.Item><img src={modelAruba2} alt="model Aruba beeld 2"/></Carousel.Item>
            <Carousel.Item><img src={modelAruba3} alt="model Aruba beeld 3"/></Carousel.Item>
            <Carousel.Item><img src={modelAruba4} alt="model Aruba beeld 4"/></Carousel.Item>
          </Carousel>
        </div>
        <div className="row modelRow my-3" id="lausanne">
          <div className="col-md-3 offset-md-1">
            <h3>Lausanne</h3>
          </div>
          <Carousel indicators={true} interval={60000} className="col-md-7">
            <Carousel.Item><img src={modelLausanne1} alt="model Lausanne beeld 1"/></Carousel.Item>
            <Carousel.Item><img src={modelLausanne2} alt="model Lausanne beeld 2"/></Carousel.Item>
          </Carousel>
        </div>
        <div className="row modelRow my-3" id="lissabon">
          <div className="col-md-3 offset-md-1">
            <h3>Lissabon</h3>
          </div>
          <Carousel indicators={true} interval={60000} className="col-md-7">
            <Carousel.Item><img src={modelLissabon1} alt="model Lissabon beeld 1"/></Carousel.Item>
            <Carousel.Item><img src={modelLissabon2} alt="model Lissabon beeld 2"/></Carousel.Item>
            <Carousel.Item><img src={modelLissabon3} alt="model Lissabon beeld 3"/></Carousel.Item>
            <Carousel.Item><img src={modelLissabon4} alt="model Lissabon beeld 4"/></Carousel.Item>
            <Carousel.Item><img src={modelLissabon5} alt="model Lissabon beeld 5"/></Carousel.Item>
          </Carousel>
        </div>
        <div className="row modelRow my-3" id="sevilla">
          <div className="col-md-3 offset-md-1">
            <h3>Sevilla</h3>
          </div>
          <Carousel indicators={true} interval={60000} className="col-md-7">
            <Carousel.Item><img src={modelSevilla1} alt="model Sevilla beeld 1"/></Carousel.Item>
            <Carousel.Item><img src={modelSevilla2} alt="model Sevilla beeld 2"/></Carousel.Item>
            <Carousel.Item><img src={modelSevilla3} alt="model Sevilla beeld 3"/></Carousel.Item>
            <Carousel.Item><img src={modelSevilla4} alt="model Sevilla beeld 4"/></Carousel.Item>
            <Carousel.Item><img src={modelSevilla5} alt="model Sevilla beeld 5"/></Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Gallery;
