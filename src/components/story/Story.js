import React from 'react';
import StoryItem from '../storyItem/StoryItem';
import './Story.css';

const Story = (props) => {

  const topStoryList = props.storyList.map((storyId) => {
    return (
      <StoryItem key={storyId} storyId={storyId}/>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <h1>{ props.storyTitle }</h1>
              {topStoryList}
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
