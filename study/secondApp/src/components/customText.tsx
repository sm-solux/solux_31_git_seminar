import { Text as RNText, TextProps, StyleSheet } from "react-native";

const Text = ({ style, ...props }: TextProps) => {
  return <RNText style={[styles.default, style]} {...props} />;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "PretendardRegular",
  },
});

export default Text;
