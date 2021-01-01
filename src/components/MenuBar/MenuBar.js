import React, { Component } from 'react';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIconText: "loading icon",
    };
  }

  render() {
    return (
      <div className="app">
        Menu Bar
      </div>
    );
  }
}

export default MenuBar;
