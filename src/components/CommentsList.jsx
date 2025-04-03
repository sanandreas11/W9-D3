import { ListGroup, ListGroupItem } from "react-bootstrap"

const CommentsList = function (props) {
  return (
    <ListGroup>
      {props.reviews.map((recensione) => {
        return (
          <ListGroupItem key={recensione._id}>
            {recensione.comment} | {recensione.rate}/5
          </ListGroupItem>
        )
      })}
    </ListGroup>
  )
}
