import React from 'react';
import './Story.css';

const Story = (props) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div>
            <h1>{ props.storyTitle } </h1>
            <ul>
              { props.topStoryList }
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Story.propTypes = {
  storyTitle: React.PropTypes.string,
  topStoryList: React.PropTypes.array
};

export default Story;
