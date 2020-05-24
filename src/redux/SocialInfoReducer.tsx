import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { ISocialInfo } from "../model";

export interface ISocialInfoState {
  socialInfo: ISocialInfo;
  isSocialInfoOpen: boolean;
}

export const SocialInfoState: ISocialInfoState = {
  socialInfo: {
    email: "",
    instagram: "",
    mobileNumber: "",
  },
  isSocialInfoOpen: false,
};

export const SocialInfoActionTypes = {
  UPDATE_SOCIAL_INFO: "UPDATE_SOCIAL_INFO",
  SHOW_SOCIAL_INFO: "SHOW_SOCIAL_INFO",
};

export const SocialInfoActions = {
  updateSocialInfo: createAction<ISocialInfo>(
    SocialInfoActionTypes.UPDATE_SOCIAL_INFO
  ),
  showSocialInfo: createAction<boolean>(SocialInfoActionTypes.SHOW_SOCIAL_INFO),
};

export const socialInfoReducer = createReducer(SocialInfoState, {
  [SocialInfoActionTypes.UPDATE_SOCIAL_INFO]: (
    state,
    action: PayloadAction<ISocialInfo>
  ) => {
    state.socialInfo = action.payload;
  },
  [SocialInfoActionTypes.SHOW_SOCIAL_INFO]: (
    state,
    action: PayloadAction<boolean>
  ) => {
    state.isSocialInfoOpen = action.payload;
  },
});
