import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { SocialInfo, PersonalInfo, ProfessionalInfo } from "../components";
import globalStyles from "../styles/globalStyles";
import { BUTTON_LABELS } from "../constants/ButtonLabels";

const MainScreen = () => {
  const [showSocialInfo, setShowSocialInfo] = useState(false);
  const [showProfessionalInfo, setShowProfessionalInfo] = useState(false);

  // TODO: add management for small screen devices
  // like hide columns by default
  return (
    <View style={globalStyles.mainContainer}>
      <Text style={globalStyles.header}>My Digital Me</Text>
      <View style={globalStyles.navigatorContainer}>
        <View style={globalStyles.column}>
          {showProfessionalInfo ? (
            <ProfessionalInfo />
          ) : (
            <Button
              color="red"
              title={BUTTON_LABELS.SHOW_PROFESSIONAL_INFO}
              onPress={() => setShowProfessionalInfo(true)}
            ></Button>
          )}
        </View>
        <View style={globalStyles.column}>
          <PersonalInfo />
        </View>
        <View style={globalStyles.column}>
          {showSocialInfo ? (
            <SocialInfo />
          ) : (
            <Button
              color="green"
              title={BUTTON_LABELS.SHOW_SOCIAL_INFO}
              onPress={() => setShowSocialInfo(true)}
            ></Button>
          )}
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
