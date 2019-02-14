import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import API from '../../utils/API'
import "./style.css";
export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      message: '',
      scheduleDate: ''
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleChangeScheduleDate = this.handleChangeScheduleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  handleChangeMessage(event) {
    this.setState({message: event.target.value});
  }
  handleChangeScheduleDate(event) {
    this.setState({scheduleDate: event.target.value});
  }


  handleSubmit(e) {
    e.preventDefault();
    const newMessage = {
      title: this.state.title,
      message: this.state.message,
      scheduleDate: this.state.scheduleDate
    }
    API.postMessages(newMessage)
      .then(res => {
        console.log(res.data)
        console.log(newMessage)
      })
      .catch(err => console.log(err));

  }

  render() {
    return (
      <div className="message-form">
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input type="title" value={this.state.title} onChange={this.handleChangeTitle} name="title" placeholder="title" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="date">Schedule Date</Label>
                <Input type="date" value={this.state.scheduleDate} onChange={this.handleChangeScheduleDate} name="date" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="message" />
            <Input
              className="message-box"
              type="message"
              name="message"
              placeholder="Your message here"
              value={this.state.message} onChange={this.handleChangeMessage}
            />
          </FormGroup>
          <Button color="info" onSubmit={this.handleSubmit}>Submit</Button>
        </Form>
      </div>

    );
  }
}
