import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Blue } from "../../global/Colors";
import { heightPercentage, widthPercentage } from "../../global/Dimensions";

function ButtonStyles({ children, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.containerStyle, style]} onPress={onPress}>
      <Text style={styles.textTitle}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: heightPercentage(7),
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Blue,
    minWidth: widthPercentage(80),
    marginVertical: heightPercentage(1),
  },
  textTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  },
});

export default ButtonStyles;
