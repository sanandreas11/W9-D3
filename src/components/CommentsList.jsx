import { Component } from "react"
import { ListGroup } from "react-bootstrap"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMmNlODM4MzRiZjAwMTUwMDA3MDQiLCJpYXQiOjE3NDM2ODE0ODEsImV4cCI6MTc0NDg5MTA4MX0.ksiuoWihxTFijttP1-id3vtyRxR0aMpbjjQn9XFoS7A"

class CommentsList extends Component {
  state = {
    comments: [],
  }

  render() {
    getComments = () => {
      fetch(URL, {
        headers: { Authorization: "Bearer " + token },
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error("Errore nella fetch")
          }
        })
        .then((comments) => {
          comments.map((review) => {
            return (
              <ListGroup>
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
            )
          })
        })
        .catch((err) => {
          "error", err
        })
    }
  }
}
