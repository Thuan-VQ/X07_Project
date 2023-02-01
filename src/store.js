import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./Reducers/authReducer";
import { forgotPasswordReducer, profileReducer } from "./Reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { categoryJobReducer, jobReducer } from "./Reducers/jobReducer";

const reducer = combineReducers({
  auths: authReducer,
  profiles: profileReducer,
  forgotPassword: forgotPasswordReducer,
  allJobs: jobReducer,
  categories: categoryJobReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
let initialState = {};
const middleware = [thunk];
const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export let persistor = persistStore(store);
export default store;
