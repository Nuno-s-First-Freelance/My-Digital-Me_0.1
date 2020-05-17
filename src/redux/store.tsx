import { createStore, combineReducers } from "redux";
import { profileReducer, IProfileState } from "./ProfileReducer";
import { authReducer, IAuthState } from "./AuthReducer";
import { toasterReducer, IToasterState } from "./ToasterReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export interface IStoreState {
  auth: IAuthState;
  toaster: IToasterState;
  profile: IProfileState;
}

export const reducers = combineReducers({
  toaster: toasterReducer,
  profile: profileReducer,
  auth: authReducer,
});

export const store = createStore(reducers, composeWithDevTools());
