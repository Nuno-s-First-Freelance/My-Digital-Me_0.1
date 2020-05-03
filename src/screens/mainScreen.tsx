import React from "react";
import { Linking } from "expo";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export function MainScreen() {
  const profilePicture = "../resources/holywood.png";
  const linkedInUrl = "https://www.linkedin.com/in/nm-fullstack-dev/";

  const openUrl = () => {
    Linking.canOpenURL(linkedInUrl).then((supported) => {
      if (supported) {
        Linking.openURL(linkedInUrl);
      } else {
        console.log("Don't know how to open URI: " + linkedInUrl);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require(profilePicture)} style={styles.image}></Image>
      <Text>Nuno Miguel Fernandes Moreira</Text>
      <Text>Freelancer</Text>
      <TouchableOpacity onPress={openUrl}>
        <Text style={styles.link}>LinkedIn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  link: { color: "blue" },
  image: { width: 400, height: 400, borderRadius: 400 / 2 },
});
