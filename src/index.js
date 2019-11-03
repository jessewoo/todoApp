import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// React and Redux are independent libraries, React-Redux makes the connection between the two
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import ReduxPromise from "redux-promise";

// With plan Redux store, you can do simple synchronous updates by dispatching an action
// Middleware extends the store's ability - can write async logic that interacts with the store
// Basic Redux side effects logic, including synchronous logic that need access to the store, and simple async logic like Ajax request
// Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
import thunk from "redux-thunk";

import reducers from "./reducers";

// Middleware are GATE KEEPERS - from Action Creator to Reducer
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(
  createStore
);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
