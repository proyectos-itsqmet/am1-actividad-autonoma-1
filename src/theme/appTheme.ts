import { StyleSheet } from "react-native";
import {
  INPUT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../common/appColors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 36,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: SECONDARY_COLOR,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 48,
    paddingVertical: 12,
    borderRadius: 12,
  },
  textButton: {
    color: SECONDARY_COLOR,
    fontWeight: "bold",
    fontSize: 12,
  },
  textInput: {
    backgroundColor: INPUT_COLOR,
    color: SECONDARY_COLOR,
    width: "100%",
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 14,
  },
});

export default styles;
