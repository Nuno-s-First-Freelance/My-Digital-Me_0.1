import React from "react";
import { StyleSheet, View } from "react-native";
import { ScreenNavigator } from "./screens";

export default function App() {
  return (
    <View style={styles.container}>
      <ScreenNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
