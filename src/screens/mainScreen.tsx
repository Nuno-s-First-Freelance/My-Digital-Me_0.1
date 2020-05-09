import React, { useState } from "react";
import { Linking } from "expo";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { storage } from "../firebase";
import { STORAGE_MAP } from "../firebase/constants";

const MainScreen = () => {
  const [profilePictureUrl, setProfilePictureUrl] = useState();

  storage
    .ref()
    .child(STORAGE_MAP.Profiles)
    .child("profilePicture.jpg")
    .getDownloadURL()
    .then((url) => setProfilePictureUrl(url));

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
      <Text style={styles.header}>My Digital Me</Text>
      <View style={{ padding: 50 }}>
        <Image
          // defaultSource={}
          source={{ uri: profilePictureUrl }}
          style={styles.image}
        ></Image>
      </View>
      <Text>Nuno Miguel Fernandes Moreira</Text>
      <Text>Software Engineer</Text>
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
    justifyContent: "center",
  },
  link: { color: "blue" },
  header: { fontWeight: "bold" },
  image: { width: 400, height: 400, borderRadius: 400 / 2 },
});

export default MainScreen;
