import React, { Component } from 'react'
import './style.css'

import API from '../../utils/API'

import RecipientCard from '../DashRecipientCard';

class RecipientList extends Component {

  state = {
    Contacts,

  }

  render() {

    return (
      <div className='recipient-list'>
        {this.state.}
        <RecipientCard />
      </div>
    )
  }
}
