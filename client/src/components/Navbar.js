import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const Navbar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } =
    useContext(AuthContext);


  const onClickLogoutHandler = () => {
      AuthService.logout().then(data=>{
          if(data.success){
              setUser(data.user);
              setIsAuthenticated(false);
          }
      });
  }


  const unauthenticatedNavbar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/login">
          <li className="nav-item nav-link">Login</li>
        </Link>
        <Link to="/register">
          <li className="nav-item nav-link">Register</li>
        </Link>
      </>
    );
  };

  const authenticatedNavbar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/myprofile">
          <li className="nav-item nav-link">My Profile</li>
        </Link>
        <Link to="/messages">
          <li className="nav-item nav-link">Messages</li>
        </Link>
        <button
          type="button"
          className="btn btn-link nav-item nav-link"
          onClick={onClickLogoutHandler}
        >
          Logout
        </button>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <div className="navbar-brand">Home</div>
        </Link>
        <Link to="/login">
          <div className="navbar-brand">Login</div>
        </Link>
        <Link to="/Register">
          <div className="navbar-brand">Register</div>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {!isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
