// Import React
import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateTach from "./Components/Create-a-tach";
import EditTach from "./Components/Edit-a-tach";
import TachList from "./Components/Tach-list";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/tach-list"} className="nav-link">
                  ToDoList{" "}
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-tach"} className="nav-link">
                    Create Tach
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/tach-list"} className="nav-link">
                    Tach List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={TachList} />
                  <Route path="/create-tach" component={CreateTach} />
                  <Route path="/edit-tach/:id" component={EditTach} />
                  <Route path="/tach-list" component={TachList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
