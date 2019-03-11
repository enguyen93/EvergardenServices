import React, { Component } from "react";
import "./style.css";

import RecipientList from "../DashRecipientList";
import ModalComponent from "../ModalComponent/ModalComponent";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <ModalComponent/>
        <RecipientList
          Recipients={this.props.Recipients}
          name={this.props.name}
          email={this.props.email}
          getMessages={this.props.getMessages}
          Rid={this.props.Rid}
        />
      </div>
    );
  }
}
export default Sidebar;
