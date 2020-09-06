import React from "react";
import "./App.css";
import Navbar from "./components/Home/HomeDetails/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/posts/:postId">
              <PostDetails />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
