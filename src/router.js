import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReduxApp from './simple/redux/ReduxApp';
import StatesApp from './simple/states/StatesApp';

const FirstLevelHeading = () => (
  <div>
    <h1>Golden Acorn is life 🌰</h1>
  </div>
);

const OperateReduxApp = () => (
  <div>
    <h1>Golden Acorn Application with redux 🌰</h1>
    <ReduxApp />
  </div>
);

const OperateStatesApp = () => (
  <div>
    <h1>Golden Acorn Application with state 🌰</h1>
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
