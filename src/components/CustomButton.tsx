import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import styles from "../theme/appTheme";

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const CustomButton = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};
