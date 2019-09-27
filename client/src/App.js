import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchGigs from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Post from "./pages/Post";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <PrivateRoute exact path="/search" component={SearchGigs} />
          <Route exact path="/" component={Login} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/saved/:id" component={Saved} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/createaccount" component= {CreateAccount}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
