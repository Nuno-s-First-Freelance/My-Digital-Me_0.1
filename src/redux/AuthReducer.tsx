import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AuthDetails } from "../firebase/constants";
import {
  SignInUser,
  LoginUser,
  LogoutUser,
  SendEmailWithPassword,
} from "../firebase";

interface IAuthState {
  isUserOnline: boolean;
}

export const AuthState: IAuthState = {
  isUserOnline: false,
};

export const AuthActionTypes = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
  REGISTER: "REGISTER",
  RECOVER_PASSWORD: "RECOVER_PASSWORD",
};

export const AuthActions = {
  logIn: createAction<AuthDetails>(AuthActionTypes.LOG_IN),
  logOut: createAction(AuthActionTypes.LOG_OUT),
  register: createAction<AuthDetails>(AuthActionTypes.REGISTER),
  recoverPassword: createAction<string>(AuthActionTypes.RECOVER_PASSWORD),
};

export const authReducer = createReducer(AuthState, {
  [AuthActionTypes.LOG_IN]: (state, action: PayloadAction<AuthDetails>) => {
    LoginUser({
      email: action.payload.email,
      password: action.payload.password,
    })
      .then(() => (state.isUserOnline = true))
      .catch(() => {
        // dispatch error ?
      });
  },
  [AuthActionTypes.REGISTER]: (state, action: PayloadAction<AuthDetails>) => {
    SignInUser({
      email: action.payload.email,
      password: action.payload.password,
    })
      .then(() => {
        // dispatch success ?
      })
      .catch(() => {
        // dispatch error ?
      });
  },
  [AuthActionTypes.RECOVER_PASSWORD]: (
    state,
    action: PayloadAction<string>
  ) => {
    SendEmailWithPassword(action.payload)
      .then(() => {
        // dispatch success ?
      })
      .catch(() => {
        // dispatch error ?
      });
  },
  [AuthActionTypes.LOG_OUT]: (state, action: PayloadAction) => {
    LogoutUser();
    state.isUserOnline = false;
  },
});
