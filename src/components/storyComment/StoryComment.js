import React from 'react';
import './StoryComment.css';

const StoryComment = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <h1>{props.params.id}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StoryComment.propTypes = {
  id: React.PropTypes.string
};

export default StoryComment;
