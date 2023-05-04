import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import { AuthContext } from "../../PrivetRoute/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  /*
  Navigate to Homepage............. 
  */
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  //Registration process...............................
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return setError("PassWord must have 6 letter");
    }

    console.log(name, photoUrl, email, password);

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        handleUserData(result.user, name, photoUrl);
        setSuccess("Account Successfully Created");
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  const handleUserData = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/03/34/46/033446fbc676ac0643401c1092ea1c71.jpg)",
        height: 700,
        overflow: "hidden",
      }}
    >
      <Container className="w-50 mx-auto p-5 text-white">
        <h3 className="text-center text-white">Please Register</h3>
        <h4 className="text-center text-success">{success}</h4>
        <h4 className="text-center text-danger">{error}</h4>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Photo URL"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleAccepted}
              type="checkbox"
              name="accept"
              label={
                <>
                  Accept <Link to="/terms">Terms and Conditions</Link>{" "}
                </>
              }
            />
          </Form.Group>
          <Button variant="warning" disabled={!accepted} type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-warning">
            Already Have an Account?{" "}
            <Link className="text-white" to="/login">
              Login
            </Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
