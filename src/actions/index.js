// The ACTION will flow thru all the REDUCERS
export const UPDATE_TODOLIST = "UPDATE_TODOLIST";

// The promise doesn't contain the data, it is returning a PROMISE
// If the payload is a promise, stop it then reloads it and resolves the request
export function updateToDoList(newToDoTask) {
  // Use of thunk - write action creators that return a function instead of an action
  // The function receives store methods dispatch, getState
  return (dispatch, getState) => {
    let currentToDoTaskList = getState().todoList;

    // Able to do multiple dispatch if needed
    // THUNK - function that wraps an expression to delay its evaluation - past tense version of "thnk"
    // https://github.com/reduxjs/redux-thunk#whats-a-thunk
    dispatch({
      type: UPDATE_TODOLIST,
      payload: [...currentToDoTaskList, newToDoTask]
    });
  };
}
