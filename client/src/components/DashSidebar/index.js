import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import RecipientList from "../DashRecipientList";
import ModalComponent from "../ModalComponent/ModalComponent";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      email: "",
      Recipients: []
    };
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newRecip = {
      name: this.state.name,
      email: this.state.email
    };
    API.postRecipients(newRecip)
      .then(() => {
        this.props.loadRecipients();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Sidebar">
        <ModalComponent
          modal={this.state.modal}
          name={this.state.name}
          email={this.state.email}
          Recipients={this.state.Recipients}
          toggle={this.toggle}
          handleChangeName={this.handleChangeName}
          handleChangeEmail={this.handleChangeEmail}
          handleSubmit={this.handleSubmit}
        />
        <RecipientList
          Recipients={this.props.Recipients}
          name={this.props.name}
          email={this.props.email}
          getMessages={this.props.getMessages}
          Rid={this.props.Rid}
          loadRecipients={this.loadRecipients}
        />
      </div>
    );
  }
}
export default Sidebar;
