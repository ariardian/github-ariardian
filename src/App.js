import React, { useState } from "react";
import logo from "./logo.svg";
import { Container, Row, Col, Navbar, FormControl, InputGroup, Button } from "react-bootstrap";
import FormSearch from "./component/FormSearch";

function App() {
  const [searchParam, setSearchParam] = useState("");

  const onChageSearchParam = (e) => {
    const value = e.target.value;
    setSearchParam(value);
  };

  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Github API Test FronEnd</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col md={12}>
            <FormSearch param={searchParam} onChangeParam={onChageSearchParam} />
          </Col>
          <Col md={12}>Content</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
