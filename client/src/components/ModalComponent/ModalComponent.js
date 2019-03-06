//ModalComponent.js
import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import API from "../../utils/API";
import "./style.css";

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, name: "", email: "" };

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newRecip = {
      name: this.state.name,
      email: this.state.email
    };
    API.postRecipients(newRecip)
      .then(this.props.loadRecipients())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="modalBody">
        <h1>Add a new Recipient</h1>
        <Button color="success" onClick={this.toggle}>
          + Add Recipient
        </Button>

        <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>Add a new Recipient</ModalHeader>
            <ModalBody>
              <div className="row">
                <div className="form-group col-md-12">
                  <label>Name:</label>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChangeName}
                    className="form-control modal-inputs"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label>Email:</label>
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                    className="form-control modal-inputs"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <input
                id="modal-submit-button"
                type="submit"
                onClick={this.toggle}
                value="Submit"
                color="info"
                className="btn btn-primary"
              />
              <Button
                id="modal-cancel-button"
                color="danger"
                onClick={this.toggle}
              >
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}
