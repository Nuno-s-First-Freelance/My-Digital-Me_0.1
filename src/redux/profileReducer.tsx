import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "../model";

export interface IProfileState {
  profile: IProfile;
  isWorkInfoOpen: boolean;
  isSocialInfoOpen: boolean;
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
    workInfo: {
      profession: "",
    },
  },
  isSocialInfoOpen: false,
  isWorkInfoOpen: false,
};

export const ProfileActionTypes = {
  UPDATE_PROFILE: "UPDATE_PROFILE",
  SHOW_WORK_INFO: "SHOW_WORK_INFO",
  SHOW_SOCIAL_INFO: "SHOW_SOCIAL_INFO",
};

export const ProfileActions = {
  updateProfile: createAction<IProfile>(ProfileActionTypes.UPDATE_PROFILE),
  showWorkInfo: createAction<boolean>(ProfileActionTypes.SHOW_WORK_INFO),
  showSocialInfo: createAction<boolean>(ProfileActionTypes.SHOW_SOCIAL_INFO),
};

export const profileReducer = createReducer(ProfileState, {
  [ProfileActionTypes.UPDATE_PROFILE]: (
    state,
    action: PayloadAction<IProfile>
  ) => {
    state.profile = action.payload;
  },
  [ProfileActionTypes.SHOW_WORK_INFO]: (
    state,
    action: PayloadAction<boolean>
  ) => {
    state.isWorkInfoOpen = action.payload;
  },
  [ProfileActionTypes.SHOW_SOCIAL_INFO]: (
    state,
    action: PayloadAction<boolean>
  ) => {
    state.isSocialInfoOpen = action.payload;
  },
});
