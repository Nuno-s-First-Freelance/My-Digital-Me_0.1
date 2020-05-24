import React from "react";
import { View } from "react-native";
import globalStyles from "../styles/globalStyles";
import { Avatar } from "react-native-paper";
import {
  ProfessionalIcons,
  SocialIcons,
  ProfessionalInfo,
} from "../components";
import { useSelector } from "react-redux";
import { IStoreState } from "../redux/store";

const MainScreen = () => {
  const professionalInfoState = useSelector(
    (state: IStoreState) => state.professional
  );
  const isWorkInfoOpen = professionalInfoState.isWorkInfoOpen;
  console.log("main", isWorkInfoOpen);
  return (
    <View style={globalStyles.mainContainer}>
      {/* <Header text={"My Digital Me"}></Header> */}
      <View style={globalStyles.navigatorContainer}>
        {/* <PersonalInfo /> */}
      </View>
      <View style={globalStyles.navigatorContainer}>
        <View style={globalStyles.column_3}>
          <ProfessionalIcons />
        </View>
        <View style={globalStyles.column_3}>
          <View style={globalStyles.imageContainer}>
            <Avatar.Image
              size={200}
              source={require("../assets/personal/photos/professional.jpg")}
            />
          </View>
        </View>
        <View style={globalStyles.column_3}>
          <SocialIcons />
        </View>
      </View>
      <View style={globalStyles.navigatorContainer}>
        {isWorkInfoOpen && <ProfessionalInfo />}
        {/* <SocialInfo /> */}
      </View>
    </View>
  );
};

export default MainScreen;
