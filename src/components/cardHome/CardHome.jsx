import React from 'react'
import Card from 'react-bootstrap/Card';
import "./cardHome.css"
function CardHome({info}) {
  return (
    <Card className='cardSingleHome my-3 mx-3'>
    <Card.Body>
      <Card.Title className='text-center fs-4 fw-bold'>  {info.title}</Card.Title>
      <Card.Img className='rounded' variant="top" src={require(`../../img/home/${info.title}.jpg`)}/>
      <Card.Text>
        <div className='text-center mt-4 textCustom display-5'> {info.mount}</div>
        {info.desc}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default CardHome