import { Component } from "react"
import { fantasy } from "../data/fantasy.json"
import CommentsList from "./CommentsList"

class CommentArea extends Component {
  state = {}
  render() {
    return (
      <Row className="g-2">
        {fantasy.map((book) => {
          return (
            <Col xs={12} md={4} key={book.asin}>
              <CommentsList />
              <CommentArea />
            </Col>
          )
        })}
      </Row>
    )
  }
}

export default CommentArea
