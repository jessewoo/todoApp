import { UPDATE_TODOLIST } from "../actions/index";

let defaultToDoList = [];

export default function(state = defaultToDoList, action) {
  console.log("Action Received from Update To Do List", action, state);

  switch (action.type) {
    case UPDATE_TODOLIST:
      return action.payload;

    default:
    // do nothing
  }
  return state;
}
