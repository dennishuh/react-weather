import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Weather} />
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('root')
);
