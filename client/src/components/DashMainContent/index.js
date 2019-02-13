import React from 'react'
import './style.css'

import MessageForm from '../DashMessageForm'
import MessageList from '../DashMessageList'

export default function MainContent() {
  return (
    <div className='main-message-content'>
      <MessageForm />
      <MessageList />
    </div>
  )
}
