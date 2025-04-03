import { Component } from "react"
import { fantasy } from "../data/fantasy.json"
import CommentsList from "./CommentsList"
import AddComment from "./AddComment"
const URL = "https://striveschool-api.herokuapp.com/api/comments/"
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMmNlODM4MzRiZjAwMTUwMDA3MDQiLCJpYXQiOjE3NDM2ODE0ODEsImV4cCI6MTc0NDg5MTA4MX0.ksiuoWihxTFijttP1-id3vtyRxR0aMpbjjQn9XFoS7A"

class CommentArea extends Component {
  state = {
    reviews: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
  }
  getReviews = () => {
    fetch(URL + this.props.asin, {
      headers: { authorization: "Bearer " + token },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("recensioni non recuperate")
        }
      })
      .then((data) => {
        this.setState({ reviews: data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <Row className="g-2">
        {fantasy.map((book) => {
          return (
            <Col xs={12} md={4} key={book.asin}>
              <CommentsList reviews={this.state.comments} />
              <AddComment asin={this.props.asin} />
            </Col>
          )
        })}
      </Row>
    )
  }
}

export default CommentArea
