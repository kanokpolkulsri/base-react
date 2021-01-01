import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import ContentPage from './ContentPage/ContentPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIconText: "loading icon",
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/content/:contentId?" component={ContentPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
