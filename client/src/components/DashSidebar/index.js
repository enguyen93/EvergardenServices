import React, { Component } from 'react'
import './style.css'

import AddRecipientbutton from '../DashAddRecipientButton'
import RecipientList from '../DashRecipientList'

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <AddRecipientbutton />
        <RecipientList Recipients={this.props.Recipients} name={this.props.name} email={this.props.email} />
      </div>

    )
  }
}
export default Sidebar;