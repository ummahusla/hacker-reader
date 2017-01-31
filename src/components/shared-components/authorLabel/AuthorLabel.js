import React from 'react';
import { Label } from 'react-bootstrap';
import './AuthorLabel.css';

const AuthorLabel = (props) => {
  return (
    <Label>{props.author}</Label>
  );
};

AuthorLabel.propTypes = {
  author: React.PropTypes.string
};

export default AuthorLabel;
