import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check Your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <Card style={{ maxWidth: "100%" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef}></Form.Control>
            </Form.Group>

            <Button disabled={loading} type="submit" className="w-100">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to={`${process.env.PUBLIC_URL}/login`}>Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account?{" "}
        <Link to={`${process.env.PUBLIC_URL}/signup`}>Sign Up</Link>
      </div>
    </>
  );
}

export default ForgotPassword;
