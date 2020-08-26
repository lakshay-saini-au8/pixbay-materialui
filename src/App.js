import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Search />
      </div>
    );
  }
}

export default App;
