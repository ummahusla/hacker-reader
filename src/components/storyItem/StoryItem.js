import React, { Component }  from 'react';
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
          console.log(response.data);
          this.setState({ storyItems: response.data });
        }
    });
  }

  componentDidMount() {
    this.loadStoryItems();
  }

  render() {

    const storyItems = this.state.storyItems.map((item) => {
      return (
        <div>
          { item.title }
        </div>
      );
    });

    console.log(storyItems);

    return (
      <div>
        <ul>
          <li>
            { this.props.storyId }
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
