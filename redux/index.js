import logger from "redux-logger";
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";

import authReducer from "./Auth.js";
import checklistReducer from "./Checklists.js";
import questionReducer from "./Questions.js";

import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

function configureStore(initialState) {
  return createStoreWithMiddleware(
    combineReducers({
      authReducer,
      checklistReducer,
      questionReducer
    }),
    initialState
  );
}

const store = configureStore();
export default store;
