import React from "react";
import { View } from "react-native";
import { heightPercentage, widthPercentage } from "../../global/Dimensions";

const Card = ({ children, width, height, styles }) => {
  return (
    <View
      style={[
        {
          width: width ? width : null,
          height: height ? height : heightPercentage(50),
          borderWidth: 1,
          borderColor: "#f3f3f3",
          borderRadius: 20,
          backgroundColor: "#FFF",
          justifyContent: "center",
          paddingHorizontal: widthPercentage(2),
          paddingVertical: heightPercentage(2),
          marginVertical: heightPercentage(1),
        },
        styles,
      ]}
    >
      {children}
    </View>
  );
};


export default Card;