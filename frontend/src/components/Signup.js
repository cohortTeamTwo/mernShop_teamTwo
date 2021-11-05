import { Button, Col, Container, Form, Popover, Row } from 'react-bootstrap';
import './Signup.css';
import Country from './Country';

function Signup() {
  return (
    <div>
      <Popover id="popover-basic">
        <Popover.Header as="h3">Signup</Popover.Header>
        <Popover.Body>
          <Container className="formCont">
            <Form>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="email" placeholder="Enter your full name" />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridTelephone">
                <Form.Label>Telephone Number</Form.Label>
                <Form.Control placeholder="Telephone Number" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>
                      <Country />
                    </option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Popover.Body>
      </Popover>
    </div>
  );
}

export default Signup;
