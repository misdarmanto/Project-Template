import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import ButtonStyles from "../../components/Buttons/ButtonStyles";
import InputField from "../../components/Form/InputField";
import Layout from "../../layouts/Layout";
import Card from "../../components/Card/Card";
import { heightPercentage, widthPercentage } from "../../global/Dimensions";
import List from "../../components/List/List";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  return (
    <Layout>
      <Text>HomeScreen</Text>
      <Card>
        <InputField placeholder={"input"} onChangeText={setName} value={name} />
        <ButtonStyles onPress={() => console.log(name)}>go stack</ButtonStyles>
      </Card>
      <List>
        <Text>child1</Text>
        <Text>child2</Text>
      </List>
      <List>
        <Text>child1</Text>
        <Text>child2</Text>
      </List>
      <StatusBar style="auto" />
    </Layout>
  );
}
