import React from "react";
import { View } from "react-native";
import { SocialInfo, PersonalInfo, ProfessionalInfo } from "../components";
import globalStyles from "../styles/globalStyles";

const MainScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.column}>
        <ProfessionalInfo />
      </View>
      <View style={globalStyles.column}>
        <PersonalInfo />
      </View>
      <View style={globalStyles.column}>
        <SocialInfo />
      </View>
    </View>
  );
};

export default MainScreen;
