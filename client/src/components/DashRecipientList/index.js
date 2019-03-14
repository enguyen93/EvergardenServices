import React, { Component } from 'react'
import './style.css'

import RecipientCard from '../DashRecipientCard';

class RecipientList extends Component {
  render() {
    console.log(this.state)
    return (
      this.props.Recipients.map(recipient => (
        <RecipientCard
          className='recipient-list'
          recipient={recipient}
          name={recipient.name}
          key={recipient.id}
          getMessages={this.props.getMessages}
          loadRecipients = {this.loadRecipients}
        />
      ))
    )
  }
}

export default RecipientList