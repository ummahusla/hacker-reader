import React, { Component }  from 'react';
import { Button, Label } from 'react-bootstrap';
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

    const CommentsLabel = (props) => {
      if (typeof props.comments !== 'undefined' && props.comments.length !== 1) {
        return <Label bsStyle="success">{props.comments.length} comments</Label>;
      } else if (typeof props.comments !== 'undefined' && props.comments.length === 1) {
        return <Label bsStyle="success">{props.comments.length} comment</Label>;
      } else {
        return <Label>No comments</Label>;
      }
    };

    return (
      <div>
        <ul className="storyitem-list">
          <li>
            <i className="fa fa-caret-square-o-up" aria-hidden="true"></i> {storyItem.score}<Button href={storyItem.url} bsStyle="link">{storyItem.title}</Button> <Label>{storyItem.by}</Label> <Label>{moment(time).fromNow()}</Label> <CommentsLabel comments={storyItem.kids}/>
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
