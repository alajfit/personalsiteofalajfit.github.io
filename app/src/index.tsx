import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Blogs } from './pages/Blogs';
import { Blog } from './pages/_Blog';
import { Projects } from './pages/Projects';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blogs/:blogSha">
          <Blog />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
