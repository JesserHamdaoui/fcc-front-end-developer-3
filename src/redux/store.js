import { createStore } from "redux";
import { displayReducer } from "./display/displayReducer";

export const store = createStore(displayReducer);
