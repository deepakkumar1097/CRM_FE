import { createStore } from "redux";
import darkModeReducer from "./reducers/darkModeReducer";

const store = createStore(darkModeReducer);

export default store;
