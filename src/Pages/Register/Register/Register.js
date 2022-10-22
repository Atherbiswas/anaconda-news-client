import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);
  const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name,email,password,photoURL);
        createUser(email,password)
          .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            handleUpdateProfile(name,photoURL);
            handleEmailVerification();
            toast.success('Please verify your email address!')
            navigate('/');
          })
          .catch( error => {
            console.error(error);
            setError(error.message);
          })
    }

    const handleUpdateProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then( () => {})
      .catch( error => console.error(error))
    }

    const handleEmailVerification = () => {
      verifyEmail()
      .then( () => {})
      .catch(error => console.error(error))
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }
    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter your name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>Your PhotoURL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Enter your photoURL"/>
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
        <Form.Check
        onClick={handleAccepted}
         type="checkbox"
        label={<>Accept <Link to="/terms&condition">Terms & Condition</Link></>}/>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <Form.Text className="text-danger">
            {error}
      </Form.Text>
    </Form>
    );
};

export default Register;