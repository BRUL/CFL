import React, { Component } from 'react';
import { NavHashLink as NavLink, HashLink as Link } from 'react-router-hash-link';

import './Info.scss';
import Gallery from '../../components/Gallery/Gallery'
import Values from '../../components/Values/Values'

/*
* images
*/
import logo from './logo.jpg';
import logoS from './cfl-logo-small-web.svg';



class Info extends Component {
  render() {
    return (
      <div className="container-flex" id="welkom">

        <div className="header row align-items-center mb-5">

          <div className="col-md-3 offset-md-1 logo ">
            <img src={logo} alt="logo" />
          </div>

          <div className="col-md-7">
            <h1>Zitmeubelen voor het leven</h1>
            <p className="lead">Comfort For Life is reeds jarenlang gespecialiseerd in salons en zitmeubelen van uitzonderlijke kwaliteit.</p>
            <p className="lead">
              <NavLink smooth to="#contact" className="text-muted link">Contacteer ons</NavLink>

              <span> of </span>

              <NavLink smooth to="#catalogus" className="text-muted link">bekijk onze modellen.</NavLink>
            </p>
          </div>

        </div>

        <Values />

        <footer id="contact" className="container py-5" itemScope itemType="http://schema.org/LocalBusiness">
          <div className="row">
            <div className="col-12 col-md offset-md-1">
              <Link smooth to="#welkom"><img src={logoS} className="icon" alt="" /></Link>
              <small className="d-block mb-3 text-muted">© 2007-2019</small>
            </div>
            <div className="col col-md">
              <h5>Bedrijf</h5>
              <ul className="list-unstyled text-small text-muted">
                <li itemProp="name">Comfort For Life bvba</li>
                <li>BE 0889.754.274</li>
              </ul>
            </div>
            <div className="col col-md">
              <h5>Hoofdzetel</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" itemProp="telephone" href="tel:+32 57 40 14 00">+32 57 40 14 00</a></li>
                <li><a className="text-muted" itemProp="email" href="mailto:info@comfortforlife.be">info@comfortforlife.be</a></li>
                <li><a className="text-muted" itemProp="address" href="https://goo.gl/maps/X7qnjzWCrYDdjNrj8">Izegrimstraat 1, 8900 Ieper</a></li>
              </ul>
            </div>
          </div>
        </footer>

        <Gallery />

      </div>
    );
  }
}

export default Info;
