import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIconText: "loading icon",
    };
  }

  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <p>
            This is the first commit.
            <div className="appIcon">
              <p className="appIcon__text">{this.state.appIconText}</p>
              <img className="appIcon__image" alt="appIcon" src={process.env.PUBLIC_URL + '/images/App/appIcon.png'} />
            </div>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
