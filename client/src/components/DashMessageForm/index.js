import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import './style.css'

class MessageForm extends Component {
  render() {
    return (
      <div className='message-form'>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='title'>Title</Label>
                <Input type="title" name='title' placeholder='title'></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='date'>Schedule Date</Label>
                <Input type='date' name='date'></Input>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for='message'></Label>
            <Input className="message-box" type='message' name='message' placeholder="Your message here"></Input>
          </FormGroup>
          <Button color='info'>Submit</Button>
        </Form>
      </div>

      // <div className='dash-message-form'>
      //   <form>
      //     <input
      //       type='text'
      //       placeholder='Title'
      //     >
      //     </input>
      //     <input
      //       type='text'
      //       placeholder='Your message here...'
      //     >
      //     </input>
      //     <input
      //       type='date'
      //       placeholder='mm/dd/yyyy'
      //     >
      //     </input>
      //   </form>
      // </div>
    )
  }
}

export default MessageForm;