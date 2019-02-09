import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Navbar from "../Navbar";
import Full from "../Full";
import FormWrapper from "../FormWrapper";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="loginBody">
        <Navbar />
        <nav className="navbar fixed-top navbar-expand-lg bg-light navbar-light">
            <Link className="navbar-brand" to="/">Evergarden</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" id="nav-active" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Full>
          <div className="flowerSVG">
            <img src="https://i.imgur.com/y3yh4g7.png" alt="It's a flower" />
          </div>
          <FormWrapper>
            <img className="testFlower" src="https://i.imgur.com/y3yh4g7.png" alt="It's a flower" />
            <div className="loginHeader">
              <p>Need an Evergarden account? <Link to="/register">Create an account</Link></p>
            </div>

            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className= {classnames("formInputs", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />

                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={classnames("formInputs", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />

                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div style={{ paddingLeft: "11.250px" }}>
                <button
                  type="submit"
                  className="formButton"
                >
                  Login
                </button>
              </div>
            </form>
          </FormWrapper>
        </Full>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);