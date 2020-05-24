import { createStore, combineReducers } from "redux";
import { personalInfoReducer, IPersonalInfoState } from "./PersonalInfoReducer";
import { authReducer, IAuthState } from "./AuthReducer";
import { toasterReducer, IToasterState } from "./ToasterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  professionalInfoReducer,
  IProfessionalInfoState,
} from "./ProfessionalInfoReducer";
import { socialInfoReducer, ISocialInfoState } from "./SocialInfoReducer";

export interface IStoreState {
  auth: IAuthState;
  toaster: IToasterState;
  social: ISocialInfoState;
  personal: IPersonalInfoState;
  professional: IProfessionalInfoState;
}

//
// IMPORTANT:: names MUST match
//

export const reducers = combineReducers({
  auth: authReducer,
  toaster: toasterReducer,
  social: socialInfoReducer,
  personal: personalInfoReducer,
  professional: professionalInfoReducer,
});

export const store = createStore(reducers, composeWithDevTools());
