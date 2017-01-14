import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Story from '../story/Story';
import './Feed.css';

import * as api from '../../helpers/api';

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topStoryIds: []
    };
  }

  loadTopStoriesIds() {
    api.getTopStories()
      .then((response) => {
        if(response.data) {
         this.setState({ topStoryIds: response.data });
        }
    });
  }

  componentDidMount() {
    this.loadTopStoriesIds();
  }

  render() {

    const topStoryIds = this.state.topStoryIds;

    // console.log(api.getStoryItem(13344477));

    return (
      <div>
          <Navigation />
          <Story storyTitle="Top Stories" storyList={topStoryIds} />
      </div>

    );
  }
}

Feed.propTypes = {
  topStoryIds: React.PropTypes.array
};

export default Feed;
