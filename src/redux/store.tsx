import { createStore, combineReducers } from "redux";
import { profileReducer, IProfileState } from "./ProfileReducer";
import { authReducer, IAuthState } from "./AuthReducer";
import { toasterReducer, IToasterState } from "./ToasterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  professionalInfoReducer,
  IProfessionalInfoState,
} from "./ProfessionalInfoReducer";

export interface IStoreState {
  auth: IAuthState;
  toaster: IToasterState;
  profile: IProfileState;
  professional: IProfessionalInfoState;
}

export const reducers = combineReducers({
  toaster: toasterReducer,
  profile: profileReducer,
  auth: authReducer,
  professional: professionalInfoReducer,
});

export const store = createStore(reducers, composeWithDevTools());
