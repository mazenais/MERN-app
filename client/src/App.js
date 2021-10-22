import React from "react";
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserMyProfile from './components/usersProfiles/UserProfile'
import UsersProfilesGrid from "../src/components/usersProfiles/UsersProfilesGrid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyProfile from "components/usersProfiles/MyProfile";




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
            <Route path="/login" component={Login}>
              <Login />
            </Route>
            <Route path="/register" component={Register}>
              <Register />
            </Route>
            <Route path="/MyProfile" >
              <MyProfile />
            </Route>
            {/* <Route path="/myprofile/:username">
              <MyProfile />
            </Route>  */}
          </Switch>
        </Router>
      </header>
      
    </div>
  );
}

export default App;
