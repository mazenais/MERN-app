import React, { useState, useRef, useEffect } from "react";
import AuthService from "../../Services/AuthService";
import Message from "../auth/Message.js";


const Register = props => {
  const [user, setUser] = useState({ email: "", password: "", name : "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
      return ()=> {
          clearTimeout(timerID);
      }
  },[]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
      setUser({username : "", password : "", name : ""});
  }

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then(data => {
        const { message } = data;
        setMessage(message);
        resetForm();
        // if(!message.msgError){
        //     timerID = setTimeout(()=> {
        //         props.history.push('/login');
        //     },2000)
        // }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Please Register</h3>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          type="text"
          name="email"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Email"
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Password"
        />
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Name"
        />
        
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Register;
