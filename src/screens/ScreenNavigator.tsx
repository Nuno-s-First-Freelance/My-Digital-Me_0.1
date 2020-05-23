import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {
  MainScreen,
  LoginScreen,
  SCREENS,
  ForgotPasswordScreen,
  RegisterScreen,
} from ".";

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
