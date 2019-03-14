import React, { Component } from 'react'
import { Card, CardTitle } from 'reactstrap'
import './style.css'

class RecipientCard extends Component {
  render() {
    const { name, _id } = this.props.recipient;
    return (
      <button className="RecipientCard">
        <Card
          onClick={() => this.props.getMessages(_id)}

        >
          <CardTitle
            className="CardTitle"
          >
            { name }
          </CardTitle>
        </Card>
      </button>

      // <div className='recipient-card'>
      //   <h4>recipient name</h4>
      // </div>
    )
  }
}

export default RecipientCard;