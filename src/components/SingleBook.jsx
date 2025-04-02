import { Component } from "react"
import { Button, Card, Col } from "react-bootstrap"
class SingleBook extends Component {
  state = {
    click: {
      selected: false,
    },
  }
  render() {
    const libro = this.props.onebook[0]
    return (
      <>
        <Col className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 g-3">
          <Card key={libro.asin}>
            <Card.Img variant="top" src={libro.img} />
            <Card.Body>
              <Card.Title>{libro.title}</Card.Title>
              <Card.Text>{libro.props.category}</Card.Text>
              <Button variant="danger">Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

export default SingleBook
