import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./ToDoList";
import ToDoListWithRedux from "./ToDoListWithRedux";

function App() {
  return (
    <div className="App">
      <div className="App-col">
        <ToDoList />
      </div>
      <div className="App-col">
        <ToDoListWithRedux />
      </div>
    </div>
  );
}

export default App;
