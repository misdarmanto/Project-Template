import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import Layout from "../../layouts/Layout";


export default function HomeScreen() {
  return (
    <Layout>
      <Text>HomeScreen</Text>
      <StatusBar style="auto" />
    </Layout>
  );
}
