import React from 'react';
import './ScoreLabel.css';

const ScoreLabel = (props) => {
  return (
      <span><i className="fa fa-caret-square-o-up" aria-hidden="true"></i> {props.score}</span>
  );
};

ScoreLabel.propTypes = {
  score: React.PropTypes.number
};

export default ScoreLabel;
