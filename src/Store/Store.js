import { createStore } from "redux";
import { TaskReducer } from "./TaskReducer";

let store = createStore(TaskReducer);

export default store;
