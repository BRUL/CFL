import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import Info from '../Info/Info';

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <Switch location={location}>
          <Route exact path='/' component={Info} />
        </Switch>
      )}
    />
  </Router>
)

export default App;
