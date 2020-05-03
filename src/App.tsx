import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MainScreen } from "./screens/mainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen></MainScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
