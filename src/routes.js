import React from 'react';
import { Router, Route } from 'react-router';
import TopStories from './components/topStories/TopStories';
import NewStories from './components/newStories/NewStories';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={TopStories} />
    <Route path="/top" component={TopStories} />
    <Route path="/new" component={NewStories} />
  </Router>
);

export default Routes;
