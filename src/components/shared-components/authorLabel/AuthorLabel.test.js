import React from 'react';
import ReactDOM from 'react-dom';
import AuthorLabel from './AuthorLabel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorLabel />, div);
});
