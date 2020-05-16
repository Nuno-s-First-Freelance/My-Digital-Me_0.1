import { createStore } from "redux";
import { ProfileState } from "./ProfileReducer";

export const initialState = {
  profileState: ProfileState,
};

export const store = createStore((initialState, action) => initialState);
