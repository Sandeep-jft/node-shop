import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Form, Button } from "react-bootstrap";
import { failed, login } from "src/reduxStore/reducers/userReducer";
import { loginUser } from "src/services/userService";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { isEmpty } from "lodash";
import Message from "src/components/shared/message";
import FormContainer from "src/components/shared/formContainer";
import { CONSTANTS } from "src/utils/constant";

const LoginView = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { userReducer } = useSelector((state) => state);
  const Navigate = useNavigate();
  const [showError, setShowError] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const query = useLocation();
  const redirect = query.redirect ? `/${query.search.split("=")[1]}` : "/";

  useEffect(() => {
    if (!isEmpty(userReducer.user)) {
      Navigate(redirect);
    }
  }, [userReducer.user, redirect]);

  const handleLogin = async (e) => {
    try {
      setIsLoading(true);
      setShowError(false);
      e.preventDefault();
      const { email, password } = userDetails;
      if (!email || !password) {
        setShowError("Please enter all details");
      } else {
        const payload = {
          email,
          password,
        };

        const response = await loginUser(payload);
        setShowError(false);
        setIsLoading(false);
        if (response && response.status === CONSTANTS.SUCCESS) {
          dispatch(login(response.data));
        //   Navigate("/");
        } else {
          dispatch(failed(response.message));
        }
      }
    } catch (error) {
      dispatch(failed(error.message));
      setShowError(false);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <FormContainer>
      <div className="my-3">
        <h3>Login</h3>
      </div>
      {!isEmpty(showError) || !isEmpty(userReducer.error) ? (
        <Message>
          <h5>{showError ? showError : userReducer.error}</h5>
        </Message>
      ) : null}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="email">
          <Form.Label>Email Id</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={userDetails.email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
        </Form.Group>

        <Button
          style={{ marginTop: 10, width: "100%" }}
          variant="primary"
          type="submit"
        >
          SING IN
        </Button>
      </Form>
      <div className="my-3">
        <Row>
          <Col>
            Not registered?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </Col>
        </Row>
      </div>
    </FormContainer>
  );
};

export default LoginView;
