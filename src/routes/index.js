import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    );
  }
}

export default Routes;
