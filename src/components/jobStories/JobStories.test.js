import React from 'react';
import ReactDOM from 'react-dom';
import JobStories from './JobStories';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobStories />, div);
});
