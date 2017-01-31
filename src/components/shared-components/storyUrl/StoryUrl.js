import React from 'react';
import { Button } from 'react-bootstrap';
import './StoryUrl.css';

const StoryUrl = (props) => {
  return (
    <Button href={props.url} bsStyle="link">{props.title}</Button>
  );
};

StoryUrl.propTypes = {
  title: React.PropTypes.string,
  url: React.PropTypes.string
};

export default StoryUrl;
