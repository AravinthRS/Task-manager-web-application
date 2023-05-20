import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = useSelector((state) => state.user.usersList);

  function checkLogin(emailInput, passwordInput) {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].email === emailInput ||
        (data[i].userName === emailInput && data[i].password === passwordInput)
      ) {
        return true;
      }
    }
    return false;
  }

  const eventSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn = checkLogin(email, password);
    if (isLoggedIn) {
      toast.success("Login Sucessfull");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      toast.error("Login Failed");
    }
  };

  return (
    <div>
      <div className="login-form">
        <Form onSubmit={(e) => eventSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email or username"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
