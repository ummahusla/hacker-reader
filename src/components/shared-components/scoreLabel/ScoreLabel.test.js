import React from 'react';
import ReactDOM from 'react-dom';
import ScoreComponent from './ScoreComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScoreComponent />, div);
});
