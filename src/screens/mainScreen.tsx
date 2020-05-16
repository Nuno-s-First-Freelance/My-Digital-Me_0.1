import React, { useState, useReducer } from "react";
import { View, Text, Button } from "react-native";
import { SocialInfo, PersonalInfo, ProfessionalInfo } from "../components";
import globalStyles from "../styles/globalStyles";
import { BUTTON_LABELS } from "../constants/ButtonLabels";
import {
  rootReducer,
  initialState,
  actions,
} from "../redux/reducer";

const MainScreen = () => {
  const [showSocialInfo, setShowSocialInfo] = useState(false);
  const [showProfessionalInfo, setShowProfessionalInfo] = useState(false);
  
  const [state, dispatch] = useReducer(rootReducer, initialState);

  console.log("State Name", state.name);

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
              onPress={() => {
                setShowProfessionalInfo(true);
                dispatch(actions.CHANGE_NAME({ name: "hello" }));
              }}
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
