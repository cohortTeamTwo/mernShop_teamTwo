import { Button, Container, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
	return (
		<div className="form">
			<Container className="formCont">
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email Adress:</Form.Label>
						<Form.Control type="email" placeholder="Enter Email" required />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password:</Form.Label>
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
		</div>
	);
	// Trigger code must go HERE
};

export default Login;
