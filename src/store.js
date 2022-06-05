import { applyMiddleware, createStore } from "redux";
import counterReducer from "./services/reducers/counterReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const store = createStore(counterReducer,composedEnhancer);
export default store;