import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../theme";

type Props = {
  text: string;
};

const Footer = ({ text }: Props) => (
  <Text style={styles.footer}>{text}</Text>
);

const styles = StyleSheet.create({
  footer: {
    fontSize: 26,
    color: theme.colors.secondary,
    fontWeight: "bold",
    paddingVertical: 7,
  },
});

export default memo(Footer);
