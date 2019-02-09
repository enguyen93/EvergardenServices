import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../utils/API";
class Dashboard extends Component {
  state = {
    // recipient state
    recipients: [],
    name: "",
    email: "",
    // message state
    messages: [],
    title: "",
    message: "",
    scheduleDate: ""
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    this.loadRecipients();
  }

  // loads all recipients of the current user to state
  loadRecipients = () => {
    API.getRecipients()
      .then(res =>
        this.setState({
          recipients: res.data,
          name: "",
          email: ""
        })
      )
      .catch(err => console.log(err));
  };

  // this function will attach to new recipient form
  addRecipients = event => {
    event.preventDefault();
    if (this.state.name && this.state.email) {
      API.postRecipients({
        name: this.state.name,
        email: this.state.email
      })
        .then(res => this.loadRecipients())
        .catch(err => console.log(err));
    }
  };

  deleteRecipients = id => {
    API.deleteRecipients(id)
      .then(res => this.loadRecipients())
      .catch(err => console.log(err));
  };

  updateRecipients = id => {
    API.updateRecipients(id)
      .then(res => {
        this.setState({
          name: this.state.name,
          email: this.state.email
        })
      })
      .then(res => this.loadRecipients())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);