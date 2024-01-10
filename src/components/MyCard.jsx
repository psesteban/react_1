import Card from 'react-bootstrap/Card';
import Boton from './Tags';

const Cards = ({image, name, description, color, breed}) => {
    return (

  <Card className="card d-flex flex-column">
      <Card.Img className="photoDog" variant="top" src={image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-sm flex-grow-1">
        {description}
        </Card.Text>
        <Boton color={color} breed={breed} />
      </Card.Body>
    </Card>
    );
    };
    

    export default Cards;