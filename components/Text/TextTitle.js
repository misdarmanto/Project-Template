import React from "react";
import { Text } from "react-native";
import { TextColor } from "../../global/Colors";

const TextTitle = ({ children, style }) => {
  return (
    <Text
      style={[
        {
          fontSize: 18,
          fontWeight: "bold",
          color: TextColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default TextTitle;
