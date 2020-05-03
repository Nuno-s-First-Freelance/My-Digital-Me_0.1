import React from "react";
import { Linking } from "expo";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export function MainScreen() {
  const profilePicture = "../resources/images/holywood.png";
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
      <Text style={styles.header}>My Digital Me</Text>
      <View style={{ padding: 50 }}>
        <Image source={require(profilePicture)} style={styles.image}></Image>
      </View>
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
  header: { fontWeight: "bold" },
  image: { width: 400, height: 400, borderRadius: 400 / 2 },
});
