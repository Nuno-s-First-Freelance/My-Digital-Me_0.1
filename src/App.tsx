import React from "react";
import { View } from "react-native";
import ScreenNavigator from "./screens/ScreenNavigator";
import globalStyles from "./styles/globalStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Toast from "./components/imported/Toast";

export default function App() {
  return (
    <Provider store={store}>
      <View style={globalStyles.appStyle}>
        <ScreenNavigator />
        <Toast />
      </View>
    </Provider>
  );
}
