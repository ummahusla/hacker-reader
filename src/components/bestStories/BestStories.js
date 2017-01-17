import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Story from '../story/Story';
import './BestStories.css';

import * as api from '../../helpers/api';

class BestStories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topStoryIds: []
    };
  }

  loadBestStoriesIds() {
    api.getBestStories()
      .then((response) => {
        if(response.data) {
         this.setState({ topStoryIds: response.data });
        }
    });
  }

  componentDidMount() {
    this.loadBestStoriesIds();
  }

  render() {
    return (
      <div>
          <Navigation />
          <Story storyTitle="Best Stories" storyList={this.state.topStoryIds} />
      </div>
    );
  }
}

BestStories.propTypes = {
  topStoryIds: React.PropTypes.array
};

export default BestStories;
