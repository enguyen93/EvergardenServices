import React, { Component } from 'react'
import './style.css'

import API from '../../utils/API'

import RecipientCard from '../DashRecipientCard';

class RecipientList extends Component {

  state = {
    Recipients: [],
    name: ''
  }

  componentDidMount() {
    this.loadRecipients();
  }

  // loads all recipients of the current user to state
  loadRecipients = () => {
    API.getRecipients()
      .then(res =>
        this.setState({
          recipients: res.data,
          name: ""
        })
      )
      .catch(err => console.log(err));
  };

  onClick = event => {
    API.getMessages()
      .then(res =>
        this.setState({
          
        })
      )
  }

  render() {

    return (
      <div className='recipient-list'>
        {this.state.Recipients.map(recipient => (
          <RecipientCard
            name={recipient.name}
            key={recipient.name}
            onClick={this.onClick}
          />
        ))}

      </div>
    )
  }
}
