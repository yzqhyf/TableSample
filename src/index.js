import React, { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { fetchTableList, dropdownFilter } from "./reduces/reducer";
import NavBar from "./component/NavBar";

const rootReducer = combineReducers({ fetchTableList, dropdownFilter });
const store = createStore(rootReducer, applyMiddleware(thunk));

const Wireframe = React.lazy(() => import("./component/Wireframe"));
const Requests = React.lazy(() => import("./component/Requests"));
const Search = React.lazy(() => import("./component/Search"));

const ProgrammerTest = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Switch>
          <Route path="/requests" component={Requests} exact />
          <Route path="/wireframe" component={Wireframe} exact />
          <Route path="/Search" component={Search} exact />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </Provider>
);

render(<ProgrammerTest />, document.getElementById("root"));
