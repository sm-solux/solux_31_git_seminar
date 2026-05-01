import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Text from "./customText";
import { colors, fontSize, radius } from "../constants";

export type IconTextCardProps = {
  title: string;
  description: string;
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
  titleColor?: string;
  descriptionColor?: string;
  titleFontFamily?: string;
};

const IconTextCard = ({
  title,
  description,
  iconName,
  titleColor = colors.neutral_10,
  descriptionColor = colors.neutral_60,
  titleFontFamily = "PretendardBold",
}: IconTextCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <MaterialIcons name={iconName} size={24} color={colors.primary_50} />
      </View>

      <View style={styles.textBox}>
        <Text
          style={[
            styles.title,
            { color: titleColor, fontFamily: titleFontFamily },
          ]}
        >
          {title}
        </Text>
        <Text style={[styles.description, { color: descriptionColor }]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: colors.primary_50,
    borderRadius: radius.lg,
    backgroundColor: colors.neutral_100,
    padding: 18,
    gap: 14,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary_80,
  },
  textBox: {
    flex: 1,
    gap: 6,
  },
  title: {
    fontSize: fontSize.sm,
    fontFamily: "PretendardBold",
    color: colors.neutral_10,
  },
  description: {
    fontSize: fontSize.sm,
    fontFamily: "Pretendard",
    color: colors.neutral_60,
  },
});

export default IconTextCard;
