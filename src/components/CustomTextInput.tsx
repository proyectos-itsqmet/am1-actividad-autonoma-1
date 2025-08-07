import React from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import styles from "../theme/appTheme";

interface Props {
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  value: string;
  onChangeText: (text: string) => void;
  suffixcon?: React.ReactNode;
}

export const CustomTextInput = ({
  placeholder,
  keyboardType,
  value,
  onChangeText,
  suffixcon,
}: Props) => {
  return (
    <View style={textInputContainer.container}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={styles.textInput}
        placeholderTextColor="#D2D2D2"
        value={value}
        onChangeText={onChangeText}
      />
      {suffixcon && <View style={textInputContainer.icon}>{suffixcon}</View>}
    </View>
  );
};

const textInputContainer = StyleSheet.create({
  container: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
});
