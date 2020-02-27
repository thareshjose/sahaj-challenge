import { combineReducers } from "redux";
import sidebarReducer from "./sidebarReducer";

export const rootReducer = combineReducers({
  sidebar: sidebarReducer
});
