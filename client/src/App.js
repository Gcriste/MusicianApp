import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Post from "./pages/Post";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import "./App.css"



// if (localStorage.budget) {
// 	setAuthToken(localStorage.budget);

// 	const decoded = jwtDecode(localStorage.budget);
// 	store.dispatch(setCurrentUser(decoded));

// 	const currentTime = Date.now() / 1000;
// 	if (decoded.exp < currentTime) {
// 		store.dispatch(logoutUser());
// 		window.location.href = '/';
// 	}
// }
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/saved/:id" component={Saved} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/createaccount" component= {CreateAccount}/>
          {/* <Route exact path = "" */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
