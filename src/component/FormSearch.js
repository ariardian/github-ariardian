import { Container, Row, Col, Navbar, FormControl, InputGroup, Button } from "react-bootstrap";

function FormSearch({ param, onChangeParam }) {
  console.log(param)
  return (
    <div className="d-flex justify-content-center">
      <InputGroup className="mb-3 mt-3">
        <FormControl
          placeholder="Username github"
          aria-label="Username github"
          name="searchParam"
          value={param}
          onChange={onChangeParam}
        />
        <Button variant="outline-secondary" id="button-search">
          Search
        </Button>
      </InputGroup>
    </div>
  );
}

export default FormSearch;
