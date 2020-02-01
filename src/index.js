import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { fetchTableList, dropdownFilter } from "./reduces/reducer";
import NavBar from "./component/NavBar";
// import Instructions from "./Instructions";
import Wireframe from "./component/Wireframe";
import Requests from "./component/Requests";

const rootReducer = combineReducers({ fetchTableList, dropdownFilter });
const store = createStore(rootReducer, applyMiddleware(thunk));

const ProgrammerTest = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/requests" component={Requests} exact />
          <Route path="/wireframe" component={Wireframe} exact />
          {/* <Route component={Instructions} /> */}
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>
);

render(<ProgrammerTest />, document.getElementById("root"));
