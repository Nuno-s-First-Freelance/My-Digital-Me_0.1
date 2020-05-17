import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { ToasterInfo } from "../components/imported/Toast";

export interface IToasterState {
  toaster: ToasterInfo;
}

export const ToasterState: IToasterState = {
  toaster: { message: "", type: undefined },
};

export const ToasterActionTypes = {
  UPDATE_TOASTER: "UPDATE_TOASTER",
};

export const ToasterActions = {
  updateToaster: createAction<ToasterInfo>(ToasterActionTypes.UPDATE_TOASTER),
};

export const toasterReducer = createReducer(ToasterState, {
  [ToasterActionTypes.UPDATE_TOASTER]: (
    state,
    action: PayloadAction<ToasterInfo>
  ) => {
    state.toaster = action.payload;
  },
});
