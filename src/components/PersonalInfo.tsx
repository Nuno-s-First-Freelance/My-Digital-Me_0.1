import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { STORAGE_MAP } from "../firebase/constants";
import { storage } from "../firebase";
import globalStyles from "../styles/globalStyles";
import {accInfo} from "../assets/personal";

const PersonalInfo = () => {
  const [profilePictureUrl, setProfilePictureUrl] = useState();

  return (
    <View style={globalStyles.infoDisplay}>
      <Text style={globalStyles.text}>Name: {accInfo.PersonalInfo.name}</Text>
      <Text style={globalStyles.text}>Age: {accInfo.PersonalInfo.age}</Text>
      <Text style={globalStyles.text}>
        Gender: {accInfo.PersonalInfo.gender}
      </Text>
    </View>
  );
};

export default PersonalInfo;
