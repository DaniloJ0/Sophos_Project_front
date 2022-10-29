import Card from 'react-bootstrap/Card';
import imagen from '../../../img/cursos/1.jpg'
import Badge from 'react-bootstrap/Badge';
import "./singleCurso.css"

function SingleCurso() {
  return (
      <Card className="card">
        <Card.Img variant="top" src={imagen} alt="imageCurso" />
        <Card.Body>
          <Card.Title className=''>Programación orientada a objetos</Card.Title>
          <Card.Text className='badgeInfo'>
             <Badge bg="primary">Id: 1</Badge>
             <Badge bg="secondary">Cupos: 9</Badge>
             <Badge bg="secondary">Alumnos: 50</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default SingleCurso