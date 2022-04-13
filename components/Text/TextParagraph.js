import React from "react";
import { Text } from "react-native";
import { TextColor } from "../../global/Colors";

const TextParagraph = ({ children, style }) => {
  return (
    <Text
      style={[
        {
          color: TextColor,
          fontSize: 15,
          lineHeight: 25,
          textAlign: "justify",
          flexWrap: "wrap",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default TextParagraph;
