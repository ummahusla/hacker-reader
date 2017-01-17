import React from 'react';
import { Router, Route } from 'react-router';
import TopStories from './components/topStories/TopStories';
import NewStories from './components/newStories/NewStories';
import BestStories from './components/bestStories/BestStories';
import JobStories from './components/jobStories/JobStories';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={TopStories} />
    <Route path="/top" component={TopStories} />
    <Route path="/new" component={NewStories} />
    <Route path="/best" component={BestStories} />
    <Route path="/jobs" component={JobStories} />
  </Router>
);

export default Routes;
