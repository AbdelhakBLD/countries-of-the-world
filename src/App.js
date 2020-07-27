import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <ScrollToTop smooth component={<MySVG />}/>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
