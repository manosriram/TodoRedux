import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducerOne from "./Store/Reducers/ReducerOne";
import reducerTwo from "./Store/Reducers/ReducerTwo";

const rootReducer = combineReducers({
  One: reducerOne,
  Two: reducerTwo
});

// import reducer from "./Store/Reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
