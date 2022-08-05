import { applyMiddleware } from "redux";
import { createStore } from "redux";

import reducer from "./reducer/root.reducer";
import { fetchToDoMiddleware } from './middleware/fetchToDo';

const middleware = applyMiddleware(fetchToDoMiddleware);
export default createStore(reducer, {todoList: []}, middleware);