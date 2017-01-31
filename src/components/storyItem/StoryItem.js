import React, { Component }  from 'react';
import CommentsLabel from '../shared-components/commentsLabel/CommentsLabel';
import ScoreLabel from '../shared-components/scoreLabel/ScoreLabel';
import AuthorLabel from '../shared-components/authorLabel/AuthorLabel';
import DateLabel from '../shared-components/dateLabel/DateLabel';
import StoryUrl from '../shared-components/storyUrl/StoryUrl';
import './StoryItem.css';

import * as api from '../../helpers/api';

class StoryItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storyItems: []
    };
  }

  loadStoryItems() {
    api.getStoryItem(this.props.storyId)
      .then((response) => {
        if(response.data) {
          this.setState({ storyItems: response.data });
        }
    });
  }

  componentDidMount() {
    this.loadStoryItems();
  }

  render() {

    const storyItem = this.state.storyItems;

    return (
      <div>
        <ul className="storyitem-list">
          <li>
            <ScoreLabel score={storyItem.score}/>
            <StoryUrl title={storyItem.title} url={storyItem.url}/>
            <AuthorLabel author={storyItem.by}/>
            <DateLabel date={storyItem.time}/>
            <CommentsLabel id={storyItem.id} comments={storyItem.kids}/>
          </li>
        </ul>
      </div>
    );

  }

}

StoryItem.propTypes = {
   storyId: React.PropTypes.number
};

export default StoryItem;
