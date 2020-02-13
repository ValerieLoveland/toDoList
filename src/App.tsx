import React from "react";
import "./App.css";
let i = 0;
let toDoArray: string[] = [];

class App extends React.Component {
  handleSubmit = (event: any) => {
    event.preventDefault();

    toDoArray[i] = this.input.value;
    i++;
    console.log(toDoArray);
  };

  input: any;

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="toDo">Tasks: </label>
          <input type="text" name="name" ref={input => (this.input = input)} />
          <input type="submit" name="toDo" />
        </form>
        <ReptileList />
      </div>
    );
  }
}

function ReptileList() {
  return (
    <div>
      <ol>
        {toDoArray.map(task => (
          <li key={task}>{task}</li>
        ))}
      </ol>
      <p>here</p>
    </div>
  );
}

export default App;
