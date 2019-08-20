import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import Info from '../Info/Info';
import Gallery from '../Gallery/Gallery';

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <Switch location={location}>
          <Route exact path='/' component={Info} />
          <Route exact path='/catalogus' component={Gallery} />
        </Switch>
      )}
    />
  </Router>
)

export default App;
