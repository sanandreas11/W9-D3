import { Component } from "react"
import { Card, Button, Col } from "react-bootstrap"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Col xs={12} s={6} md={4} lg={3}>
        <Card className={this.state.selected ? "selectedBook" : ""}>
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={() => {
              this.setState({
                selected: !this.state.selected, //toggle
              })
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
              {this.props.book.category} - {this.props.book.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
