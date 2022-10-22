import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then( result => {
          const user = result.user;
          console.log(user);
          form.reset();
        })
        .catch( error => console.error(error))
    }
    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter your name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree Terms & Condition" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    );
};

export default Register;