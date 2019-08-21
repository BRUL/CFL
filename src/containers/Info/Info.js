import React, { Component } from 'react';
import { NavHashLink as NavLink, HashLink as Link } from 'react-router-hash-link';

import Carousel from 'react-bootstrap/Carousel'
import './Info.scss';
import Gallery from '../../components/Gallery/Gallery'

/*
* images
*/
import logo from './logo.jpg';
import logoS from './cfl-logo-small-web.svg';
import showbeeld1c from '../../img/Zaragoza.jpg';
import showbeeld1 from '../../img/MO320-large-detailbediening.jpg';
import showbeeld1b from '../../img/Gloria (8).jpg';
import showbeeld2c from '../../img/Contessa_Detail_4940.JPG';
import showbeeld2b from '../../img/showbeeld-preview-2c.jpg';
import showbeeld2 from '../../img/colorado-relux.jpg';
import showbeeld2d from '../../img/Moving 22074.jpg';
import showbeeld3 from '../../img/stock-handen.jpg';
import showbeeld3b from '../../img/stock-leer.jpg';
import showbeeld3c from '../../img/stock-label.jpg';

import kasten1 from '../../img/kasten-preview-1.jpg';
import kasten2 from '../../img/kasten-preview-2.jpg';
import kasten3 from '../../img/kasten-preview-3.jpg';
import kasten4 from '../../img/kasten-preview-4.jpg';


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

        <div className="showbeelden">

          <div className="row align-items-center mb-5">
            <div className="col-md-7 order-md-2 beeld">

              <Carousel indicators={false} interval={30000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={showbeeld1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={showbeeld1b}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={showbeeld1c}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>

            </div>
            <div className="col-md-4 offset-md-1 text-right-md my-3">
              <h2 className="box">Stijlvol leder</h2>
              <p className="lead">Van de stoerste stieren-nerven tot de soepelste kalfshuiden, natuurlijk leder zorgt voor de ultieme tactiele ervaring en een klassevolle uitstraling.</p>
            </div>
          </div>

          <div className="row bg-dark text-white align-items-center mb-5">
            <div className="col-md-7 beeld order-md-1">
              <Carousel indicators={false} interval={30000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={showbeeld2}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={showbeeld2b}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={showbeeld2c}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={showbeeld2d}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-4 order-md-2 text-left my-3">
              <h2 className="box box-white">Ergonomie op maat</h2>
              <p className="lead">Omdat comfort bij ons voorop staat, hebben wij bijzondere aandacht voor de menselijke maat. Aanpasbaarheid, flexibiliteit en maatwerk.</p>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-7 order-md-2 beeld">
              <Carousel indicators={false} interval={30000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={showbeeld3}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={showbeeld3b}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={showbeeld3c}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-4 offset-md-1 text-right-md my-3">
              <h2 className="box">Kwaliteit voorop</h2>
              <p className="lead">Een doorgedreven kennis van materialen en een passie voor vakmanschap garanderen je meubelen die met trots de jaren doorstaan.</p>
            </div>
          </div>

        </div>

        <div className="kasten bg-light py-4">
          <div className="row beelden no-gutters">
            <div className="col-6 col-md"><img src={kasten1} alt="" className="w-100" /></div>
            <div className="col-6 col-md"><img src={kasten2} alt="" className="w-100" /></div>
            <div className="col-6 col-md"><img src={kasten3} alt="" className="w-100" /></div>
            <div className="col-6 col-md"><img src={kasten4} alt="" className="w-100" /></div>
          </div>
          <div className="row my-3 col-md-10 offset-md-1">
            <h2>Aandacht voor het geheel</h2>
            <p className="lead">Het interieur eindigt niet bij je salontafel. Wij bieden de nodige collecties aan om elke ruimte in de woning zorgvuldig op elkaar af te stemmen. Van unieke decoratiestukken tot de perfecte maatkasten.</p>
          </div>
        </div>

        <footer id="contact" className="container py-5" itemScope itemType="http://schema.org/LocalBusiness">
          <div className="row">
            <div className="col-12 col-md">
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
