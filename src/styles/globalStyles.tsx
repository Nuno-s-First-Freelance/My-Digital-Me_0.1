import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
  },
  navigatorContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    alignContent: "center",
  },
  container: {
    alignItems: "center",
  },
  link: { color: "blue" },
  column: {
    width: "33.3%",
  },
  header: {
    paddingTop: 40, // TODO: remove this padding
    fontWeight: "bold",
    textAlign: "center",
  },
  centeredText: { textAlign: "center" },
  image: { width: 200, height: 200, borderRadius: 200 / 2 },
  imageContainer: { padding: 50 },
  appStyle: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default globalStyles;
