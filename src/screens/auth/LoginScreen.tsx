import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AuthActions } from "../../redux/AuthReducer";
import { SCREENS } from "..";
import { theme } from "../../components/imported/theme";
import Background from "../../components/imported/Background";
import Header from "../../components/imported/Header";
import TextInput from "../../components/imported/TextInput";
import { emailValidator, passwordValidator } from "../../helpers/authHelper";
import Button from "../../components/imported/Button";
import { isEmpty } from "../../helpers/stringHelper";
import { ToasterActions } from "../../redux/ToasterReducer";
import { ToasterType } from "../../components/imported/Toast";
import { IStoreState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";

const LoginScreen = ({ navigation }: any) => {
  const authState = useSelector((state: IStoreState) => state.auth);
  const dispatch = useDispatch();

  var email: string = authState.authDetails.email;
  var password: string = authState.authDetails.password;
  var loading: boolean = authState.loading;

  var emailError = "";
  var passwordError = "";
  const loginError = authState.errorMessage;
  const isUserOnline = authState.isUserOnline;

  const _onLoginPressed = () => {
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
      AuthActions.logIn({
        email: email,
        password: password,
      })
    );

    dispatch(AuthActions.updateLoading(false));
    if (isUserOnline) navigation.navigate(SCREENS.MAIN_SCREEN);
  };

  return (
    <Background>
      {/* {loading && (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      )} */}
      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(newEmail) =>
          dispatch(
            AuthActions.updateAuthDetails({
              email: newEmail,
              password: password,
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
