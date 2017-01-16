import React from 'react';
import { Router, Route, Link, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import Feed from '/components/feed/Feed';
import NewStories from '/components/newstories/NewStories';

export default (
  <Router history={ browserHistory }>
    <Route path="/top" component={Feed}></Route>
    <Route path="/new" component={NewStories}></Route>
  </Router>
);
