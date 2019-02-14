import React, { Component } from 'react'
import { Card, CardTitle } from 'reactstrap'
import './style.css'

class RecipientCard extends Component {
  render() {
    const { name, Rid, getMessages } = this.props.recipient;
    return (
      <div>
        <Card
          onClick={getMessages()}

        >
          <CardTitle
          className="RecipientCard"
          // onClick={onClick}
          >
            { name }
          </CardTitle>
        </Card>
      </div>

      // <div className='recipient-card'>
      //   <h4>recipient name</h4>
      // </div>
    )
  }
}

export default RecipientCard;