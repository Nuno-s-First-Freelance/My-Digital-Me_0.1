import React from "react";
import { Text, Linking, Platform } from "react-native";
import globalStyles from "../styles/globalStyles";
import { theme } from "../theme";
import { IconButton } from "react-native-paper";
import { accInfo } from "../assets/personal";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../redux/store";
import { SocialInfoActions } from "../redux/SocialInfoReducer";
import { ProfessionalInfoActions } from "../redux/ProfessionalInfoReducer";

const SocialIcons = () => {
  const socialInfoState = useSelector((state: IStoreState) => state.social);
  const dispatch = useDispatch();

  const isSocialInfoOpen = socialInfoState.isSocialInfoOpen;

  return (
    <>
      {Platform.OS === "web" && (
        <Text style={globalStyles.textHeader}>My Digital Social</Text>
      )}
      <IconButton
        icon="facebook"
        size={50}
        onPress={() => Linking.openURL(accInfo.socialLinks.facebook)}
        color={theme.colors.primary}
      />
      <IconButton
        icon="instagram"
        size={50}
        onPress={() => Linking.openURL(accInfo.socialLinks.instagram)}
        color={theme.colors.primary}
      />
      <IconButton
        icon={isSocialInfoOpen ? "email-open" : "email"}
        size={50}
        onPress={() => {
          dispatch(SocialInfoActions.showSocialInfo(!isSocialInfoOpen));
          dispatch(ProfessionalInfoActions.showWorkInfo(false));
        }}
        color={theme.colors.secondary}
      />
    </>
  );
};

export default SocialIcons;
