import React from 'react';
import ReactDOM from 'react-dom';
import CommentsLabel from './CommentsLabel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentsLabel />, div);
});
