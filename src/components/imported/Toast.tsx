import React from "react";
import { Snackbar } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { theme } from "../../theme";
import {
  ToasterActions,
} from "../../redux/ToasterReducer";
import { IStoreState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";

export enum ToasterType {
  info,
  error,
  warning,
}

export interface ToasterInfo {
  message: string;
  type: ToasterType | undefined;
}

const Toast = () => {
  const toasterState = useSelector((state: IStoreState) => state.toaster);
  const dispatch = useDispatch();

  var message = toasterState.toaster.message;
  var type = toasterState.toaster.type;

  return (
    <View style={styles.container}>
      <Snackbar
        visible={!!message}
        duration={2000}
        onDismiss={() => {
          dispatch(
            ToasterActions.updateToaster({ message: "", type: undefined })
          );
        }}
        style={{
          backgroundColor:
            type === ToasterType.error
              ? theme.colors.error
              : theme.colors.success,
        }}
      >
        <Text style={styles.content}>{message}</Text>
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 80 + getStatusBarHeight(),
    width: "100%",
  },
  content: {
    fontWeight: "500",
  },
});

export default Toast;
