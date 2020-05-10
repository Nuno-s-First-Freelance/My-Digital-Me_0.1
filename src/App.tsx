import React from "react";
import { View } from "react-native";
import ScreenNavigator from "./screens/ScreenNavigator";
import globalStyles from "./styles/globalStyles";

export default function App() {
  return (
    <View style={globalStyles.appStyle}>
      <ScreenNavigator />
    </View>
  );
}
