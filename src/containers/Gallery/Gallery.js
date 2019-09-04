import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ModelCarousel from '../../components/ModelCarousel/ModelCarousel'
import scrollToComponent from 'react-scroll-to-component';
import './Gallery.scss';

import ProjectRepository from '../../repositories/project-repository';
const projectRepository = new ProjectRepository();

class Gallery extends Component {

  componentDidMount() {
    scrollToComponent(this.Container, { offset: 0, align: 'top'});
  }

  render() {
    return (

      <div className="catalogus py-4" id="catalogus" ref={(div) => { this.Container = div; }}>

        <div className="index row py-4">
          <div className="col-md-5 offset-md-1">
            <h2>Catalogus</h2>
            <p className="lead">Wij houden de vinger aan de pols met de laatste ontwikkelingen in de industrie. Met trots presenteren we onze bewezen modellen.</p>
          </div>
          <div className="col-md-5">
            <ul className="list-group list-group-flush">
            {
              projectRepository
                .getAll()
                .map((item, index) =>
                  <li className="list-group-item" key={index}><Link smooth to={{
                                                                    pathname: "/catalogus",
                                                                    hash: item.name,
                                                                  }}>
                                                                  {item.name}</Link></li>
                )
            }
            </ul>
          </div>
        </div>

        {
          projectRepository
            .getAll()
            .map((item, index) =>
              <div className="row modelRow align-items-center" id={item.name} key={index}>
                <div className="col-md-3 offset-md-1">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <ModelCarousel item={item} />
              </div>
            )
        }

      </div>

    );
  }
}

export default Gallery;
