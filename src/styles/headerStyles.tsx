import { StyleSheet, TextStyle } from "react-native";
import { theme } from "../theme";

const headerStyles = StyleSheet.create({
  header_text: {
    fontSize: 50,
    paddingTop: "10%", // TODO: remove this padding
    textAlign: "center",
    fontWeight: theme.fonts.medium.fontWeight,
    color: theme.colors.primary,
  } as TextStyle,
});

export default headerStyles;
