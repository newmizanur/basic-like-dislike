import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Version from "./Version";

class App extends Component {
  state = {
    appVersion: 0
  };

  updateAppVersion() {
    this.setState({
      appVersion: this.state.appVersion + 1
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello React
          </a>
        </header>
        <Home
          updateVersion={this.updateAppVersion.bind(this)}
          version={this.state.appVersion}
        />
        <Version version={this.state.appVersion} />
      </div>
    );
  }
}

export default App;
