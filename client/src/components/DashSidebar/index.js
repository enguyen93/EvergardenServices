import React from 'react'
import './style.css'

import AddRecipientbutton from '../DashAddRecipientButton'
import RecipientList from '../DashRecipientList'

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <AddRecipientbutton />
      <RecipientList />
    </div>

  )
}
