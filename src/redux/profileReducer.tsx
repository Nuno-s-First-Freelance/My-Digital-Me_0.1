import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "../model";
import { ProfessionalInfoState } from "./ProfessionalInfoReducer";

export interface IProfileState {
  profile: IProfile;
}

export const ProfileState: IProfileState = {
  profile: {
    personalInfo: {
      name: "",
      email: "",
    },
    socialInfo: {
      facebook: "",
      gitHub: "",
      instagram: "",
      linkedIn: "",
    },
    professionalInfo: ProfessionalInfoState.professionalInfo,
  },
};

export const ProfileActionTypes = {
  UPDATE_PROFILE: "UPDATE_PROFILE",
};

export const ProfileActions = {
  updateProfile: createAction<IProfile>(ProfileActionTypes.UPDATE_PROFILE),
};

export const profileReducer = createReducer(ProfileState, {
  [ProfileActionTypes.UPDATE_PROFILE]: (
    state,
    action: PayloadAction<IProfile>
  ) => {
    state.profile = action.payload;
  },
});
