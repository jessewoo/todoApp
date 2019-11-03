import { combineReducers } from "redux";
import ToDoListReducer from "./reducer_todolist";

// Each reducer is a function that returns a PIECE of the application state, can have multiple reducers

// The combination of reducers generates the APPLICATION STATE
// The rootReducer will add a KEY to our global application
const rootReducer = combineReducers({
  todoList: ToDoListReducer
});

export default rootReducer;
