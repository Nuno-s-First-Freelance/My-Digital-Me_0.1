import React from "react";
import { View, TouchableOpacity, Text, Linking } from "react-native";
import globalStyles from "../styles/globalStyles";

const SocialInfo = () => {
  const linkedInUrl = "https://www.linkedin.com/in/nm-fullstack-dev/";
  const gitHubUrl = "https://github.com/Nuno-s-First-Freelance";

  const openUrl = (url: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + linkedInUrl);
      }
    });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>SocialInfo</Text>
      <TouchableOpacity onPress={() => openUrl(linkedInUrl)}>
        <Text style={globalStyles.link}>LinkedIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openUrl(gitHubUrl)}>
        <Text style={globalStyles.link}>GitHub</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialInfo;
