import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigations from "./TabNavigations";
import StackScreen from "../screens/StackScreens/StackScreen";

const Stack = createNativeStackNavigator();
export default function AppNavigations() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={TabNavigations}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StackScreen"
            component={StackScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
