import { Card, Button, Col } from "react-bootstrap"

const SingleBook = function (props) {
  return (
    <Col xs={12} s={6} md={4} lg={3}>
      <Card>
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>
            {props.book.category} - {props.book.price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
