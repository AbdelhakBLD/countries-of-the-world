import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./logo.svg";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ScrollToTop smooth component={<MySVG />} />
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/shop" component={Shop} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
