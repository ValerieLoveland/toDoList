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
          <input type="text" name="toDo" ref={input => (this.input = input)} />
        </form>
        {/* <ol>
          {toDoArray.map(task => (
            <li>{task}</li>
          ))}
        </ol> */}
        {ReptileList()}
      </div>
    );
  }
}

function ReptileList() {
  return (
    <ol>
      {toDoArray.map(task => (
        <li key={task}>{task}</li>
      ))}
    </ol>
  );
}

export default App;
