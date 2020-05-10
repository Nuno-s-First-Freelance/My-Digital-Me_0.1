import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  container: {
    alignItems: "center",
  },
  link: { color: "blue" },
  column: {
    width: "33.3%", // is 50% of container width
  },
  header: { fontWeight: "bold" },
  centeredText: {textAlign:'center'} ,
  image: { width: 100, height: 100, borderRadius: 100 / 2 },
  appStyle: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default globalStyles;
