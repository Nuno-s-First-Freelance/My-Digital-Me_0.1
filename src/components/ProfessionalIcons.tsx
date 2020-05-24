import React from "react";
import { Linking, Text, Platform } from "react-native";
import { IconButton } from "react-native-paper";
import { theme } from "../theme";
import globalStyles from "../styles/globalStyles";
import { accInfo } from "../assets/personal";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../redux/store";
import { ProfessionalInfoActions } from "../redux/ProfessionalInfoReducer";
import { SocialInfoActions } from "../redux/SocialInfoReducer";

const ProfessionalIcons = () => {
  const professionalInfoState = useSelector(
    (state: IStoreState) => state.professional
  );
  const dispatch = useDispatch();

  const isWorkInfoOpen = professionalInfoState.isWorkInfoOpen;

  return (
    <>
      {Platform.OS === "web" && (
        <Text style={globalStyles.textHeader}>My Digital Work</Text>
      )}
      <IconButton
        icon="github-circle"
        size={50}
        onPress={() => Linking.openURL(accInfo.socialLinks.github)}
        color={theme.colors.primary}
      />
      <IconButton
        icon="linkedin"
        size={50}
        onPress={() => Linking.openURL(accInfo.socialLinks.linkedin)}
        color={theme.colors.primary}
      />
      <IconButton
        icon={isWorkInfoOpen ? "briefcase-upload" : "briefcase-download"}
        size={50}
        onPress={() => {
          dispatch(ProfessionalInfoActions.showWorkInfo(!isWorkInfoOpen));
          dispatch(SocialInfoActions.showSocialInfo(false));
        }}
        color={theme.colors.secondary}
      />
    </>
  );
};

export default ProfessionalIcons;
