import React from 'react';
import ReactDOM from 'react-dom';
import DateLabel from './DateLabel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateLabel />, div);
});
