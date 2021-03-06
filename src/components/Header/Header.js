import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './Header.scss';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage'

class Header extends Component {
  render() {
    return (

      <div className="header row align-items-center mb-5" id="welkom">

        <div className="col-md-3 offset-md-1 logo ">
          <ResponsiveImage projectName="logo" imageName="logo" alt="Comfort For Life logo" title="" />
        </div>

        <div className="col-md-7">
          <h1>Zitmeubelen voor het leven</h1>
          <p className="lead">Comfort For Life is reeds jarenlang gespecialiseerd in salons en zitmeubelen van uitzonderlijke kwaliteit.</p>
          <div className="lead navigation mx-3">

            <NavLink smooth to="#contact" className="text-muted link" activeClassName="active">Contacteer ons</NavLink>

            <span>, </span>

            <NavLink smooth to="/waarden" className="text-muted link" activeClassName="active">ontdek onze troeven</NavLink>

            <span> of </span>

            <NavLink smooth to="/catalogus" className="text-muted link" activeClassName="active">bekijk onze modellen</NavLink>

            .
          </div>
        </div>

      </div>

    );
  }
}

export default Header;
