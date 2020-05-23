import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginScreen from "./auth/LoginScreen";
import RegisterScreen from "./auth/RegisterScreen";
import ForgotPasswordScreen from "./auth/ForgotPasswordScreen";
import MainScreen from "./mainScreen";
import { SCREENS } from "../constants";

const ScreenNavigator = createStackNavigator(
  {
    [SCREENS.LOGIN_SCREEN]: LoginScreen,
    [SCREENS.REGISTER_SCREEN]: RegisterScreen,
    [SCREENS.FORGOT_PASSWORD_SCREEN]: ForgotPasswordScreen,
    [SCREENS.MAIN_SCREEN]: MainScreen,
  },
  {
    navigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#000",
      },
    },
    headerMode: "none",
    initialRouteName: SCREENS.MAIN_SCREEN,
  }
);

const container = createAppContainer(ScreenNavigator);

export default container;
