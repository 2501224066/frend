import { Component } from "react";
import Router from "./routes/index";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
