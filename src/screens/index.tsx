export { default as MainScreen } from "./MainScreen";
export { default as LoginScreen } from "./auth/LoginScreen";
export { default as RegisterScreen } from "./auth/RegisterScreen";
export { default as ForgotPasswordScreen } from "./auth/ForgotPasswordScreen";

// These must be the same as in ScreenNavigator.tsx
export const SCREENS = {
  LOGIN_SCREEN: "Login",
  LOGOUT_SCREEN: "Logout",
  REGISTER_SCREEN: "Register",
  MAIN_SCREEN: "Main",
};
