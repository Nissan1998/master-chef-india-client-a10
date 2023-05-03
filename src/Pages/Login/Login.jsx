import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../PrivetRoute/AuthProvider";
import { AiFillGoogleSquare } from "react-icons/ai";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    console.log("googleclicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        backgroundImage: "url(https://wallpaper.dog/large/17008270.jpg)",
        height: 500,
      }}
    >
      <Container className="w-25 mx-auto">
        <h4 className="text-center text-white">Please Login</h4>
        <Form className="mb-2" onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="warning" type="submit">
            Login
          </Button>
          <br />
          <Form.Text className="text-white">
            Do not Have an Account? <Link to="/register">Register</Link>
          </Form.Text>
        </Form>
        <Form.Text className="text-white me-2 ">Continue With</Form.Text>
        <Button onClick={handleGoogleSignIn} className="me-3" variant="light">
          <img
            style={{ width: 25 }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
        </Button>
        <Button variant="light">
          <img
            style={{ width: 25 }}
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
          />
        </Button>
      </Container>
    </div>
  );
};

export default Login;
