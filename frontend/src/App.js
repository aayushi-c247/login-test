import React from "react";
import { Router } from "react-router-dom";
import './App.css';
import RenderRoutes from "./routes"
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { createLogicMiddleware } from "redux-logic";
import {RootReducer} from "./redux";
import {allLogics} from "./redux";
import { routerMiddleware } from "react-router-redux";

/* Binding the the main logic folder for creating logic files */
const logicMiddleware = createLogicMiddleware(allLogics);

/*History for pushing and routing to path */
const history = createBrowserHistory({ basename: "/" });

const middlewares = [logicMiddleware, routerMiddleware(history)];

/* For logging reducer data in console */
middlewares.push(logger);

/* Creating store and coneting to midleware */
export const store = createStore(RootReducer, applyMiddleware(...middlewares));


function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
        <Router history={history}>
          <React.Suspense fallback={"Loading..."}>
            <RenderRoutes />
          </React.Suspense>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
