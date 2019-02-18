
import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import './style.css'


class MyNav extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

    return (
      <div className="Mynav">
        <Navbar color="light" light expand='md'>
          <NavbarBrand
            // className="Logo-nav"
          >
          <img id="dashboard-logo" src="https://i.imgur.com/CUZzM0n.png" />
          </NavbarBrand>
          <Nav className='ml-auto'>
            <NavItem>
              <NavLink id="welcome-user">
                Welcome {user.name.split(" ")[0]}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='/'
                onClick={this.onLogoutClick}
              >Logout</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
      // <div className='dash-nav'>
      //   <nav>
      //     <h1>Logo</h1>
      //     <ul>
      //     <li>Profile</li>
      //     <li>Logout</li>
      //     </ul>
      //   </nav>
      // </div>
    )
  }
}
MyNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(MyNav);