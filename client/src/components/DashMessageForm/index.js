import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import API from "../../utils/API";
import "./style.css";
export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      message: "",
      scheduleDate: ""
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleChangeScheduleDate = this.handleChangeScheduleDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }
  handleChangeScheduleDate(event) {
    this.setState({ scheduleDate: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newMessage = {
      recipient: this.props.recipientId,
      title: this.state.title,
      message: this.state.message,
      scheduleDate: this.state.scheduleDate
    };
    API.postMessages(newMessage)
      .then(() => {
        this.props.loadMessages();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="message-form">
        <Form onSubmit={this.onSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="title"
                  value={this.state.title}
                  onChange={this.handleChangeTitle}
                  name="title"
                  placeholder="Title"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="date">Schedule Date</Label>
                <Input
                  type="date"
                  value={this.state.scheduleDate}
                  onChange={this.handleChangeScheduleDate}
                  name="date"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="message" />
            <Input
              className="message-box"
              type="textarea"
              name="message"
              placeholder="Your message here..."
              value={this.state.message}
              onChange={this.handleChangeMessage}
            />
          </FormGroup>
          <Button
            color="info"
            value="Submit"
            className="submit-button"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
