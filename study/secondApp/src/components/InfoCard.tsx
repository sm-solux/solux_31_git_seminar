import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "./customText";
import { colors, fontSize, radius } from "../constants";

export type InfoProps = {
  label: string;
  value: string;
};

const InfoCard = ({ label, value }: InfoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_50,
    borderWidth: 1,
    borderRadius: radius.lg,
    borderColor: colors.primary_50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 22,
    gap: 6,
  },
  labelText: {
    color: colors.neutral_100,
    fontSize: fontSize.sm,
  },
  valueText: {
    color: colors.neutral_100,
    fontSize: fontSize.sm,
    fontFamily: "PretendardBold",
  },
});

export default InfoCard;
