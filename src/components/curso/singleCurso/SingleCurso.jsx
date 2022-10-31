
import Card from 'react-bootstrap/Card';
import imagen from '../../../img/cursos/1.jpg'
import Badge from 'react-bootstrap/Badge';
import "./singleCurso.css"

function SingleCurso({dataCurso}) {
 let num = dataCurso.id % 2 === 0? 1 : dataCurso.id % 3 === 0? 2:3;
  return (
    <Card className="text-black card">
      <Card.Img variant="top" src={require(`../../../img/cursos/${num}.jpg`)} alt="imageCurso" className='imgCard'/>
      <Card.Body className='bodyCard'>
        <Card.Title className=''>{dataCurso.nombre}</Card.Title>
        <Card.Text className='badgeInfo'>
          <Badge bg="primary">Id: {dataCurso.id}</Badge>
          <Badge bg="secondary">Cupos: {dataCurso.cupos}</Badge>
          <Badge bg="secondary">Alumnos: {dataCurso.matriculaAlumnos.length}</Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleCurso