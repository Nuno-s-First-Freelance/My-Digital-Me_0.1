import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { authReducer, AuthState, AuthActions } from "../../redux/AuthReducer";
import { SCREENS } from "..";
import { BUTTON_LABELS } from "../../constants";
import { theme } from "../../components/imported/theme";
import Background from "../../components/imported/Background";
import Header from "../../components/imported/Header";
import TextInput from "../../components/imported/TextInput";
import { emailValidator, passwordValidator } from "../../helpers/authHelper";
import Button from "../../components/imported/Button";

const LoginScreen = ({ navigation }: any) => {
  const [authState, dispatch] = useReducer(authReducer, AuthState);
  var email = { value: "", error: "" };
  var password = { value: "", error: "" };
  var loading = false;

  const _onLoginPressed = async () => {
    if (loading) return;

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      email.error = emailError;
      password.error = passwordError;
      return;
    }

    loading = true;

    dispatch(
      AuthActions.logIn({
        email: email.value,
        password: password.value,
      })
    );

    // // if (response.error) {
    // //   setError(response.error);
    // // }

    loading = false;
  };

  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate("HomeScreen")} /> */}

      <Header>Welcome back.</Header>

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

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.FORGOT_PASSWORD_SCREEN)}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button loading={loading} mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.REGISTER_SCREEN)}
        >
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* <Toast message={error} onDismiss={() => setError("")} /> */}
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default LoginScreen;
