import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { STORAGE_MAP } from "../firebase/constants";
import { storage } from "../firebase";
import globalStyles from "../styles/globalStyles";

const PersonalInfo = () => {
  const [profilePictureUrl, setProfilePictureUrl] = useState();

  storage
    .ref()
    .child(STORAGE_MAP.Profiles)
    .child("profilePicture.jpg")
    .getDownloadURL()
    .then((url) => setProfilePictureUrl(url));

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.imageContainer}>
        <Image
          // defaultSource={}
          source={{ uri: profilePictureUrl }}
          style={globalStyles.image}
        ></Image>
      </View>
      <Text style={globalStyles.centeredText}>
        Nuno Miguel Fernandes Moreira
      </Text>
    </View>
  );
};

export default PersonalInfo;
