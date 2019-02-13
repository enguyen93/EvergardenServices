import React from 'react'
import { Card, CardTitle } from 'reactstrap'
import './style.css'

export default function RecipientCard(props) {
  return (
    <div className="RecipientCard">
      <Card>
        <CardTitle onClick={props.onClick} alt={props.name} >
        </CardTitle>
      </Card>
    </div>

    // <div className='recipient-card'>
    //   <h4>recipient name</h4>
    // </div>
  )
}
