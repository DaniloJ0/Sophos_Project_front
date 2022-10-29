import Card from 'react-bootstrap/Card';
import imagen from '../../../img/curso.jpg'
import "./singleCurso.css"

function SingleCurso() {
  return (
      <Card className="card">
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>Programacion orientada a objetos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default SingleCurso