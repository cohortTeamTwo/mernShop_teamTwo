import { Button, Col, Container, Form, Popover, Row } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  return (
    <div>
      <Popover id="popover-basic">
        <Popover.Header as="h3">Login</Popover.Header>
        <Popover.Body>
          <Container className="formCont">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Forget me not!" />
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
  // Trigger code must go HERE
};

export default Login;
