import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap'
import './style.css'

class MessageCard extends Component {
  render() {
    return (
      <div className="MessageCard">
        <ListGroup>
          <ListGroupItem>
            <ListGroupItemHeading
              className='Message-Card-Title clearfix'
            >
              {this.props.title}<Badge className='float-right' color='warning' pill>{this.props.sent}</Badge>
            </ListGroupItemHeading>
            
            <ListGroupItemText
              className='Message-Card-Message'
            >
              {this.props.message}
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default MessageCard;
