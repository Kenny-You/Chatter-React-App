import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "ChitChat",
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  componentDidMount() {}
  changeTitle = () => {
    this.setState({ text: "Welcome to Kenny's React App" });
  };
  render() {
    return (
      <header className="header" onClick={this.changeTitle}>
        <div className="logo" />
        <span className="title">{this.state.text}</span>
      </header>
    );
  }
}