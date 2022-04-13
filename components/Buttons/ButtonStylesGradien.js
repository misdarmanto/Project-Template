import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { ColorLinierGradient } from "../../global/Colors";
import { heightPercentage, widthPercentage } from "../../global/Dimensions"

function ButtonStylesGradien({ children, onPress, style }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <ColorLinierGradient styles={styles.containerStyle}>
        <Text style={styles.textTitle}>{children}</Text>
      </ColorLinierGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: heightPercentage(7),
    marginVertical: heightPercentage(1),
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    minWidth: widthPercentage(80)
  },
  textTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  },
});


export default ButtonStylesGradien