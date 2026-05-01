import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, fontSize, radius } from "../constants";

export type SkillProps = {
  label: string;
  value: number;
};

const SkillCard = ({ label, value }: SkillProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textLayer}>
        <Text style={styles.labelText}>{label}</Text>
        <Text style={styles.valueText}>{value}%</Text>
      </View>
      <View style={styles.outer}>
        <View style={[styles.inner, { width: `${value}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral_100,
    borderWidth: 1,
    borderRadius: radius.lg,
    borderColor: colors.primary_50,
    padding: 18,
    flexDirection: "column",
    gap: 15,
  },
  textLayer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelText: {
    fontSize: fontSize.md,
    color: colors.neutral_10,
  },
  valueText: {
    fontSize: fontSize.md,
    color: colors.primary_50,
    fontFamily: "PretendardBold",
  },
  outer: {
    backgroundColor: colors.primary_80,
    height: 13,
    borderRadius: 10,
  },
  inner: {
    backgroundColor: colors.primary_50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: 13,
  },
});

export default SkillCard;
