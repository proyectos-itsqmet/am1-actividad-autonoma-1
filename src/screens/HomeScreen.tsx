import React from "react";
import { View, StatusBar } from "react-native";
import styles from "../theme/appTheme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";
import { HomeImageComponent } from "../components/home/HomeImageComponent";
import { CustomButton } from "../components/CustomButton";
import { CustomTitle } from "../components/CustomTitle";

type Props = StackScreenProps<RootStackParams, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <CustomTitle title={"Bienvenido!"} />
      <HomeImageComponent />
      <CustomButton
        title={"Acceder"}
        onPress={() => navigation.navigate("Formulario")}
      />
    </View>
  );
};
