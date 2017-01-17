import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Story from '../story/Story';
import './JobStories.css';

import * as api from '../../helpers/api';

class JobStories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topStoryIds: []
    };
  }

  loadJobStoriesIds() {
    api.getJobStories()
      .then((response) => {
        if(response.data) {
         this.setState({ topStoryIds: response.data });
        }
    });
  }

  componentDidMount() {
    this.loadJobStoriesIds();
  }

  render() {
    return (
      <div>
          <Navigation />
          <Story storyTitle="Jobs" storyList={this.state.topStoryIds} />
      </div>
    );
  }
}

JobStories.propTypes = {
  topStoryIds: React.PropTypes.array
};

export default JobStories;
