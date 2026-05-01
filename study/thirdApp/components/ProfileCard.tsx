import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, fontSize, radius } from "../constants";
import { Ionicons } from "@expo/vector-icons";

export type ProfileCardItem = {
  icon: string;
  label: string;
};

export type ProfileCardData = {
  title: string;
  items: ProfileCardItem[];
};

type ProfileCardDataProps = {
  data: ProfileCardData;
};

const ProfileCard = ({ data }: ProfileCardDataProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.iconNameContainer}>
        {data.items.map((item) => (
          <View key={item.label} style={styles.iconItem}>
            <Ionicons
              name={item.icon as any}
              size={18}
              color={colors.neutral_100}
            />
            <Text style={styles.content}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    backgroundColor: colors.neutral_50,
    borderWidth: 1,
    borderColor: colors.neutral_50,
    borderRadius: radius.lg,
    padding: 18,
    marginTop: 12,
  },
  iconNameContainer: {
    gap: 24,
  },
  iconItem: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  title: {
    fontFamily: "PretendardBold",
    color: colors.neutral_100,
    fontSize: fontSize.xs,
    marginBottom: 10,
  },
  content: {
    fontFamily: "PretendardRegular",
    color: colors.neutral_100,
    fontSize: fontSize.sm,
  },
});

export default ProfileCard;
