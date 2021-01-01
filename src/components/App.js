import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <p>
            This is the first commit.
            <div className="appIcon">
              <p className="appIcon__text">loading icon</p>
              <img className="appIcon__image" alt="appIcon" src={process.env.PUBLIC_URL + '/images/App/appIcon.png'} />
            </div>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
