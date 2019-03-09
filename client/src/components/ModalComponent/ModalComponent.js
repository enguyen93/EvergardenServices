//ModalComponent.js
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from '../../utils/API'
import "./style.css";


export default class ModalComponent extends React.Component {

  render() {
    return (

      <div className="modalBody">
        <h1>Add a new Recipient</h1>
        <Button color="success" onClick={this.props.toggle}>+ Add Recipient</Button>

        <Modal isOpen={this.props.modal}>
          <form onSubmit={this.props.handleSubmit}>
            <ModalHeader>Add a new Recipient</ModalHeader>
            <ModalBody>
              <div className="row">
                <div className="form-group col-md-12">
                  <label>Name:</label>
                  <input type="text" value={this.props.name} onChange={this.props.handleChangeName} className="form-control modal-inputs" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label>Email:</label>
                  <input type="text" value={this.props.email} onChange={this.props.handleChangeEmail} className="form-control modal-inputs" />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <input id="modal-submit-button" type="submit" onClick={this.props.toggle} value="Submit" color="info" className="btn btn-primary" />
              <Button id="modal-cancel-button" color="danger" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>

    );
  }
}
