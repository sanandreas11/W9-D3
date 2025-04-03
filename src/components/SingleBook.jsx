import { Component } from "react"
import { Card, Button, Col } from "react-bootstrap"
import CommentArea from "./CommentArea"

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
            {this.state.selected && <CommentArea asin={this.props.book.asin} />}
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
