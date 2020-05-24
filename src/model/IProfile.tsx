import { IProfessionalInfo } from "./IProfessionalInfo";

export interface IProfile {
  personalInfo: {
    name: string;
    email: string;
  };
  professionalInfo: IProfessionalInfo;
  socialInfo: {
    linkedIn: string;
    gitHub: string;
    facebook: string;
    instagram: string;
  };
}
