import React, { useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { Blue } from "../../global/Colors";
import { widthPercentage, heightPercentage } from "../../global/Dimensions";

function ButtonStylesShadow({ children, onPress }) {
  const [btnPress, setBtnPress] = useState(false);

  return (
    <Pressable style={styles.btnFirstLayer}>
      <Pressable
        onPress={onPress}
        onPressIn={() => setBtnPress(true)}
        onPressOut={() => setBtnPress(false)}
        style={[
          styles.btnSecondLayer,
          {
            height: btnPress ? heightPercentage(8.8) : heightPercentage(8),
            width: btnPress ? widthPercentage(80) : widthPercentage(79),
          },
        ]}
      >
        <Text style={styles.textTitle}>{children}</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnFirstLayer: {
    height: heightPercentage(8.8),
    minWidth: widthPercentage(80),
    marginTop: heightPercentage(0.8),
    backgroundColor: "#E3E3E3",
    borderRadius: 10,
    marginHorizontal: widthPercentage(1),
  },
  btnSecondLayer: {
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentage(8),
    minWidth: widthPercentage(79),
    backgroundColor: Blue,
    borderRadius: 10,
  },
  textTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ButtonStylesShadow;
