import { StyleSheet } from "react-native";

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
    color: "white",
  },
  homeImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginVertical: 50,
  },
  button: {
    backgroundColor: "#F26C20",
    paddingHorizontal: 48,
    paddingVertical: 12,
    borderRadius: 12,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default styles;
