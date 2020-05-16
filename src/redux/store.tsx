import { createStore } from "redux";
import { ProfileState } from "./profileReducer";
import { createReducer } from "@reduxjs/toolkit";

export const initialState = {
  profileState: ProfileState,
};

const rootReducer = createReducer(initialState, {
  start: (initialState, action) => initialState,
});

export const store = createStore(rootReducer);
