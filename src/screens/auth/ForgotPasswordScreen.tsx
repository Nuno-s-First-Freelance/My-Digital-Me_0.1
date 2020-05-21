import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { SCREENS } from "..";
import TextInput from "../../components/imported/TextInput";
import { theme } from "../../components/imported/theme";
import Button from "../../components/imported/Button";
import { AuthActions } from "../../redux/AuthReducer";
import { emailValidator } from "../../helpers/authHelper";
import Header from "../../components/imported/Header";
import Background from "../../components/imported/Background";
import { isEmpty } from "../../helpers/stringHelper";
import { useSelector, useDispatch } from "react-redux";
import { IStoreState } from "../../redux/store";
import { ToasterActions } from "../../redux/ToasterReducer";
import { ToasterType } from "../../components/imported/Toast";

const ForgotPasswordScreen = ({ navigation }: any) => {
  const authState = useSelector((state: IStoreState) => state.auth);
  const dispatch = useDispatch();

  var email = authState.authDetails.email;
  var loading = authState.loading;

  var emailError = "";

  const _onSendPressed = async () => {
    if (loading) return;

    emailError = emailValidator(email);

    if (!isEmpty(emailError)) {
      dispatch(
        ToasterActions.updateToaster({
          message: emailError,
          type: ToasterType.error,
        })
      );
      return;
    }

    dispatch(AuthActions.updateLoading(true));

    dispatch(AuthActions.recoverPassword(email));

    dispatch(AuthActions.updateLoading(false));

    // do toast error handling in store :D
    // // if (response.error) {
    // //   setToast({ type: "error", value: response.error });
    // // } else {
    // //   setToast({
    // //     type: "success",
    // //     value: "Email with password has been sent.",
    // //   });
    // // }

    // todo if no error
    navigation.navigate(SCREENS.LOGIN_SCREEN);
  };

  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate(SCREENS.LOGIN_SCREEN)} /> */}

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email}
        onChangeText={(newEmail) =>
          dispatch(
            AuthActions.updateAuthDetails({
              email: newEmail,
              password: "",
            })
          )
        }
        error={!!emailError}
        errorText={emailError}
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
