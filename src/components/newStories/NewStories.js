import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Story from '../story/Story';
import './NewStories.css';

import * as api from '../../helpers/api';

class NewStories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newStoryIds: []
    };
  }

  loadNewStoriesIds() {
    api.getNewStories()
      .then((response) => {
        if(response.data) {
         this.setState({ newStoryIds: response.data });
        }
    });
  }

  componentDidMount() {
    this.loadNewStoriesIds();
  }

  render() {
    return (
      <div>
          <Navigation />
          <Story storyTitle="New Stories" storyList={this.state.newStoryIds} />
      </div>
    );
  }
}

NewStories.propTypes = {
  newStoryIds: React.PropTypes.array
};

export default NewStories;
