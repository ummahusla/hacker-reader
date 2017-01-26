import React from 'react';
import ReactDOM from 'react-dom';
import StoryComment from './StoryComment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoryComment />, div);
});
