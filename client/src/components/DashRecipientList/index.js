import React, { Component } from 'react'
import './style.css'

import API from '../../utils/API'

import RecipientCard from '../DashRecipientCard';

class RecipientList extends Component {

  // state = {
  //   Recipients: [],
  //   name: ''
  // }

  // componentDidMount() {
  //   this.loadRecipients();
  // }

  // // loads all recipients of the current user to state
  // loadRecipients = () => {
  //   API.getRecipients()
  //     .then(res =>
  //       this.setState({
  //         Recipients: res.data,
  //         name: ""
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  // onClick = event => {
  //   API.getMessages()
  //     .then(res =>
  //       this.setState({

  //       })
  //     )
  // }

  render() {
    console.log(this.props)
    return (
      this.props.Recipients.map(recipient => (
        <RecipientCard
          className='recipient-list'
          recipient={recipient}
          name={recipient.name}
          key={recipient.id}
          getMessages={this.props.getMessages}
        />
      ))
    )
  }
}

export default RecipientList