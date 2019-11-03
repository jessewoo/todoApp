import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateToDoList } from "./actions/index";

import { FormControl, Input, InputLabel, Button } from "@material-ui/core";

// With the connect function (bottom), transforms this Component to a CONTAINER, which is aware of the state
let defaultState = {};
class ToDoListWithRedux extends Component {
  constructor(props) {
    super(props);

    defaultState = {
      newToDoTask: ""
    };

    this.state = defaultState;
  }

  handleChange = event => {
    this.setState({ newToDoTask: event.currentTarget.value });
  };

  submitNewToDoTask = () => {
    this.props.updateToDoList(this.state.newToDoTask);

    this.setState({ newToDoTask: "" });
  };

  showToDoList = () => {
    return (
      <ul>
        {this.props.todoList.map((task, index) => (
          <li key={`reduxlistitem_${index}`}>{task}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <p>To Do List (redux pattern)</p>
        <FormControl>
          <InputLabel htmlFor="todoTask">To Do Task</InputLabel>
          <Input
            id="todoTask"
            value={this.state.newToDoTask}
            onChange={e => this.handleChange(e)}
          />
        </FormControl>
        <Button variant="contained" onClick={() => this.submitNewToDoTask()}>
          Send
        </Button>
        {this.props.todoList.length > 0 ? this.showToDoList() : null}
      </div>
    );
  }
}

// EXTRACTING DATA = MapStateToProps
// MapStateToProps take in the application STATE,
// returns an object which will be available in the component to be used with this.props.todolist. It is the GLUE.
// Specify what slice of state we want to provide

// DISPATCHING ACTION = MapDispatchToProps
// mapDispatchToProps is used for dispatching actions to the store.
// dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
// With React Redux, your components never access the store directly - connect does it for you.
// mapDispatchToProps create functions that dispatch when called, and pass those functions as props to your component.
const mapStateToProps = ({ todoList }) => {
  return { todoList };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateToDoList }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoListWithRedux);
