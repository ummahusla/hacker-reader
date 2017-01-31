import React from 'react';
import ReactDOM from 'react-dom';
import StoryUrl from './StoryUrl';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoryUrl />, div);
});
