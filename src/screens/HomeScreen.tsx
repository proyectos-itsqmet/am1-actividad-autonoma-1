import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../theme/appTheme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";

type Props = StackScreenProps<RootStackParams, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image
        style={styles.homeImage}
        source={require("../../assets/app_mobile_2.png")}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Formulario")}
      >
        <Text style={styles.textButton}>Acceder</Text>
      </TouchableOpacity>
    </View>
  );
};
