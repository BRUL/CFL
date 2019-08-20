import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import Carousel from 'react-bootstrap/Carousel'
import './Gallery.scss';

/*
* images
*/

class Gallery extends Component {
  render() {
    return (
      <div className="container-flex">

        <div className="header row align-items-center mb-5">

          <div className="col-md-3 offset-md-1 logo ">
          </div>

          <div className="col-md-7">
            <h1>Zitmeubelen voor het leven</h1>
            <p className="lead">Comfort For Life is reeds jarenlang gespecialiseerd in salons en zitmeubelen van uitzonderlijke kwaliteit.</p>
            <p className="lead"><NavLink to="/#contact" className="text-muted">Contacteer ons.</NavLink></p>
          </div>

        </div>

      </div>
    );
  }
}

export default Gallery;
