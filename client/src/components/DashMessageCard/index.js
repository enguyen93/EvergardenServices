import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import './style.css'

class MessageCard extends Component {
  render() {
    return (
      <div className="MessageCard">
        <ListGroup>
          <ListGroupItem>
            <ListGroupItemHeading>Some title</ListGroupItemHeading>
            <ListGroupItemText>nkjbnwekjcnkjwfbnfjkwbfkjwehfkjwhfkwjhfkwjvhwjdkvbwkjvbw wdkjbcjwbcjw  hbckjwbcj s huiwbvcsc a message</ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default MessageCard;
