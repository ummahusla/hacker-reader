import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
            <Grid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">HackerNews Reader</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Grid>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
