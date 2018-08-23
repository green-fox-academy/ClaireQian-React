import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReduxApp from './simple/redux/ReduxApp';
import StatesApp from './simple/states/StatesApp';

const FirstLevelHeading = () => (
  <div>
    <span role="img" aria-label="lol">Golden Acorn is life 🌰</span>
  </div>
);

const OperateReduxApp = () => (
  <div>
    <span role="img" aria-label="lol">Golden Acorn Application with redux 🌰</span>
    <ReduxApp />
  </div>
);

const OperateStatesApp = () => (
  <div>
    <span role="img" aria-label="lol">Golden Acorn Application with state 🌰</span>
    <StatesApp />
  </div>
);

const App = () => (
  <Router>
    <div>
      <Link to="/simple/states">with states</Link>
      <Link to="/simple/redux">with redux</Link>
      <Route exact path="/" component={FirstLevelHeading} />
      <Route path="/simple/states" component={OperateStatesApp} />
      <Route path="/simple/redux" component={OperateReduxApp} />
    </div>
  </Router>
);

export default App;
