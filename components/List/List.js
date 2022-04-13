import React from "react";
import { TouchableOpacity } from "react-native";
import { heightPercentage, widthPercentage } from "../../global/Dimensions";

const List = ({ children, height, width, styles, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: height !== undefined ? height : heightPercentage(10),
          width: width !== undefined ? width : null,
          borderWidth: 1,
          borderColor: "#f3f3f3",
          borderRadius: 10,
          paddingHorizontal: widthPercentage(2),
          paddingVertical: heightPercentage(1),
          marginVertical: heightPercentage(0.5),
          backgroundColor: "#FFF",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        },
        styles,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default List;
