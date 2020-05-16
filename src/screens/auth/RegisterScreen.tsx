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
import { isEmpty } from "../../helpers/stringHelper";

const RegisterScreen = ({ navigation }: any) => {
  const [authState, dispatch] = useReducer(authReducer, AuthState);
  var email = authState.authDetails.email;
  var password = authState.authDetails.password;
  var loading = authState.loading;

  const _onSignUpPressed = async () => {
    if (loading) return;

    // const nameError = nameValidator(name.value);
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    // if (emailError || passwordError || nameError) {
    if (!isEmpty(emailError)) {
      console.log("emailError", emailError);
      return;
    }
    if (!isEmpty(passwordError)) {
      console.log("passwordError", passwordError);
      return;
    }

    dispatch(AuthActions.updateLoading(true));

    dispatch(
      AuthActions.register({
        // name: name.value,
        email: email,
        password: password,
      })
    );

    // if (response.error) {
    //   setError(response.error);
    // }

    dispatch(AuthActions.updateLoading(false));
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
        value={email}
        onChangeText={(text) => dispatch(AuthActions.updateEmail(text))}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={(text) => dispatch(AuthActions.updatePassword(text))}
        // error={!!password.error}
        // errorText={password.error}
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
