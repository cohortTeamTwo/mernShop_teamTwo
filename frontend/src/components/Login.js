import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    //This function will handle the login call from the backend
    console.log(email);
    console.log(password);
  };

  return (
    <div className='form'>
      <Container className='formCont'>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email Adress:</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              value={email} //This is applying the value of the email state
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Forget me not!' />
          </Form.Group>
          <Button
            variant='primary'
            type='submit'
            onClick={(e) => loginHandler(e)}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
  // Trigger code must go HERE
};

export default Login;
