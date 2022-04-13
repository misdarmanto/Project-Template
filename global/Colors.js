import { LinearGradient } from "expo-linear-gradient";

const ColorLinierGradient = ({ children, styles }) => {
  return (
    <LinearGradient
      colors={["#304FFE", "#7000FF"]}
      start={[0.9, 0.1]}
      style={styles}
    >
      {children}
    </LinearGradient>
  );
};

const TextColor = "#000";
const Blue = "#1E90FF";
const Red = "#4285F4";
const Yellow = "#F4B400";
const Green = "#0F9D58";
const Gray = "#898F9C";
const Orange = "#FF5A5F";

export { TextColor, Blue, Red, Yellow, Green, Gray, Orange, ColorLinierGradient };
