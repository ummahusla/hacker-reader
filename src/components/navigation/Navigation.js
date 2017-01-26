import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css';

const Navigation = () => (
  <div className="container">
    <Navbar fluid fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <i className="fa fa-hacker-news fa-lg" aria-hidden="true"></i> Hacker News Reader
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/top">
          <NavItem eventKey={1}>Top</NavItem>
        </LinkContainer>
        <LinkContainer to="/new">
          <NavItem eventKey={2}>New</NavItem>
        </LinkContainer>
        <LinkContainer to="/best">
          <NavItem eventKey={3}>Best</NavItem>
        </LinkContainer>
        <LinkContainer to="/jobs">
          <NavItem eventKey={4}>Jobs</NavItem>
        </LinkContainer>
        <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={5.1}>Action</MenuItem>
          <MenuItem eventKey={5.2}>Another action</MenuItem>
          <MenuItem eventKey={5.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={5.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  </div>
);

export default Navigation;
