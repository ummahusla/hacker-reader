import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Navigation from '../navigation/Navigation';
import ScoreLabel from '../shared-components/scoreLabel/ScoreLabel';
import AuthorLabel from '../shared-components/authorLabel/AuthorLabel';
import DateLabel from '../shared-components/dateLabel/DateLabel';
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
      const storyItem = this.state.storyItems;

      return (
        <div>
          <Navigation />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div>
                  <Button href={storyItem.url} className="story-header" bsStyle="link"><h3>{storyItem.title}</h3></Button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div>
                  <ScoreLabel score={storyItem.score}/>
                  <AuthorLabel author={storyItem.by}/>
                  <DateLabel date={storyItem.time}/>
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
