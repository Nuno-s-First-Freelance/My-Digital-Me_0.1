import { StyleSheet } from "react-native";
import { theme } from "../theme";

const globalStyles = StyleSheet.create({
  appStyle: {
    flex: 1,
    backgroundColor: theme.colors.background,
    // justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    // alignContent: "center",
  },
  navigatorContainer: {
    flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
    // alignContent: "center",
  },
  column_1: {
    alignItems: "center",
    width: "99%",
  },
  column_3: {
    alignItems: "center",
    justifyContent: "center",
    width: "33.3%",
  },
  centeredText: { textAlign: "center" },
  image_round: { width: 200, height: 200, borderRadius: 200 / 2 },
  imageContainer: {
    padding: 50,
  },
});

export default globalStyles;
