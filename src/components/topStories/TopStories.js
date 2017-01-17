import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Story from '../story/Story';
import './TopStories.css';

import * as api from '../../helpers/api';

class TopStories extends Component {

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
    return (
      <div>
          <Navigation />
          <Story storyTitle="Top Stories" storyList={this.state.topStoryIds} />
      </div>
    );
  }
}

TopStories.propTypes = {
  topStoryIds: React.PropTypes.array
};

export default TopStories;
