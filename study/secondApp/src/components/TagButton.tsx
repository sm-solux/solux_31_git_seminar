import { Pressable, StyleSheet, View } from "react-native";
import Text from "./customText";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, fontSize, radius } from "../constants";

export type TagProps = {
  label: string;
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
};

const TagButton = ({ label, iconName }: TagProps) => {
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <MaterialIcons name={iconName} size={24} color={colors.primary_50} />
      <Text style={styles.labelText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral_100,
    borderWidth: 1,
    borderRadius: radius.lg,
    borderColor: colors.primary_50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 24,
    gap: 6,
  },
  labelText: {
    fontFamily: "PretendardBold",
    fontSize: fontSize.sm,
    color: colors.primary_50,
  },
});

export default TagButton;
