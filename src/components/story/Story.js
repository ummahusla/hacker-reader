import React from 'react';
import './Story.css';

const Story = (props) => {
  
  const topStoryList = props.storyList.map((storyId) => {
    return (
      <li key={storyId}>{ storyId }</li>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <h1>{ props.storyTitle } </h1>
              <ul>
                { topStoryList ? topStoryList : "No stories found" }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Story.propTypes = {
  storyTitle: React.PropTypes.string,
  storyList: React.PropTypes.array
};

export default Story;
