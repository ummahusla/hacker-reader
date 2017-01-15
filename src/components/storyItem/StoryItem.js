import React from 'react';
import './StoryItem.css';

import * as api from '../../helpers/api';

const StoryItem = (props) => {

  let id, time, score, url, title, author;

  if(props.storyId !== "") {
    api.getStoryItem(props.storyId)
      .then((response) => {
        if(response.data) {
          id = response.data.id;
          time = response.data.time;
          score = response.data.score;
          url = response.data.url;
          title = response.data.title;
          author = response.data.by;
        }
    });
  }

  return (
    <div>
      <ul>
        <li>
          {props.storyId} {title}
        </li>
      </ul>
    </div>
  );

};

StoryItem.propTypes = {
   storyId: React.PropTypes.number,
};

export default StoryItem;
