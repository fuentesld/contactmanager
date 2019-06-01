import React, { Component } from "react";

class Test extends Component {
  state = { title: "", body: "" };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  // componentWillMount() {
  //   console.log("ComponentWillMount");
  // }
  // componentDidUpdate() {
  //   console.log("ComponentDidUpdate");
  // }
  // componentWillUpdate() {
  //   console.log("ComponentWillUpdate");
  // }
  // componentWillReciveProps(nextProps, nextState) {
  //   console.log("ComponentWillReciveProps");
  // }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 className="text-white">{title}</h1>
        <p className="text-white">{body}</p>
      </div>
    );
  }
}

export default Test;
