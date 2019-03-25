import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import './style.css'

class MessageCard extends Component {
  render() {
    return (
      <div className="MessageCard">
        <ListGroup>
          <ListGroupItem>
            <ListGroupItemHeading
              className='Message-Card-Title'
            >
              {this.props.title}
            </ListGroupItemHeading>
            <ListGroupItemText
              className='Message-Card-Message'
            >
              {this.props.message}
            </ListGroupItemText>
            <ListGroupItemText
              className='Message-Card-Date'
            >
              {this.props.date}
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default MessageCard;
