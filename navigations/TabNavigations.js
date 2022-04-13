import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import SettingScreen from "../screens/TabScreens/SettingSccreen";
import HomeScreen from "../screens/TabScreens/Home";

const Tab = createBottomTabNavigator();
export default TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === "Home") {
            return <AntDesign name="home" size={35} color={color} />;
          } else if (route.name === "Settings") {
            return <AntDesign name="setting" size={35} color={color} />;
          }
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};
