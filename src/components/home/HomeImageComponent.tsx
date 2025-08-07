import React from "react";
import { Image, StyleSheet } from "react-native";

export const HomeImageComponent = () => {
  return (
    <Image
      style={styles.homeImage}
      source={require("../../../assets/app_mobile_2.png")}
    />
  );
};

const styles = StyleSheet.create({
  homeImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginVertical: 50,
  },
});
