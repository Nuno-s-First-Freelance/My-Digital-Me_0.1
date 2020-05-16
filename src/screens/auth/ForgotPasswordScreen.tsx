import React, { useReducer } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BackButton from "../../components/imported/BackButton";
import { SCREENS } from "..";
import TextInput from "../../components/imported/TextInput";
import { theme } from "../../components/imported/theme";
import Button from "../../components/imported/Button";
import { authReducer, AuthState, AuthActions } from "../../redux/AuthReducer";
import { emailValidator } from "../../helpers/authHelper";
import Header from "../../components/imported/Header";
import Background from "../../components/imported/Background";
import { isEmpty } from "../../helpers/stringHelper";

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [authState, dispatch] = useReducer(authReducer, AuthState);
  var email = authState.authDetails.email;
  var loading = authState.loading;

  const _onSendPressed = async () => {
    if (loading) return;

    const emailError = emailValidator(email);

    if (!isEmpty(emailError)) {
      console.log("emailError", emailError);
      return;
    }

    dispatch(AuthActions.updateLoading(true));

    const response = dispatch(AuthActions.recoverPassword(email));

    // do toast error handling in store :D
    // // if (response.error) {
    // //   setToast({ type: "error", value: response.error });
    // // } else {
    // //   setToast({
    // //     type: "success",
    // //     value: "Email with password has been sent.",
    // //   });
    // // }

    dispatch(AuthActions.updateLoading(false));
  };

  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate(SCREENS.LOGIN_SCREEN)} /> */}

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email}
        onChangeText={(text) => dispatch(AuthActions.updateEmail(text))}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button
        loading={loading}
        mode="contained"
        onPress={_onSendPressed}
        style={styles.button}
      >
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate(SCREENS.LOGIN_SCREEN)}
      >
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: "100%",
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: "100%",
  },
});

export default ForgotPasswordScreen;
