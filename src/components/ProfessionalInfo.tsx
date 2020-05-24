import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { STORAGE_MAP } from "../firebase/constants";
import { storage } from "../firebase";
import globalStyles from "../styles/globalStyles";
import { accInfo } from "../assets/personal";

const ProfessionalInfo = () => {
  return (
    <View style={globalStyles.infoDisplay}>
      <Text style={globalStyles.text}>
        Current Job Position: {accInfo.professional.currentJobPosition}
      </Text>
      <Text style={globalStyles.text}>
        Current Employer: {accInfo.professional.currentEmployer}
      </Text>
    </View>
  );
};

export default ProfessionalInfo;
