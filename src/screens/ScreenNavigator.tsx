import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { MainScreen, LoginScreen } from ".";

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
    // initialRouteName: 'Login'
  }
);

const container = createAppContainer(ScreenNavigator);

export default container;
