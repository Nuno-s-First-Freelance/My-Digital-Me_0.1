import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { LoginUser } from "../../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
      ></TextInput>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
      ></TextInput>
      <Button
        title={"login"}
        onPress={() => LoginUser({ email, password })}
      ></Button>
    </View>
  );
};
export default LoginScreen;
