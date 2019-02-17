import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Notification from "./components/Notification";
import Main from "./components/Main";

import "./scss/main.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Header />
          <Notification />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
