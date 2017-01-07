import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
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
    
    return (
      <div>
          <Navigation />
          <div className="container">
            <div className="row">
              <div className="col-12">
                { topStoryIds }
              </div>
            </div>
          </div>
      </div>
    );
  }
}

Feed.propTypes = {
  topStoryIds: React.PropTypes.array
};

export default Feed;
