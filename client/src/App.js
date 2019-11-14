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
import "./App.css";
import PostRequest from "./pages/Request";
import IncomingRequest from "./pages/IncomingRequest";
import DiscussionBoard from "./pages/DiscussionBoard"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <PrivateRoute exact path="/search" component={SearchGigs} />
          <Route exact path="/createaccount" component={CreateAccount} />
          <PrivateRoute exact path="/saved" component={Saved} />
          <PrivateRoute exact path="/saved/:id" component={Saved} />
          <PrivateRoute exact path="/post" component={Post} />
          <PrivateRoute exact path="/post/:id" component={Post} />
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/" component= {Login}/>
          <PrivateRoute exact path ="/request" component = {PostRequest}/>
          <PrivateRoute exact path = "/request/:id" component= {PostRequest}/>
          <PrivateRoute exact path = "/discussionboard" component = {DiscussionBoard} />
          <PrivateRoute exact path = "/discussionboard/:id" component = {DiscussionBoard} />
          <PrivateRoute exact path = "/incomingrequest" component = {IncomingRequest} />
          <Route component={NoMatch} />
  

        </Switch>
      </div>
    </Router>
  );
}

export default App;
