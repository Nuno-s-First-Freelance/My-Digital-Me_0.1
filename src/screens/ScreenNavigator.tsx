import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { MainScreen, LoginScreen, SCREENS } from ".";

const ScreenNavigator = createStackNavigator(
  {
    // Login: LoginScreen,
    Main: MainScreen,
  },
  {
    navigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#000",
      },
    },
    headerMode: "none"
    // initialRouteName: SCREENS.LOGIN_SCREEN
  }
);

const container = createAppContainer(ScreenNavigator);

export default container;
