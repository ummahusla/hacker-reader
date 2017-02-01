import React from 'react';
import { Label } from 'react-bootstrap';
import './ScoreLabel.css';

const ScoreLabel = (props) => {
  return (
      <Label><i className="fa fa-caret-square-o-up" aria-hidden="true"></i> {props.score}</Label>
  );
};

ScoreLabel.propTypes = {
  score: React.PropTypes.number
};

export default ScoreLabel;
