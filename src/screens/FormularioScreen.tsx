import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

import { View, StatusBar, StyleSheet, Text } from "react-native";
import { CustomTextInput } from "../components/CustomTextInput";
import styles from "../theme/appTheme";
import { CustomButton } from "../components/CustomButton";
import {
  ERROR_COLOR,
  SECONDARY_COLOR,
  SUCCESS_COLOR,
} from "../common/appColors";

export const FormularioScreen = () => {
  const [dividendo, setDividendo] = useState<string>("");
  const [divisor, setDivisor] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const calcularDivision = () => {
    setResultado("");
    setMessage("");

    const parseDividendo = parseFloat(dividendo);
    const parseDivisor = parseFloat(divisor);

    if (dividendo === "" && divisor === "") {
      setMessage("Llena los campos!");
      return;
    }

    if (parseDividendo === 0 && parseDivisor === 0) {
      setMessage("Indeterminación");
    } else if (parseDivisor === 0) {
      setMessage("No existe división para cero");
    } else {
      const division = parseDividendo / parseDivisor;
      setResultado(`${division}`);
    }
  };

  return (
    <View style={{ ...styles.container, justifyContent: "flex-start" }}>
      <StatusBar />
      <Text style={{ ...styles.title, textAlign: "center" }}>
        Ingresa los valores para realizar una división
      </Text>
      <View style={formScreenStyles.textInputContainer}>
        <CustomTextInput
          placeholder={"Ingresa el dividendo"}
          keyboardType={"numeric"}
          value={dividendo}
          onChangeText={setDividendo}
        />

        <CustomTextInput
          placeholder={"Ingresa el divisor"}
          keyboardType={"numeric"}
          value={divisor}
          onChangeText={setDivisor}
          suffixcon={<Feather name="divide" size={24} color="#D2D2D2" />}
        />
      </View>
      <CustomButton title={"Dividir"} onPress={calcularDivision} />
      <View style={formScreenStyles.resultContainer}>
        {message !== "" && (
          <Text style={formScreenStyles.messageText}>{message}</Text>
        )}
        {resultado !== "" && (
          <View style={{ flexDirection: "row" }}>
            <Text style={formScreenStyles.resultText}>Resultado: </Text>
            <Text style={formScreenStyles.successText}>{resultado}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const formScreenStyles = StyleSheet.create({
  textInputContainer: {
    width: "100%",
    gap: 20,
    marginVertical: 50,
  },
  resultContainer: {
    marginVertical: 50,
  },
  resultText: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: "bold",
  },
  successText: {
    fontSize: 20,
    color: SUCCESS_COLOR,
    fontWeight: "bold",
  },
  messageText: {
    fontSize: 20,
    color: ERROR_COLOR,
    fontWeight: "bold",
  },
});
