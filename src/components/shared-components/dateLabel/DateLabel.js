import React from 'react';
import { Label } from 'react-bootstrap';
import moment from 'moment';
import './DateLabel.css';

const DateLabel = (props) => {
  const dateTime = new Date(props.date * 1000);
  return (
    <Label>{moment(dateTime).fromNow()}</Label>
  );
};

DateLabel.propTypes = {
  date: React.PropTypes.date
};

export default DateLabel;
