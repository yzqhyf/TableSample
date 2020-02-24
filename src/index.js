import React, { Suspense, lazy } from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { fetchTableList, dropdownFilter } from "./reduces/reducer";
import NavBar from "./component/NavBar";

const rootReducer = combineReducers({ fetchTableList, dropdownFilter });
const store = createStore(rootReducer, applyMiddleware(thunk));

const Wireframe = lazy(() => import("./component/Wireframe"));
const Requests = lazy(() => import("./component/Requests"));
const Search = lazy(() => import("./component/Search"));

const ProgrammerTest = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Switch>
          <Route path="/requests" exact>
            <Requests />
          </Route>
          <Route path="/wireframe" exact>
            <Wireframe />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route exact path="/" render={() => <Redirect to="/search" />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </Provider>
);

render(<ProgrammerTest />, document.getElementById("root"));
