import React, { Component } from 'react';
import logo from './logo.jpg';
import logoS from './logo-s.png';
import showbeeld1 from './showbeeld-preview-1.jpg';
import showbeeld2 from './showbeeld-preview-2.jpg';
import showbeeld3 from './showbeeld-preview-3.jpg';

import kasten1 from './kasten-preview-1.jpg';
import kasten2 from './kasten-preview-2.jpg';
import kasten3 from './kasten-preview-3.jpg';
import kasten4 from './kasten-preview-4.jpg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container-flex">

        <div className="header row align-items-center mb-5">

          <div className="col-md-3 offset-md-1 logo ">
            <img src={logo} alt="logo" />
          </div>

          <div className="col-md-7">
            <h1>Zitmeubelen voor het leven</h1>
            <p className="lead">Comfort For Life is reeds meer dan 10&nbsp;jaar gespecialiseerd in salons en zitmeubelen van uitzonderlijke kwaliteit.</p>
            <p className="lead"><a href="#contact" className="text-muted">Contacteer ons.</a></p>
          </div>

        </div>

        <div className="showbeelden">

          <div className="row align-items-center mb-5">
            <div className="col-md-7 order-md-2 beeld">
              <img src={showbeeld1} className="w-100" alt="" />
            </div>
            <div className="col-md-4 offset-md-1 text-right-md my-3">
              <h2 className="box">Stijlvol leder</h2>
              <p className="lead">A a parturient a dictum ligula a porta suspendisse molestie purus libero.</p>
            </div>
          </div>

          <div className="row bg-dark text-white align-items-center mb-5">
            <div className="col-md-7 beeld order-md-1">
              <img src={showbeeld2} className="w-100" alt="" />
            </div>
            <div className="col-md-4 order-md-2 text-left my-3">
              <h2 className="box box-white">Ergonomie op maat</h2>
              <p className="lead">Parturient eleifend eget ac eu a vestibulum tristique consectetur feugiat id scelerisque cum enim.</p>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-7 order-md-2 beeld">
              <img src={showbeeld3} className="w-100" alt="" />
            </div>
            <div className="col-md-4 offset-md-1 text-right-md my-3">
              <h2 className="box">Kwaliteit voorop</h2>
              <p className="lead">Parturient sit venenatis a pretium duis commodo vestibulum eu nibh fringilla mi consectetur in urna ante maecenas a dictum.</p>
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
          <div className="my-3">
            <h2>Aandacht voor het geheel</h2>
            <p className="lead">Parturient sit venenatis a pretium duis commodo vestibulum eu nibh fringilla mi consectetur in urna ante maecenas a dictum.</p>
          </div>
        </div>

        <a name="contact"></a>

        <footer className="container py-5" itemscope itemtype="http://schema.org/LocalBusiness">
          <div className="row">
            <div className="col-12 col-md">
              <img src={logoS} className="icon" alt="" />
              <small className="d-block mb-3 text-muted">© 2007-2019</small>
            </div>
            <div className="col col-md">
              <h5>Bedrijf</h5>
              <ul className="list-unstyled text-small text-muted">
                <li itemprop="name">Comfort For Life bvba</li>
                <li>BE 0889.754.274</li>
              </ul>
            </div>
            <div className="col col-md">
              <h5>Hoofdzetel</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" itemprop="telephone" href="tel:+32 57 40 14 00">+32 57 40 14 00</a></li>
                <li><a className="text-muted" itemprop="email" href="mailto:info@comfortforlife.be">info@comfortforlife.be</a></li>
                <li><a className="text-muted" itemprop="address" href="https://goo.gl/maps/X7qnjzWCrYDdjNrj8">Izegrimstraat 1, 8900 Ieper</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
