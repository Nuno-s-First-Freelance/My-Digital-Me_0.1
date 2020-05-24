import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { IProfessionalInfo } from "../model";

export interface IProfessionalInfoState {
  professionalInfo: IProfessionalInfo;
  isWorkInfoOpen: boolean;
}

export const ProfessionalInfoState: IProfessionalInfoState = {
  professionalInfo: {
    country: "",
    currentEmployer: "",
    jobTitle: "",
  },
  isWorkInfoOpen: false,
};

export const ProfessionalInfoActionTypes = {
  UPDATE_PROFESSIONAL_INFO: "UPDATE_PROFESSIONAL_INFO",
  SHOW_WORK_INFO: "SHOW_WORK_INFO",
};

export const ProfessionalInfoActions = {
  updateProfessionalInfo: createAction<IProfessionalInfo>(
    ProfessionalInfoActionTypes.UPDATE_PROFESSIONAL_INFO
  ),
  showWorkInfo: createAction<boolean>(
    ProfessionalInfoActionTypes.SHOW_WORK_INFO
  ),
};

export const professionalInfoReducer = createReducer(ProfessionalInfoState, {
  [ProfessionalInfoActionTypes.UPDATE_PROFESSIONAL_INFO]: (
    state,
    action: PayloadAction<IProfessionalInfo>
  ) => {
    state.professionalInfo = action.payload;
  },
  [ProfessionalInfoActionTypes.SHOW_WORK_INFO]: (
    state,
    action: PayloadAction<boolean>
  ) => {
    state.isWorkInfoOpen = action.payload;
  },
});
