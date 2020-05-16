import { createStore } from "redux";
import { ProfileState } from "./ProfileReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const initialState = {
  profileState: ProfileState,
};

export const store = createStore(
  (initialState, action) => initialState,
  composeWithDevTools()
);
