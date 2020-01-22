import React from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";

class App extends React.Component {
  handleSubmit = (event: any) => {
    event.preventDefault();
    alert("Your username is: " + this.input.value);
  };
  input: any;

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          ref={input => (this.input = input)}
        />
      </form>
    );
  }
}

export default App;
