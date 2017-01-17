import React from 'react';
import { Router, Route, Link, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import Feed from './components/feed/Feed';
import NewStories from './components/newStories/NewStories';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Feed} />
    <Route path="/top" component={Feed} />
    <Route path="/new" component={NewStories} />
  </Router>
);

export default Routes;
