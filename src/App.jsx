import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
// import AllTheBooks from "./components/AllTheBooks"
import { Container } from "react-bootstrap"
import fantasy from "./data/fantasy.json"
import BookList from "./components/BookList"

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <SingleBook book={fantasy[0]} /> */}
        {/* <AllTheBooks/> */}
        <BookList arrayOfBooks={fantasy}>
          <Comment />
        </BookList>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
