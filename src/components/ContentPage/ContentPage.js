import React, { Component } from 'react';

class ContentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIconText: "loading icon",
    };
  }

  render() {
    return (
      <div className="app">
        Content Page {this.props.match.params.contentId}
      </div>
    );
  }
}

export default ContentPage;
