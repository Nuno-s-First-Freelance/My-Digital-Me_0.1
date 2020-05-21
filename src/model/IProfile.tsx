export interface IProfile {
  personalInfo: {
    name: string;
    email: string;
  };
  workInfo: {
    profession: string;
  };
  socialInfo: {
    linkedIn: string;
    gitHub: string;
    facebook: string;
    instagram: string;
  };
}
