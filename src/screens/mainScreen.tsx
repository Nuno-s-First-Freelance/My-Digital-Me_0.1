import React, { useReducer } from "react";
import { View, Text, Button } from "react-native";
import { SocialInfo, PersonalInfo, ProfessionalInfo } from "../components";
import globalStyles from "../styles/globalStyles";
import {
  profileReducer,
  ProfileState,
  ProfileActions,
} from "../redux/profileReducer";
import { BUTTON_LABELS } from "../constants";

const MainScreen = () => {
  const [profileState, dispatch] = useReducer(profileReducer, ProfileState);

  const showWorkInfo = profileState.isWorkInfoOpen;
  const showSocialInfo = profileState.isSocialInfoOpen;

  // TODO: add management for small screen devices
  // like hide columns by default
  return (
    <View style={globalStyles.mainContainer}>
      <Text style={globalStyles.header}>My Digital Me</Text>
      <View style={globalStyles.navigatorContainer}>
        <View style={globalStyles.column}>
          {showWorkInfo ? (
            <ProfessionalInfo />
          ) : (
            <Button
              color="red"
              title={BUTTON_LABELS.SHOW_WORK_INFO}
              onPress={() => dispatch(ProfileActions.showWorkInfo(true))}
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
              onPress={() => dispatch(ProfileActions.showSocialInfo(true))}
            ></Button>
          )}
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
