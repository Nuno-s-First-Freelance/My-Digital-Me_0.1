import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "../model";
import { IPersonalInfo } from "../model/IPersonalInfo";

export interface IPersonalInfoState {
  personalInfo: IPersonalInfo;
  isPersonalInfoOpen: boolean;
}

export const PersonalInfoState: IPersonalInfoState = {
  isPersonalInfoOpen: false,
  personalInfo: {
    age: 0,
    currentCountry: "",
    gender: "",
    name: "",
    nationality: "",
  },
};

export const PersonalInfoActionTypes = {
  UPDATE_PERSONAL_INFO: "UPDATE_PERSONAL_INFO",
  SHOW_PERSONAL_INFO: "SHOW_PERSONAL_INFO",
};

export const PersonalInfoActions = {
  updatePersonalInfo: createAction<IProfile>(
    PersonalInfoActionTypes.UPDATE_PERSONAL_INFO
  ),
  showPersonalInfo: createAction<IProfile>(
    PersonalInfoActionTypes.SHOW_PERSONAL_INFO
  ),
};

export const personalInfoReducer = createReducer(PersonalInfoState, {
  [PersonalInfoActionTypes.UPDATE_PERSONAL_INFO]: (
    state,
    action: PayloadAction<IPersonalInfo>
  ) => {
    state.personalInfo = action.payload;
  },
  [PersonalInfoActionTypes.SHOW_PERSONAL_INFO]: (
    state,
    action: PayloadAction<boolean>
  ) => {
    state.isPersonalInfoOpen = action.payload;
  },
});
