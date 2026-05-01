import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const RadioButton = ({ selected, onPress }: any) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.outer}>
        {selected && <View style={styles.inner} />}
      </View>
    </Pressable>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  outer: {
    width: 22,
    height: 22,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#121212",
  },
});
