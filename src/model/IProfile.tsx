import { IPersonalInfo } from "./IPersonalInfo";
import { IProfessionalInfo } from "./IProfessionalInfo";
import { ISocialInfo } from "./ISocialInfo";

export interface IProfile {
  personalInfo: IPersonalInfo;
  professionalInfo: IProfessionalInfo;
  socialInfo: ISocialInfo;
}
