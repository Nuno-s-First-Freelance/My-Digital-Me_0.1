import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

export const actionTypes = {
  CHANGE_NAME: "CHANGE_NAME",
};

export const actions = {
  CHANGE_NAME: createAction<any>(actionTypes.CHANGE_NAME),
  CHANGE_FUNCTION: "CHANGE_FUNCTION",
};

export interface state {
  name: string;
  profession: string;
}

export const initialState: state = {
  name: "firstName",
  profession: "firstProfession",
};

export const rootReducer = createReducer(initialState, {
  [actionTypes.CHANGE_NAME]: (state, action: PayloadAction<any>) => {
    state.name = action.payload.name;
  },
});
