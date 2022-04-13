import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import Layout from "../../layouts/Layout";

export default function StackScreen() {
  return (
    <Layout>
      <Text>StackScreen</Text>
      <StatusBar style="auto" />
    </Layout>
  );
}
