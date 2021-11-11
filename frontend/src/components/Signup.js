import { Button, Col, Container, Form, Popover, Row } from 'react-bootstrap';
import './Signup.css';
import Country from './Country';

function Signup() {
	return (
		<div className="signupForm">
			<Container className="formCont">
				<Form>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="formGridFirstNamel">
							<Form.Label>First Name:</Form.Label>
							<Form.Control type="text" placeholder="First Name" />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridLastName">
							<Form.Label>Last Name:</Form.Label>
							<Form.Control type="text" placeholder="Last Name" />
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Email:</Form.Label>
							<Form.Control type="email" placeholder="Enter email" required />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Password:</Form.Label>
							<Form.Control type="password" placeholder="Password" required />
						</Form.Group>
					</Row>

					<Form.Group className="mb-3" controlId="formGridAddress1">
						<Form.Label>Address:</Form.Label>
						<Form.Control placeholder="1234 Main St" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formGridTelephone">
						<Form.Label>Telephone Number:</Form.Label>
						<Form.Control placeholder="Telephone Number" />
					</Form.Group>

					<Row className="mb-3">
						<Form.Group as={Col} controlId="formGridCity">
							<Form.Label>City:</Form.Label>
							<Form.Control />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridCountry" className='countryBox'>
							<Form.Label >Country:</Form.Label> 
							<Form.Select defaultValue="Choose..."class="form-control input-lg">
								{Country.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</Form.Select>
						</Form.Group>
						<Form.Group as={Col} controlId="formGridZip">
							<Form.Label>Zip:</Form.Label>
							<Form.Control />
						</Form.Group>
					</Row>

					<Form.Group className="mb-3" id="formGridCheckbox">
						<Form.Check
							type="checkbox"
							label="By checking this box you have agreed to all our of Terms And Conditions."
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" id="formGridCheckbox">
						<Form.Check
							type="checkbox"
							label="By checking this box you have agreed to have us send you emails with all of the latest additions to our products."
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	);
}

export default Signup;
