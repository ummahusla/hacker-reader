import React from 'react';
import ReactDOM from 'react-dom';
import BestStories from './BestStories';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BestStories />, div);
});
