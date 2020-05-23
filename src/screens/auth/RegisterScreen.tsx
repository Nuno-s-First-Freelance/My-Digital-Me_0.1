import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../components/imported/theme";
import { AuthActions } from "../../redux/AuthReducer";
import { emailValidator, passwordValidator } from "../../helpers/authHelper";
import Background from "../../components/imported/Background";
import Header from "../../components/imported/Header";
import TextInput from "../../components/imported/TextInput";
import Button from "../../components/imported/Button";
import { SCREENS } from "..";
import { isEmpty } from "../../helpers/stringHelper";
import { useSelector, useDispatch } from "react-redux";
import { IStoreState } from "../../redux/store";
import { ToasterActions } from "../../redux/ToasterReducer";
import { ToasterType } from "../../components/imported/Toast";

const RegisterScreen = ({ navigation }: any) => {
  const authState = useSelector((state: IStoreState) => state.auth);
  const dispatch = useDispatch();

  var email = authState.authDetails.email;
  var password = authState.authDetails.password;
  var loading = authState.loading;

  var emailError = "";
  var passwordError = "";

  const _onSignUpPressed = async () => {
    if (loading) return;

    emailError = emailValidator(email);
    passwordError = passwordValidator(password);

    if (!isEmpty(emailError)) {
      dispatch(
        ToasterActions.updateToaster({
          message: emailError,
          type: ToasterType.error,
        })
      );
      return;
    }
    if (!isEmpty(passwordError)) {
      dispatch(
        ToasterActions.updateToaster({
          message: passwordError,
          type: ToasterType.error,
        })
      );
      return;
    }

    dispatch(AuthActions.updateLoading(true));

    dispatch(
      AuthActions.register({
        email: email,
        password: password,
      })
    );

    dispatch(AuthActions.updateLoading(false));

    // todo if no error
    navigation.navigate(SCREENS.LOGIN_SCREEN);
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
        onChangeText={(newEmail) =>
          dispatch(
            AuthActions.updateAuthDetails({
              email: newEmail,
              password: passwordError,
            })
          )
        }
        error={!!emailError}
        errorText={emailError}
        autoCapitalize="none"
        // autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={(newPassword) =>
          dispatch(
            AuthActions.updateAuthDetails({
              email: email,
              password: newPassword,
            })
          )
        }
        error={!!passwordError}
        errorText={passwordError}
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
