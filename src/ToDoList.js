import React, { useState } from "react";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";

// Functional programming, use of hooks, ES7
const ToDoList = ({ props }) => {
  const [newToDoTask, setToDoTask] = useState("");
  const [toDoTaskList, setToDoTaskList] = useState([]);

  const handleChange = event => {
    setToDoTask(event.currentTarget.value);
  };

  const submitNewToDoTask = () => {
    setToDoTaskList([...toDoTaskList, newToDoTask]);
    setToDoTask("");
  };

  const showToDoList = () => {
    return (
      <ul>
        {toDoTaskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <p>To Do List (internal state)</p>
      <FormControl>
        <InputLabel htmlFor="todoTask">To Do Task</InputLabel>
        <Input id="todoTask" value={newToDoTask} onChange={handleChange} />
      </FormControl>
      <Button variant="contained" onClick={submitNewToDoTask}>
        Send
      </Button>
      {toDoTaskList.length > 0 ? showToDoList() : null}
    </div>
  );
};

export default ToDoList;
