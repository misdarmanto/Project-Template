import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { heightPercentage, widthPercentage } from "../../global/Dimensions"
import TextTitle from "../Text/TextTitle";

export default function NotFoundAnimation({
  massage = "maaf saat ini belum tersedia",
}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8FCFE",
      }}
    >
      <LottieView
        style={{ width: widthPercentage(80), height: heightPercentage(30) }}
        source={require("../../assets/LottieFile/notfound.json")}
        autoPlay
        loop={false}
      />
      <TextTitle>{massage}</TextTitle>
    </View>
  );
}
