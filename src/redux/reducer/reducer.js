import { combineReducers } from "redux";
import sidebarReducer from "./sidebarReducer";
import mailReducer from "./mailReducer";

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  mail: mailReducer
});
