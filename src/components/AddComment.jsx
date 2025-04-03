import { Component } from "react"
import { Form, Button } from "react-bootstrap"

const URL = ":https://striveschool-api.herokuapp.com/api/comments/"
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMmNlODM4MzRiZjAwMTUwMDA3MDQiLCJpYXQiOjE3NDM2ODE0ODEsImV4cCI6MTc0NDg5MTA4MX0.ksiuoWihxTFijttP1-id3vtyRxR0aMpbjjQn9XFoS7A"

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: "",
    },
  }
  handleSubmit = (e) => {
    e.preventDefault()
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state.comment),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Commento Salvato")
          this.setState({
            comment: {
              comment: "",
              rate: "1",
              elementId: "",
            },
          })
        } else {
          throw new Error("errore nel mandare il commento")
        }
      })
      .catch((err) => {
        console.log("si è verificato un errore nel salvataggio", err)
      })
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Select
            aria-label="Vote Select"
            value={this.state.review.rate}
            onChange={(e) => {
              this.setState({
                review: { ...this.state.review, rate: e.target.value },
              })
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
          <Form.Label htmlFor="comment">Your Comment Goes Here</Form.Label>
          <Form.Control
            type="text"
            id="comment"
            placeholder="I LOVED IT"
            value={this.state.comment.comment}
            onChange={(e) => {
              this.setState({
                review: { ...this.state.review, comment: e.target.value },
              })
            }}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    )
  }
}

export default AddComment
