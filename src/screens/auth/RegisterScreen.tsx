import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../components/imported/theme";
import { authReducer, AuthState, AuthActions } from "../../redux/AuthReducer";
import { emailValidator, passwordValidator } from "../../helpers/authHelper";
import Background from "../../components/imported/Background";
import BackButton from "../../components/imported/BackButton";
import Header from "../../components/imported/Header";
import TextInput from "../../components/imported/TextInput";
import Button from "../../components/imported/Button";
import { SCREENS } from "..";

const RegisterScreen = ({ navigation }: any) => {
  const [authState, dispatch] = useReducer(authReducer, AuthState);
  var email = { value: "", error: "" };
  var password = { value: "", error: "" };
  var loading = false;

  const _onSignUpPressed = async () => {
    if (loading) return;

    // const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    // if (emailError || passwordError || nameError) {
    if (emailError || passwordError) {
      // setName({ ...name, error: nameError });
      email.error = emailError;
      password.error = passwordError;
      return;
    }

    loading = true;

    dispatch(
      AuthActions.register({
        // name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    // if (response.error) {
    //   setError(response.error);
    // }

    loading = false;
  };

  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate("HomeScreen")} /> */}

      <Header>Create Account</Header>

      {/* <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      /> */}

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => (email.value = text)}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => (password.value = text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        autoCapitalize="none"
      />

      <Button
        loading={loading}
        mode="contained"
        onPress={_onSignUpPressed}
        style={styles.button}
      >
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.LOGIN_SCREEN)}
        >
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* <Toast message={error} onDismiss={() => setError("")} /> */}
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default RegisterScreen;
