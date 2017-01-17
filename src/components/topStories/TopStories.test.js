import React from 'react';
import ReactDOM from 'react-dom';
import TopStories from './TopStories';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopStories />, div);
});
