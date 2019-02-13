import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import './style.css'

export default function MessageCard() {
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
