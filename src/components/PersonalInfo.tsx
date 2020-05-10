import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { STORAGE_MAP } from "../firebase/constants";
import { storage } from "../firebase";

const PersonalInfo = () => {
  const [profilePictureUrl, setProfilePictureUrl] = useState();

  storage
    .ref()
    .child(STORAGE_MAP.Profiles)
    .child("profilePicture.jpg")
    .getDownloadURL()
    .then((url) => setProfilePictureUrl(url));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Digital Me</Text>
      <Image
        // defaultSource={}
        source={{ uri: profilePictureUrl }}
        style={styles.image}
      ></Image>
      <Text>Nuno Miguel Fernandes Moreira</Text>
      <Text>Software Engineer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: { fontWeight: "bold" },
  image: { width: 100, height: 100, borderRadius: 100 / 2 },
});

export default PersonalInfo;
