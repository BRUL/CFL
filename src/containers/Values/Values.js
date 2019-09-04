import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import scrollToComponent from 'react-scroll-to-component';


import './Values.scss';

class Values extends Component {

  componentDidMount() {
    scrollToComponent(this.Container, { offset: 0, align: 'top'});
  }

  render() {
    return (
      <div className="values" id="waarden" ref={(div) => { this.Container = div; }}>
        <div className="showbeelden">

          <div className="row align-items-center mb-5">

            <div className="col-md-4 offset-md-1 text-right-md my-3">

              <h2 className="box">Stijlvol leder</h2>
              <p className="lead">Van de stoerste stieren-nerven tot de soepelste kalfshuiden, natuurlijk leder zorgt voor de ultieme tactiele ervaring en een klassevolle uitstraling.</p>

            </div>

            <div className="col-md-7 order-md-2 beeld">
              <Carousel interval={30000}>

                <Carousel.Item>
                  <ResponsiveImage projectName="waarden" imageName="leder-detail-bediening" alt="leder detail bediening" title="" />
                </Carousel.Item>

                <Carousel.Item>
                  <ResponsiveImage projectName="waarden" imageName="leder-italiaans-model" alt="leder Italiaans model" title="" />
                </Carousel.Item>

                <Carousel.Item>
                  <ResponsiveImage projectName="waarden" imageName="leder-duits-model" alt="leder Duits model" title="" />
                </Carousel.Item>

              </Carousel>
            </div>

          </div>

          <div className="row bg-dark text-white align-items-center mb-5">

            <div className="col-md-4 order-md-2 text-left my-3">

              <h2 className="box box-white">Ergonomie op maat</h2>
              <p className="lead">Omdat comfort bij ons voorop staat, hebben wij bijzondere aandacht voor de menselijke maat. Aanpasbaarheid, flexibiliteit en maatwerk.</p>

            </div>

            <div className="col-md-7 beeld order-md-1">
              <Carousel interval={30000}>

                <Carousel.Item>
                  <ResponsiveImage projectName="waarden" imageName="ergonomie-relax" alt="ergonomie relax" title="" />
                </Carousel.Item>

                <Carousel.Item>
                  <ResponsiveImage projectName="waarden" imageName="ergonomie-hoofdsteunen" alt="ergonomie hoofdsteunen" title="" />
                </Carousel.Item>

                <Carousel.Item>
                  <ResponsiveImage projectName="waarden" imageName="ergonomie-rugleuning" alt="ergonomie rugleuning" title="" />
                </Carousel.Item>

                <Carousel.Item>
                  <ResponsiveImage projectName="waarden" imageName="ergonomie-relax-functie" alt="ergonomie relax-functie" title="" />
                </Carousel.Item>

              </Carousel>
            </div>

          </div>

          <div className="row align-items-center mb-5">

              <div className="col-md-4 offset-md-1 text-right-md my-3">

                <h2 className="box">Kwaliteit voorop</h2>
                <p className="lead">Een doorgedreven kennis van materialen en een passie voor vakmanschap garanderen je meubelen die met trots de jaren doorstaan.</p>

              </div>


              <div className="col-md-7 order-md-2 beeld">
                <Carousel interval={30000}>

                  <Carousel.Item>
                    <ResponsiveImage projectName="waarden" imageName="kwaliteit-handen" alt="kwaliteit handen" title="" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <ResponsiveImage projectName="waarden" imageName="kwaliteit-label" alt="kwaliteit label" title="" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <ResponsiveImage projectName="waarden" imageName="kwaliteit-materiaal" alt="kwaliteit materiaal" title="" />
                  </Carousel.Item>

                </Carousel>
              </div>

          </div>

        </div>

        <div className="kasten bg-light py-4">
          <div className="row beelden no-gutters">
            <ResponsiveImage className="col-6 col-md" projectName="interieur" imageName="kast-dressoir" alt="kast dressoir" title="" />
            <ResponsiveImage className="col-6 col-md" projectName="interieur" imageName="kast-boeken" alt="kast boeken" title="" />
            <ResponsiveImage className="col-6 col-md" projectName="interieur" imageName="bijzettafel" alt="bijzettafel" title="" />
            <ResponsiveImage className="col-6 col-md" projectName="interieur" imageName="bureau" alt="bureau" title="" />
          </div>
          <div className="row my-3 col-md-10 offset-md-1">
            <h2>Aandacht voor het geheel</h2>
            <p className="lead">Het interieur eindigt niet bij je salontafel. Wij bieden de nodige collecties aan om elke ruimte in de woning zorgvuldig op elkaar af te stemmen. Van unieke decoratiestukken tot de perfecte maatkasten.</p>
          </div>
        </div>

        </div>
    );
  }
}

export default Values;
