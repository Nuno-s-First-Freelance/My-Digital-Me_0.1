import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { onAuthStateChangedEvent } from "./firebase/auth-api";
import { initializeFirebase } from "./firebase";
import { MainScreen } from "./screens";

export default function App() {
  initializeFirebase;
  console.log(onAuthStateChangedEvent());
  return (
    <View style={styles.container}>
      <MainScreen />
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
