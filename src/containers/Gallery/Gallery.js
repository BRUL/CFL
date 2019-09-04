import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import LazyLoad from 'react-lazyload';
import Carousel from 'react-bootstrap/Carousel'
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage'
import scrollToComponent from 'react-scroll-to-component';


import './Gallery.scss';

class Gallery extends Component {

  componentDidMount() {
    scrollToComponent(this.Container, { offset: 0, align: 'top'});
  }

  render() {
    return (

      <div className="catalogus py-4" id="catalogus" ref={(div) => { this.Container = div; }}>

        <div className="index row py-4">
          <div className="col-md-5 offset-md-1">
            <h2>Catalogus</h2>
            <p className="lead">Wij houden de vinger aan de pols met de laatste ontwikkelingen in de industrie. Met trots presenteren we onze bewezen modellen.</p>
          </div>
          <div className="col-md-5">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><Link smooth to="#aruba">Aruba</Link></li>
              <li className="list-group-item"><Link smooth to="#lausanne">Lausanne</Link></li>
              <li className="list-group-item"><Link smooth to="#lissabon">Lissabon</Link></li>
              <li className="list-group-item"><Link smooth to="#sevilla">Sevilla</Link></li>
            </ul>
          </div>
        </div>

        <div className="row modelRow align-items-center" id="aruba">
          <div className="col-md-3 offset-md-1">
            <h3>Aruba</h3>
          </div>
          <LazyLoad height="66vw" offset={100}>
            <Carousel indicators={true} interval={60000} className="col-md-7">
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Aruba1" alt="model Aruba beeld 1" title="" /></Carousel.Item>
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Aruba2" alt="model Aruba beeld 2" title="" /></Carousel.Item>
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Aruba3" alt="model Aruba beeld 3" title="" /></Carousel.Item>
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Aruba4" alt="model Aruba beeld 4" title="" /></Carousel.Item>
            </Carousel>
          </LazyLoad>
        </div>
        <div className="row modelRow align-items-center" id="lausanne">
          <div className="col-md-3 offset-md-1">
            <h3>Lausanne</h3>
          </div>
          <LazyLoad height="66vw" offset={100}>
            <Carousel indicators={true} interval={60000} className="col-md-7">
            <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Lausanne1" alt="model Lausanne beeld 1" title="" /></Carousel.Item>
            <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Lausanne2" alt="model Lausanne beeld 2" title="" /></Carousel.Item>
            </Carousel>
          </LazyLoad>
        </div>
        <div className="row modelRow align-items-center" id="lissabon">
          <div className="col-md-3 offset-md-1">
            <h3>Lissabon</h3>
          </div>
          <LazyLoad height="66vw" offset={100}>
            <Carousel indicators={true} interval={60000} className="col-md-7">
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Lissabon1" alt="model Lissabon beeld 1" title="" /></Carousel.Item>
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Lissabon2" alt="model Lissabon beeld 2" title="" /></Carousel.Item>
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Lissabon3" alt="model Lissabon beeld 3" title="" /></Carousel.Item>
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Lissabon4" alt="model Lissabon beeld 4" title="" /></Carousel.Item>
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Lissabon5" alt="model Lissabon beeld 5" title="" /></Carousel.Item>
            </Carousel>
          </LazyLoad>
        </div>
        <div className="row modelRow align-items-center" id="sevilla">
          <div className="col-md-3 offset-md-1">
            <h3>Sevilla</h3>
          </div>
          <LazyLoad height="66vw" offset={100}>
            <Carousel indicators={true} interval={60000} className="col-md-7">
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Sevilla1" alt="model Sevilla beeld 1" title="" /></Carousel.Item>
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Sevilla2" alt="model Sevilla beeld 2" title="" /></Carousel.Item>
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Sevilla3" alt="model Sevilla beeld 3" title="" /></Carousel.Item>
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Sevilla4" alt="model Sevilla beeld 4" title="" /></Carousel.Item>
              <Carousel.Item><ResponsiveImage projectName="catalogus" imageName="Sevilla5" alt="model Sevilla beeld 5" title="" /></Carousel.Item>
            </Carousel>
          </LazyLoad>
        </div>
      </div>

    );
  }
}

export default Gallery;
