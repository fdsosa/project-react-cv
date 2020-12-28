import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home';
import GithubRepos from './components/github-repos';

const app = (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/github" component={GithubRepos} exact/>
    </Switch>
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
