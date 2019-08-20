import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import './CarouselImage.scss';

class CarouselImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imageName, alt, title } = this.props;

    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`./img/${imageName}`}
          alt={alt}
          title={title}
        />
      </Carousel.Item>
    );
  }
}

export default CarouselImage;
