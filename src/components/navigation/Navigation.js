import React from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => (
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

export default Navigation;
