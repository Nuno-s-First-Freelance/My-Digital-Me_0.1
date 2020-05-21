import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AuthDetails } from "../firebase/constants";
import {
  SignInUser,
  LoginUser,
  LogoutUser,
  SendEmailWithPassword,
} from "../firebase";

export interface IAuthState {
  authDetails: AuthDetails;
  isUserOnline: boolean;
  errorMessage: string;
  loading: boolean;
}

export const AuthState: IAuthState = {
  authDetails: { email: "", password: "" },
  isUserOnline: false,
  errorMessage: "",
  loading: false,
};

export const AuthActionTypes = {
  UPDATE_AUTH_DETAILS: "UPDATE_AUTH_DETAILS",
  UPDATE_LOADING: "UPDATE_LOADING",
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
  REGISTER: "REGISTER",
  RECOVER_PASSWORD: "RECOVER_PASSWORD",
};

export const AuthActions = {
  updateAuthDetails: createAction<AuthDetails>(
    AuthActionTypes.UPDATE_AUTH_DETAILS
  ),
  updateLoading: createAction<boolean>(AuthActionTypes.UPDATE_LOADING),
  logOut: createAction(AuthActionTypes.LOG_OUT),
  logIn: createAction<AuthDetails>(AuthActionTypes.LOG_IN),
  register: createAction<AuthDetails>(AuthActionTypes.REGISTER),
  recoverPassword: createAction<string>(AuthActionTypes.RECOVER_PASSWORD),
};

export const authReducer = createReducer(AuthState, {
  [AuthActionTypes.UPDATE_LOADING]: (state, action: PayloadAction<boolean>) => {
    state.loading = action.payload;
  },
  [AuthActionTypes.UPDATE_AUTH_DETAILS]: (
    state,
    action: PayloadAction<AuthDetails>
  ) => {
    state.authDetails = action.payload;
  },
  [AuthActionTypes.LOG_IN]: (state, action: PayloadAction<AuthDetails>) => {
    LoginUser({
      email: action.payload.email,
      password: action.payload.password,
    })
      .then((result) => {
        if (!!result.error) {
          state.errorMessage = result.error;
          console.log("login failed", result.error);
          state.isUserOnline = false;
        } else {
          state.errorMessage = "";
          state.isUserOnline = true;
        }
      })
      .catch((result) => {
        console.log("login failed", result);
      });
  },
  [AuthActionTypes.REGISTER]: (state, action: PayloadAction<AuthDetails>) => {
    SignInUser({
      email: action.payload.email,
      password: action.payload.password,
    })
      .then((result) => {
        console.log("register done", result);
        // dispatch success ?
      })
      .catch((result) => {
        console.log("register failed", result);
        // dispatch success ?
      });
  },
  [AuthActionTypes.RECOVER_PASSWORD]: (
    state,
    action: PayloadAction<string>
  ) => {
    SendEmailWithPassword(action.payload)
      .then((result) => {
        console.log("recover password done", result);
        // dispatch success ?
      })
      .catch((result) => {
        console.log("recover password failed", result);
        // dispatch success ?
      });
  },
  [AuthActionTypes.LOG_OUT]: (state) => {
    LogoutUser();
    state.isUserOnline = false;
  },
});
