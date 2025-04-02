import { Col, Container, Form, Row } from "react-bootstrap"
import SingleBook from "./SingleBook"
import { Component } from "react"

class BookList extends Component {
  state = {
    search: "",
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="cerca un libro"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value })
              }}
            />
          </Col>
        </Row>
        <Row>
          {this.props.arrayOfBooks
            .filter((book) => {
              if (
                book.title
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              ) {
                return true
              } else {
                return false
              }
            })
            .map((book) => {
              return <SingleBook book={book} key={book.asin} />
            })}
        </Row>
      </Container>
    )
  }
}

export default BookList
