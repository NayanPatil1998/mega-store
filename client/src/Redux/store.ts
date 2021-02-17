import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./Reducers";



const store = createStore(reducer, composeWithDevTools(applyMiddleware()));


export default store;