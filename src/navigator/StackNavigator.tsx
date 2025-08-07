import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { FormularioScreen } from "../screens/FormularioScreen";
import { BACKGROUND_COLOR, SECONDARY_COLOR } from "../common/appColors";

export type RootStackParams = {
  Home: undefined;
  Formulario: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: BACKGROUND_COLOR,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Formulario"
        component={FormularioScreen}
        options={{
          headerStyle: {
            backgroundColor: BACKGROUND_COLOR,
            elevation: 0,
          },
          headerTitleStyle: {
            color: SECONDARY_COLOR,
          },
          headerTintColor: SECONDARY_COLOR,
        }}
      />
    </Stack.Navigator>
  );
};
