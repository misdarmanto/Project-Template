import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import Layout from "../../layouts/Layout";

export default function SettingScreen() {
  return (
    <Layout>
      <Text>SettingScreen</Text>
      <StatusBar style="auto" />
    </Layout>
  );
}
