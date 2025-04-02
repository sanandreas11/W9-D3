import { Container, Row } from "react-bootstrap"
import SingleBook from "./SingleBook"

const BookList = function (props) {
  return (
    <Container>
      <Row>
        {props.arrayOfBooks.map((book) => {
          return <SingleBook book={book} key={book.asin} />
        })}
      </Row>
    </Container>
  )
}

export default BookList
