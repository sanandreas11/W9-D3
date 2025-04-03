import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
// import AllTheBooks from "./components/AllTheBooks"
import { Container } from "react-bootstrap"
import fantasy from "./data/fantasy.json"
import BookList from "./components/BookList"
import CommentArea from "./components/CommentArea"

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <SingleBook book={fantasy[0]} /> */}
        {/* <AllTheBooks/> */}
        <BookList arrayOfBooks={fantasy}>
          <CommentArea />
        </BookList>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
