import React, { useContext } from "react";
import { AuthContext } from './Context/AuthContext';
import UsersProfilesGrid from "../src/components/usersProfiles/UsersProfilesGrid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




const App = () => {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
  console.log(user)
  console.log(isAuthenticated)
  

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
