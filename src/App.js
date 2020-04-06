import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { restaurantReducer } from "../src/redux/restos/restoReducer";
import RestoContainer from "../src/containers/RestoContainer";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // used for redux dev tool
const store = createStore(
  restaurantReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RestoContainer />
      </div>
    </Provider>
  );
}

export default App;
