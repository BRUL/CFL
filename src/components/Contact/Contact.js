import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Contact.scss';

/*
* images
*/
import logoS from './cfl-logo-small-web.svg';

class Contact extends Component {
  render() {
    return (

      <footer id="contact" className="row align-items-center Contact" itemScope itemType="http://schema.org/LocalBusiness">

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

      </footer>

    );
  }
}

export default Contact;
