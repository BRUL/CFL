import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import './App.scss';

import Header from '../../components/Header/Header';
import Contact from '../../components/Contact/Contact';
import Values from '../Values/Values';
import Gallery from '../Gallery/Gallery';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-147105378-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <Router>

    <div className="container-flex" id="welkom">

      <Header />

      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route exact path='/waarden' component={Values} />
            <Route exact path='/catalogus' component={Gallery} />
          </Switch>
        )}
      />

      <Contact />

    </div>

  </Router>
)

export default App;
