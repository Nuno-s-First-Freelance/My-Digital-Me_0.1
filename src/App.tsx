import React from "react";
import { View, Platform } from "react-native";
import ScreenNavigator from "./screens/ScreenNavigator";
import globalStyles from "./styles/globalStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Toast from "./components/imported/Toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Provider store={store}>
      {/* {Platform.OS === "web" && <Header children={"my header"}></Header>} */}
      <View style={globalStyles.appStyle}>
        <ScreenNavigator />
        <Toast />
      </View>
      {/* {Platform.OS === "web" && <Footer text={"my footer"}></Footer>} */}
    </Provider>
  );
}
