import React from "react";
import { View, StyleSheet } from "react-native";
import { PersonalInfo, ProfessionalInfo } from "../components";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProfessionalInfo />
      </View>
      <View style={styles.column}>
        <PersonalInfo />
      </View>
      <View style={styles.column}>
        <ProfessionalInfo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    justifyContent: "center",
  },
  column: {
    width: "33%", // is 50% of container width
  },
});

export default MainScreen;
