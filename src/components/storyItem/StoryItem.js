import React, { Component }  from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';
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
    const time = new Date(storyItem.time * 1000);

    return (
      <div>
        <ul>
          <li>
            <strong>{storyItem.score}</strong> <Button href={storyItem.url} bsStyle="link">{storyItem.title}</Button> by {storyItem.by} {moment(time).fromNow()} {storyItem.kids > 1 ? storyItem.kids + "comments" : storyItem.kids + "comment" }
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
