import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col, Form } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';



import { toast, ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import AddCourse from './components/AddCourse';
import AllCourses from './components/AllCourses';

import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/About';

function App() {
  const notify = () => toast("wow so  easy");

  return (
    <div>
      <Router>
        <Container>

          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>

            <Col md={8}>
              {/* create router from click to move to another */}
              <Route path="/" component={Home} exact/>
              <Route path="/add-course" component={AddCourse}  exact/>
              <Route path="/view-courses" component={AllCourses} />
              <Route path="/about" component={About} />

             
            </Col>
          </Row>
        </Container>
      </Router>
    </div>

  );
}

export default App;
