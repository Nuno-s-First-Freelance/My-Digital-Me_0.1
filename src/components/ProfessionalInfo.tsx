import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles";

const ProfessionalInfo = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>ProfessionalInfo</Text>
      <Text>Software Engineer</Text>
    </View>
  );
};

export default ProfessionalInfo;
