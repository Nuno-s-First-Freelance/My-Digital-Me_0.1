import React, { useReducer } from "react";
import { View, Text, Button, Image, Linking } from "react-native";
import globalStyles from "../styles/globalStyles";
import { SocialIcon } from "react-native-elements";
import {
  profileReducer,
  ProfileState,
  ProfileActions,
} from "../redux/ProfileReducer";
import { BUTTON_LABELS } from "../constants";
import Header from "../components/Header";
import * as accInfo from "../assets/personal/appInfo.json";
import { Avatar, IconButton, Colors } from "react-native-paper";
import { theme } from "../theme";

const MainScreen = ({ navigation }: any) => {
  const [profileState, dispatch] = useReducer(profileReducer, ProfileState);

  const showWorkInfo = profileState.isWorkInfoOpen;
  const showSocialInfo = profileState.isSocialInfoOpen;

  return (
    <View style={globalStyles.mainContainer}>
      {/* <Header text={"My Digital Me"}></Header> */}
      <View style={globalStyles.navigatorContainer}>
        <View style={globalStyles.column_3}>
          <IconButton
            icon={require("../assets/default/github.png")}
            size={50}
            onPress={() => Linking.openURL(accInfo.socialLinks.github)}
            color={theme.colors.secondary}
          />
          <IconButton
            icon="linkedin"
            size={50}
            onPress={() => Linking.openURL(accInfo.socialLinks.linkedin)}
            color={theme.colors.secondary}
          />
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
          <IconButton
            icon="facebook"
            size={50}
            onPress={() => Linking.openURL(accInfo.socialLinks.facebook)}
            color={theme.colors.secondary}
          />
          <IconButton
            icon="instagram"
            size={50}
            onPress={() => Linking.openURL(accInfo.socialLinks.instagram)}
            color={theme.colors.secondary}
          />
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
