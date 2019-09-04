import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Carousel from 'react-bootstrap/Carousel'
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage'

import './ModelCarousel.scss';

class ModelCarousel extends Component {

  render() {

    const { item } = this.props;
    const slides = item.pictures
    .map((picture, i) =>
      <Carousel.Item key={i}>
        <ResponsiveImage
                          projectName="catalogus"
                          imageName={picture.src}
                          alt={picture.alt}
                          title=""
        />
      </Carousel.Item>
    );

    return (
      <LazyLoad height="50vh" offset={100}>
        <Carousel indicators={true} interval={60000} className="col-md-7">
          {slides}
        </Carousel>
      </LazyLoad>
    );
  }

}

ModelCarousel.propTypes = {
  item: PropTypes.object.isRequired
};

export default ModelCarousel;
