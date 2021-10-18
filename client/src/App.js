import React from "react";
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UsersProfilesGrid from "../src/components/usersProfiles/UsersProfilesGrid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




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
            <Route path="/Login" component={Login}>
              <Login />
            </Route>
            <Route path="/register" component={Register}>
              <Register />
            </Route>
          {/* <Route path="/">
              <UsersProfilesGrid />
            </Route> */}
            {/* <Route path="/">
              <Home />
            </Route>
            <Route path="/Profile/:username">
              <Profile />
            </Route> */}
          </Switch>
        </Router>
      </header>
      
    </div>
  );
}

export default App;
