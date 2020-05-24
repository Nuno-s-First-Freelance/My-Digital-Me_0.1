import React from "react";
import { View } from "react-native";
import globalStyles from "../styles/globalStyles";
import { Avatar } from "react-native-paper";
import {
  ProfessionalIcons,
  SocialIcons,
  ProfessionalInfo,
  SocialInfo,
  PersonalInfo,
} from "../components";
import { useSelector } from "react-redux";
import { IStoreState } from "../redux/store";

const MainScreen = () => {
  const professionalState = useSelector(
    (state: IStoreState) => state.professional
  );
  const personalState = useSelector((state: IStoreState) => state.personal);
  const socialState = useSelector((state: IStoreState) => state.social);

  const isWorkInfoOpen = professionalState.isWorkInfoOpen;
  const isSocialInfoOpen = socialState.isSocialInfoOpen;
  const isPersonalInfoOpen = personalState.isPersonalInfoOpen;

  return (
    <View style={globalStyles.mainContainer}>
      {/* <Header text={"My Digital Me"}></Header> */}
      <View style={globalStyles.navigatorContainer}>
        {isPersonalInfoOpen && <PersonalInfo />}
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
        {isWorkInfoOpen && !isSocialInfoOpen && <ProfessionalInfo />}
        {isSocialInfoOpen && !isWorkInfoOpen && <SocialInfo />}
      </View>
    </View>
  );
};

export default MainScreen;
