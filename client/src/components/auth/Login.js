import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import AuthService from "../../Services/AuthService";
import Message from "../auth/Message.js";
import { AuthContext } from "../../Context/AuthContext";

const Login = props => {
  const history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name] : e.target.value });
    console.log(user)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then(data => {
        console.log(data);
      const { isAuthenticated, user, token } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        localStorage.setItem("token", token);
        history.push("/profile");

      } 
      else setMessage(message);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Please sign in</h3>
        <label htmlFor="email" className="sr-only">
          Email:
        </label>
        <input
          type="text"
          name="email"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Email"
        />
        <label htmlFor="password" className="sr-only">
          Password:
        </label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Password"
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Log in
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Login;
