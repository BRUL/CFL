import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import ScrollTo from 'react-scroll-into-view'

import './Header.scss';

/*
* images
*/
import logo from './logo.jpg';

class Header extends Component {
  render() {
    return (

      <div className="header row align-items-center mb-5" id="welkom">

        <div className="col-md-3 offset-md-1 logo ">
          <img src={logo} alt="logo" />
        </div>

        <div className="col-md-7">
          <h1>Zitmeubelen voor het leven</h1>
          <p className="lead">Comfort For Life is reeds jarenlang gespecialiseerd in salons en zitmeubelen van uitzonderlijke kwaliteit.</p>
          <p className="lead navigation">

            <NavLink smooth to="#contact" className="text-muted link" activeClassName="active">Contacteer ons</NavLink>

            <span>, </span>

            <ScrollTo selector="#waarden" className="navLink">
              <NavLink smooth to="/waarden" className="text-muted link" activeClassName="active">ontdek onze troeven</NavLink>
            </ScrollTo>

            <span> of </span>

            <ScrollTo selector="#catalogus" className="navLink">
              <NavLink smooth to="/catalogus" className="text-muted link" activeClassName="active">bekijk onze modellen</NavLink>
            </ScrollTo>

            .
          </p>
        </div>

      </div>

    );
  }
}

export default Header;
