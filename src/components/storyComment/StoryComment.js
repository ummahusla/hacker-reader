import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Navigation from '../navigation/Navigation';
import './StoryComment.css';

import * as api from '../../helpers/api';

class StoryComment extends Component {

    constructor(props) {
      super(props);
      this.state = {
        storyItems: []
      };
    }

    loadStoryItems() {
      api.getStoryItem(this.props.params.id)
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
      console.log("state", this.state);
      console.log("props", this.props);
      // console.log("props params", this.props.params.id);

      const storyItem = this.state.storyItems;

      return (
        <div>
          <Navigation />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div>
                  <Button href={storyItem.url} bsStyle="link"><h3>{storyItem.title}</h3></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

StoryComment.propTypes = {
  id: React.PropTypes.string
};

export default StoryComment;
