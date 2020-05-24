import React, { memo } from "react";
import { Text } from "react-native";
import headerStyles from "../styles/headerStyles";

type Props = {
  text: string;
};

const Header = ({ text }: Props) => (
  <Text style={headerStyles.header_text}>{text}</Text>
);

export default memo(Header);
