import { createStore } from "redux";
import { ProfileState } from "./ProfileReducer";
import { AuthState } from "./AuthReducer";

export const initialState = {
  profileState: ProfileState,
  authState: AuthState
};

export const store = createStore((initialState, action) => initialState);
