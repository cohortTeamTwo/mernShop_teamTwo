import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import Country from "./Country";

const Signup = () => {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [countrySelection, setCountrySelection] = useState("");
  const [termsAccept, setTermsAccept] = useState(false);
  const [marketingAccept, setMarketingAccept] = useState(false);

  const history = useHistory();

  const signupHandler = async (e) => {
    //added async to function so can use await
    e.preventDefault();
    // Config variable -- I like to do this as a const as if you're calling your backend multiple time saves retyping
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    //Try Catch for API call to backend
    try {
      // This is the call to the server to send the user data and attempt to register them
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/signUp",
        {
          fullName,
          email,
          password,
          address,
          telephoneNumber,
          city,
          zip,
          countrySelection,
          termsAccept,
          marketingAccept,
        },
        config
      );
      //Now I'm going to declare what to do once we get response from server
      //localStorage.setItem("authToken", data.token);
      console.log(data);
      // Will add the dispatch to redux here once created
      history.push("/");
    } catch (error) {
      // Not going to do full error handling but can console.log for now
      console.log(error);
    }
  };

  return (
    <div className='signupForm'>
      <Container className='formCont'>
        <Form onSubmit={signupHandler}>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridFirstNamel'>
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type='text'
                placeholder='First Name'
                value={fullName.firstName}
                onChange={(e) =>
                  setFullName({
                    ...fullName,
                    firstName: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridLastName'>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type='text'
                placeholder='Last Name'
                value={fullName.lastName}
                onChange={(e) =>
                  setFullName({
                    ...fullName,
                    lastName: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className='mb-3' controlId='formGridAddress1'>
            <Form.Label>Address:</Form.Label>
            <Form.Control
              placeholder='1234 Main St'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridTelephone'>
            <Form.Label>Telephone Number:</Form.Label>
            <Form.Control
              placeholder='Telephone Number'
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
            />
          </Form.Group>

          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>City:</Form.Label>

              <Form.Control
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId='formGridCountry'
              className='countryBox'
            >
              <Form.Label>Country:</Form.Label>
              <Form.Select
                className='form-control input-lg'
                value={countrySelection}
                onChange={(e) => setCountrySelection(e.target.value)}
              >
                {Country.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Zip:</Form.Label>
              <Form.Control
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className='mb-3' id='formGridCheckbox'>
            <Form.Check
              type='checkbox'
              label='By checking this box you have agreed to all our of Terms And Conditions.'
              value={termsAccept}
              onChange={() => setTermsAccept(!termsAccept)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' id='formGridCheckbox'>
            <Form.Check
              type='checkbox'
              value={marketingAccept}
              onChange={() => setMarketingAccept(!marketingAccept)}
              label='By checking this box you have agreed to have us send you emails with all of the latest additions to our products.'
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
