import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersProfilesGrid from "../src/components/usersProfiles/UsersProfilesGrid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  

  return (
    <div className="container" style={{ height: "100%" }}>
      <header className="App-header">
        <h1>Dating App</h1>
        <Router>
          <Switch>
          <Route path="/users">
              <UsersProfilesGrid />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
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
