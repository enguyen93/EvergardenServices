import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Full from "../Full";
import FormWrapper from "../FormWrapper";
import Navbar from "../Navbar";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return <div className="signUpBody">
      <Navbar />
      <nav className="navbar fixed-top navbar-expand-lg bg-light navbar-light">
          <a className="navbar-brand" href="/">Evergarden</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" id="nav-active" href="/register">Register</a>
              </li>
            </ul>
          </div>
        </nav>
      <Full>
        <div className="flowerSVG">
          <img src="https://i.imgur.com/y3yh4g7.png" alt="It's a flower" />
        </div>
        <FormWrapper>
          <div className="signUpHeader">
            <h1>Express your feelings forever.</h1>
            <p>Evergarden allows you to send custom message with dates.</p>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="signUpFormBox">
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                placeholder="Name"
                className={classnames("firstNameInput", {
                  invalid: errors.name
                })}
              />
              <span className="red-text">{errors.name}</span>
            </div>
            <div className="formBoxTwo">
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                placeholder="Email"
                className={classnames("emailInput", {
                  invalid: errors.email
                })}
              />
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="formBoxTwo">
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                placeholder="Password"
                className={classnames("formInputs", {
                  invalid: errors.password
                })}
              />
              <span className="red-text">{errors.password}</span>
            </div>
            <div className="formBoxTwo">
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                placeholder="Confirm Password"
                className={classnames("formInputs", {
                  invalid: errors.password2
                })}
              />
              <span className="red-text">{errors.password2}</span>
            </div>
            <div className="formBoxTwo" style={{ paddingLeft: "11.250px" }}>
              <button
                type="submit"
                className="formContinue"
              >
                Sign up
                </button>
              <p className="formBelow">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </form>
        </FormWrapper>
      </Full>
    </div>
      ;
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));