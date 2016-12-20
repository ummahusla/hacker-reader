import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import './Feed.css';

import * as api from '../../helpers/api';

api.getTopStories()
  .then((response) => {
    if(response.data) {
       var topStoryIds = response.data;
       this.setState({ topStoryIds: topStoryIds });
    }
    console.log(response.data);
});

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topStoryIds: []
    };
  }

  render() {
    return (
      <div>

        <Navigation />

         <div>
           <pre>{this.state.topStoryIds}</pre>
         </div>

      </div>
    );
  }
}

export default Feed;
