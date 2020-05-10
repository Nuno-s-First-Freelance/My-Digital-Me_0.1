import React from "react";
import { Linking } from "expo";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => openUrl(linkedInUrl)}>
        <Text style={styles.link}>LinkedIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openUrl(gitHubUrl)}>
        <Text style={styles.link}>GitHub</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  link: { color: "blue" },
});

export default SocialInfo;
