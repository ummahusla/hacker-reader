import React from 'react';
import { Label } from 'react-bootstrap';
import { Link } from 'react-router';
import './StoryItem.css';

const CommentsLabel = (props) => {
  if (typeof props.comments !== 'undefined' && props.comments.length !== 1) {
    return <Label bsStyle="success"><Link className="label-comments-link" to={`/story/${props.id}`}>{props.comments.length} comments</Link></Label>;
  } else if (typeof props.comments !== 'undefined' && props.comments.length === 1) {
    return <Label bsStyle="success"><Link className="label-comments-link" to={`/story/${props.id}`}>{props.comments.length} comment</Link></Label>;
  } else {
    return <Label>No comments</Label>;
  }
};

CommentsLabel.propTypes = {
  id: React.PropTypes.number,
  comments: React.PropTypes.array
};

export default CommentsLabel;
