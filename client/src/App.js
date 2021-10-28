import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MyProfile from "components/usersProfiles/MyProfile";
import UserMyProfile from "./components/usersProfiles/UserProfile";
import UsersProfilesGrid from "../src/components/usersProfiles/UsersProfilesGrid";
import PrivateRoute from './components/hoc/PrivateRoute';
import UnPrivateRoute from './components/hoc/UnPrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./Context/AuthContext.js";
import "./App.css";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   console.log("rest :>> ", rest);

//   const { user } = useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user ? <Component {...props} /> : <Redirect to="/Login" />
//       }
//     />
//   );
// };

const App = () => {
  return (
    <div className="container" style={{ height: "100%" }}>
        <header className="App-header">
          <h1 className="header">Dating App</h1>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}>
                <UsersProfilesGrid />
              </Route>
              <UnPrivateRoute path="/login" component={Login} />
              <UnPrivateRoute path="/register" component={Register} />
              {/* <Route path="/login" component={Login}>
                <Login />
              </Route>
              <Route path="/register" component={Register}>
                <Register />
              </Route> */}
              <PrivateRoute path="/profile" component={MyProfile}/>
              {/* <PrivateRoute path="/messages" component={Messages}/> */}
              {/* <PrivateRoute component={MyProfile} exact pathe="/MyProfile" /> */}
            </Switch>
          </Router>
        </header>
    </div>
  );
};

export default App;
