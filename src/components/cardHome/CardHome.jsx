import React from 'react'
import Card from 'react-bootstrap/Card';
import "./cardHome.css"

function CardHome({info}) {
  return (
    <Card className='cardSingleHome bg-light my-3 mx-3'>
    <Card.Body>
      <Card.Title className='text-center fs-4 '>{info.title}</Card.Title>
      <Card.Text>
        <div className='text-center fw-bold textCustom'>{info.mount}</div>
        {info.desc}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default CardHome