import React, { Component } from 'react'
import './style.css'

import MessageForm from '../DashMessageForm'
import MessageList from '../DashMessageList'
import Placeholder from '../DashPlaceholder'

class MainContent extends Component {
  render() {
    return (
      <div className='main-message-content'>
        <MessageForm
          title={this.props.title}
          body={this.props.message}
          date={this.props.scheduleDate}
          recipientId={this.props.recipientId}
        />
        <MessageList
          Messages={this.props.Messages}
          title={this.props.title}
          body={this.props.message}
          date={this.props.scheduleDate}
          // getMessages={this.props.loadMessages}
        />
        
      </div>
    )
  }
}

export default MainContent;