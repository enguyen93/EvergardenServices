import React, { Component } from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import './style.css'

import MessageCard from '../DashMessageCard'

class MessageList extends Component {
  render() {
    return (
      <div>
        <Card className="Card">
          <CardHeader
            tag="h3"
            className="Active-Messages"
          >
            Featured
          </CardHeader>
          <CardBody className="Card-Body">
            <div className='message-list'>
              {this.props.Messages.map(message => (
                <MessageCard
                  message={message.message}
                  title={message.title}
                  body={message.body}
                  date={message.scheduleDate}
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