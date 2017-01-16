import React from 'react';
import ReactDOM from 'react-dom';
import NewStories from './NewStories';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewStories />, div);
});
