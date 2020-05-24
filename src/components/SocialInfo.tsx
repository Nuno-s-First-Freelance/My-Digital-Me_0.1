import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { STORAGE_MAP } from "../firebase/constants";
import { storage } from "../firebase";
import globalStyles from "../styles/globalStyles";
import * as accInfo from "../assets/personal/appInfo.json";

const SocialInfo = () => {
  return (
    <View style={globalStyles.infoDisplay}>
      <Text style={globalStyles.text}>
        Personal Email: {accInfo.contactDetails.personalEmail}
      </Text>
      <Text style={globalStyles.text}>
        Personal Phone: {accInfo.contactDetails.personalMobilePhone}
      </Text>
      <Text style={globalStyles.text}>
        Skype: {accInfo.contactDetails.skype}
      </Text>
      <Text style={globalStyles.text}>
        Instagram: {accInfo.contactDetails.instagram}
      </Text>
    </View>
  );
};

export default SocialInfo;
