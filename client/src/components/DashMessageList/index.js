import React, { Component } from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import './style.css'

import MessageCard from '../DashMessageCard'

class MessageList extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader tag="h3">Featured</CardHeader>
          <CardBody>
            <div className='message-list'>
            {this.props.Messages.map(message => (
              <MessageCard 
                message={message}
                title={message.title}
                body={message.body}
                key={message.id}
                // getMessages={message.getMessages}
              />
            ))}
              
            </div>

          </CardBody>

        </Card>
      </div>
    )
  }
}

export default MessageList;