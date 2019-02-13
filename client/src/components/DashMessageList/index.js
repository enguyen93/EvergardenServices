import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import './style.css'

import MessageCard from '../DashMessageCard'

export default function MessageList() {
  return (
    <div>
    <Card>
      <CardHeader tag="h3">Featured</CardHeader>
      <CardBody>
        <div className='message-list'>
          <MessageCard />
        </div>

      </CardBody>
    
    </Card>
    </div>
  )
}
