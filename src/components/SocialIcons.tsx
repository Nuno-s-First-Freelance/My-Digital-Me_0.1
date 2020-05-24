import React from "react";
import { Text, Linking, Platform } from "react-native";
import globalStyles from "../styles/globalStyles";
import { theme } from "../theme";
import { IconButton } from "react-native-paper";
import {accInfo} from "../assets/personal";

const SocialIcons = () => {
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
        icon={true ? "email" : "email-open"}
        size={50}
        onPress={() => Linking.openURL(accInfo.socialLinks.linkedin)}
        color={theme.colors.secondary}
      />
    </>
  );
};

export default SocialIcons;
