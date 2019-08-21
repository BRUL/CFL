import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import './CarouselImage.scss';

class CarouselImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imageName, alt } = this.props;

    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageName}
          alt={alt}
        />
      </Carousel.Item>
    );
  }
}

export default CarouselImage;
